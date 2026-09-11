// ============================================================
// SERVICE WORKER — Tiếng Anh Lớp 3 (Cô giáo Ong Vàng)
// Chiến lược: NETWORK-FIRST cho tài nguyên cùng domain.
// QUAN TRỌNG:
// - assets/data/* luôn đi thẳng ra mạng.
// - mọi request cross-origin (Google TTS, CDN, Google Apps Script...) KHÔNG qua Service Worker.
// Điều này tránh Service Worker can thiệp vào Google Translate TTS và làm mất/đổi giọng đọc.
// ============================================================

const CACHE_NAME = 'tienganh-lop3-ongvang-v2';

// Chỉ cache "vỏ" tối thiểu của ứng dụng.
// Dữ liệu động không precache để luôn lấy bản mới nhất từ server.
const CORE_ASSETS = [
    './',
    './index.html',
    './favicon.svg',
    './manifest.json',
    './assets/js/app.js',
    './assets/images/icon-192.png',
    './assets/images/icon-512.png',
    './assets/images/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) =>
                cache.addAll(
                    CORE_ASSETS.map((url) => new Request(url, { cache: 'reload' }))
                )
            )
            .catch(() => {})
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => caches.delete(key))
                )
            )
            .then(() => self.clients.claim())
    );
});

// Cho phép index.html yêu cầu Service Worker mới kích hoạt ngay nếu cần.
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    const req = event.request;

    // Không cache/can thiệp request ghi dữ liệu.
    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // Dữ liệu động và MỌI request ngoài domain đi thẳng qua trình duyệt.
    // Google Translate TTS thuộc cross-origin nên sẽ không còn bị Service Worker chặn.
    const isDynamicData = url.pathname.includes('/assets/data/');
    const isCrossOrigin = url.origin !== self.location.origin;

    if (isDynamicData || isCrossOrigin) return;

    // Chỉ với tài nguyên cùng domain: network-first, cache làm dự phòng khi mất mạng.
    event.respondWith(
        fetch(new Request(req.url, { cache: 'no-store' }))
            .then((response) => {
                const responseCopy = response.clone();
                caches.open(CACHE_NAME)
                    .then((cache) => cache.put(req, responseCopy))
                    .catch(() => {});
                return response;
            })
            .catch(() =>
                caches.match(req)
                    .then((cached) => cached || caches.match('./index.html'))
            )
    );
});
