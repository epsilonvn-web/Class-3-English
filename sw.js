// ============================================================
// SERVICE WORKER — Tiếng Anh Lớp 3 (Cô giáo Ong Vàng)
// Chiến lược: "Network first, fallback to Cache" — khi có mạng luôn lấy bản mới nhất (và tự cập
// nhật cache), khi MẤT MẠNG thì lấy tạm bản đã lưu trong cache lần gần nhất để app vẫn mở được.
// Đổi CACHE_NAME (tăng số version) mỗi khi muốn buộc xoá cache cũ, nạp lại toàn bộ tài nguyên mới.
// ============================================================
const CACHE_NAME = 'tienganh-lop3-ongvang-v1';

const CORE_ASSETS = [
    './',
    './index.html',
    './favicon.svg',
    './manifest.json',
    './assets/js/app.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/apple-touch-icon.png',
    './assets/data/kho_hoc_tieng_anh_3_part1.json',
    './assets/data/kho_hoc_tieng_anh_3_part2.json',
    './assets/data/de_thi_tieng_anh_3.json'
];

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Kích hoạt bản Service Worker mới ngay, không phải đợi đóng hết tab cũ
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(CORE_ASSETS))
            .catch(() => {}) // Lỗi cache 1 vài file (VD mạng chập chờn lúc cài) không được chặn cài đặt
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return; // Chỉ cache các request đọc dữ liệu (GET) — request
    // ghi dữ liệu lên Google Apps Script (POST) luôn phải đi mạng thật, không được lấy từ cache.

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const responseCopy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy)).catch(() => {});
                return response;
            })
            .catch(() =>
                caches.match(event.request).then((cached) => cached || caches.match('./index.html'))
            )
    );
});
