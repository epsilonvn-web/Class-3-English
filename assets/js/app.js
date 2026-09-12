// ==========================================
// CẤU HÌNH 12 CHUYÊN MỤC KHO HỌC LIỆU & MA TRẬN 6 NHÓM NĂNG LỰC ENG_PHO-READ (TIẾNG ANH LỚP 3)
// ==========================================
// Trang chủ "Học tự do" tổ chức theo đúng 12 CHUYÊN MỤC hoạt động (Mục II khung V2.0 lớp 3) —
// KHÁC với 24 Tuần nội dung (Mục V, dùng riêng cho Lộ trình 24 tuần bên dưới).
// Bản lớp 3: dữ liệu do NotebookLM xuất ra đã gộp Chuyên mục 1 (Phonics & Sounds, gồm 1.1/1.2/1.3)
// thành dạng trắc nghiệm bình thường như mọi chuyên mục khác (không còn 2 màn hình tra cứu tĩnh
// Alphabet A-Z/44 IPA riêng như bản lớp 2) — nên TOPICS_CONFIG liệt kê ĐỦ 1-11, Chuyên mục 12
// (Exam Arena) vẫn có màn hình riêng như cũ.
const TOPICS_CONFIG = [
    { id: 1, title: "1. Phonics & Sounds", desc: "Phát âm, 44 IPA, nối âm đầu", icon: "🔊", color: "sky" },
    { id: 2, title: "2. Vocabulary", desc: "Flashcards, Nghe tranh, Kéo thả chữ", icon: "📚", color: "pink" },
    { id: 3, title: "3. Remove Letter", desc: "Chạm xoá chữ cái thừa", icon: "✂️", color: "rose" },
    { id: 4, title: "4. Fill Missing", desc: "Điền chữ cái còn thiếu", icon: "✏️", color: "amber" },
    { id: 5, title: "5. Odd One Out", desc: "Tìm từ khác nhóm/khác loại", icon: "🧩", color: "fuchsia" },
    { id: 6, title: "6. Reading Stories", desc: "Đọc truyện ngắn 2 câu hỏi", icon: "📖", color: "emerald" },
    { id: 7, title: "7. Sentence Builder", desc: "Sắp xếp từ thành câu", icon: "🧱", color: "indigo" },
    { id: 8, title: "8. Fill Sentence", desc: "Điền câu hoàn chỉnh theo ngữ cảnh", icon: "📝", color: "teal" },
    { id: 9, title: "9. Q&A Dialogues", desc: "Hội thoại cùng Cô giáo Ong Vàng", icon: "💬", color: "cyan" },
    { id: 10, title: "10. Grammar Point", desc: "Đại từ, giới từ, thì hiện tại tiếp diễn, xin phép", icon: "🅰️", color: "blue" },
    { id: 11, title: "11. Practice & Play", desc: "Ôn tập ngắt quãng theo học kỳ", icon: "🎮", color: "purple" }
];

const SUBTOPIC_PALETTES = [
    { card: "bg-pink-50/80 hover:bg-pink-100 border-pink-300 text-pink-800", num: "text-pink-600", badge: "bg-white text-pink-600 border-pink-200" },
    { card: "bg-emerald-50/80 hover:bg-emerald-100 border-emerald-300 text-emerald-800", num: "text-emerald-600", badge: "bg-white text-emerald-600 border-emerald-200" },
    { card: "bg-purple-50/80 hover:bg-purple-100 border-purple-300 text-purple-800", num: "text-purple-600", badge: "bg-white text-purple-600 border-purple-200" },
    { card: "bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-800", num: "text-amber-600", badge: "bg-white text-amber-600 border-amber-200" },
    { card: "bg-indigo-50/80 hover:bg-indigo-100 border-indigo-300 text-indigo-800", num: "text-indigo-600", badge: "bg-white text-indigo-600 border-indigo-200" },
    { card: "bg-rose-50/80 hover:bg-rose-100 border-rose-300 text-rose-800", num: "text-rose-600", badge: "bg-white text-rose-600 border-rose-200" }
];

// Lộ trình 24 tuần (V2.0 lớp 3, Mục V khung chương trình). Bản cập nhật: NotebookLM gộp field
// "week_id" (dạng "W01".."W23", 2 số zero-padded) thẳng vào từng câu hỏi trong chính
// kho_hoc_tieng_anh_3_part1/2.json — không có W05/W12/W17/W24 (đúng ý đồ: đây là các tuần ôn
// tập/thi, không có "chủ đề nội dung" riêng) nên subIds của các tuần này phải GỘP lại từ những
// tuần nội dung trước đó, giống thiết kế gốc ban đầu.
const roadmapConfig = {
    1:  { name: "Tuần 1: Greetings & Info (Part 1)", subIds: ["W01"], desc: "Chào hỏi, tên, số đếm 1-5. How are you? What's your name?", icon: "😊" },
    2:  { name: "Tuần 2: Greetings & Info (Part 2)", subIds: ["W02"], desc: "Bạn bè, số đếm 6-10. Is this...? How old are you?", icon: "😊" },
    3:  { name: "Tuần 3: Our School & Things (Part 1)", subIds: ["W03"], desc: "Trường học, lớp học, thư viện, sân chơi.", icon: "🏫" },
    4:  { name: "Tuần 4: Our School & Things (Part 2)", subIds: ["W04"], desc: "Đồ dùng học tập: pen, ruler, book... Do you have a...?", icon: "🏫" },
    5:  { name: "Tuần 5: Review & Play 1", subIds: ["W01", "W02", "W03", "W04"], desc: "Ôn tập ngắt quãng Tuần 1-4: Greetings & School.", icon: "🔁" },
    6:  { name: "Tuần 6: Instructions & Permission (Part 1)", subIds: ["W06"], desc: "Mệnh lệnh lớp học: stand up, open your book...", icon: "🗣️" },
    7:  { name: "Tuần 7: Instructions & Permission (Part 2)", subIds: ["W07"], desc: "Xin phép lịch sự: May I...? Yes, you can / No, you can't.", icon: "🗣️" },
    8:  { name: "Tuần 8: Bodies & Appearance (Part 1)", subIds: ["W08"], desc: "Các bộ phận cơ thể. Touch your nose! I have blue eyes.", icon: "👀" },
    9:  { name: "Tuần 9: Bodies & Appearance (Part 2)", subIds: ["W09"], desc: "Mô tả ngoại hình: tall, curly, straight hair...", icon: "👀" },
    10: { name: "Tuần 10: Hobbies & Abilities (Part 1)", subIds: ["W10"], desc: "Sở thích: sing, dance, swim... I like singing.", icon: "🎨" },
    11: { name: "Tuần 11: Hobbies & Abilities (Part 2)", subIds: ["W11"], desc: "Thể thao & khả năng: Can you swim? He can run.", icon: "🎨" },
    12: { name: "Tuần 12: Semester 1 Grand Review", subIds: ["W01","W02","W03","W04","W06","W07","W08","W09","W10","W11"], isGrandReview: true, desc: "Chốt chặn Học kỳ I — đề ôn tổng hợp 15 câu, đạt ≥80% để mở khoá Học kỳ II.", icon: "🏅" },
    13: { name: "Tuần 13: My Family & Cool Jobs (Part 1)", subIds: ["W13"], desc: "Thành viên gia đình. Who's this? He's my father.", icon: "👪" },
    14: { name: "Tuần 14: My Family & Cool Jobs (Part 2)", subIds: ["W14"], desc: "Nghề nghiệp: teacher, driver, doctor... He is a teacher.", icon: "👪" },
    15: { name: "Tuần 15: My House & Bedroom (Part 1)", subIds: ["W15"], desc: "Các phòng trong nhà. Where's the bed? It's in the bedroom.", icon: "🛏️" },
    16: { name: "Tuần 16: My House & Bedroom (Part 2)", subIds: ["W16"], desc: "Đồ đạc phòng ngủ. There is/are a desk/two chairs.", icon: "🛏️" },
    17: { name: "Tuần 17: Review & Play 2", subIds: ["W13", "W14", "W15", "W16"], isReview15: true, desc: "Ôn tập tổng hợp 15 câu Tuần 13-16: Family & House.", icon: "🔁" },
    18: { name: "Tuần 18: Food, Drinks & Table (Part 1)", subIds: ["W18"], desc: "Món ăn: bread, rice, egg... Do you like carrots?", icon: "🍽️" },
    19: { name: "Tuần 19: Food, Drinks & Table (Part 2)", subIds: ["W19"], desc: "Thức uống: milk, juice... Would you like some milk?", icon: "🍽️" },
    20: { name: "Tuần 20: Pets, Zoo & Toys (Part 1)", subIds: ["W20"], desc: "Thú cưng & thú vườn thú. I have a parrot. She has three cats.", icon: "🐾" },
    21: { name: "Tuần 21: Pets, Zoo & Toys (Part 2)", subIds: ["W21"], desc: "Đồ chơi. What can you see? What is the monkey doing?", icon: "🐾" },
    22: { name: "Tuần 22: Clothes & Weather (Part 1)", subIds: ["W22"], desc: "Thời tiết & thiên nhiên. What's the weather like today?", icon: "🌤️" },
    23: { name: "Tuần 23: Clothes & Weather (Part 2)", subIds: ["W23"], desc: "Trang phục. What are you wearing? I'm wearing a red coat.", icon: "🌤️" },
    24: { name: "Tuần 24: Grand Exam Arena", isExam: true, desc: "Đề thi chuẩn 13 câu ma trận tích hợp, hiển thị biểu đồ năng lực cuối khoá.", icon: "🏆" }
};

const TOTAL_ROADMAP_WEEKS = 24;

// Toạ độ 35 mốc tuần dạng zigzag rắn bò (serpentine), 7 cột x 5 hàng, tự tính không cần khai báo tay từng điểm
function getRoadmapCoord(weekNum) {
    const cols = 6;
    const colWidth = 105, rowHeight = 95;
    const startX = 70, startY = 58;
    const idx = weekNum - 1;
    const row = Math.floor(idx / cols);
    const posInRow = idx % cols;
    const col = (row % 2 === 0) ? posInRow : (cols - 1 - posInRow);
    return { x: startX + col * colWidth, y: startY + row * rowHeight };
}

function buildRoadmapPathD(totalWeeks) {
    const pts = [];
    for (let w = 1; w <= totalWeeks; w++) pts.push(getRoadmapCoord(w));
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1], p1 = pts[i];
        const midX = (p0.x + p1.x) / 2, midY = (p0.y + p1.y) / 2;
        const dx = p1.x - p0.x, dy = p1.y - p0.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        // Sóng uốn lượn xuống-lên LIÊN TỤC xuyên suốt toàn bộ đường đi (kể cả đoạn chuyển hàng),
        // không để đoạn nào thẳng đơ xen giữa — giống hệt kiểu bản đồ lộ trình game (Duolingo-style).
        const bend = (i % 2 === 0 ? 1 : -1) * 32;
        const cx = midX + nx * bend, cy = midY + ny * bend;
        d += ` Q ${cx},${cy} ${p1.x},${p1.y}`;
    }
    return d;
}

// Bản cập nhật: mỗi đề thi giờ có field "type" trực tiếp ("HK1"/"HK2"/"HSG") — không cần suy ra
// từ tiền tố ID nữa (ID giờ chỉ là "EXAM_01".."EXAM_100" tuần tự, không còn mang nghĩa nhóm).
const EXAM_FILE = 'de_thi_tieng_anh_3.json';
const EXAM_TYPE_TO_CATEGORY = { HK1: 'hocky1', HK2: 'hocky2', HSG: 'hsg' };
// Điểm số 13 câu theo ĐÚNG thứ tự ma trận Mục IV.1 khung lớp 3 (câu 1-3 ENG_PHO 0.5đ,
// câu 4-5 ENG_VOC 0.5đ, câu 6 ENG_LIS 0.5đ, câu 7 ENG_LIS 1.0đ, câu 8-9 ENG_SYN 1.0đ,
// câu 10-11 ENG_GRA 1.0đ, câu 12-13 ENG_READ 1.0đ) — dữ liệu câu hỏi trong file đã đúng thứ tự
// này sẵn nên chỉ cần gán điểm theo vị trí, không cần sửa lại thứ tự câu.
const EXAM13_POINTS = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];

const examFileMap = {
    hocky1: { file: EXAM_FILE, arrayKey: 'semester_1_exams', sheet: 'LichSuBaiThiHK1', label: 'Học kỳ 1', color: 'pink' },
    hocky2: { file: EXAM_FILE, arrayKey: 'semester_2_exams', sheet: 'LichSuBaiThiHK2', label: 'Học kỳ 2', color: 'purple' },
    hsg:    { file: EXAM_FILE, arrayKey: 'hsg_exams', sheet: 'LichSuBaiThiHSG', label: 'Học sinh giỏi', color: 'amber' }
};

// 6 nhóm năng lực ngôn ngữ Tiếng Anh lớp 3 (giữ nguyên mã tag ENG_PHO-READ như lớp 2, theo
// đúng Mục III khung chương trình V2.0 — chỉ cập nhật nội dung lời khuyên cho phù hợp lớp 3).
const SKILL_TAXONOMY = {
    ENG_PHO: { code: 'ENG_PHO', sheetCol: 'ENG_PHO_DungSo', totalCol: 'ENG_PHO_TongSo', name: 'Ngữ âm & Chính tả', advice: 'Con cần luyện thêm các âm ghép (sh, ch, th, pl, br...), chính tả từ dài và nhận diện chữ cái thừa/thiếu.' },
    ENG_VOC: { code: 'ENG_VOC', sheetCol: 'ENG_VOC_DungSo', totalCol: 'ENG_VOC_TongSo', name: 'Từ vựng & Trường nghĩa', advice: 'Con nên ôn lại vốn từ vựng theo từng chủ đề, phân biệt từ khác loại và liên kết tranh - chữ viết.' },
    ENG_LIS: { code: 'ENG_LIS', sheetCol: 'ENG_LIS_DungSo', totalCol: 'ENG_LIS_TongSo', name: 'Nghe hiểu', advice: 'Con cần luyện nghe nhiều hơn, tập trung nghe kỹ âm đầu và câu hội thoại ngắn trước khi chọn đáp án.' },
    ENG_GRA: { code: 'ENG_GRA', sheetCol: 'ENG_GRA_DungSo', totalCol: 'ENG_GRA_TongSo', name: 'Ngữ pháp bối cảnh', advice: 'Con nên ôn lại giới từ chỉ vị trí, There is/are, Have/Has, Can/Can\'t để dùng đúng ngữ pháp hơn.' },
    ENG_SYN: { code: 'ENG_SYN', sheetCol: 'ENG_SYN_DungSo', totalCol: 'ENG_SYN_TongSo', name: 'Cú pháp & Kiến tạo câu', advice: 'Con cần luyện thêm cách sắp xếp từ thành câu đúng trật tự (khẳng định, phủ định, nghi vấn).' },
    ENG_READ: { code: 'ENG_READ', sheetCol: 'ENG_READ_DungSo', totalCol: 'ENG_READ_TongSo', name: 'Đọc hiểu', advice: 'Con nên luyện đọc truyện ngắn/hội thoại kỹ hơn, tìm đúng thông tin và suy luận trước khi trả lời.' }
};
const SKILL_KEYS = Object.keys(SKILL_TAXONOMY);

const GREETINGS_STUDENT = [
    "Chào {name}, cô Ong Vàng rất vui được học tiếng Anh cùng con hôm nay!",
    "Chào mừng {name} quay lại! Sẵn sàng chinh phục thêm thật nhiều từ vựng mới chưa nào?",
    "Cô Ong Vàng chào {name}! Cùng nhau nói tiếng Anh thật giỏi hôm nay nhé!",
    "Chào con yêu {name}, hôm nay chúng mình cùng khám phá thế giới tiếng Anh nhé!",
    "Chào mừng {name} đến với giờ học tiếng Anh! Cô Ong Vàng tin con sẽ học rất giỏi!"
];

const GREETINGS_GUEST = [
    "Chào bé yêu, cô Ong Vàng rất vui được cùng con luyện tiếng Anh hôm nay!",
    "Chào mừng bé đến với lớp tiếng Anh của cô Ong Vàng! Mình cùng thử sức xem sao nhé!",
    "Cô Ong Vàng chào bé! Cùng khám phá từ vựng mới thật vui nào!",
    "Chào thiên tài nhí! Cô Ong Vàng đang chờ xem con nói tiếng Anh giỏi cỡ nào đây!",
    "Chào mừng con đến với Đấu trường Tiếng Anh! Chúc con học thật vui vẻ!"
];


// ==========================================
// ĐỊNH DANH MÁY CHỦ APPS SCRIPT & BIẾN TOÀN CỤC
// ==========================================
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbylnyFQ_4hE-x5p_v1PYTWbx5WxEamS-2XqaYqolYtvDXcp3lverb0IplRs7q0frbqJ/exec";
let allTopicsDataCache = null;
let ALPHABET_DATA = [];
let IPA_DATA = [];
let currentAlphaTab = 'alpha';
let allQuestionsFlatCache = null;
// Nguồn dữ liệu chuẩn cho Mini Game lớp 3: lấy từ Chuyên mục 2.1 - Flashcards Library.
let miniGameVocabCache = null;
// Từ điển "từ tiếng Anh -> nghĩa tiếng Việt" gom TỰ ĐỘNG từ chính các thẻ từ vựng (type: "flashcard")
// trong kho dữ liệu — không tự bịa nghĩa. Dùng để, sau khi bé chọn xong đáp án đúng (màu xanh),
// bấm vào BẤT KỲ đáp án nào trong 4 lựa chọn sẽ vừa đọc to từ đó, vừa hiện nghĩa tiếng Việt ngay
// cạnh (đúng ý đồ: học đủ cả 4 từ trong câu, không chỉ riêng từ đáp án đúng).
let wordMeaningMap = {};

// ==========================================
// THÔNG BÁO DỄ THƯƠNG — ghi đè alert() mặc định (xấu, khô khan) của trình duyệt bằng 1 modal
// pastel đồng bộ giao diện app, có mascot Ong Vàng. Ghi đè NGAY TẠI ĐÂY nên toàn bộ ~26 lời gọi
// alert(...) rải rác khắp app.js (cảnh báo khoá tuần, lỗi tải dữ liệu, yêu cầu đăng nhập...)
// tự động dùng giao diện mới, KHÔNG cần sửa từng chỗ gọi alert() một.
const nativeAlert = (typeof window !== 'undefined' && typeof window.alert === 'function')
    ? window.alert.bind(window)
    : (msg) => console.log('[ALERT]', msg); // Phòng hờ môi trường không có alert() gốc (không xảy ra trên trình duyệt thật)
window.alert = function (message) {
    try {
        const modal = document.getElementById('modal-cute-alert');
        const msgEl = document.getElementById('cute-alert-message');
        if (!modal || !msgEl) return nativeAlert(message); // Phòng hờ modal chưa kịp render trong HTML thì vẫn có thông báo, không mất tính năng
        msgEl.textContent = String(message);
        modal.classList.remove('hidden');
    } catch (e) {
        nativeAlert(message);
    }
};
function closeCuteAlert() {
    const modal = document.getElementById('modal-cute-alert');
    if (modal) modal.classList.add('hidden');
}

// Gộp nghĩa tiếng Việt cho 1 từ vào từ điển toàn cục — nhận cả 2 dạng: 1 chuỗi ("khỏe") hoặc
// 1 mảng nhiều nghĩa (["con ruồi", "bay"]). Nếu từ đã có sẵn nghĩa khác trong từ điển (do xuất
// hiện ở nhiều câu khác nhau), tự gộp thêm chứ không ghi đè mất nghĩa cũ.
function addWordMeanings(word, meaning) {
    if (!word || !meaning) return;
    const key = word.toLowerCase();
    const newMeanings = Array.isArray(meaning) ? meaning : [meaning];
    const existing = wordMeaningMap[key] || [];
    const merged = [...existing];
    newMeanings.forEach(m => { const t = String(m || '').trim(); if (t && !merged.includes(t)) merged.push(t); });
    wordMeaningMap[key] = merged;
}
// Bật/tắt đọc câu hỏi TỰ ĐỘNG khi vào câu mới — nút "Nghe câu hỏi" thủ công vẫn luôn hoạt động
// dù tắt tính năng này (đây chỉ tắt phần tự động phát, không tắt hẳn tính năng nghe).
let autoSpeechEnabled = localStorage.getItem('autoSpeechEnabled') !== 'false';
const examsCache = {};

let currentUser = null;
let starGreenCount = 0;
let starRedCount = 0;
let activeTopicId = null;
let activeExamContext = null;
let activeRoadmapContext = null;
let inMiniGameFlow = false;
let activeQuestionsList = [];
let practiceCycleRawPool = [];
let pendingTopicQuiz = null;
let currentQIndex = 0;
let score = 0;
let userAnswers = {};
let wrongAttemptsByQ = {};
let quizWrongAnswers = [];
let quizAnsweredLog = [];
let quizStartTime = null;
let quizTimerInterval = null;
let quizRemainingSeconds = 40 * 60;

let audioCtx = null;
const banMaiAudio = new Audio();
banMaiAudio.referrerPolicy = 'no-referrer';

let histLineChartInstance = null;
let histBarChartInstance = null;


// ==========================================
// PHÂN QUYỀN TÀI KHOẢN / PREMIUM — mô hình TA1
// ==========================================
function makeGuestUser() {
    return {
        name: "Khách (Guest)", isGuest: true, tuanHienTai: 1, hoTen: "Bé Khách",
        lop: "", maHS: "KHACH", role: "student",
        loaiTaiKhoan: "regular", premiumAccess: false, premiumReason: "guest",
        trialActive: false, trialDaysLeft: 0, hanDungThu: "", hanVIP: ""
    };
}

function hasPremiumAccess() {
    if (isAdminUser()) return true;
    return !!currentUser && !currentUser.isGuest && currentUser.premiumAccess === true;
}

function getPremiumLockMessage(featureName = 'khu vực nâng cao') {
    if (!currentUser || currentUser.isGuest) {
        return `Đây là ${featureName} dành cho tài khoản Trial hoặc VIP.
Con có thể Sign in nếu đã có tài khoản hoặc Sign up để đăng ký nhé!
Các chuyên đề cơ bản vẫn học miễn phí bình thường.`;
    }
    const type = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
    if (type === 'regular') {
        return `${featureName} là nội dung Premium.
Tài khoản Regular vẫn học toàn bộ chuyên đề cơ bản miễn phí. Ba mẹ có thể liên hệ Admin để được cấp Trial 1 tháng hoặc VIP 1 năm nhé!`;
    }
    return `${featureName} hiện chưa được mở cho tài khoản này.
Con vẫn học các chuyên đề cơ bản miễn phí bình thường nhé!`;
}

function showPremiumModal(featureName = 'khu vực nâng cao') {
    const modal = document.getElementById('modal-premium-access');
    const title = document.getElementById('premium-modal-title');
    const msg = document.getElementById('premium-modal-message');
    const guestActions = document.getElementById('premium-guest-actions');
    if (!modal || !msg) { alert(getPremiumLockMessage(featureName)); return; }
    if (title) title.textContent = featureName;
    msg.textContent = getPremiumLockMessage(featureName);
    if (guestActions) guestActions.classList.toggle('hidden', !!currentUser && !currentUser.isGuest);
    modal.classList.remove('hidden');
}

function closePremiumModal() { document.getElementById('modal-premium-access')?.classList.add('hidden'); }
function requirePremium(featureName) {
    if (hasPremiumAccess()) return true;
    showPremiumModal(featureName);
    return false;
}
function openAuthModal(tab = 'login') {
    const modal = document.getElementById('screen-login');
    if (!modal) return;
    switchAuthTab(tab); hideAuthError(); modal.classList.remove('hidden');
}
function closeAuthModal() { document.getElementById('screen-login')?.classList.add('hidden'); hideAuthError(); }
function openAuthFromPremium(tab) { closePremiumModal(); openAuthModal(tab); }
function refreshPremiumUI() {
    const locked = !hasPremiumAccess();
    ['roadmap-lock-icon','minigame-lock-icon'].forEach(id => {
        const el = document.getElementById(id); if (el) el.classList.toggle('hidden', !locked);
    });
}

// ==========================================
// HÀM TIỆN ÍCH DỮ LIỆU
// ==========================================
function getStudentFirstName() {
    if (!currentUser || currentUser.isGuest || !currentUser.hoTen) return "Bé";
    const parts = currentUser.hoTen.trim().split(/\s+/);
    return parts[parts.length - 1] || "Bé";
}

function normalizeQuestion(q) {
    if (!q) return null;
    return {
        question_id: q.id ?? q.question_id ?? q.question_no ?? 0,
        // "sub_topic"/"sub_code" = MÃ Chuyên Mục.Hoạt-động-con THẬT (VD "2.1") — dùng để nhóm
        // câu hỏi cho TRANG CHỦ "Học tự do" theo đúng 12 Chuyên Mục (Mục I khung V6).
        // "week" = MÃ Chủ Đề nội dung.Part (VD "1.1") — dùng RIÊNG để lọc câu hỏi theo
        // Lộ trình 24 tuần (Mục III khung V6). Hai trục KHÔNG được gộp chung với nhau.
        sub_topic: String(q.sub_code ?? q.sub ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        sub_topic_label: String(q.sub ?? q.sub_code ?? q.sub_topic ?? 'Câu hỏi chung').trim(),
        week: q.week ?? q.w ?? null,
        paired_group: q.pg ?? q.paired_group ?? '',
        question_text: q.q ?? q.question_text ?? '',
        options: Array.isArray(q.o) ? q.o : (Array.isArray(q.options) ? q.options : []),
        options_ipa: q.oipa ?? q.options_ipa ?? null,
        answer: q.a ?? q.answer ?? '',
        hint: q.h ?? q.hint ?? '',
        image_url: q.img ?? q.image_url ?? '',
        emoji: q.emo ?? q.emoji ?? '',
        audio_text: q.aud ?? q.audio_text ?? '',
        reading_title: q.r_title ?? q.reading_title ?? '',
        reading_passage: q.r_passage ?? q.reading_passage ?? q.passage_text ?? '',
        skill_tag: q.skill_tag ?? q.tag ?? 'ENG_VOC',
        difficulty: q.diff ?? q.difficulty ?? null,
        diem: Number(q.diem ?? q.score ?? 0.5),
        explanation: q.explanation ?? q.h ?? 'Không có giải thích chi tiết.'
    };
}

function normalizeTopic(t) {
    if (!t) return null;
    const rawQuestions = t.qs || t.questions || [];
    return {
        topic_id: Number(t.id ?? t.topic_id),
        topic_name: t.name ?? t.topic_name ?? '',
        description: t.desc ?? t.description ?? '',
        lecture_title: t.l_title ?? t.lecture_title ?? '',
        lecture_content: t.l_content ?? t.lecture_content ?? '',
        lecture_audio_text: t.l_audio ?? t.lecture_audio_text ?? '',
        questions: rawQuestions.map(normalizeQuestion).filter(Boolean)
    };
}

function shuffleArray(arr) {
    if (!arr) return [];
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildTrickyChoices(correctAnswer, sameGroupPool, allPool, count = 3) {
    let same = [...new Set(sameGroupPool.filter(x => x !== correctAnswer))];
    same = shuffleArray(same);
    let picks = same.slice(0, count);
    if (picks.length < count) {
        let rest = [...new Set(allPool.filter(x => x !== correctAnswer && !picks.includes(x)))];
        rest = shuffleArray(rest);
        picks = picks.concat(rest.slice(0, count - picks.length));
    }
    return shuffleArray([correctAnswer, ...picks]);
}

// Đề ôn tập tổng hợp 15 câu (Tuần 12 chốt chặn HK1 & Tuần 17 ôn giữa kỳ) — đúng ma trận V4:
// 3 ENG_PHO@0.5 + 2 ENG_VOC@0.5 + 2 ENG_LIS@0.5 + 3 ENG_GRA(2x1.0+1x0.5) + 3 ENG_SYN(2x1.0+1x0.5) + 2 ENG_READ@0.75 = 10.0đ
const REVIEW15_SPEC = [
    { tag: 'ENG_PHO', pts: [0.5, 0.5, 0.5] },
    { tag: 'ENG_VOC', pts: [0.5, 0.5] },
    { tag: 'ENG_LIS', pts: [0.5, 0.5] },
    { tag: 'ENG_GRA', pts: [1.0, 1.0, 0.5] },
    { tag: 'ENG_SYN', pts: [1.0, 1.0, 0.5] },
    { tag: 'ENG_READ', pts: [0.75, 0.75] }
];

function generateReview15(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !weeklyQuestionsFlatCache) return [];
    const pool = weeklyQuestionsFlatCache.filter(q => config.subIds.includes(q.week));

    const bySkill = {};
    SKILL_KEYS.forEach(k => bySkill[k] = shuffleArray(pool.filter(q => q.skill_tag === k)));

    let out = [];
    REVIEW15_SPEC.forEach(spec => {
        const items = bySkill[spec.tag].length ? bySkill[spec.tag] : shuffleArray(pool);
        if (!items.length) return;
        spec.pts.forEach((pts, i) => {
            const src = items[i % items.length];
            out.push({ ...src, diem: pts, id: src.question_id + '_r' + i, question_id: src.question_id + '_r' + i });
        });
    });
    return shuffleArray(out);
}

function getQuestionsForWeek343(weekNumber) {
    const config = roadmapConfig[weekNumber];
    if (!config || !weeklyQuestionsFlatCache) return [];

    // Gom toàn bộ câu hỏi thuộc đúng các chủ đề con (sub_id dạng "X.Y") của tuần này —
    // mỗi câu đã tự mang theo skill_tag riêng (ENG_PHO-READ), không cần bảng TOPIC_TO_SKILL suy luận gián tiếp.
    let pool = weeklyQuestionsFlatCache.filter(q => config.subIds.includes(q.week));

    if (pool.length < 30) return shuffleArray([...pool]);

    // Bốc đúng tỷ lệ vàng 3:4:3 (9 câu Dễ - 12 câu Trung bình - 9 câu Khó / 30 câu) dựa theo
    // field "difficulty" THẬT (easy/medium/hard) NotebookLM đã gắn sẵn cho từng câu — không còn
    // cắt lát theo vị trí giả định như thiết kế cũ (lúc chưa có field difficulty thật trong dữ liệu).
    const used = new Set();
    const take = (level, count) => {
        const candidates = shuffleArray(pool.filter(q => q.difficulty === level && !used.has(q.question_id)));
        const picked = candidates.slice(0, count);
        picked.forEach(q => used.add(q.question_id));
        return picked;
    };
    const easy = take('easy', 9);
    const medium = take('medium', 12);
    const hard = take('hard', 9);

    // Tuần nào thiếu câu ở 1 mức độ nào đó (dữ liệu tuần đó chưa đủ) -> bù bằng câu ngẫu nhiên
    // còn lại trong pool, đảm bảo luôn đủ 30 câu để bé không bị kẹt giữa chừng bài luyện tập.
    let all = [...easy, ...medium, ...hard];
    if (all.length < 30) {
        const remain = shuffleArray(pool.filter(q => !used.has(q.question_id)));
        all = all.concat(remain.slice(0, 30 - all.length));
    }
    return shuffleArray(all.slice(0, 30));
}

function capitalizeFirstLetter(val) {
    if (!val) return '';
    const s = String(val).trim();
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function beautifySubtopicName(name) {
    if (!name) return '';
    let s = String(name).trim();
    if (/đa giác quan/i.test(s)) return 'Trải nghiệm đa giác quan';
    if (/trái nghĩa.*đồng nghĩa/i.test(s) || /đồng nghĩa.*trái nghĩa/i.test(s)) return 'Trái nghĩa - đồng nghĩa';
    if (s.length > 40 && s.includes('(')) {
        s = s.replace(/\s*\([^)]*\)/g, '').trim();
    }
    return s;
}

const TOPICS_DATA_FILES = [
    'assets/data/kho_hoc_tieng_anh_3_part1.json',
    'assets/data/kho_hoc_tieng_anh_3_part2.json'
];

/** Bản lớp 3: mỗi file kho học liệu là 1 MẢNG PHẲNG các "chuyên mục con", dạng:
 * [{ category_id:"M1", category_name:"Phonics & Sounds",
 *    subcategory_id:"M1_1", subcategory_name:"1.1 Pronunciation Play",
 *    questions:[{ id, tag, type, question, options, answer, audio, image, explanation }] }, ...]
 * Khác hẳn cấu trúc "sections:{...}" của bản lớp 2 — nên viết lại toàn bộ hàm nạp dữ liệu.
 * sub_code (VD "1.1") suy ra từ subcategory_id ("M1_1") để: (a) gom nhóm trang chủ "Học tự do"
 * theo đúng 12 Chuyên Mục, và (b) SAU NÀY dùng chung quy ước "X.Y" với dữ liệu Lộ trình 24 tuần.
 * Field "week" (trục nội dung Greetings/School/...) CHƯA có trong file này — để trống, sẽ được
 * NẠP RIÊNG từ "lo_trinh_tieng_anh_3.json" khi anh gửi (xem fetchWeeklyQuestionsFlat bên dưới). */
function parseSubCodeFromSubcategoryId(subcategoryId) {
    const m = /^M(\d+)_(\d+)$/i.exec(String(subcategoryId || '').trim());
    if (!m) return { topicId: 1, subCode: '1.1' };
    return { topicId: Number(m[1]), subCode: `${m[1]}.${m[2]}` };
}

function stripLeadingNumber(label) {
    return String(label || '').replace(/^\d+(\.\d+)?\s*/, '').trim();
}

async function fetchAllQuestionsFlat() {
    if (allQuestionsFlatCache) return allQuestionsFlatCache;

    const results = await Promise.all(TOPICS_DATA_FILES.map(async (file) => {
        const res = await fetch(file);
        if (!res.ok) throw new Error(`Không thể tải file dữ liệu ${file}`);
        return res.json();
    }));

    // Adapter dữ liệu Mini Game lớp 3: chỉ lấy đúng Chuyên mục 2.1 - Flashcards Library.
    // Dữ liệu lớp 3 là mảng các subcategory (M2_1), khác schema lớp 2; game vẫn dùng chung
    // interface word/vietnamese/topic_id/topic_name để toàn bộ 12 game không phải sửa riêng.
    if (!miniGameVocabCache) {
        miniGameVocabCache = [];
        const groupIdMap = new Map();
        let nextGroupId = 1;
        results.forEach(sectionsArray => {
            (Array.isArray(sectionsArray) ? sectionsArray : []).forEach(section => {
                const sid = String(section.subcategory_id || '').trim().toUpperCase();
                if (sid !== 'M2_1') return;
                (section.questions || []).forEach(it => {
                    if (!it || it.type !== 'flashcard' || !it.word) return;
                    const groupName = String(it.group_name || section.subcategory_name || 'Flashcards Library').trim();
                    if (!groupIdMap.has(groupName)) groupIdMap.set(groupName, nextGroupId++);
                    const vi = Array.isArray(it.vietnamese) ? it.vietnamese.join(' / ') : String(it.vietnamese || '').trim();
                    miniGameVocabCache.push({
                        id: it.id || it.question_id || '',
                        word: String(it.word).trim(),
                        vietnamese: vi,
                        emoji: it.emoji || (it.image && !/[\/\.]/.test(String(it.image)) ? it.image : '✨'),
                        image_url: it.image_url || (/^(https?:|assets\/)/i.test(String(it.image || '')) ? it.image : ''),
                        sentence: it.sentence || '',
                        hint: it.hint || it.explanation || '',
                        topic_id: groupIdMap.get(groupName),
                        topic_name: groupName
                    });
                });
            });
        });
    }

    const rawQuestions = [];
    results.forEach(sectionsArray => {
        (Array.isArray(sectionsArray) ? sectionsArray : []).forEach(section => {
            const { topicId, subCode } = parseSubCodeFromSubcategoryId(section.subcategory_id);
            const label = stripLeadingNumber(section.subcategory_name) || section.category_name || subCode;

            // SỬA LỖI: riêng mục "2.1 Flashcards Library" dữ liệu là DẠNG THẺ TỪ VỰNG
            // (type: "flashcard", chỉ có word/ipa/vietnamese — KHÔNG có question/options/answer),
            // khác hẳn schema trắc nghiệm bình thường của mọi mục còn lại. Nếu để nguyên, câu hỏi
            // sẽ hiện trống và KHÔNG có đáp án nào để bấm cả. Tự chế lại thành câu trắc nghiệm:
            // hỏi nghĩa tiếng Việt, 4 lựa chọn tiếng Anh lấy ngẫu nhiên trong CHÍNH nhóm từ vựng đó
            // (giữ đúng phiên âm riêng của từng từ, không bịa).
            const flashcardPool = (section.questions || []).filter(q => q.type === 'flashcard' && q.word);

            (section.questions || []).forEach(it => {
                let qFields;
                if (it.type === 'flashcard' && it.word) {
                    const distractors = shuffleArray(flashcardPool.filter(w => w.word !== it.word)).slice(0, 3);
                    const optionItems = shuffleArray([it, ...distractors]);
                    qFields = {
                        q: `Từ nào có nghĩa là '${it.vietnamese}'?`,
                        o: optionItems.map(w => w.word),
                        a: it.word,
                        oipa: optionItems.map(w => w.ipa || null)
                    };
                    // Gom nghĩa tiếng Việt của TẤT CẢ các từ xuất hiện (kể cả từ làm đáp án nhiễu)
                    // vào từ điển toàn cục — tự nhận cả 2 dạng field "vietnamese": 1 chuỗi ("khỏe")
                    // HOẶC 1 mảng nhiều nghĩa (["con ruồi", "bay"]) cho từ có nhiều nghĩa khác nhau,
                    // và tự gộp thêm nếu cùng 1 từ xuất hiện nhiều nơi với nghĩa khác nhau — để sau
                    // này anh chỉ cần đổi dữ liệu là hiện đủ, không phải sửa code lần nữa.
                    optionItems.forEach(w => addWordMeanings(w.word, w.vietnamese));
                } else {
                    qFields = { q: it.question, o: it.options || [], a: it.answer, oipa: it.options_ipa || null };
                }
                rawQuestions.push({
                    id: it.id,
                    sub: label,
                    sub_code: subCode,
                    // Bản cập nhật: NotebookLM đã gộp roadmap trở lại chung 3 file này, gắn thẳng
                    // "week_id" (dạng "W01".."W23") vào TỪNG câu hỏi — không cần file
                    // roadmap_tieng_anh_3.json riêng nữa. Câu nào chưa có week_id (w=null) vẫn
                    // dùng bình thường cho "Học tự do", chỉ không xuất hiện ở Lộ trình 24 tuần.
                    w: it.week_id || null,
                    diff: it.difficulty || null,
                    tag: it.tag,
                    img: it.image || '',
                    emo: '',
                    aud: it.audio || '',
                    h: it.explanation || '',
                    // "pg" (paired_group) đã có sẵn cơ chế xử lý từ trước (showPairedGroupMenu):
                    // hễ 1 chuyên mục con có >1 giá trị pg khác nhau, app tự động chèn thêm màn
                    // "chọn thư mục con" trước khi vào bài — không cần sửa gì thêm ở phần hiển thị.
                    pg: it.group_name || '',
                    ...qFields
                });
            });
        });
    });

    allQuestionsFlatCache = rawQuestions.map(normalizeQuestion).filter(Boolean);
    return allQuestionsFlatCache;
}

// ------------------------------------------------------------
// KHO CÂU HỎI CHO LỘ TRÌNH 24 TUẦN — bản cập nhật: dùng CHUNG 1 nguồn với "Học tự do"
// (kho_hoc_tieng_anh_3_part1/2.json), vì NotebookLM đã gộp field "week_id" thẳng vào từng câu,
// không còn file roadmap_tieng_anh_3.json riêng nữa. Giữ nguyên tên hàm/biến cache cũ để không
// phải sửa lại getQuestionsForWeek343()/generateReview15() ở chỗ khác.
let weeklyQuestionsFlatCache = null;
async function fetchWeeklyQuestionsFlat() {
    weeklyQuestionsFlatCache = await fetchAllQuestionsFlat();
    return weeklyQuestionsFlatCache;
}


/** Dữ liệu từ vựng dùng chung cho Mini Game lớp 3. */
function getMiniGameVocabPool(options = {}) {
    const { topicId = null, singleWordOnly = false, maxLength = null, minLength = null } = options;
    let pool = Array.isArray(miniGameVocabCache) ? miniGameVocabCache : [];
    if (topicId !== null && topicId !== undefined && topicId !== 'all') {
        pool = pool.filter(item => Number(item.topic_id) === Number(topicId));
    }
    if (singleWordOnly) pool = pool.filter(item => /^[A-Za-z]+$/.test(item.word));
    if (Number.isFinite(minLength)) pool = pool.filter(item => item.word.replace(/[^A-Za-z]/g, '').length >= minLength);
    if (Number.isFinite(maxLength)) pool = pool.filter(item => item.word.replace(/[^A-Za-z]/g, '').length <= maxLength);
    return pool.map(item => ({ ...item }));
}

function getMiniGameTopicGroups() {
    const map = new Map();
    (miniGameVocabCache || []).forEach(item => {
        const id = Number(item.topic_id || 0);
        if (!id || map.has(id)) return;
        map.set(id, { id, name: item.topic_name || `Nhóm ${id}` });
    });
    return [...map.values()].sort((a, b) => a.id - b.id);
}

async function ensureMiniGameVocabReady() {
    await fetchAllQuestionsFlat();
    if (!miniGameVocabCache || !miniGameVocabCache.length) {
        throw new Error('Không tìm thấy dữ liệu từ Chuyên mục 2.1 - Flashcards Library lớp 3.');
    }
    return miniGameVocabCache;
}

function getMiniGameSectionPool(sectionCodes = []) {
    const codes = new Set((Array.isArray(sectionCodes) ? sectionCodes : [sectionCodes]).map(String));
    const pool = Array.isArray(allQuestionsFlatCache) ? allQuestionsFlatCache : [];
    return pool.filter(q => codes.has(String(q.sub_topic || ''))).map(q => ({
        ...q,
        options: Array.isArray(q.options) ? q.options.slice() : [],
        options_ipa: Array.isArray(q.options_ipa) ? q.options_ipa.slice() : q.options_ipa
    }));
}

async function ensureMiniGameLearningReady(sectionCodes = []) {
    await fetchAllQuestionsFlat();
    const pool = getMiniGameSectionPool(sectionCodes);
    if (!pool.length) throw new Error(`Không tìm thấy học liệu lớp 3 cho Chuyên mục ${[].concat(sectionCodes).join(', ')}.`);
    return pool;
}

async function fetchAllTopicsData() {
    if (allTopicsDataCache) return allTopicsDataCache;

    const flat = await fetchAllQuestionsFlat();
    const byMuc = {};
    flat.forEach(q => {
        const mucNum = parseInt(String(q.sub_topic).split('.')[0], 10);
        if (!byMuc[mucNum]) byMuc[mucNum] = [];
        byMuc[mucNum].push(q);
    });

    allTopicsDataCache = TOPICS_CONFIG.map(t => ({
        topic_id: t.id,
        topic_name: t.title,
        description: t.desc,
        lecture_title: '',
        lecture_content: '',
        lecture_audio_text: '',
        questions: byMuc[t.id] || []
    }));
    return allTopicsDataCache;
}

// Bản lớp 3: file đề thi "de_thi_tieng_anh_3.json" là MẢNG PHẲNG 1 cấp (không có sẵn 3 mảng
// semester_1_exams/semester_2_exams/hsg_exams như bản lớp 2) — nên tự gom nhóm theo
// EXAM_CATEGORY_ASSIGN rồi vẫn trả về ĐÚNG hình dạng {semester_1_exams:[...], ...} để toàn bộ
// phần còn lại của app (vốn quen đọc data[arrayKey]) không cần sửa gì thêm.
async function loadExamDataFile(file) {
    if (examsCache[file]) return examsCache[file];
    const res = await fetch(`assets/data/${file}`);
    if (!res.ok) throw new Error("Không thể tải file đề thi");
    const flatExams = await res.json();

    const byCategory = { hocky1: [], hocky2: [], hsg: [] };
    (Array.isArray(flatExams) ? flatExams : []).forEach(ex => {
        const categoryKey = EXAM_TYPE_TO_CATEGORY[String(ex.type || '').trim()];
        if (!categoryKey) return; // type không khớp nhóm nào đã biết -> bỏ qua an toàn, không vỡ trang
        byCategory[categoryKey].push({
            ...ex,
            exam_title: ex.name,
            questions: (ex.questions || []).map((q, idx) => normalizeQuestion({
                id: q.id, tag: q.tag, q: q.question, o: q.options, a: q.answer,
                aud: q.audio, img: q.image, h: q.explanation, oipa: q.options_ipa,
                diem: EXAM13_POINTS[idx] ?? 0.5
            })).filter(Boolean)
        });
    });

    const data = {};
    Object.entries(examFileMap).forEach(([categoryKey, cfg]) => {
        data[cfg.arrayKey] = byCategory[categoryKey] || [];
    });

    examsCache[file] = data;
    return data;
}

// ==========================================
// RENDER GIAO DIỆN TRANG CHỦ & ĐẤU TRƯỜNG
// ==========================================
function renderDashboardCards(topicsData = [], totalExamsCount = null) {
    const container = document.getElementById('view-dashboard-grid');
    if (!container) return;
    let html = '';

    TOPICS_CONFIG.forEach(t => {
        const topicObj = topicsData.find(item => Number(item.topic_id) === Number(t.id));
        const totalCount = topicObj && topicObj.questions ? topicObj.questions.length : 0;
        const countLabel = totalCount > 0 ? `${totalCount} câu` : 'Đang tải...';
        const iconHtml = t.isCustomTextIcon
            ? `<div class="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-[11px] font-black text-orange-600 shadow-inner group-hover:scale-110 transition-transform shrink-0 tracking-tight">S/X</div>`
            : `<div class="w-8 h-8 bg-${t.color}-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-${t.color}-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">${t.icon}</div>`;

        html += `
            <div onclick="openTopic(${t.id}, '${t.title}', '${t.icon}')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-${t.color}-400 transition-all group min-h-[92px] relative">
                ${t.id === 11 ? '<i class="fa-solid fa-lock absolute top-2 right-2 text-slate-400 text-xs" title="Cần quyền nâng cao"></i>' : ''}
                <div class="flex items-center space-x-2.5">
                    ${iconHtml}
                    <h3 class="font-extrabold text-${t.color}-700 text-sm md:text-base leading-tight">${t.title}</h3>
                </div>
                <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-yellow-100 text-[11px] font-bold text-gray-500">
                    <span>${t.desc}</span>
                    <span class="bg-${t.color}-50 text-${t.color}-600 px-2 py-0.5 rounded-full">${countLabel}</span>
                </div>
            </div>`;
    });

    const examCountLabel = Number.isFinite(totalExamsCount) ? `${totalExamsCount} đề thi` : 'Đang tải...';
    html += `
        <div onclick="clickProgressOrExam('exam')" class="pastel-card p-3 flex flex-col justify-between cursor-pointer hover:border-amber-400 transition-all group bg-gradient-to-br from-white to-amber-50/50 min-h-[92px] relative">
            <i class="fa-solid fa-lock absolute top-2 right-2 text-slate-400 text-xs" title="Cần quyền nâng cao"></i>
            <div class="flex items-center space-x-2.5">
                <div class="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center text-sm font-extrabold text-amber-600 shadow-inner group-hover:scale-110 transition-transform shrink-0">🏆</div>
                <h3 class="font-extrabold text-amber-700 text-sm md:text-base leading-tight">12. Đấu trường đề thi</h3>
            </div>
            <div class="flex justify-between items-center mt-1.5 pt-1 border-t border-amber-100 text-[11px] font-bold text-gray-500">
                <span>HK1, HK2, HSG</span>
                <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">${examCountLabel}</span>
            </div>
        </div>`;
    container.innerHTML = html;
    refreshPremiumUI();
}

async function renderDashboardGrid() {
    // Render khung 12 chuyên mục NGAY LẬP TỨC. Không chờ fetch dữ liệu nên trang chủ không bao giờ trắng.
    renderDashboardCards([], null);

    let topicsData = [];
    let totalExamsCount = null;
    try { topicsData = await fetchAllTopicsData(); } catch (e) { console.warn('Không tải được số câu trang chủ:', e); }
    try {
        const examData = await loadExamDataFile(EXAM_FILE);
        if (examData) {
            totalExamsCount = ['semester_1_exams', 'semester_2_exams', 'hsg_exams']
                .reduce((sum, k) => sum + (Array.isArray(examData[k]) ? examData[k].length : 0), 0);
        }
    } catch (e) { console.warn('Không tải được số đề thi trang chủ:', e); }

    renderDashboardCards(topicsData, totalExamsCount);
}

async function startRandomExam(categoryKey) {
    stopSpeaking();
    const arrayKey = examFileMap[categoryKey]?.arrayKey || 'semester_1_exams';

    showLoadingOverlay("Đang chuẩn bị đề thi...");
    try {
        const examData = await loadExamDataFile(EXAM_FILE);
        hideLoadingOverlay();

        const pool = (examData && Array.isArray(examData[arrayKey])) ? examData[arrayKey] : [];
        if (!pool.length) return alert('Đang cập nhật thêm đề thi cho mục này, bé quay lại sau nhé!');

        const examIndex = Math.floor(Math.random() * pool.length);
        const exam = pool[examIndex];
        const examLabel = examFileMap[categoryKey]?.label || 'Đề thi';
        const examTitle = exam.exam_title || `${examLabel} - Đề số ${examIndex + 1}`;

        activeExamContext = { categoryKey, examIndex, examTitle };
        activeRoadmapContext = null;
        pendingTopicQuiz = null;

        const questions = Array.isArray(exam.questions) && exam.questions.length ? exam.questions : [];
        if (!questions.length) return alert('Đề thi này chưa có câu hỏi, bé chọn đề khác nhé!');

        updateNavTabs("12. Đấu trường đề thi", "🏆", examTitle);
        startTopicQuiz(0, examTitle, shuffleArray(questions), null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Không thể tải đề thi: ${err.message}`);
    }
}

function startExamCountdown() {
    quizRemainingSeconds = 40 * 60;
    updateExamTimerDisplay();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(() => {
        quizRemainingSeconds--;
        updateExamTimerDisplay();
        if (quizRemainingSeconds <= 0) {
            clearInterval(quizTimerInterval);
            alert('Đã hết giờ làm bài! Bài thi sẽ được nộp lại nhé bé.');
            showResultScreen();
        }
    }, 1000);
}

function updateExamTimerDisplay() {
    const el = document.getElementById('quiz-timer-display');
    if (!el) return;
    const m = Math.floor(Math.max(0, quizRemainingSeconds) / 60);
    const s = Math.max(0, quizRemainingSeconds) % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function openExamHub() {
    stopSpeaking();
    inAlphaIpaFlow = false;
    activeExamContext = null;
    activeRoadmapContext = null;
    activeTopicId = null;
    pendingTopicQuiz = null;
    updateNavTabs("12. Đấu trường đề thi", "🏆", null);
    switchAppView('view-exam-hub');
    showLoadingOverlay("Đang tải kho đề thi...");
    renderExamHubGrid().finally(() => hideLoadingOverlay());
}

async function renderExamHubGrid() {
    const container = document.getElementById('exam-categories-grid');
    if (!container) return;

    let examData = null;
    try { examData = await loadExamDataFile(EXAM_FILE); } catch (e) {}

    const getCount = (categoryKey) => {
        const arrayKey = examFileMap[categoryKey]?.arrayKey;
        if (!examData || !Array.isArray(examData[arrayKey])) return 0;
        return examData[arrayKey].length;
    };

    const countHK1 = getCount('hocky1');
    const countHK2 = getCount('hocky2');
    const countHSG = getCount('hsg');

    let html = `
        <div class="bg-yellow-50/70 p-5 rounded-3xl border-2 border-yellow-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">📘</div>
                <h3 class="font-extrabold text-yellow-600 text-lg mb-1">Học kỳ 1</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK1</p>
                <span class="inline-block bg-yellow-100 text-yellow-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK1} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky1')" class="w-full py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK1')" class="w-full py-2 bg-white text-yellow-700 border border-yellow-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-yellow-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-orange-50/70 p-5 rounded-3xl border-2 border-orange-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">📗</div>
                <h3 class="font-extrabold text-orange-600 text-lg mb-1">Học kỳ 2</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Kiểm tra kiến thức HK2</p>
                <span class="inline-block bg-orange-100 text-orange-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHK2} đề thi chuẩn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hocky2')" class="w-full py-2.5 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHK2')" class="w-full py-2 bg-white text-orange-700 border border-orange-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-orange-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>

        <div class="bg-amber-50/70 p-5 rounded-3xl border-2 border-amber-200 flex flex-col justify-between items-center text-center group min-h-[250px] pastel-card">
            <div>
                <div class="text-4xl mb-1.5 group-hover:scale-110 transition-transform">👑</div>
                <h3 class="font-extrabold text-amber-600 text-lg mb-1">Học sinh giỏi</h3>
                <p class="text-xs text-gray-500 font-bold mb-2">Thử thách nâng cao</p>
                <span class="inline-block bg-amber-100 text-amber-700 px-3 py-0.5 rounded-full text-xs font-black mb-3">${countHSG} đề thi tuyển chọn</span>
            </div>
            <div class="w-full space-y-2">
                <button onclick="startRandomExam('hsg')" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold rounded-xl text-xs pastel-btn shadow-sm">
                    🚀 Vào thi thử
                </button>
                <button onclick="openHistoryModal('LichSuBaiThiHSG')" class="w-full py-2 bg-white text-amber-700 border border-amber-300 font-extrabold rounded-xl text-xs pastel-btn hover:bg-amber-50">
                    📊 Xem lịch sử thi
                </button>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// ==========================================
// [KHÔNG CÒN DÙNG Ở BẢN LỚP 3] CHUYÊN MỤC 1: ALPHABET & IPA (bê nguyên nội dung từ chương trình cũ)
// Bản lớp 3: Chuyên mục 1 (Phonics & Sounds) đã được gộp thành trắc nghiệm bình thường trong
// kho_hoc_tieng_anh_3_part1.json (giống mọi chuyên mục khác) — không còn 2 màn hình tra cứu tĩnh
// Alphabet A-Z/44 IPA riêng nữa. Toàn bộ khối hàm bên dưới (openAlphabetIPA, openAlphabetMenu,
// openIPAMenu, openPhonicsMatcher...) hiện KHÔNG còn được gọi từ đâu cả (dead code, giữ lại phòng
// khi sau này anh muốn khôi phục 2 màn hình tra cứu tĩnh này, chỉ cần gửi thêm
// alphabet_tieng_anh_3.json/ipa_tieng_anh_3.json và nối lại nút bấm ở renderDashboardGrid).
// ==========================================
let alphabetIpaLoaded = false;
let currentAlphabetIndex = 0;
let currentIPAIndex = 0;
let inAlphaIpaFlow = false;

async function loadAlphabetIPAData() {
    if (alphabetIpaLoaded) return;
    const [alphaRes, ipaRes] = await Promise.all([
        fetch('assets/data/alphabet_english_2.json').then(r => r.json()),
        fetch('assets/data/ipa_english_2.json').then(r => r.json())
    ]);
    ALPHABET_DATA = alphaRes;
    IPA_DATA = ipaRes;
    alphabetIpaLoaded = true;
}

async function openAlphabetIPA() {
    stopSpeaking();
    activeTopicId = null; activeExamContext = null; activeRoadmapContext = null; pendingTopicQuiz = null;
    inAlphaIpaFlow = true;
    updateNavTabs("1. Alphabet & IPA", "🔤", null);
    showLoadingOverlay("Đang tải bảng chữ cái & ngữ âm...");
    try {
        await loadAlphabetIPAData();
        let phonicsCount = 0;
        try {
            const flat = await fetchAllQuestionsFlat();
            phonicsCount = flat.filter(q => Math.floor(Number(q.sub_topic)) === 1).length;
        } catch (e) {}
        hideLoadingOverlay();
        renderAlphaIPAMenu(phonicsCount);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không tải được dữ liệu Alphabet & IPA: ' + err.message);
    }
}

// Màn hình chọn 1 trong 3 mục nhỏ — dùng ĐÚNG khung "view-lecture" chuẩn (đồng bộ với mọi chuyên mục khác),
// chỉ khác ở chỗ 3 nút bấm dẫn sang 3 màn hình riêng (Alphabet, IPA, Phonics Matcher) thay vì bốc câu hỏi.
function renderAlphaIPAMenu(phonicsCount = 0) {
    document.getElementById('lecture-title').textContent = '1. Alphabet & IPA';
    document.getElementById('lecture-content').textContent = 'Chào con, đây là góc làm quen với bảng chữ cái và ngữ âm tiếng Anh! Con hãy chọn 1 mục nhỏ bên dưới để bắt đầu nhé.';
    document.getElementById('view-lecture').dataset.audioText = 'Chào con, đây là góc làm quen với bảng chữ cái và ngữ âm tiếng Anh! Con hãy chọn 1 mục nhỏ bên dưới để bắt đầu nhé.';

    const items = [
        { label: 'Alphabet (A-Z)', count: '26 chữ', action: "openAlphabetMenu(0)", style: SUBTOPIC_PALETTES[0] },
        { label: 'Bảng ngữ âm IPA', count: '44 âm', action: "openIPAMenu(0)", style: SUBTOPIC_PALETTES[1] },
        { label: 'Phonics Matcher', count: `${phonicsCount} câu`, action: "openPhonicsMatcher()", style: SUBTOPIC_PALETTES[2] }
    ];
    document.getElementById('lecture-subtopics-list').innerHTML = items.map((it, idx) => `
        <button onclick="${it.action}" class="p-3 ${it.style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
            <span class="text-sm md:text-base leading-snug"><strong class="${it.style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(it.label)}</span>
            <span class="text-xs font-extrabold ${it.style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${it.count}</span>
        </button>`).join('');
    setSubtopicGridColumns(items.length);

    // Không có khái niệm "học trộn tất cả" ở đây vì 1.1/1.2 là bảng tra cứu tĩnh, 1.3 mới là luyện tập thật
    document.getElementById('wrap-mix-all-subtopics').classList.add('hidden');

    updateNavTabs("1. Alphabet & IPA", "🔤", null);
    switchAppView('view-lecture');
}

// ---------- 1.1 ALPHABET A-Z ----------
function openAlphabetMenu(index = 0) {
    stopSpeaking();
    inAlphaIpaFlow = true;
    if (index < 0) index = 0;
    if (index >= ALPHABET_DATA.length) index = ALPHABET_DATA.length - 1;
    currentAlphabetIndex = index;
    updateNavTabs("1. Alphabet & IPA", "🔤", "Alphabet A-Z");
    switchAppView('view-alphabet');

    const item = ALPHABET_DATA[index];
    const keyboardHtml = ALPHABET_DATA.map((alpha, idx) => {
        const isActive = idx === currentAlphabetIndex;
        return `<button onclick="openAlphabetMenu(${idx})" class="pastel-btn flex flex-col items-center justify-center rounded-xl p-1.5 shadow-sm cursor-pointer ${isActive ? 'bg-yellow-500 text-white border-2 border-yellow-600 scale-105 ring-2 ring-yellow-200' : 'bg-white text-gray-700 border border-gray-200 hover:bg-yellow-50 hover:border-yellow-300'} min-w-[52px] min-h-[52px]">
            <span class="text-base font-black">${alpha.letter}</span>
            <span class="font-bold ${isActive ? 'text-white' : 'text-yellow-600'} text-xs md:text-sm">${alpha.ipaName}</span>
        </button>`;
    }).join('');

    const wordCard = (w, idx) => `
        <div onclick="speakAlphaWord(${index},${idx})" class="card-hover bg-white border-2 border-emerald-300 hover:border-emerald-500 rounded-xl p-2.5 flex flex-col items-center justify-center cursor-pointer shadow-sm">
            <div class="text-3xl mb-1">${w.emoji}</div>
            <div class="flex items-center gap-1"><span class="text-sm font-black text-emerald-800">${escapeHtml(w.en)}</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 font-bold">${w.pos || ''}</span></div>
            <div class="text-emerald-600 text-base mt-0.5">${w.ipa}</div>
            <div class="text-xs font-extrabold text-gray-600 my-0.5">${escapeHtml(w.vi)}</div>
            <div class="text-[10px] font-bold text-gray-400 mb-1.5">"${escapeHtml(w.ex || '')}"</div>
            <span class="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-black px-2 py-0.5 rounded-lg">🔊 Listen</span>
        </div>`;

    document.getElementById('alphaipa-content').innerHTML = `
        <div class="w-full max-w-4xl flex flex-col items-center">
            <div class="mb-2 text-center">
                <h2 class="text-lg md:text-xl font-black text-yellow-600 mb-0.5">🔤 ENGLISH ALPHABET & PHONICS (A-Z)</h2>
                <p class="text-xs font-bold text-gray-500">Bấm vào chữ cái hoặc từ mẫu để nghe phát âm:</p>
                <button onclick="speakAlphabetLetter(${index})" class="pastel-btn mt-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border border-yellow-300 font-extrabold px-3.5 py-1 rounded-xl text-xs flex items-center justify-center gap-1 mx-auto shadow-sm cursor-pointer">
                    <i class="fa-solid fa-volume-high"></i><span>Listen to Letter ${item.letter}</span>
                </button>
            </div>
            <div class="bg-yellow-50/60 border-2 border-dashed border-yellow-300 rounded-2xl p-3 md:p-3.5 w-full mb-3 shadow-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 items-stretch">
                    <div onclick="speakAlphabetLetter(${index})" class="card-hover bg-white border-2 border-yellow-400 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer shadow-sm bg-gradient-to-b from-white to-yellow-50">
                        <div class="text-5xl md:text-6xl font-black text-yellow-600 mb-1">${item.name}</div>
                        <div class="text-xs font-extrabold text-gray-600 mb-2">Cách đọc: <b class="text-orange-600 text-lg">${item.ipaName}</b></div>
                        <span class="bg-yellow-100 text-yellow-700 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-yellow-200">👆 Tap to Listen</span>
                    </div>
                    ${wordCard(item.word1, 1)}${wordCard(item.word2, 2)}${wordCard(item.word3, 3)}
                </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-2xl p-2.5 w-full shadow-inner mb-2.5">
                <div class="flex flex-wrap items-center justify-center gap-1">${keyboardHtml}</div>
            </div>
            <div class="flex items-center justify-center space-x-3 mt-1">
                <button onclick="openAlphabetMenu(${index - 1})" class="pastel-btn bg-sky-50 hover:bg-sky-100 text-sky-600 border-2 border-sky-300 font-black text-xs md:text-sm px-4 py-2 rounded-xl shadow-sm flex items-center space-x-1 cursor-pointer ${index <= 0 ? 'opacity-40 pointer-events-none' : ''}"><i class="fa-solid fa-arrow-left"></i><span>Previous</span></button>
                <button onclick="openPhonicsMatcher()" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 font-black text-xs md:text-sm px-5 py-2 rounded-xl shadow-sm flex items-center gap-1.5 cursor-pointer"><span>🎯 Phonics Quiz</span></button>
                <button onclick="openAlphabetMenu(${index + 1})" class="pastel-btn bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs md:text-sm px-5 py-2 rounded-xl shadow-sm flex items-center space-x-1 cursor-pointer ${index >= ALPHABET_DATA.length - 1 ? 'opacity-40 pointer-events-none' : ''}"><span>Next</span><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>`;
    speakAlphabetLetter(index);
}
function speakAlphabetLetter(index) { const item = ALPHABET_DATA[index]; if (item) speakEnglish(item.letter); }
function speakAlphaWord(index, wordNum) { const item = ALPHABET_DATA[index]; const w = item['word' + wordNum]; if (w) speakEnglish(w.en); }

// ---------- 1.2 IPA 44 SOUNDS ----------
function openIPAMenu(index = 0) {
    stopSpeaking();
    inAlphaIpaFlow = true;
    if (index < 0) index = 0;
    if (index >= IPA_DATA.length) index = IPA_DATA.length - 1;
    currentIPAIndex = index;
    updateNavTabs("1. Alphabet & IPA", "🔤", "Bảng ngữ âm IPA (44 âm)");
    switchAppView('view-alphabet');

    const item = IPA_DATA[currentIPAIndex];
    const soundButtonsHtml = IPA_DATA.map((snd, idx) => {
        const isActive = idx === currentIPAIndex;
        let badgeColor = isActive ? 'bg-yellow-600 text-white border-yellow-700' : 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100';
        if (snd.type === 'vowel_di') badgeColor = isActive ? 'bg-orange-600 text-white border-orange-700' : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100';
        else if (snd.type && snd.type.startsWith('consonant')) badgeColor = isActive ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
        return `<button onclick="openIPAMenu(${idx})" class="pastel-btn flex flex-col items-center justify-center rounded-xl p-1 shadow-sm border ${badgeColor} min-w-[50px] min-h-[46px] cursor-pointer ${isActive ? 'scale-105 ring-2 ring-yellow-300 font-black' : ''}">
            <span class="text-base md:text-lg font-black">${snd.ipa}</span>
            <span class="text-[8px] font-bold opacity-80 line-clamp-1">${(snd.name || '').split(' ')[0]}</span>
        </button>`;
    }).join('');

    const examplesHtml = (item.words || []).map((w, wIdx) => `
        <div onclick="speakIPAExampleWord(${currentIPAIndex},${wIdx})" class="card-hover bg-white border-2 border-emerald-300 hover:border-emerald-500 rounded-xl p-2.5 flex flex-col items-center justify-center cursor-pointer shadow-sm text-center">
            <div class="text-3xl mb-1">${w.emoji}</div>
            <div class="flex items-center gap-1"><span class="text-sm md:text-base font-black text-emerald-800">${escapeHtml(w.word)}</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-700 font-bold">${w.pos || ''}</span></div>
            <div class="text-emerald-600 text-sm md:text-base font-bold my-0.5">${w.ipa}</div>
            <div class="text-xs font-extrabold text-gray-700">${escapeHtml(w.vi)}</div>
            <div class="text-[10px] font-bold text-gray-400 mt-1 italic">"${escapeHtml(w.ex || '')}"</div>
            <span class="mt-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-[9px] font-black px-2.5 py-0.5 rounded-lg">🔊 Listen Word</span>
        </div>`).join('');

    let typeTag = 'Nguyên âm đơn (Monophthong)', typeBg = 'bg-yellow-100 text-yellow-700 border-yellow-300';
    if (item.type === 'vowel_di') { typeTag = 'Nguyên âm đôi (Diphthong)'; typeBg = 'bg-orange-100 text-orange-700 border-orange-300'; }
    else if (item.type === 'consonant_unvoiced') { typeTag = 'Phụ âm vô thanh (Voiceless)'; typeBg = 'bg-blue-100 text-blue-700 border-blue-300'; }
    else if (item.type === 'consonant_voiced') { typeTag = 'Phụ âm hữu thanh (Voiced)'; typeBg = 'bg-emerald-100 text-emerald-700 border-emerald-300'; }

    document.getElementById('alphaipa-content').innerHTML = `
        <div class="w-full max-w-5xl flex flex-col items-center">
            <div class="mb-2 text-center w-full">
                <div class="flex items-center justify-between flex-wrap gap-1 mb-1">
                    <span class="text-xs font-black bg-yellow-100 text-yellow-700 px-3 py-1 rounded-xl shadow-sm">Âm ${currentIPAIndex + 1} / ${IPA_DATA.length} IPA</span>
                    <h2 class="text-base md:text-xl font-black text-yellow-600 flex items-center justify-center gap-1.5"><span>🗣️</span><span>BẢNG PHIÊN ÂM QUỐC TẾ IPA</span><span>🎙️</span></h2>
                    <button onclick="openPhonicsMatcher()" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 text-xs font-black px-3.5 py-1 rounded-xl shadow-sm flex items-center gap-1 cursor-pointer"><span>🎯 IPA Quiz</span></button>
                </div>
                <p class="text-xs font-bold text-gray-500">Bấm vào bất kỳ âm IPA nào để nghe phát âm chuẩn và xem hướng dẫn chi tiết:</p>
            </div>
            <div class="bg-gradient-to-r from-yellow-50/80 via-orange-50/80 to-orange-50/80 border-2 border-dashed border-yellow-300 rounded-2xl p-3 md:p-4 w-full mb-3 shadow-sm">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    <div class="md:col-span-5 bg-white/95 rounded-2xl p-3 border border-yellow-200 shadow-sm flex flex-col items-center justify-between text-center">
                        <div>
                            <span class="text-[10px] md:text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${typeBg} inline-block mb-1.5">${typeTag}</span>
                            <div onclick="speakIPASound(${currentIPAIndex})" class="cursor-pointer group">
                                <div class="text-5xl md:text-6xl font-black text-yellow-600 drop-shadow-sm group-hover:scale-105 transition transform">${item.ipa}</div>
                                <div class="text-xs md:text-sm font-black text-orange-700 mt-1">${escapeHtml(item.name)}</div>
                            </div>
                        </div>
                        <div class="my-2.5 bg-amber-50/80 border border-amber-200 rounded-xl p-2.5 text-left w-full shadow-inner">
                            <div class="text-[11px] font-black text-amber-800 uppercase tracking-wide flex items-center gap-1 mb-1"><i class="fa-solid fa-lightbulb text-amber-500"></i><span>Hướng dẫn phát âm chuẩn:</span></div>
                            <p class="text-xs font-bold text-gray-700 leading-relaxed">${escapeHtml(item.guide || '')}</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 w-full mt-auto">
                            <button onclick="speakIPASound(${currentIPAIndex})" class="pastel-btn flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-black text-xs py-2 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"><i class="fa-solid fa-volume-high"></i><span>Nghe âm ${item.ipa}</span></button>
                            <button onclick="speakIPAGuideVietnamese(${currentIPAIndex})" class="pastel-btn bg-orange-100 hover:bg-orange-200 text-orange-700 border border-orange-300 font-black text-xs py-2 px-2.5 rounded-xl shadow-sm flex items-center justify-center gap-1 cursor-pointer"><i class="fa-solid fa-language"></i><span>Đọc hướng dẫn</span></button>
                        </div>
                    </div>
                    <div class="md:col-span-7 flex flex-col justify-between">
                        <div class="text-left mb-1.5 flex items-center justify-between">
                            <span class="text-xs font-black text-emerald-800 uppercase tracking-wider flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i><span>3 VÍ DỤ TỪ VỰNG CHUẨN CỦA ÂM ${item.ipa}:</span></span>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 items-stretch">${examplesHtml}</div>
                        <div class="mt-2 text-center text-[11px] font-bold text-gray-400">👆 Chạm vào từng thẻ để nghe phát âm từ vựng và câu ví dụ sinh động!</div>
                    </div>
                </div>
            </div>
            <div class="bg-white border border-gray-200 rounded-2xl p-2.5 w-full shadow-inner mb-2.5">
                <div class="flex flex-wrap items-center justify-center gap-1">${soundButtonsHtml}</div>
            </div>
            <div class="flex items-center justify-center space-x-3">
                <button onclick="openIPAMenu(${currentIPAIndex - 1})" class="pastel-btn bg-sky-50 hover:bg-sky-100 text-sky-600 border-2 border-sky-300 font-black text-sm px-5 py-2 rounded-xl shadow-sm flex items-center space-x-1.5 cursor-pointer ${currentIPAIndex <= 0 ? 'opacity-40 pointer-events-none' : ''}"><i class="fa-solid fa-arrow-left"></i><span>Previous Sound</span></button>
                <button onclick="openIPAMenu(${currentIPAIndex + 1})" class="pastel-btn bg-amber-400 hover:bg-amber-500 text-amber-900 border-2 border-amber-500 font-black text-sm px-6 py-2 rounded-xl shadow-md flex items-center space-x-1.5 cursor-pointer ${currentIPAIndex >= IPA_DATA.length - 1 ? 'opacity-40 pointer-events-none' : ''}"><span>Next Sound</span><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>`;
    speakIPASound(currentIPAIndex);
}
function speakIPASound(index) { const item = IPA_DATA[index]; if (item) speakEnglish(item.soundWord || item.ipa); }
function speakIPAGuideVietnamese(index) { const item = IPA_DATA[index]; if (item) speakVietnamese(item.guide || ''); }
function speakIPAExampleWord(index, wordIdx) { const item = IPA_DATA[index]; const w = item.words && item.words[wordIdx]; if (w) speakEnglish(w.word); }

// ---------- 1.3 PHONICS MATCHER (dùng đúng ngân hàng câu hỏi thật, chuyên mục 1) ----------
function openPhonicsMatcher() {
    stopSpeaking();
    showLoadingOverlay("Đang tải Phonics Matcher...");
    fetchAllQuestionsFlat().then(flat => {
        hideLoadingOverlay();
        const questions = shuffleArray(flat.filter(q => Math.floor(Number(q.sub_topic)) === 1));
        if (!questions.length) return alert('Đang cập nhật thêm câu hỏi cho Phonics Matcher, bé quay lại sau nhé!');
        activeTopicId = 1;
        pendingTopicQuiz = null; activeExamContext = null; activeRoadmapContext = null;
        practiceCycleRawPool = [...questions];
        updateNavTabs("1. Alphabet & IPA", "🔤", "1.3 Phonics Matcher");
        startTopicQuiz(1, '1.3 Phonics Matcher', questions, '1.3 Phonics Matcher');
    }).catch(err => { hideLoadingOverlay(); alert('Lỗi tải Phonics Matcher: ' + err.message); });
}

// ==========================================
// ĐIỀU HƯỚNG VIEW & BREADCRUMB
// ==========================================
function updateNavTabs(level2Title, level2Icon, level3Title, level4Title) {
    const tab2 = document.getElementById('header-level2-tab');
    const tab3 = document.getElementById('header-level3-tab');
    const tab4 = document.getElementById('header-level4-tab');
    const homeBtn = document.getElementById('btn-header-home');

    if (level2Title) {
        document.getElementById('header-level2-title').textContent = level2Title;
        document.getElementById('header-level2-icon').textContent = level2Icon || '🔢';
        tab2.classList.remove('hidden');
        tab2.classList.add('flex');
        homeBtn.classList.add('opacity-80', 'hover:opacity-100');
    } else {
        tab2.classList.add('hidden');
        tab2.classList.remove('flex');
        homeBtn.classList.remove('opacity-80');
    }

    if (level3Title) {
        document.getElementById('header-level3-title').textContent = level3Title;
        tab3.classList.remove('hidden');
        tab3.classList.add('flex');
    } else {
        tab3.classList.add('hidden');
        tab3.classList.remove('flex');
    }

    if (level4Title && tab4) {
        document.getElementById('header-level4-title').textContent = level4Title;
        tab4.classList.remove('hidden');
        tab4.classList.add('flex');
    } else if (tab4) {
        tab4.classList.add('hidden');
        tab4.classList.remove('flex');
    }
}

function returnToTopicLecture() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    if (activeExamContext) {
        openExamHub();
    } else if (activeRoadmapContext) {
        openRoadmap();
    } else if (pendingTopicQuiz) {
        // Render lại đúng danh sách mục nhỏ CẤP 1 (không phải màn chọn Nhóm Kép cấp 3 vừa hiện trước đó)
        showLectureAndSubtopics(pendingTopicQuiz.topicNum, pendingTopicQuiz.topicName, { questions: pendingTopicQuiz.questions });
    } else if (inAlphaIpaFlow) {
        // Đang duyệt Alphabet A-Z hoặc Bảng IPA (không phải quiz) -> quay về đúng menu 3 lựa chọn
        openAlphabetIPA();
    } else if (inMiniGameFlow) {
        openMiniGameHub();
    }
}

function switchAppView(viewId) {
    stopSpeaking();
    ['view-dashboard-grid', 'view-alphabet', 'view-lecture', 'view-quiz', 'view-roadmap', 'view-minigame-hub', 'view-game-play', 'view-exam-hub', 'view-result'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
}

function goHome() {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    inAlphaIpaFlow = false;
    inMiniGameFlow = false;
    updateNavTabs(null, null, null);
    switchAppView('view-dashboard-grid');
}

// ==========================================
// HỆ THỐNG XÁC THỰC TÀI KHOẢN & LỜI CHÀO ĐÓN
// ==========================================
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('form-login').classList.toggle('hidden', !isLogin);
    document.getElementById('form-register').classList.toggle('hidden', isLogin);
    document.getElementById('tab-btn-login').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${isLogin ? 'bg-white text-yellow-600 shadow-sm' : 'text-gray-400'}`;
    document.getElementById('tab-btn-register').className = `py-2.5 rounded-xl font-extrabold text-sm pastel-btn ${!isLogin ? 'bg-white text-yellow-600 shadow-sm' : 'text-gray-400'}`;
    hideAuthError();
}

let maHSPreviewTimer = null;
let maHSPreviewRequestSeq = 0;

function updateMaHSPreview() {
    const lopEl = document.getElementById('reg-lop');
    const sttEl = document.getElementById('reg-stt');
    const previewEl = document.getElementById('mahs-preview');
    if (!lopEl || !sttEl || !previewEl) return;

    const lop = lopEl.value.trim().toUpperCase();
    const stt = sttEl.value.trim();
    if (!lop || !stt) {
        previewEl.textContent = '--';
        clearTimeout(maHSPreviewTimer);
        return;
    }

    // Hiện ngay mã cơ sở để giao diện phản hồi tức thì, sau đó hỏi server mã THẬT còn trống.
    const baseId = `${lop}-${stt.padStart(2, '0')}`;
    previewEl.textContent = baseId;
    clearTimeout(maHSPreviewTimer);
    const seq = ++maHSPreviewRequestSeq;

    maHSPreviewTimer = setTimeout(async () => {
        try {
            const result = await callAppsScript('previewStudentId', { lop, soThuTu: stt });
            if (seq !== maHSPreviewRequestSeq) return;
            if (result && result.ok && result.maHS) previewEl.textContent = result.maHS;
        } catch (e) {
            // Preview chỉ là tiện ích; nếu mạng chậm/lỗi thì vẫn giữ mã cơ sở.
        }
    }, 350);
}

function showAuthError(msg) {
    const el = document.getElementById('auth-error-msg');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
}
function hideAuthError() { 
    const el = document.getElementById('auth-error-msg');
    if (el) el.classList.add('hidden'); 
}

async function callAppsScript(action, payload) {
    const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, payload })
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawText = await res.text();
    try {
        return JSON.parse(rawText);
    } catch (e) {
        throw new Error('Google Apps Script trả về dữ liệu không hợp lệ (không phải JSON) — thường do link Apps Script chưa được Deploy đúng cách (cần đặt quyền truy cập là "Anyone"/"Bất kỳ ai") hoặc đã hết hạn uỷ quyền. Anh vui lòng kiểm tra lại bước Deploy > Manage deployments trên Apps Script nhé.');
    }
}

// ==========================================
// QUẢN TRỊ TÀI KHOẢN — Admin / Student
// ==========================================
let adminAccountsCache = [];
let adminAccountSort = { key: 'maHS', dir: 'asc' };

function isAdminUser() {
    return !!currentUser && !currentUser.isGuest && String(currentUser.role || '').toLowerCase() === 'admin';
}

function getAdminCredentials() {
    return {
        adminMaHS: currentUser?.maHS || localStorage.getItem('ta3_mahs') || '',
        adminPin: localStorage.getItem('ta3_mapin') || ''
    };
}

async function callAdminAction(action, extraPayload = {}) {
    if (!isAdminUser()) throw new Error('Tài khoản hiện tại không có quyền Admin.');
    return callAppsScript(action, { ...getAdminCredentials(), ...extraPayload });
}

async function refreshAdminPending() {
    // Giữ tên hàm để không ảnh hưởng luồng cũ; mô hình mới không còn Pending.
    if (!isAdminUser()) return;
    try {
        const result = await callAdminAction('listAccounts');
        if (result.ok) adminAccountsCache = Array.isArray(result.accounts) ? result.accounts : [];
    } catch (err) {
        console.warn('Không tải được danh sách tài khoản:', err);
    }
}

function formatAdminDate(value) {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString('vi-VN');
}

function adminDateValue(value) {
    if (!value) return -Infinity;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? -Infinity : d.getTime();
}

function setAdminAccountSort(key) {
    if (adminAccountSort.key === key) adminAccountSort.dir = adminAccountSort.dir === 'asc' ? 'desc' : 'asc';
    else adminAccountSort = { key, dir: 'asc' };
    refreshAdminSortIcons();
    renderAdminAccountsTable();
}

function adminSortIcon(key) {
    if (adminAccountSort.key !== key) return '<i class="fa-solid fa-sort text-fuchsia-200"></i>';
    return adminAccountSort.dir === 'asc'
        ? '<i class="fa-solid fa-sort-up text-fuchsia-500"></i>'
        : '<i class="fa-solid fa-sort-down text-fuchsia-500"></i>';
}

function refreshAdminSortIcons() {
    ['maHS','hoTen','lop','loaiTaiKhoan','hanDungThu','hanVIP'].forEach(key => {
        const el = document.getElementById(`admin-sort-${key}`);
        if (el) el.innerHTML = adminSortIcon(key);
    });
}

async function openAdminAccountsModal() {
    if (!isAdminUser()) return;

    let modal = document.getElementById('modal-admin-accounts');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-admin-accounts';
        modal.className = 'fixed inset-0 z-[130] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3';
        modal.innerHTML = `
            <div class="w-full max-w-5xl max-h-[92vh] bg-white rounded-[28px] border-2 border-fuchsia-100 shadow-2xl flex flex-col overflow-hidden">
                <div class="px-4 md:px-6 py-4 bg-gradient-to-r from-fuchsia-50 via-purple-50 to-pink-50 border-b border-fuchsia-100 flex items-center justify-between gap-3">
                    <div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <h3 class="text-base md:text-lg font-black text-fuchsia-700">👥 Quản lý tài khoản</h3>
                            <span id="admin-accounts-count" class="px-2.5 py-1 rounded-full bg-white text-fuchsia-600 border border-fuchsia-200 text-[11px] font-extrabold">0 tài khoản</span>
                        </div>
                        <p class="text-[11px] md:text-xs font-bold text-gray-500 mt-1">Chuyển hạng tài khoản Regular / Trial / VIP. Trial có hạn 1 tháng, VIP có hạn 1 năm.</p>
                    </div>
                    <button onclick="closeAdminAccountsModal()" class="w-9 h-9 rounded-xl bg-white border border-fuchsia-200 text-pink-500 hover:bg-pink-50 font-black">✕</button>
                </div>
                <div class="p-3 md:p-4 overflow-auto flex-1">
                    <div id="admin-accounts-loading" class="py-10 text-center text-sm font-bold text-gray-400">⏳ Đang tải tài khoản...</div>
                    <div id="admin-accounts-table-wrap" class="hidden overflow-x-auto border border-fuchsia-100 rounded-2xl">
                        <table class="w-full min-w-[820px] text-xs md:text-sm border-collapse">
                            <thead>
                                <tr class="bg-fuchsia-50 text-fuchsia-700">
                                    <th onclick="setAdminAccountSort('maHS')" class="p-2.5 border-b border-fuchsia-100 text-left cursor-pointer select-none">Mã HS <span id="admin-sort-maHS" class="ml-1">${adminSortIcon('maHS')}</span></th>
                                    <th onclick="setAdminAccountSort('hoTen')" class="p-2.5 border-b border-fuchsia-100 text-left cursor-pointer select-none">Họ tên <span id="admin-sort-hoTen" class="ml-1">${adminSortIcon('hoTen')}</span></th>
                                    <th onclick="setAdminAccountSort('lop')" class="p-2.5 border-b border-fuchsia-100 cursor-pointer select-none">Lớp <span id="admin-sort-lop" class="ml-1">${adminSortIcon('lop')}</span></th>
                                    <th onclick="setAdminAccountSort('loaiTaiKhoan')" class="p-2.5 border-b border-fuchsia-100 cursor-pointer select-none">Loại tài khoản <span id="admin-sort-loaiTaiKhoan" class="ml-1">${adminSortIcon('loaiTaiKhoan')}</span></th>
                                    <th onclick="setAdminAccountSort('hanDungThu')" class="p-2.5 border-b border-fuchsia-100 cursor-pointer select-none">Hạn dùng thử <span id="admin-sort-hanDungThu" class="ml-1">${adminSortIcon('hanDungThu')}</span></th>
                                    <th onclick="setAdminAccountSort('hanVIP')" class="p-2.5 border-b border-fuchsia-100 cursor-pointer select-none">Hạn VIP <span id="admin-sort-hanVIP" class="ml-1">${adminSortIcon('hanVIP')}</span></th>
                                </tr>
                            </thead>
                            <tbody id="admin-accounts-body"></tbody>
                        </table>
                    </div>
                </div>
                <div class="px-4 md:px-6 py-3 border-t border-fuchsia-100 bg-fuchsia-50/40 flex items-center justify-between gap-3">
                    <span class="text-[11px] font-bold text-gray-500">Regular: miễn phí • Trial: Premium 1 tháng • VIP: Premium 1 năm.</span>
                    <button onclick="loadAdminAccounts()" class="px-4 py-2 rounded-xl bg-white text-fuchsia-600 border border-fuchsia-200 text-xs font-extrabold"><i class="fa-solid fa-rotate mr-1"></i>Làm mới</button>
                </div>
            </div>`;
        document.body.appendChild(modal);
    } else {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    refreshAdminSortIcons();
    await loadAdminAccounts();
}

function closeAdminAccountsModal() {
    const modal = document.getElementById('modal-admin-accounts');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

async function loadAdminAccounts() {
    const loading = document.getElementById('admin-accounts-loading');
    const wrap = document.getElementById('admin-accounts-table-wrap');
    if (loading) { loading.textContent = '⏳ Đang tải tài khoản...'; loading.classList.remove('hidden'); }
    if (wrap) wrap.classList.add('hidden');

    try {
        const result = await callAdminAction('listAccounts');
        if (!result.ok) throw new Error(result.error || 'Không tải được danh sách tài khoản.');
        adminAccountsCache = Array.isArray(result.accounts) ? result.accounts : [];
        renderAdminAccountsTable();
        if (loading) loading.classList.add('hidden');
        if (wrap) wrap.classList.remove('hidden');
    } catch (err) {
        if (loading) loading.textContent = '❌ ' + err.message;
    }
}

function renderAdminAccountsTable() {
    const body = document.getElementById('admin-accounts-body');
    const countEl = document.getElementById('admin-accounts-count');
    if (!body) return;
    if (countEl) countEl.textContent = `${adminAccountsCache.length} tài khoản`;

    if (!adminAccountsCache.length) {
        body.innerHTML = '<tr><td colspan="6" class="p-6 text-center text-gray-400 font-bold">Chưa có tài khoản học sinh nào.</td></tr>';
        return;
    }

    const dir = adminAccountSort.dir === 'desc' ? -1 : 1;
    const key = adminAccountSort.key;
    const sorted = [...adminAccountsCache].sort((a, b) => {
        let av, bv;
        if (key === 'hanDungThu' || key === 'hanVIP') {
            av = adminDateValue(a[key]); bv = adminDateValue(b[key]);
        } else {
            av = String(a[key] ?? '').trim().toLocaleLowerCase('vi');
            bv = String(b[key] ?? '').trim().toLocaleLowerCase('vi');
            return av.localeCompare(bv, 'vi', { numeric: true, sensitivity: 'base' }) * dir;
        }
        return (av === bv ? 0 : av < bv ? -1 : 1) * dir;
    });

    body.innerHTML = sorted.map(acc => {
        const safeId = escapeHtml(acc.maHS || '');
        const type = String(acc.loaiTaiKhoan || 'regular').toLowerCase();
        const selectClass = type === 'vip'
            ? 'border-purple-300 bg-purple-50 text-purple-700'
            : type === 'trial'
                ? 'border-amber-300 bg-amber-50 text-amber-700'
                : 'border-sky-300 bg-sky-50 text-sky-700';
        return `<tr class="hover:bg-fuchsia-50/30 transition-colors">
            <td class="p-2.5 border-b border-slate-100 text-left font-black text-slate-700">${safeId}</td>
            <td class="p-2.5 border-b border-slate-100 text-left font-bold text-gray-700">${escapeHtml(acc.hoTen || '')}</td>
            <td class="p-2.5 border-b border-slate-100 text-center font-bold text-gray-600">${escapeHtml(acc.lop || '—')}</td>
            <td class="p-2.5 border-b border-slate-100 text-center">
                <select onchange="changeStudentAccountType('${safeId}', this.value)" class="px-3 py-1.5 rounded-xl border font-extrabold outline-none ${selectClass}">
                    <option value="regular" ${type === 'regular' ? 'selected' : ''}>Regular</option>
                    <option value="trial" ${type === 'trial' ? 'selected' : ''}>Trial</option>
                    <option value="vip" ${type === 'vip' ? 'selected' : ''}>VIP</option>
                </select>
            </td>
            <td class="p-2.5 border-b border-slate-100 text-center text-gray-500 font-semibold">${escapeHtml(formatAdminDate(acc.hanDungThu))}</td>
            <td class="p-2.5 border-b border-slate-100 text-center text-purple-600 font-semibold">${escapeHtml(formatAdminDate(acc.hanVIP))}</td>
        </tr>`;
    }).join('');
}

async function changeStudentAccountType(maHS, accountType) {
    if (!isAdminUser()) return;
    try {
        const result = await callAdminAction('updateAccountType', { targetMaHS: maHS, accountType });
        if (!result.ok) throw new Error(result.error || 'Không thể đổi loại tài khoản.');
        await loadAdminAccounts();
    } catch (err) {
        alert('Lỗi cập nhật loại tài khoản: ' + err.message);
        await loadAdminAccounts();
    }
}


async function doLogin() {
    hideAuthError();
    const maHSInput = document.getElementById('login-mahs');
    const maPinInput = document.getElementById('login-mapin');
    const maHS = (maHSInput?.value || '').trim().toUpperCase();
    const maPin = (maPinInput?.value || '').trim();

    if (!maHS || !maPin) {
        const msg = 'Bé nhập đủ mã ID và mã PIN nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const btn = document.getElementById('btn-do-login');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng nhập...';

    try {
        const result = await callAppsScript('login', { maHS, maPin });
        if (!result.ok) {
            const errMsg = result.error || 'Mã ID thẻ học sinh hoặc mã PIN không đúng!';
            showAuthError(errMsg);
            alert(errMsg);
            return;
        }
        currentUser = { ...result.student, isGuest: false };
        localStorage.setItem('ta3_mahs', maHS);
        localStorage.setItem('ta3_mapin', maPin);
        enterDashboard();
    } catch (err) {
        const connErr = 'Lỗi kết nối máy chủ: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-1"></i> Đăng nhập';
    }
}

async function doRegister() {
    hideAuthError();
    const hoTen = document.getElementById('reg-hoten').value.trim();
    const ngaySinhRaw = document.getElementById('reg-ngaysinh').value;
    const lop = document.getElementById('reg-lop').value.trim().toUpperCase();
    const soThuTu = document.getElementById('reg-stt').value.trim();
    const maPin = document.getElementById('reg-mapin').value.trim();

    if (!hoTen || !ngaySinhRaw || !lop || !soThuTu || !maPin) {
        const msg = 'Bé điền đủ tất cả các ô có dấu * nhé!';
        showAuthError(msg);
        alert(msg);
        return;
    }
    if (!/^\d{6}$/.test(maPin)) {
        const msg = 'Mã PIN phải gồm đúng 6 chữ số!';
        showAuthError(msg);
        alert(msg);
        return;
    }

    const [y, m, d] = ngaySinhRaw.split('-');
    const ngaySinh = `${d}-${m}-${y.slice(2)}`;
    const btn = document.getElementById('btn-do-register');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang đăng ký...';

    try {
        const result = await callAppsScript('register', { hoTen, ngaySinh, lop, soThuTu, maPin });
        if (!result.ok) {
            showAuthError(result.error);
            alert(result.error);
            return;
        }
        alert(`Đã gửi đăng ký thành công, vui lòng chờ Admin duyệt! Mã ID của bé là: ${result.student.maHS}`);
        document.getElementById('login-mahs').value = result.student.maHS;
        switchAuthTab('login');
    } catch (err) {
        const connErr = 'Lỗi kết nối: ' + err.message;
        showAuthError(connErr);
        alert(connErr);
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus mr-1"></i> Đăng ký ngay';
    }
}

async function tryAutoLogin() {
    let maHS = localStorage.getItem('ta3_mahs');
    let maPin = localStorage.getItem('ta3_mapin');

    // Tương thích phiên cũ từng dùng key tv1_*: tự chuyển sang key riêng TA3 một lần.
    if (!maHS || !maPin) {
        const oldMaHS = localStorage.getItem('tv1_mahs');
        const oldMaPin = localStorage.getItem('tv1_mapin');
        if (oldMaHS && oldMaPin) {
            maHS = oldMaHS; maPin = oldMaPin;
            localStorage.setItem('ta3_mahs', oldMaHS);
            localStorage.setItem('ta3_mapin', oldMaPin);
            localStorage.removeItem('tv1_mahs');
            localStorage.removeItem('tv1_mapin');
        }
    }

    if (!maHS || !maPin) {
        currentUser = makeGuestUser();
        enterDashboard(true);
        return;
    }

    showLoadingOverlay('Đang nhận diện tài khoản của bé...');
    try {
        const res = await callAppsScript('login', { maHS: maHS.toUpperCase(), maPin });
        if (res.ok) {
            currentUser = { ...res.student, isGuest: false };
            enterDashboard(true);
        } else {
            localStorage.removeItem('ta3_mahs');
            localStorage.removeItem('ta3_mapin');
            currentUser = makeGuestUser();
            enterDashboard(true);
        }
    } catch (e) {
        currentUser = makeGuestUser();
        enterDashboard(true);
    } finally {
        hideLoadingOverlay();
    }
}

function logout() {
    stopSpeaking();
    currentUser = makeGuestUser();
    localStorage.removeItem('ta3_mahs');
    localStorage.removeItem('ta3_mapin');
    closeAuthModal();
    enterDashboard(true);
}

function handleGuestMode() {
    currentUser = makeGuestUser();
    closeAuthModal();
    enterDashboard();
}

function enterDashboard(isSilent = false) {
    if (!currentUser) currentUser = makeGuestUser();
    document.getElementById('screen-login')?.classList.add('hidden');
    document.getElementById('screen-dashboard')?.classList.remove('hidden');
    updateUserInfoBox();
    refreshPremiumUI();
    if (isAdminUser()) refreshAdminPending(!isSilent);
    resetStars();
    renderDashboardGrid();
    renderExamHubGrid();
    goHome();

    if (!isSilent) {
        setTimeout(() => {
            if (currentUser && !currentUser.isGuest) {
                const template = GREETINGS_STUDENT[Math.floor(Math.random() * GREETINGS_STUDENT.length)];
                speakVietnamese(template.replace('{name}', currentUser.hoTen), 0.96);
            } else {
                speakVietnamese(GREETINGS_GUEST[Math.floor(Math.random() * GREETINGS_GUEST.length)], 0.96);
            }
        }, 450);
    }
}

function updateUserInfoBox() {
    const box = document.getElementById('user-info-box');
    if (!box) return;
    if (currentUser && !currentUser.isGuest) {
        const type = String(currentUser.loaiTaiKhoan || 'regular').toLowerCase();
        const adminBtn = isAdminUser() ? `
            <button onclick="openAdminAccountsModal()" title="Quản lý tài khoản"
                class="h-8 px-2.5 flex items-center gap-1.5 bg-yellow-100 hover:bg-yellow-200 text-orange-700 rounded-xl border border-yellow-200 text-[10px] md:text-xs font-extrabold transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(249,115,22,0.35)]">
                <i class="fa-solid fa-users-gear"></i><span class="hidden lg:inline">Quản lý</span>
            </button>` : '';
        let subLabel = 'Regular';
        if (isAdminUser()) subLabel = 'Admin';
        else if (type === 'vip') subLabel = 'VIP';
        else if (type === 'trial') subLabel = `Trial${Number.isFinite(Number(currentUser.trialDaysLeft)) ? ' · còn ' + currentUser.trialDaysLeft + ' ngày' : ''}`;
        box.innerHTML = `
            <div class="flex items-center space-x-2">
                <div class="text-right">
                    <div class="text-yellow-600 font-extrabold text-xs md:text-sm leading-tight">${escapeHtml(currentUser.hoTen || currentUser.maHS)}</div>
                    <div class="text-gray-500 font-semibold text-[10px]">${escapeHtml(subLabel)} · ID ${escapeHtml(currentUser.maHS)}</div>
                </div>
                ${adminBtn}
                <button onclick="logout()" title="Đăng xuất" class="w-8 h-8 flex items-center justify-center bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-xl border border-orange-200 text-xs"><i class="fa-solid fa-right-from-bracket"></i></button>
            </div>`;
    } else {
        box.innerHTML = `
            <div class="flex items-center gap-1.5">
                <span class="text-amber-600 font-extrabold text-xs mr-0.5">Khách</span>
                <button onclick="openAuthModal('login')" class="h-9 px-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-extrabold rounded-xl text-xs shadow-sm pastel-btn">Sign in</button>
                <button onclick="openAuthModal('register')" class="h-9 px-3 bg-white text-fuchsia-600 border border-fuchsia-200 font-extrabold rounded-xl text-xs shadow-sm pastel-btn">Sign up</button>
            </div>`;
    }
}

function resetStars() {
    starGreenCount = 0; starRedCount = 0;
    const greenEl = document.getElementById('star-green-count');
    const redEl = document.getElementById('star-red-count');
    if (greenEl) greenEl.textContent = 0;
    if (redEl) redEl.textContent = 0;
}

function clickProgressOrExam(type) {
    const featureName = type === 'progress' ? 'Bản đồ tuần / Tiến trình tuần' : 'Đấu trường đề thi';
    if (!requirePremium(featureName)) return;
    if (type === 'progress') openRoadmap();
    else if (type === 'exam') openExamHub();
}

// ==========================================
// CHỦ ĐỀ 1: BẢNG CHỮ CÁI TƯƠNG TÁC (1.1 ĐẾN 1.4)
// ==========================================
function openTopic(topicNum, topicName, icon) {
    // Mục 11 (Practice & Play) là ôn tập tổng hợp gắn với tiến trình học/điểm số cá nhân —
    // bắt buộc đăng nhập, giống hệt cách chặn khách ở Lộ trình tuần & Đấu trường đề thi.
    if (topicNum === 11 && !requirePremium('Practice & Play')) return;
    stopSpeaking();
    inAlphaIpaFlow = false;
    activeTopicId = topicNum; activeExamContext = null; activeRoadmapContext = null;
    updateNavTabs(topicName, icon || '🐝', null);

    showLoadingOverlay(`Đang tải chủ đề "${topicName}"...`);
    fetchAllTopicsData().then(topics => {
        hideLoadingOverlay();
        const topicObj = topics.find(t => Number(t.topic_id) === Number(topicNum));
        if (!topicObj || !topicObj.questions || !topicObj.questions.length) throw new Error("Chủ đề không có câu hỏi nào");
        showLectureAndSubtopics(topicNum, topicName, topicObj);
    }).catch(err => {
        hideLoadingOverlay();
        // Tải lỗi thì đưa header về đúng trạng thái trang chủ (không để lại tab/gạch breadcrumb thừa)
        activeTopicId = null;
        updateNavTabs(null, null, null);
        alert(`Không thể tải chủ đề: ${err.message}`);
    });
}

function setSubtopicGridColumns(count) {
    const el = document.getElementById('lecture-subtopics-list');
    if (!el) return;
    if (count > 6) {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-4xl';
    } else {
        el.className = 'grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-2xl';
    }
}

function showLectureAndSubtopics(topicNum, topicName, topicObj) {
    document.getElementById('wrap-mix-all-subtopics').classList.remove('hidden');
    document.getElementById('btn-mix-all-subtopics').setAttribute('onclick', 'selectSubtopic(null)');
    pendingTopicQuiz = { topicNum, topicName, questions: topicObj.questions };
    
    document.getElementById('lecture-title').textContent = topicObj.lecture_title || topicName;
    document.getElementById('lecture-content').textContent = topicObj.lecture_content || topicObj.description || 'Chào mừng bé yêu! Hãy chọn một mục nhỏ bên dưới để bắt đầu luyện tập nhé.';
    document.getElementById('view-lecture').dataset.audioText = topicObj.lecture_audio_text || topicObj.lecture_content || topicObj.description || '';

    const groups = [], groupMap = {}, groupLabels = {};
    topicObj.questions.forEach(q => {
        const k = (q.sub_topic || 'Câu hỏi chung').trim();
        if (!groupMap[k]) { groupMap[k] = []; groups.push(k); groupLabels[k] = q.sub_topic_label || k; }
        groupMap[k].push(q);
    });
    pendingTopicQuiz.groups = groups; 
    pendingTopicQuiz.groupMap = groupMap;
    pendingTopicQuiz.groupLabels = groupLabels;

    let subHtml = '';
    groups.forEach((subName, idx) => {
        const style = SUBTOPIC_PALETTES[idx % SUBTOPIC_PALETTES.length];
        const displayTitle = beautifySubtopicName(groupLabels[subName]);
        const count = groupMap[subName].length;

        subHtml += `
            <button onclick="selectSubtopic(${idx})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${idx + 1}.</strong> ${escapeHtml(displayTitle)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    setSubtopicGridColumns(groups.length);
    document.getElementById('lecture-subtopics-list').innerHTML = subHtml;

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', null);
    switchAppView('view-lecture');
}

function speakLecture() {
    speakVietnamese(document.getElementById('view-lecture').dataset.audioText || '', 0.96);
}

let pendingPairedGroupContext = null;

function selectSubtopic(idx) {
    stopSpeaking();
    if (!pendingTopicQuiz) return;
    const { topicNum, topicName, questions, groups, groupMap, groupLabels } = pendingTopicQuiz;

    if (idx === null) {
        return launchSubtopicQuiz(topicNum, topicName, questions, null, null);
    }

    const subLabel = groups[idx];
    const pool = groupMap[subLabel];
    const displayLabel = beautifySubtopicName(groupLabels[subLabel]);

    // Dữ liệu 3 cấp (VD Vocabulary: Flashcards Library lại chia tiếp thành 6 Nhóm Kép) —
    // phải hiện thêm màn chọn Nhóm Kép trước khi vào bài, KHÔNG được gộp thẳng thành 1 pool lớn.
    const pairedGroups = [...new Set(pool.map(q => q.paired_group).filter(Boolean))];
    if (pairedGroups.length > 1) {
        return showPairedGroupMenu(topicNum, topicName, subLabel, displayLabel, pool, pairedGroups);
    }
    launchSubtopicQuiz(topicNum, topicName, pool, subLabel, displayLabel);
}

function showPairedGroupMenu(topicNum, topicName, subLabel, displayLabel, pool, pairedGroups) {
    pendingPairedGroupContext = { topicNum, topicName, subLabel, displayLabel, pool, pairedGroups };

    document.getElementById('lecture-title').textContent = displayLabel;
    const introText = `Chọn 1 trong ${pairedGroups.length} Nhóm Kép để bắt đầu luyện "${displayLabel}" nhé!`;
    document.getElementById('lecture-content').textContent = introText;
    document.getElementById('view-lecture').dataset.audioText = introText;

    let html = '';
    pairedGroups.forEach((pg, i) => {
        const style = SUBTOPIC_PALETTES[i % SUBTOPIC_PALETTES.length];
        const count = pool.filter(q => q.paired_group === pg).length;
        html += `
            <button onclick="selectPairedGroup(${i})" class="p-3 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn">
                <span class="text-sm md:text-base leading-snug"><strong class="${style.num} mr-1.5">${i + 1}.</strong> ${escapeHtml(pg)}</span>
                <span class="text-xs font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${count} câu</span>
            </button>`;
    });
    document.getElementById('lecture-subtopics-list').innerHTML = html;
    setSubtopicGridColumns(pairedGroups.length);

    // Nút "Học trộn tất cả" ở đây nghĩa là trộn tất cả 6 Nhóm Kép của RIÊNG mục nhỏ này
    document.getElementById('wrap-mix-all-subtopics').classList.remove('hidden');
    document.getElementById('btn-mix-all-subtopics').setAttribute('onclick', 'selectPairedGroup(null)');

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel);
    switchAppView('view-lecture');
}

function selectPairedGroup(i) {
    stopSpeaking();
    if (!pendingPairedGroupContext) return;
    const { topicNum, topicName, subLabel, displayLabel, pool, pairedGroups } = pendingPairedGroupContext;
    const chosenPool = (i === null) ? pool : pool.filter(q => q.paired_group === pairedGroups[i]);
    const finalLabel = (i === null) ? displayLabel : `${displayLabel} - ${pairedGroups[i]}`;
    launchSubtopicQuiz(topicNum, topicName, chosenPool, subLabel, finalLabel);
}

function launchSubtopicQuiz(topicNum, topicName, pool, subLabel, displayLabel) {
    const finalTitle = displayLabel ? `${topicName} - ${displayLabel}` : topicName;
    practiceCycleRawPool = [...pool];
    const firstCycleQuestions = shuffleArray([...pool]);

    updateNavTabs(topicName, TOPICS_CONFIG.find(t => t.id === topicNum)?.icon || '🔢', displayLabel || 'Tất cả các mục');
    startTopicQuiz(topicNum, finalTitle, firstCycleQuestions, subLabel);
}

// ==========================================
// TIẾN TRÌNH TUẦN: BẢN ĐỒ SVG
// ==========================================
function handleNextExamFromReport() {
    stopSpeaking();
    if (activeRoadmapContext) {
        activeRoadmapContext = null;
        openRoadmap();
    } else if (activeExamContext) {
        activeExamContext = null;
        openExamHub();
    } else {
        goHome();
    }
}

function openRoadmap() {
    stopSpeaking();
    inAlphaIpaFlow = false;
    updateNavTabs("Bản đồ tiến trình tuần", "🗺️", null);
    renderRoadmapSVG();
    switchAppView('view-roadmap');
}

function wrapCaptionLines(text, maxLen = 24, maxLines = 3) {
    const words = String(text || '').split(' ');
    const lines = [''];
    for (const w of words) {
        const cur = lines[lines.length - 1];
        const candidate = (cur + ' ' + w).trim();
        if (candidate.length <= maxLen) {
            lines[lines.length - 1] = candidate;
        } else if (lines.length < maxLines) {
            lines.push(w);
        } else {
            lines[lines.length - 1] = candidate;
        }
    }
    while (lines.length < maxLines) lines.push('');
    if (lines[maxLines - 1].length > maxLen) {
        lines[maxLines - 1] = lines[maxLines - 1].slice(0, maxLen - 1) + '…';
    }
    return lines.slice(0, maxLines);
}

function renderRoadmapSVG() {
    const container = document.getElementById('roadmap-svg-container');
    if (!container) return;
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;

    let nodesHtml = '';
    for (let w = 1; w <= TOTAL_ROADMAP_WEEKS; w++) {
        const item = roadmapConfig[w];
        const coord = getRoadmapCoord(w);
        const isDone = w < tuanHienTai;
        const isCurrent = w === tuanHienTai;
        const isLocked = w > tuanHienTai;

        let nodeColor = isDone ? "#10b981" : (isCurrent ? "#ec4899" : "#cbd5e1");
        let strokeColor = isDone ? "#34d399" : (isCurrent ? "#f43f5e" : "#94a3b8");
        let badgeHtml = '';

        if (isDone) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 32}" text-anchor="middle" font-size="12" fill="#f59e0b">⭐⭐⭐</text>`;
        } else if (isCurrent) {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 32}" text-anchor="middle" font-size="10" font-weight="900" fill="#ec4899">Đang học</text>`;
        } else {
            badgeHtml = `<text x="${coord.x}" y="${coord.y + 30}" text-anchor="middle" font-size="11" fill="#94a3b8">🔒 Khóa</text>`;
        }

        const cursorCls = isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:scale-105 transition-transform";
        const animCls = isCurrent ? "node-current" : "";

        nodesHtml += `
            <g class="${cursorCls} ${animCls}" onclick="selectRoadmapWeek(${w})" id="svg-node-week-${w}">
                <circle cx="${coord.x}" cy="${coord.y}" r="32" fill="#ffffff" stroke="${strokeColor}" stroke-width="3" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.08))"/>
                <circle cx="${coord.x}" cy="${coord.y}" r="26" fill="${nodeColor}" opacity="${isLocked ? '0.25' : '0.15'}"/>
                <text x="${coord.x}" y="${coord.y - 3}" text-anchor="middle" font-size="18">${item.icon || '🔢'}</text>
                <text x="${coord.x}" y="${coord.y + 13}" text-anchor="middle" font-size="10" font-weight="800" fill="${isLocked ? '#64748b' : '#1e293b'}">Tuần ${w}</text>
                ${badgeHtml}
            </g>
        `;
    }

    const pathD = buildRoadmapPathD(TOTAL_ROADMAP_WEEKS);
    const svgHtml = `
        <svg viewBox="0 0 650 400" preserveAspectRatio="xMidYMid meet" class="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
            <path d="${pathD}" fill="none" stroke="#fbcfe8" stroke-width="9" stroke-dasharray="11,11" stroke-linecap="round"/>
            <path d="${pathD}" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="11,11" stroke-linecap="round"/>
            ${nodesHtml}
        </svg>
    `;
    container.innerHTML = svgHtml;
}

async function selectRoadmapWeek(weekNum) {
    stopSpeaking();
    const config = roadmapConfig[weekNum];
    if (!config) return;
    
    const tuanHienTai = Number(currentUser?.tuanHienTai) || 1;
    if (weekNum > tuanHienTai) {
        return alert(`Tuần ${weekNum} đang bị khóa. Bé hãy hoàn thành Tuần ${tuanHienTai} đạt từ 80% trở lên để mở khóa nhé!`);
    }

    if (config.isExam) return openExamHub();

    activeRoadmapContext = { week: weekNum, topicId: config.subIds[0] || '1.1', chuDe: config.name, isReview15: !!(config.isGrandReview || config.isReview15) };
    pendingTopicQuiz = null; activeExamContext = null;
    const topicLabel = config.name.replace(/^Tuần\s*\d+:\s*/i, '');
    updateNavTabs("Tiến trình tuần", "📅", `Tuần ${weekNum}`, topicLabel);

    const isReviewMode = !!(config.isGrandReview || config.isReview15);
    showLoadingOverlay(isReviewMode ? `Đang chuẩn bị đề ôn tổng hợp 15 câu Tuần ${weekNum}...` : `Đang bốc 30 câu hỏi Tuần ${weekNum} (tỷ lệ 3:4:3)...`);
    try {
        await fetchWeeklyQuestionsFlat();
        hideLoadingOverlay();

        const weekQuestions = isReviewMode ? generateReview15(weekNum) : getQuestionsForWeek343(weekNum);
        if (!weekQuestions.length) return alert('Tuần này đang cập nhật dữ liệu (chờ bộ câu hỏi Lộ trình 24 tuần), bé quay lại sau nhé!');

        startTopicQuiz(weekNum, config.name, weekQuestions, null);
    } catch (err) {
        hideLoadingOverlay();
        alert(`Lỗi tải dữ liệu tuần: ${err.message}`);
    }
}

// ==========================================
// LOGIC CHẤM ĐIỂM & ĐIỀU KHIỂN CÂU HỎI
// ==========================================
function startTopicQuiz(topicNum, topicName, questions, subLabel) {
    stopSpeaking();
    clearInterval(quizTimerInterval);
    activeQuestionsList = questions; 
    currentQIndex = 0; 
    score = 0;
    userAnswers = {};
    wrongAttemptsByQ = {};
    quizWrongAnswers = []; 
    quizAnsweredLog = []; 
    quizStartTime = Date.now();

    const topBar = document.getElementById('quiz-top-bar');
    const cardHeader = document.getElementById('quiz-card-header');
    const navPractice = document.getElementById('nav-group-practice');
    const navExam = document.getElementById('nav-group-exam');

    const submitBtn = document.getElementById('btn-submit-quiz');
    if (submitBtn) {
        if (activeRoadmapContext) submitBtn.classList.add('hidden');
        else submitBtn.classList.remove('hidden');
    }

    const roadmapHistoryBtn = document.getElementById('btn-roadmap-history');
    if (roadmapHistoryBtn) {
        if (activeRoadmapContext) { roadmapHistoryBtn.classList.remove('hidden'); roadmapHistoryBtn.classList.add('flex'); }
        else { roadmapHistoryBtn.classList.add('hidden'); roadmapHistoryBtn.classList.remove('flex'); }
    }

    if (activeRoadmapContext || activeExamContext) {
        if (topBar) {
            if (activeExamContext) topBar.classList.remove('hidden');
            else topBar.classList.add('hidden');
        }
        const timerBox = document.getElementById('quiz-timer-container');
        if (activeExamContext) {
            if (timerBox) timerBox.classList.remove('hidden');
            startExamCountdown();
        } else {
            if (timerBox) timerBox.classList.add('hidden');
        }
        if (cardHeader) { cardHeader.classList.remove('hidden'); cardHeader.classList.add('flex'); }
        if (navPractice) navPractice.classList.add('hidden');
        if (navExam) { navExam.classList.remove('hidden'); navExam.classList.add('flex'); }
        initQuizPallet();
    } else {
        if (topBar) topBar.classList.add('hidden');
        if (cardHeader) { cardHeader.classList.add('hidden'); cardHeader.classList.remove('flex'); }
        if (navPractice) { navPractice.classList.remove('hidden'); navPractice.classList.add('flex'); }
        if (navExam) { navExam.classList.add('hidden'); navExam.classList.remove('flex'); }
    }

    switchAppView('view-quiz');
    loadQuestion();
}

function loadQuestion() {
    stopSpeaking();
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (isEvaluationMode) {
        document.getElementById('q-badge-index').textContent = `CÂU ${currentQIndex + 1} / ${activeQuestionsList.length}`;
        const isRoadmap = !!activeRoadmapContext;
        const skillName = isRoadmap
            ? (beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp')
            : (SKILL_TAXONOMY[q.skill_tag]?.name || beautifySubtopicName(q.sub_topic_label) || 'Kiến thức tổng hợp');
        document.getElementById('q-skill-text').textContent = skillName;

        const scoreBadge = document.getElementById('q-badge-score');
        if (scoreBadge) {
            if (isRoadmap) {
                scoreBadge.classList.add('hidden');
            } else {
                scoreBadge.classList.remove('hidden');
                scoreBadge.textContent = `(${q.diem ?? 0.5} điểm)`;
            }
        }
    } else {
        const stepEl = document.getElementById('practice-step-text');
        if (stepEl) stepEl.textContent = `Câu ${currentQIndex + 1} / ${activeQuestionsList.length}`;
    }

    let mediaHtml = '';
    if ((q.image_url || q.emoji) && !activeExamContext) {
        // SỬA LỖI: dữ liệu lớp 3 để EMOJI TRỰC TIẾP vào field "image" (VD "🧸"), không phải
        // đường dẫn file ảnh thật — nếu cứ nhét thẳng vào <img src="🧸"> thì trình duyệt sẽ coi
        // đó là 1 URL không hợp lệ, tải lỗi và không hiện gì cả. Cần tự nhận diện: chỉ khi
        // image_url thực sự là URL (http.../ assets/... hoặc có đuôi file ảnh) mới dùng thẻ <img>,
        // còn lại (đa số trường hợp — 1 emoji hoặc chữ ngắn) hiện thẳng làm text lớn.
        const isRealImageUrl = /^(https?:)?\/\//i.test(q.image_url || '') || /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(q.image_url || '');
        mediaHtml = `<div class="w-14 h-14 md:w-16 md:h-16 mb-1 flex items-center justify-center">
            ${isRealImageUrl
                ? `<img src="${q.image_url}" alt="minh họa" class="w-full h-full object-contain floating" onerror="this.style.display='none'; const f=this.nextElementSibling; if(f) f.classList.remove('hidden');">
                   <div class="text-4xl md:text-5xl floating hidden">${q.emoji || '📘'}</div>`
                : `<div class="text-4xl md:text-5xl floating">${q.image_url || q.emoji || '📘'}</div>`}
        </div>`;
    }

    const pText = q.reading_passage;
    const pTitle = q.reading_title;
    const passageLines = pText ? pText.split('\n').map(l => l.trim()).filter(Boolean) : [];
    const avgLineLen = passageLines.length ? passageLines.reduce((a, l) => a + l.length, 0) / passageLines.length : 0;
    const isPoemLike = passageLines.length >= 4 && avgLineLen > 0 && avgLineLen < 35;
    const useTwoColumns = isPoemLike;
    const passageHtml = pText ? `
        <div class="w-full max-w-3xl bg-yellow-50/70 border-2 border-yellow-200 rounded-2xl p-3 mb-1.5 text-left shadow-xs">
            ${pTitle ? `<p class="font-black text-yellow-700 text-sm md:text-base mb-1">${escapeHtml(pTitle)}</p>` : ''}
            <p class="text-gray-800 text-sm md:text-base font-bold whitespace-pre-line leading-relaxed ${useTwoColumns ? 'md:columns-2 md:gap-6' : ''}">${escapeHtml(pText)}</p>
        </div>` : '';

    const practiceSpeakerBtnHtml = !isEvaluationMode ? `
        <div class="flex items-center justify-center mt-1 mb-1">
            <button onclick="speakCurrentQuestion()" class="px-4 py-1.5 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-2xl text-xs md:text-sm font-extrabold flex items-center space-x-1.5 pastel-btn shadow-xs">
                <i class="fa-solid fa-volume-high text-yellow-600"></i>
                <span>Nghe câu hỏi</span>
            </button>
        </div>
    ` : '';

    const isLetterListen = q.render_style === 'letter_listen';

    let html;
    if (isLetterListen) {
        html = `
            ${mediaHtml}
            <div class="w-full max-w-3xl border-2 border-dashed border-yellow-200 bg-yellow-50/40 rounded-3xl px-4 py-4 md:py-5 flex flex-col items-center text-center mb-3">
                <div class="text-3xl md:text-4xl mb-1.5 space-x-2">
                    <span>🎧</span><span>👂</span><span>🔢</span>
                </div>
                <p class="text-sm md:text-base lg:text-lg font-black text-orange-600 leading-snug">${escapeHtml(q.question_text)}</p>
                ${practiceSpeakerBtnHtml}
            </div>

            <div class="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mt-1">
        `;
        q.options.forEach(opt => {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn min-w-[140px] px-6 py-3 bg-white hover:bg-emerald-50 border-2 border-emerald-400 rounded-full font-black text-emerald-700 text-base md:text-lg transition-all pastel-btn shadow-xs">
                    ${escapeHtml(opt)}
                </button>`;
        });
        html += `</div>`;
        if (q.mascot_text) {
            html += `
                <div class="mt-4 inline-flex items-center space-x-1.5 bg-yellow-50 border border-yellow-200 rounded-full px-3.5 py-1.5">
                    <span>🐝</span>
                    <span class="text-xs md:text-sm font-extrabold text-orange-600">${escapeHtml(q.mascot_text)}</span>
                </div>`;
        }
    } else {
        html = `
        ${mediaHtml}
        ${passageHtml}
        <div class="flex flex-col items-center justify-center max-w-3xl text-center px-2 mb-0.5">
            <h3 class="text-sm md:text-base lg:text-lg font-black text-slate-900 leading-snug">
                ${escapeHtml(q.question_text)}
            </h3>
            ${practiceSpeakerBtnHtml}
        </div>
        
        <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
    `;

    q.options.forEach((opt, idx) => {
        const formattedOpt = capitalizeFirstLetter(opt);
        const letter = String.fromCharCode(65 + idx);
        // Chỉ hiện phiên âm khi JSON thật sự có field "options_ipa" (mảng cùng thứ tự với "options") —
        // không tự bịa phiên âm để tránh sai, chờ NotebookLM bổ sung dữ liệu cho bản lớp 3.
        const ipaText = q.options_ipa && q.options_ipa[idx] ? q.options_ipa[idx] : '';
        const ipaHtml = ipaText ? `<span class="text-sm md:text-base text-gray-500 font-semibold ml-1.5 whitespace-nowrap">/${escapeHtml(ipaText.replace(/^\/|\/$/g, ''))}/</span>` : '';

        if (activeExamContext) {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs">
                    <div class="flex items-center space-x-2.5">
                        <span class="opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0">${letter}</span>
                        <span class="opt-text">${escapeHtml(formattedOpt)}${ipaHtml}</span>
                    </div>
                    <span class="option-icon text-yellow-500 text-base md:text-lg"></span>
                </button>`;
        } else {
            html += `
                <button data-opt="${escapeHtml(opt)}" onclick="checkAnswer('${opt.replace(/'/g, "\\'")}')" class="option-btn w-full p-3 md:p-3.5 bg-yellow-50/40 hover:bg-yellow-100/70 border-2 border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs pastel-btn">
                    <span><strong class="text-yellow-600 mr-2 text-base md:text-lg">${letter}.</strong> ${escapeHtml(formattedOpt)}${ipaHtml}<span class="opt-meaning-vi text-xs md:text-sm text-orange-600 font-bold ml-1.5"></span></span>
                    <span class="option-icon text-yellow-500 text-base md:text-lg"></span>
                </button>`;
        }
    });
        html += `</div>`;
    }

    document.getElementById('question-box').innerHTML = html;

    restoreQuestionState(q);
    updateNavButtons();
    updateQuizPalletUI();

    if (autoSpeechEnabled) speakCurrentQuestion();
}

function restoreQuestionState(q) {
    const isExam = !!activeExamContext;
    const completedAnswer = userAnswers[currentQIndex];
    const wrongAttempts = wrongAttemptsByQ[currentQIndex] || [];

    if (isExam) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (completedAnswer !== undefined && bOpt === completedAnswer) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-yellow-50/30 border-2 border-yellow-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-yellow-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });
        return;
    }

    if (!!activeRoadmapContext) {
        if (completedAnswer === undefined) return;
        const isCorrect = completedAnswer === q.answer;
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (!isCorrect && bOpt === completedAnswer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
        });
        return;
    }

    if (wrongAttempts.length > 0) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (wrongAttempts.includes(bOpt)) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });
    }

    if (completedAnswer !== undefined) {
        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === completedAnswer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
                b.disabled = true;
            }
        });
    }
}

function updateNavButtons() {
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;
    const btnPrev = isEvaluationMode ? document.getElementById('btn-prev-q-exam') : document.getElementById('btn-prev-q-prac');
    const nextText = isEvaluationMode ? document.getElementById('btn-next-text-exam') : document.getElementById('btn-next-text-prac');
    const nextIcon = isEvaluationMode ? document.getElementById('btn-next-icon-exam') : document.getElementById('btn-next-icon-prac');

    if (!btnPrev) return;

    if (currentQIndex === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
    }

    if (currentQIndex === activeQuestionsList.length - 1) {
        if (isEvaluationMode) {
            nextText.textContent = "Hoàn thành";
            nextIcon.className = "fa-solid fa-trophy ml-1.5";
        } else {
            nextText.textContent = "Vòng tiếp theo";
            nextIcon.className = "fa-solid fa-rotate-right ml-1.5";
        }
    } else {
        nextText.textContent = "Câu tiếp theo";
        nextIcon.className = "fa-solid fa-chevron-right ml-1.5";
    }
}

function checkAnswer(selectedOpt) {
    const q = activeQuestionsList[currentQIndex];
    const isExam = !!activeExamContext;
    const isRoadmap = !!activeRoadmapContext;

    // RIÊNG ĐỀ THI: YÊN TĨNH TUYỆT ĐỐI, SÁNG VIỀN HỒNG, KHÔNG PHÁT ÂM THANH
    if (isExam) {
        userAnswers[currentQIndex] = selectedOpt;

        document.querySelectorAll('.option-btn').forEach(b => {
            const bOpt = b.getAttribute('data-opt');
            const badge = b.querySelector('.opt-badge');
            const iconSpan = b.querySelector('.option-icon');

            if (bOpt === selectedOpt) {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-yellow-50/30 border-2 border-yellow-500 rounded-2xl font-extrabold text-gray-900 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs";
                if (iconSpan) iconSpan.innerHTML = '<i class="fa-regular fa-circle-check text-yellow-600 text-lg"></i>';
            } else {
                b.className = "option-btn w-full p-2.5 md:p-3 bg-white hover:bg-yellow-50/50 border border-yellow-200 rounded-2xl font-extrabold text-gray-800 text-left transition-all flex items-center justify-between text-sm md:text-base shadow-xs";
                if (badge) badge.className = "opt-badge w-7 h-7 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center font-black text-sm shrink-0";
                if (iconSpan) iconSpan.innerHTML = '';
            }
        });

        updateQuizPalletUI();
        return;
    }

    // RIÊNG TIẾN TRÌNH TUẦN: CHỈ ĐƯỢC CHỌN 1 LẦN DUY NHẤT ĐỂ GHI NHẬN ĐÚNG/SAI CHÍNH XÁC
    if (isRoadmap) {
        if (userAnswers[currentQIndex] !== undefined) return;

        const isCorrect = selectedOpt === q.answer;
        userAnswers[currentQIndex] = selectedOpt;

        if (isCorrect) {
            score += (q.diem ?? 0.5);
            starGreenCount++;
            document.getElementById('star-green-count').textContent = starGreenCount;
        } else {
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = false; // Không khoá nút nữa — để bé bấm nghe lại BẤT KỲ đáp án nào (học đủ cả 4 từ, không chỉ từ đúng)
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            } else if (bOpt === selectedOpt) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
            }
            b.onclick = () => {
                speakEnglish(bOpt); // Từ giờ bấm nút = nghe lại từ đó, không phải chọn đáp án nữa
                const meanings = wordMeaningMap[bOpt.toLowerCase()];
                const meaningSpan = b.querySelector('.opt-meaning-vi');
                if (meanings && meanings.length && meaningSpan) meaningSpan.textContent = ` (${meanings.join(' / ')})`;
            };
            b.title = 'Bấm để nghe lại từ này';
        });

        if (isCorrect) {
            playAudio('correct');
            confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
            setTimeout(() => speakEnglish(`${q.answer}`), 180);
        } else {
            playAudio('wrong');
        }

        updateQuizPalletUI();
        return;
    }

    // CHẾ ĐỘ LUYỆN TẬP TỰ DO
    const isCorrect = selectedOpt === q.answer;
    if (userAnswers[currentQIndex] !== undefined) return;

    if (isCorrect) {
        userAnswers[currentQIndex] = selectedOpt;
        score += (q.diem ?? 0.5);
        starGreenCount++;
        document.getElementById('star-green-count').textContent = starGreenCount;

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = false; // Không khoá nút nữa — để bé bấm nghe lại BẤT KỲ đáp án nào (học đủ cả 4 từ, không chỉ từ đúng)
            const bOpt = b.getAttribute('data-opt');
            if (bOpt === q.answer) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-green-100', 'border-green-400', 'text-green-800');
            }
            b.onclick = () => {
                speakEnglish(bOpt); // Từ giờ bấm nút = nghe lại từ đó, không phải chọn đáp án nữa
                const meanings = wordMeaningMap[bOpt.toLowerCase()];
                const meaningSpan = b.querySelector('.opt-meaning-vi');
                if (meanings && meanings.length && meaningSpan) meaningSpan.textContent = ` (${meanings.join(' / ')})`;
            };
            b.title = 'Bấm để nghe lại từ này';
        });

        playAudio('correct');
        confetti({ particleCount: 30, spread: 55, origin: { y: 0.7 } });
        setTimeout(() => speakEnglish(`${q.answer}`), 180);
    } else {
        if (!wrongAttemptsByQ[currentQIndex]) wrongAttemptsByQ[currentQIndex] = [];
        if (!wrongAttemptsByQ[currentQIndex].includes(selectedOpt)) {
            wrongAttemptsByQ[currentQIndex].push(selectedOpt);
            starRedCount++;
            document.getElementById('star-red-count').textContent = starRedCount;
        }

        document.querySelectorAll('.option-btn').forEach(b => {
            if (b.getAttribute('data-opt') === selectedOpt) {
                b.classList.remove('bg-yellow-50/40', 'border-yellow-200');
                b.classList.add('bg-red-200', 'border-red-500', 'text-red-900');
                b.disabled = true;
            }
        });

        playAudio('wrong');
    }

    updateQuizPalletUI();
}

function prevQuestion() {
    stopSpeaking();
    if (currentQIndex > 0) {
        currentQIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    stopSpeaking();
    const isEvaluationMode = !!activeExamContext || !!activeRoadmapContext;

    if (!isEvaluationMode && userAnswers[currentQIndex] === undefined) {
        alert('Bé hãy tìm đáp án đúng để hoàn thành câu này nhé!');
        return;
    }

    if (currentQIndex < activeQuestionsList.length - 1) {
        currentQIndex++;
        loadQuestion();
    } else {
        if (isEvaluationMode) {
            showResultScreen();
        } else {
            confetti({ particleCount: 75, spread: 75, origin: { y: 0.6 } });
            playAudio('win');
            alert(`🎉 Chúc mừng bé đã hoàn thành trọn vẹn 1 vòng luyện tập (${activeQuestionsList.length} câu)!\nBây giờ cô Ong Vàng sẽ xáo trộn ngẫu nhiên để con bước vào vòng luyện tập tiếp theo nhé!`);

            const basePool = practiceCycleRawPool.length ? practiceCycleRawPool : activeQuestionsList;
            activeQuestionsList = shuffleArray([...basePool]);
            currentQIndex = 0;
            userAnswers = {};
            wrongAttemptsByQ = {};
            loadQuestion();
        }
    }
}

function triggerSubmitQuizPrompt() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = activeQuestionsList.length;
    if (confirm(`Bé đã làm ${answeredCount}/${total} câu. Bé có chắc chắn muốn nộp bài thi ngay không?`)) {
        showResultScreen();
    }
}

function showResultScreen() {
    stopSpeaking();
    clearInterval(quizTimerInterval);

    let correctCount = 0;
    score = 0;
    quizAnsweredLog = [];
    quizWrongAnswers = [];

    activeQuestionsList.forEach((q, idx) => {
        const studentAns = userAnswers[idx];
        const isCorrect = studentAns === q.answer;
        if (isCorrect) {
            correctCount++;
            score += (q.diem ?? 0.5);
        } else {
            quizWrongAnswers.push({
                question_id: q.question_id,
                question_number: idx + 1,
                question_text: q.question_text,
                sub_topic: q.sub_topic || 'Chủ đề tổng hợp',
                skill_tag: q.skill_tag || 'C1',
                dap_an_chon: studentAns || 'Chưa trả lời',
                dap_an_dung: q.answer,
                explanation: q.explanation || 'Không có giải thích chi tiết.'
            });
        }
        quizAnsweredLog.push({
            question_id: q.question_id,
            question_text: q.question_text,
            skill_tag: q.skill_tag || 'C1',
            source_topic_id: q.source_topic_id,
            diem: q.diem ?? 0.5,
            isCorrect,
            dap_an_chon: studentAns || '',
            dap_an_dung: q.answer
        });
    });

    switchAppView('view-result');
    const totalQ = activeQuestionsList.length;
    const percent = Math.round((correctCount / totalQ) * 100);

    // Tiến trình tuần thường: điểm tính đều tay 10/tổng số câu (không trọng số).
    // Riêng đề ôn 15 câu (Tuần 12/17): mỗi câu có trọng số điểm thật khác nhau, phải dùng đúng "score" thực tế.
    const displayScore = (activeRoadmapContext && !activeRoadmapContext.isReview15)
        ? Math.round((correctCount * 10 / totalQ) * 10) / 10
        : score;

    const examBadgeText = activeExamContext ? activeExamContext.examTitle : (activeRoadmapContext ? activeRoadmapContext.chuDe : 'Bài luyện tập chủ đề');
    document.getElementById('report-exam-badge').textContent = examBadgeText;
    document.getElementById('report-student-display').textContent = `Học sinh: ${currentUser?.hoTen || 'Khách'}`;
    const durationStr = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '35 phút';
    document.getElementById('report-meta-display').textContent = `Lớp: ${currentUser?.lop || '1A'} | Mã số: ${currentUser?.maHS || 'KHACH'} | Thời gian: ${durationStr}`;
    document.getElementById('report-total-score-val').textContent = displayScore.toFixed(1);
    document.getElementById('report-correct-ratio-val').textContent = `${correctCount}/${totalQ}`;

    renderReportTopicsBreakdown();

    const nextActionLabel = document.getElementById('report-next-action-label');
    if (nextActionLabel) {
        nextActionLabel.textContent = activeRoadmapContext ? '🔙 Quay lại tiến trình tuần' : '🚀 Làm đề thi tiếp theo';
    }

    const historyBtn = document.getElementById('report-history-btn');
    if (historyBtn) {
        const targetSheet = activeRoadmapContext
            ? 'LichSuTienTrinhTuan'
            : (examFileMap[activeExamContext?.categoryKey]?.sheet || 'LichSuBaiThiHK1');
        historyBtn.setAttribute('onclick', `openHistoryModal('${targetSheet}')`);
    }

    if (percent >= 80) {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 } });
        playAudio('win');
    }

    if (currentUser && !currentUser.isGuest) {
        if (activeExamContext) saveExamResultToSheet();
        else if (activeRoadmapContext) saveWeeklyProgressToSheet(percent, starCountFromPercent(percent), displayScore);
    }
}

function starCountFromPercent(percent) {
    if (percent === 100) return 3;
    if (percent >= 85) return 2;
    if (percent >= 80) return 1;
    return 0;
}

function renderReportTopicsBreakdown() {
    const container = document.getElementById('report-topics-list');
    if (!container) return;

    const isRoadmap = !!activeRoadmapContext;
    const skillKeys = SKILL_KEYS;
    const skillStats = {};
    skillKeys.forEach(k => {
        skillStats[k] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
    });

    activeQuestionsList.forEach((q, idx) => {
        let tag = String(q.skill_tag || 'ENG_VOC').toUpperCase();
        if (!skillKeys.includes(tag)) tag = 'ENG_VOC';

        if (!skillStats[tag]) skillStats[tag] = { total: 0, correct: 0, maxScore: 0, earnedScore: 0 };
        skillStats[tag].total++;
        skillStats[tag].maxScore += (q.diem ?? 0.5);
        if (userAnswers[idx] === q.answer) {
            skillStats[tag].correct++;
            skillStats[tag].earnedScore += (q.diem ?? 0.5);
        }
    });

    let html = '';
    skillKeys.forEach(k => {
        const data = skillStats[k];
        const pct = isRoadmap
            ? (data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0)
            : (data.maxScore > 0 ? Math.round((data.earnedScore / data.maxScore) * 100) : 0);
        const isPassed = pct >= 50;
        const badgeClass = isPassed ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-orange-50 text-orange-700 border border-orange-200';
        const badgeText = isPassed ? 'Đạt yêu cầu' : 'Cần luyện tập thêm';
        const barColor = isPassed ? 'bg-gradient-to-r from-amber-400 to-orange-400' : 'bg-gradient-to-r from-yellow-400 to-orange-400';
        const scoreLine = isRoadmap
            ? `<span>Số câu đúng: <strong class="text-yellow-600">${data.correct}/${data.total} câu</strong></span>`
            : `<span>Điểm đạt: <strong class="text-yellow-600">${data.earnedScore.toFixed(1)} / ${data.maxScore.toFixed(1)}đ</strong></span>`;

        html += `
            <div class="bg-yellow-50/40 border border-yellow-100 rounded-2xl p-3 flex flex-col justify-between space-y-2">
                <div class="flex items-center justify-between">
                    <span class="font-black text-slate-800 text-xs sm:text-sm">${SKILL_TAXONOMY[k].name}</span>
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${badgeClass}">${badgeText}</span>
                </div>
                <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                    ${scoreLine}
                    <span class="font-math font-black">${pct}%</span>
                </div>
                <div class="w-full bg-yellow-100 rounded-full h-2 overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openReviewWrongModal() {
    const modal = document.getElementById('modal-review-wrong');
    const content = document.getElementById('review-wrong-content');
    if (!modal || !content) return;

    if (!quizWrongAnswers.length) {
        content.innerHTML = `<div class="text-center py-8 text-emerald-600 font-extrabold text-base"><i class="fa-solid fa-circle-check text-3xl mb-2 block"></i>Tuyệt vời! Bé không làm sai câu nào trong bài thi này!</div>`;
    } else {
        let html = '';
        quizWrongAnswers.forEach((item, idx) => {
            html += `
                <div class="bg-orange-50/40 border border-orange-200 rounded-2xl p-3.5 space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 bg-orange-100 text-orange-800 font-black text-xs rounded-lg">CÂU ${item.question_number || (idx + 1)}</span>
                        <span class="text-xs font-bold text-slate-500">${escapeHtml(beautifySubtopicName(item.sub_topic_label) || 'Chủ đề tổng hợp')}</span>
                    </div>
                    <p class="font-extrabold text-slate-800 text-sm">${escapeHtml(item.question_text)}</p>
                    <div class="text-xs space-y-1 font-semibold">
                        <p class="text-orange-600"><i class="fa-solid fa-xmark mr-1"></i> Đáp án con chọn: <strong>${escapeHtml(item.dap_an_chon)}</strong></p>
                        <p class="text-emerald-700"><i class="fa-solid fa-check mr-1"></i> Đáp án đúng chuẩn: <strong>${escapeHtml(item.dap_an_dung)}</strong></p>
                    </div>
                    <div class="p-2.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 font-semibold flex items-start gap-2">
                        <i class="fa-solid fa-lightbulb text-amber-600 mt-0.5"></i>
                        <span><strong>Lời giải sư phạm:</strong> ${escapeHtml(item.explanation)}</span>
                    </div>
                </div>
            `;
        });
        content.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeReviewWrongModal() {
    document.getElementById('modal-review-wrong').classList.add('hidden');
}

// ==========================================
// LƯU KẾT QUẢ & ĐỒNG BỘ ĐIỂM C1-C6 LÊN GOOGLE SHEETS
// ==========================================
async function saveExamResultToSheet() {
    const { categoryKey, examIndex } = activeExamContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';

    const skillScores = {}; SKILL_KEYS.forEach(k => skillScores[k] = 0);
    quizAnsweredLog.forEach(item => {
        let tag = String(item.skill_tag || 'ENG_VOC').toUpperCase();
        if (!SKILL_KEYS.includes(tag)) tag = 'ENG_VOC';
        if (item.isCorrect) skillScores[tag] += (item.diem || 0.5);
    });

    const payload = {
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        examCategory: categoryKey,
        sheetName: examFileMap[categoryKey]?.sheet || 'LichSuBaiThiHK1',
        deSo: examIndex + 1,
        thoiGianLamBai,
        tongDiem: score.toFixed(1),
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        tongCauHoi: activeQuestionsList.length,
        wrongQuestions: quizWrongAnswers
    };
    // Ghi điểm từng nhóm năng lực vào ĐÚNG tên cột "diem" + mã kỹ năng (diemENG_PHO, diemENG_VOC...)
    // — không hard-code tên cột, tránh lệch dữ liệu nếu sau này đổi lại taxonomy.
    SKILL_KEYS.forEach(k => { payload['diem' + k] = skillScores[k].toFixed(1); });
    try { await callAppsScript('saveExamResult', payload); } catch (e) {}
}

async function saveWeeklyProgressToSheet(percent, starCount, scoreVal) {
    const { week, topicId, chuDe } = activeRoadmapContext;
    const thoiGianLamBai = quizStartTime ? formatDuration(Date.now() - quizStartTime) : '';
    const scoreThang10 = (scoreVal ?? ((score / activeQuestionsList.length) * 10)).toFixed(1);

    // Đếm CHÍNH XÁC số câu đúng / tổng số câu của từng nhóm năng lực, dựa theo skill_tag
    // (ENG_PHO-READ) mà mỗi câu tự mang sẵn — không ước lượng chia đều, không suy luận gián tiếp qua chủ đề Mục lớn.
    const skillCorrect = {}; const skillTotal = {};
    SKILL_KEYS.forEach(k => { skillCorrect[k] = 0; skillTotal[k] = 0; });
    quizAnsweredLog.forEach(item => {
        let tag = String(item.skill_tag || 'ENG_VOC').toUpperCase();
        if (!SKILL_KEYS.includes(tag)) tag = 'ENG_VOC';
        skillTotal[tag]++;
        if (item.isCorrect) skillCorrect[tag]++;
    });
    const payload = {
        student_id: currentUser.maHS,
        maHS: currentUser.maHS,
        hoTen: currentUser.hoTen,
        lop: currentUser.lop,
        sheetName: 'LichSuTienTrinhTuan',
        week_completed: week,
        tuan: week,
        chuDe,
        topicId,
        score: scoreThang10,
        stars_earned: starCount,
        tongCauHoi: activeQuestionsList.length,
        soCauDung: quizAnsweredLog.filter(x => x.isCorrect).length,
        percent,
        thoiGianLamBai,
        wrongQuestions: quizWrongAnswers
    };
    Object.keys(SKILL_TAXONOMY).forEach(k => {
        payload[SKILL_TAXONOMY[k].sheetCol] = skillCorrect[k];
        payload[SKILL_TAXONOMY[k].totalCol] = skillTotal[k];
    });

    try {
        await callAppsScript('saveWeeklyProgress', payload);
        if (percent >= 80) {
            const nextWeek = week + 1;
            if (nextWeek > (Number(currentUser.tuanHienTai) || 1) && nextWeek <= TOTAL_ROADMAP_WEEKS) {
                currentUser.tuanHienTai = nextWeek;
                setTimeout(() => alert(`🎉 Chúc mừng bé đạt ${percent}% điểm! Tuần ${nextWeek} đã được mở khóa trên bản đồ!`), 500);
            }
        }
    } catch (e) {}
}

// Ô "Ngày sinh" trong Sheet có thể về dưới 2 dạng: chuỗi gọn "DD-MM-YY" (do luồng đăng ký của
// app tự tạo) HOẶC chuỗi ISO datetime kiểu "2019-09-05T17:00:00.000Z" (khi anh tự nhập ngày vào
// Sheet, Google Sheets tự động hiểu ô đó là kiểu Date rồi Apps Script trả nguyên object Date ra
// JSON) — cả 2 trường hợp đều cần chuẩn hoá về đúng 1 dạng "DD/MM/YYYY" khi hiển thị.
function formatNgaySinh(raw) {
    if (!raw) return '--';
    const s = String(raw).trim();
    const m1 = /^(\d{1,2})[-/](\d{1,2})[-/](\d{2,4})/.exec(s);
    if (m1) {
        let [, d, mo, y] = m1;
        if (y.length === 2) y = (Number(y) < 50 ? '20' : '19') + y; // ước lượng thế kỷ hợp lý cho học sinh tiểu học
        return `${d.padStart(2, '0')}/${mo.padStart(2, '0')}/${y}`;
    }
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
        // Dùng getDate/getMonth/getFullYear (giờ địa phương trình duyệt) thay vì getUTC... vì
        // Sheets đã lưu mốc nửa đêm theo giờ Việt Nam (+7) rồi mới quy đổi sang UTC khi xuất JSON —
        // đọc theo giờ địa phương +7 sẽ khớp lại đúng ngày ban đầu người dùng đã nhập.
        return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
    }
    return s; // Không parse được -> hiện nguyên văn, không làm mất dữ liệu
}

async function openHistoryModal(sheetName = 'LichSuTienTrinhTuan') {
    if (!currentUser || currentUser.isGuest) {
        return alert('Bé vui lòng đăng nhập để xem lịch sử tiến trình nhé!');
    }

    const modal = document.getElementById('modal-history-progress');
    modal.classList.remove('hidden');

    document.getElementById('hist-info-name').textContent = currentUser.hoTen || '--';
    document.getElementById('hist-info-class').textContent = currentUser.lop || '--';
    document.getElementById('hist-info-code').textContent = currentUser.maHS || '--';
    document.getElementById('hist-info-dob').textContent = formatNgaySinh(currentUser.ngaySinh);
    document.getElementById('hist-report-date').textContent = new Date().toLocaleDateString('vi-VN');

    const titleMap = {
        LichSuTienTrinhTuan: "Báo cáo tiến trình 24 tuần học tập",
        LichSuBaiThiHK1: "Báo cáo kết quả đấu trường — Học kỳ 1",
        LichSuBaiThiHK2: "Báo cáo kết quả đấu trường — Học kỳ 2",
        LichSuBaiThiHSG: "Báo cáo kết quả đấu trường — Học sinh giỏi"
    };
    document.getElementById('hist-modal-title').textContent = titleMap[sheetName] || "Kết quả tiến trình học tập";

    showLoadingOverlay('Đang trích xuất dữ liệu và vẽ biểu đồ năng lực...');
    try {
        const res = await callAppsScript('getHistory', { maHS: currentUser.maHS, sheetName });
        hideLoadingOverlay();
        const rows = (res && res.history) ? res.history : [];
        renderHistoryReport(rows, sheetName);
    } catch (err) {
        hideLoadingOverlay();
        alert('Không thể tải lịch sử: ' + err.message);
    }
}

function closeHistoryModal() {
    document.getElementById('modal-history-progress').classList.add('hidden');
    if (histLineChartInstance) { histLineChartInstance.destroy(); histLineChartInstance = null; }
    if (histBarChartInstance) { histBarChartInstance.destroy(); histBarChartInstance = null; }
}

// ==========================================
// BIỂU ĐỒ THANH NGANG & BẢNG KÈM HÀNG TRUNG BÌNH
// ==========================================
function getSkillCell(row, skillKey) {
    const taxo = SKILL_TAXONOMY[skillKey];
    const correct = Number(row[taxo.sheetCol]);
    const total = Number(row[taxo.totalCol]);
    if (!row[taxo.totalCol] || isNaN(total) || total <= 0) return null;
    return { correct: isNaN(correct) ? 0 : correct, total };
}

function formatDateOnly(value) {
    if (!value) return '--';
    const d = new Date(value);
    if (isNaN(d.getTime())) return String(value).split('T')[0] || String(value);
    return d.toLocaleDateString('vi-VN');
}

function formatDateShort(value) {
    const d = value ? new Date(value) : null;
    if (!d || isNaN(d.getTime())) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function renderHistoryReport(rows, sheetName) {
    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const labels = rows.map((r, i) => {
        const dm = formatDateShort(r.Timestamp || r.ngayLam);
        const label = isWeekly ? `Tuần ${r.tuan || i + 1}` : (r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || i + 1}`);
        return dm ? `${dm} ${label}` : label;
    });
    const scores = rows.map(r => Number(r.score || r.tongDiem || ((r.soCauDung / (r.tongCauHoi || 30)) * 10).toFixed(1)));

    const ctxLine = document.getElementById('progressChartCanvas').getContext('2d');
    if (histLineChartInstance) histLineChartInstance.destroy();

    histLineChartInstance = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels.length ? labels : ['Chưa có bài thi'],
            datasets: [{
                label: 'Điểm số (/10)',
                data: scores.length ? scores : [0],
                borderColor: '#e11d48',
                backgroundColor: 'rgba(255, 237, 213, 0.5)',
                borderWidth: 3.5,
                pointBackgroundColor: '#be123c',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    min: 0, max: 10.5,
                    ticks: { stepSize: 2, color: '#000000', font: { family: 'Quicksand', weight: 'bold' } }
                },
                x: {
                    grid: { display: false },
                    ticks: {
                        color: '#000000',
                        font: { family: 'Quicksand', weight: 'bold', size: 11 },
                        maxRotation: 90,
                        minRotation: 90
                    }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    const skillKeys = SKILL_KEYS;
    const skillAverages = { ENG_PHO: 0, ENG_VOC: 0, ENG_LIS: 0, ENG_GRA: 0, ENG_SYN: 0, ENG_READ: 0 };
    const touchedSkills = [];

    if (rows.length && isWeekly) {
        // Tiến trình tuần: % = tổng số câu đúng / tổng số câu đã làm THẬT của nhóm kỹ năng đó
        skillKeys.forEach((k) => {
            let sumCorrect = 0, sumTotal = 0;
            rows.forEach(r => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                sumCorrect += cell.correct;
                sumTotal += cell.total;
            });
            if (sumTotal > 0) {
                skillAverages[k] = Math.min(100, Math.round((sumCorrect / sumTotal) * 100));
                touchedSkills.push(k);
            }
        });
    } else if (rows.length) {
        // Điểm tối đa mỗi nhóm năng lực trên 1 đề thi chuẩn (đúng Ma trận đề thi V2, 13 câu/10đ)
        const MAX_SKILL_POINTS = { ENG_PHO: 1.5, ENG_VOC: 1.0, ENG_LIS: 1.5, ENG_GRA: 2.0, ENG_SYN: 2.0, ENG_READ: 2.0 };
        skillKeys.forEach((k) => {
            const maxPts = MAX_SKILL_POINTS[k] || 1.5;
            const vals = rows.map(r => {
                const val = r[`diem${k}`];
                return (val !== undefined && val !== null && val !== '--' && val !== '') ? Number(val) : 0;
            });
            const sum = vals.reduce((a, b) => a + b, 0);
            if (vals.length > 0) {
                skillAverages[k] = Math.min(100, Math.round((sum / (vals.length * maxPts)) * 100));
                touchedSkills.push(k);
            }
        });
    }

    const ctxBar = document.getElementById('topicRadarChartCanvas').getContext('2d');
    if (histBarChartInstance) histBarChartInstance.destroy();

    histBarChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: skillKeys.map(k => SKILL_TAXONOMY[k].name),
            datasets: [{
                label: 'Độ thành thạo (%)',
                data: skillKeys.map(k => skillAverages[k]),
                backgroundColor: ['#f472b6', '#fb7185', '#f59e0b', '#a855f7', '#ec4899', '#e11d48'],
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 16
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20, callback: (v) => v + '%', color: '#000000', font: { family: 'Quicksand', weight: 'bold' } },
                    grid: { color: 'rgba(254, 240, 138, 0.3)' }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { family: 'Quicksand', weight: 'bold', size: 14 }, color: '#000000' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Độ thành thạo: ${ctx.raw}%` } }
            }
        },
        plugins: [{
            id: 'barValueLabels',
            afterDatasetsDraw(chart) {
                const { ctx } = chart;
                chart.data.datasets[0].data.forEach((val, i) => {
                    const meta = chart.getDatasetMeta(0).data[i];
                    if (!meta) return;
                    ctx.save();
                    ctx.font = 'bold 12px Quicksand, sans-serif';
                    ctx.fillStyle = '#1e293b';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`${val}%`, meta.x + 6, meta.y);
                    ctx.restore();
                });
            }
        }]
    });

    renderPedagogicalEvaluation(rows, skillAverages, touchedSkills);
    renderHistoryTable(rows, sheetName);
}

function renderPedagogicalEvaluation(rows, skillAverages, touchedSkills) {
    const box = document.getElementById('pedagogical-evaluation-box');
    if (!box) return;

    const studentName = getStudentFirstName();
    const count = rows.length;
    const avgScore = count ? (rows.reduce((acc, r) => acc + Number(r.score || r.tongDiem || 0), 0) / count) : 0;
    const avgScoreStr = avgScore.toFixed(1);

    // 1. Đánh giá tổng quan — phải khớp thật với điểm số, không khen chung chung bất kể kết quả
    let overviewText;
    if (avgScore >= 8) {
        overviewText = `Con nắm rất vững kiến thức trọng tâm, làm bài nghiêm túc và đạt kết quả xuất sắc.`;
    } else if (avgScore >= 6.5) {
        overviewText = `Con nắm khá tốt kiến thức trọng tâm, tuy nhiên vẫn còn một vài chỗ cần luyện thêm để đạt kết quả cao hơn.`;
    } else if (avgScore >= 5) {
        overviewText = `Con đã nắm được kiến thức cơ bản nhưng chưa thật chắc, cần ôn luyện thêm để tiến bộ hơn.`;
    } else {
        overviewText = `Con còn gặp khó khăn với nội dung này, ba mẹ nên đồng hành ôn luyện thêm cùng con nhé.`;
    }

    // 2 & 3. Thế mạnh / điểm cần khắc phục — CHỈ lấy từ những nhóm bé đã thực sự luyện tập,
    // tuyệt đối không nhận xét về nhóm bé chưa hề động tới (tránh nói sai với thực tế).
    const validSkills = (touchedSkills && touchedSkills.length) ? touchedSkills : [];
    const sortedValid = [...validSkills].sort((a, b) => skillAverages[b] - skillAverages[a]);

    let strengthHtml, weaknessHtml;
    if (sortedValid.length >= 2) {
        const top1 = SKILL_TAXONOMY[sortedValid[0]].name;
        const top2 = SKILL_TAXONOMY[sortedValid[1]].name;
        strengthHtml = `Con đạt độ thành thạo tốt ở các nhóm: <strong>${escapeHtml(top1)}</strong> (${skillAverages[sortedValid[0]]}%) và <strong>${escapeHtml(top2)}</strong> (${skillAverages[sortedValid[1]]}%).`;

        const weak1 = sortedValid[sortedValid.length - 1];
        weaknessHtml = `Con cần luyện thêm ở mảng: <strong>${escapeHtml(SKILL_TAXONOMY[weak1].name)}</strong> (${skillAverages[weak1]}%). ${escapeHtml(SKILL_TAXONOMY[weak1].advice)}`;
    } else if (sortedValid.length === 1) {
        const only1 = sortedValid[0];
        strengthHtml = `Con đạt ${skillAverages[only1]}% ở nhóm <strong>${escapeHtml(SKILL_TAXONOMY[only1].name)}</strong> — mảng duy nhất bé đã luyện tập tới thời điểm này.`;
        weaknessHtml = `Bé mới luyện tập 1 nhóm kỹ năng, cô chưa đủ dữ liệu để đánh giá toàn diện. Ba mẹ khuyến khích con hoàn thành thêm các tuần khác nhé!`;
    } else {
        strengthHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá thế mạnh.`;
        weaknessHtml = `Bé chưa có đủ dữ liệu luyện tập để đánh giá điểm cần khắc phục.`;
    }

    box.innerHTML = `
        <div class="bg-white/80 p-3 rounded-xl border border-amber-200">
            <span class="text-amber-700 font-extrabold block mb-0.5">🌟 1. Đánh giá tổng quan năng lực & xu hướng tiến bộ:</span>
            <p class="text-gray-700">Học sinh <strong>${escapeHtml(currentUser.hoTen)}</strong> đã hoàn thành <strong>${count} bài kiểm tra</strong> với điểm số trung bình tích lũy đạt <strong class="text-yellow-600">${avgScoreStr}/10 điểm</strong>. ${overviewText}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
                <span class="text-emerald-700 font-extrabold block mb-0.5">✅ 2. Khen ngợi & thế mạnh nổi trội:</span>
                <p class="text-gray-700">${strengthHtml}</p>
            </div>

            <div class="bg-orange-50/70 p-3 rounded-xl border border-orange-200">
                <span class="text-orange-700 font-extrabold block mb-0.5">⚠️ 3. Điểm cần lưu ý & khắc phục:</span>
                <p class="text-gray-700">${weaknessHtml}</p>
            </div>
        </div>

        <div class="bg-white/80 p-3 rounded-xl border border-orange-200">
            <span class="text-orange-700 font-extrabold block mb-0.5">💡 4. Kế hoạch bồi dưỡng & hướng dẫn phụ huynh:</span>
            <p class="text-gray-700">Ba mẹ nên dành 15 phút mỗi tối cùng con ôn lại từ vựng, đặt câu hỏi gợi mở bằng tiếng Anh đơn giản và khen ngợi kịp thời để giúp ${studentName} giữ vững niềm yêu thích tiếng Anh nhé!</p>
        </div>
    `;
}

function renderHistoryTable(rows, sheetName) {
    const tbody = document.getElementById('hist-table-body');
    if (!tbody) return;

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="11" class="py-4 text-gray-400">Chưa ghi nhận lịch sử bài làm nào</td></tr>`;
        return;
    }

    const isWeekly = sheetName === 'LichSuTienTrinhTuan';
    const skillKeys = SKILL_KEYS;

    const getScoreVal = (r, skillKey) => {
        const val = r['diem' + skillKey];
        return (val !== undefined && val !== null && val !== '') ? Number(val) : 0;
    };

    const totalRows = rows.length;
    let sumTongDiem = 0;
    rows.forEach(r => { sumTongDiem += Number(r.tongDiem || r.score || 0); });
    const avgTong = (sumTongDiem / totalRows).toFixed(1);

    let summaryCells = '';
    let bodyRows = '';

    if (isWeekly) {
        // Tổng hợp: % = tổng câu đúng / tổng câu đã làm THẬT của đúng nhóm kỹ năng đó
        const agg = {};
        skillKeys.forEach(k => { agg[k] = { correct: 0, total: 0 }; });
        rows.forEach(r => {
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) return;
                agg[k].correct += cell.correct;
                agg[k].total += cell.total;
            });
        });
        skillKeys.forEach(k => {
            const a = agg[k];
            summaryCells += `<td class="py-2 px-1">${a.total > 0 ? Math.round((a.correct / a.total) * 100) + '%' : '--'}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let skillCells = '';
            skillKeys.forEach(k => {
                const cell = getSkillCell(r, k);
                if (!cell) { skillCells += `<td class="py-2 px-1 text-gray-300">--</td>`; return; }
                const pct = cell.total > 0 ? Math.round((cell.correct / cell.total) * 100) : 0;
                skillCells += `<td class="py-2 px-1">${cell.correct}/${cell.total} <span class="text-gray-400">(${pct}%)</span></td>`;
            });

            bodyRows += `
                <tr class="hover:bg-yellow-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">Tuần ${r.tuan || (idx + 1)}</td>
                    <td class="py-2.5 px-2 font-black text-orange-600">${itemDiem}</td>
                    ${skillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    } else {
        skillKeys.forEach((k, i) => {
            const sum = rows.reduce((acc, r) => acc + getScoreVal(r, k), 0);
            summaryCells += `<td class="py-2 px-1">${(sum / totalRows).toFixed(1)}</td>`;
        });

        rows.forEach((r, idx) => {
            const itemDiem = r.tongDiem || r.score || '--';
            const dateStr = formatDateOnly(r.Timestamp || r.ngayLam);
            const durationStr = r.thoiGianLamBai || '--';

            let examSkillCells = '';
            skillKeys.forEach((k, i) => {
                examSkillCells += `<td class="py-2 px-1">${getScoreVal(r, k)}</td>`;
            });

            bodyRows += `
                <tr class="hover:bg-yellow-50/30 transition-colors">
                    <td class="py-2.5 px-2">${idx + 1}</td>
                    <td class="py-2.5 px-2 font-black">${r.deSo ? `Đề ${r.deSo}` : `Tuần ${r.tuan || (idx + 1)}`}</td>
                    <td class="py-2.5 px-2 font-black text-orange-600">${itemDiem}</td>
                    ${examSkillCells}
                    <td class="py-2.5 px-2 text-gray-500">${dateStr}</td>
                    <td class="py-2.5 px-2 text-gray-500">${durationStr}</td>
                </tr>
            `;
        });
    }

    const html = `
        <tr class="bg-amber-100/90 text-amber-950 font-black border-b-2 border-amber-200">
            <td class="py-2.5 px-2" colspan="2">Điểm trung bình</td>
            <td class="py-2.5 px-2 text-orange-600">${avgTong}</td>
            ${summaryCells}
            <td class="py-2.5 px-2" colspan="2">--</td>
        </tr>
        ${bodyRows}
    `;
    tbody.innerHTML = html;
}

function exportReportToPDF() {
    const area = document.getElementById('printable-report-area');
    if (!area) return;
    showLoadingOverlay('Đang khởi tạo file PDF chuẩn in ấn...');
    
    const opt = {
        margin: [5, 5, 5, 5],
        filename: `Bao_Cao_Tien_Trinh_${currentUser?.maHS || 'HocSinh'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    html2pdf().set(opt).from(area).save().then(() => {
        hideLoadingOverlay();
    }).catch(err => {
        hideLoadingOverlay();
        window.print();
    });
}

// ==========================================
// ĐỘNG CƠ ÂM THANH: GOOGLE TTS CHỊ BAN MAI
// ==========================================
function stopSpeaking() {
    try {
        if (banMaiAudio) {
            banMaiAudio.pause();
            banMaiAudio.currentTime = 0;
            banMaiAudio.onended = null;
        }
    } catch (e) {}
}

function speakVietnamese(text, rate = 0.96) {
    if (!text) return;
    speakGoogleTTS(text, 'vi', rate);
}

function speakEnglish(text, rate = 0.92) {
    if (!text) return;
    speakGoogleTTS(text, 'en', rate);
}

// Đọc to toàn bộ nội dung "Nhận xét sư phạm & kế hoạch bồi dưỡng" trong báo cáo tiến trình —
// speakGoogleTTS() đã tự cắt câu và đọc nối tiếp khi văn bản dài, không cần xử lý gì thêm ở đây.
function speakPedagogicalEvaluation() {
    const box = document.getElementById('pedagogical-evaluation-box');
    const text = box ? (box.innerText || box.textContent || '').trim() : '';
    if (!text) return;
    speakVietnamese(text, 0.98);
}

function speakGoogleTTS(text, lang, rate) {
    try {
        stopSpeaking();

        let cleanText = String(text)
            .replace(/<[^>]*>/g, '')
            .replace(/b-a/g, 'bờ a ba')
            .replace(/c\/k/g, 'cờ hoặc ca')
            .replace(/g\/gh/g, 'gờ đơn hoặc gờ kép')
            .replace(/ng\/ngh/g, 'ngờ đơn hoặc ngờ kép')
            .trim();

        if (!cleanText) return;
        const tl = lang === 'en' ? 'en' : 'vi';

        if (cleanText.length <= 180) {
            const encoded = encodeURIComponent(cleanText);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tl}&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
            return;
        }

        const sentences = cleanText.match(/[^.!?\n]+[.!?\n]*/g) || [cleanText];
        let sIdx = 0;
        function playSentence() {
            if (sIdx >= sentences.length) return;
            const s = sentences[sIdx++].trim();
            if (!s) { playSentence(); return; }
            const encoded = encodeURIComponent(s);
            banMaiAudio.src = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tl}&client=tw-ob&q=${encoded}`;
            banMaiAudio.playbackRate = rate;
            banMaiAudio.onended = playSentence;
            const playPromise = banMaiAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
        playSentence();
    } catch (err) {}
}

// Nhận diện câu tiếng Việt để luôn chuyển đúng sang Google TTS tiếng Việt (giọng chị Ban Mai).
// Trước đây speakCurrentQuestion() ép mọi question_text sang tiếng Anh nên các câu hướng dẫn
// tiếng Việt như "Từ nào có nghĩa là..." bị đọc bằng voice tiếng Anh.
function isVietnameseText(text) {
    const s = String(text || '').trim();
    if (!s) return false;

    // Chỉ cần có ký tự đặc trưng tiếng Việt là đủ chắc chắn.
    if (/[ăâđêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ]/i.test(s)) return true;

    // Phòng trường hợp câu tiếng Việt bị thiếu dấu trong dữ liệu.
    return /\b(tu|nao|co|nghia|la|chon|hay|cau|dap an|con|be|nghe|dung|sai|dien|sap xep|tim|doc)\b/i.test(s);
}

function speakCurrentQuestion() {
    const q = activeQuestionsList[currentQIndex];
    if (!q) return;

    // Nhóm Nghe hiểu: audio_text là nội dung tiếng Anh cần nghe để làm bài.
    if (q.skill_tag === 'ENG_LIS' && q.audio_text) return speakEnglish(q.audio_text);

    // Đoạn đọc trong bài Reading là tiếng Anh.
    if (q.reading_passage) return speakEnglish(q.reading_passage);

    // Câu hỏi/hướng dẫn: tự nhận diện ngôn ngữ.
    // Tiếng Việt -> chị Ban Mai; tiếng Anh -> giọng Google English.
    if (q.question_text) {
        return isVietnameseText(q.question_text)
            ? speakVietnamese(q.question_text, 0.96)
            : speakEnglish(q.question_text, 0.92);
    }
}

function playAudio(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        if (!audioCtx) return;

        const now = audioCtx.currentTime;

        if (type === 'correct') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, now);
            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
            gain.gain.setValueAtTime(0.22, now + 0.09);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.1);
            gain.gain.setValueAtTime(0.001, now + 0.14);
            gain.gain.linearRampToValueAtTime(0.22, now + 0.15);
            gain.gain.setValueAtTime(0.22, now + 0.23);
            gain.gain.linearRampToValueAtTime(0.001, now + 0.24);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'win') {
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                    o.connect(g); g.connect(audioCtx.destination);
                    o.frequency.value = freq; g.gain.setValueAtTime(0.2, audioCtx.currentTime);
                    g.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
                    o.start(); o.stop(audioCtx.currentTime + 0.3);
                }, i * 150);
            });
        }
    } catch (e) {}
}

function initQuizPallet() {
    updateQuizPalletUI();
}

function updateQuizPalletUI() {
    const container = document.getElementById('quiz-pallet-container');
    if (!container) return;
    if (!activeQuestionsList || !activeQuestionsList.length) { container.innerHTML = ''; return; }

    const isRoadmap = !!activeRoadmapContext;
    const isExam = !!activeExamContext;
    const total = activeQuestionsList.length;

    if (isExam) {
        container.className = `grid gap-1 max-w-xl mx-2`;
        container.style.gridTemplateColumns = `repeat(${total}, minmax(0, 1fr))`;
    } else {
        container.className = 'grid grid-cols-10 gap-1.5 max-w-xl mx-2';
        container.style.gridTemplateColumns = '';
    }

    const btnSize = isExam ? 'w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs' : 'w-8 h-8 text-xs';

    let html = '';
    activeQuestionsList.forEach((q, idx) => {
        const answer = userAnswers[idx];
        const isAnswered = answer !== undefined;
        const isCurrent = idx === currentQIndex;
        let cls = 'bg-white text-yellow-400 border-yellow-200 hover:bg-yellow-50';

        if (isAnswered) {
            if (isRoadmap) {
                const isCorrect = answer === q.answer;
                cls = isCorrect
                    ? 'bg-emerald-400 text-white border-emerald-500 hover:bg-emerald-500'
                    : 'bg-red-200 text-red-800 border-red-400 hover:bg-red-300';
            } else {
                // Chế độ thi: không lộ đúng/sai, nhưng câu ĐÃ TRẢ LỜI phải đổi màu KHÁC HẲN
                // với câu ĐANG LÀM (đang dùng gradient pink->purple) để không bị lẫn khi nhìn nhanh.
                cls = 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600';
            }
        }
        if (isCurrent) cls = 'bg-gradient-to-br from-yellow-500 to-orange-500 text-white border-yellow-500 shadow-md';
        html += `<button onclick="jumpToQuestion(${idx})" class="${btnSize} shrink-0 rounded-xl border-2 font-black flex items-center justify-center transition-colors duration-150 ${cls}">${idx + 1}</button>`;
    });
    container.innerHTML = html;
}

function jumpToQuestion(idx) {
    stopSpeaking();
    if (idx < 0 || idx >= activeQuestionsList.length) return;
    currentQIndex = idx;
    loadQuestion();
}

function formatDuration(ms) {
    const s = Math.round(ms / 1000);
    return `${Math.floor(s / 60)} phút ${s % 60} giây`;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function showLoadingOverlay(msg) {
    let el = document.getElementById('loading-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'loading-overlay';
        el.className = 'fixed inset-0 bg-black/30 flex items-center justify-center z-50';
        el.innerHTML = `<div class="bg-white px-6 py-4 rounded-2xl shadow-xl font-extrabold text-yellow-600 flex items-center space-x-3"><i class="fa-solid fa-spinner fa-spin"></i><span id="loading-overlay-text"></span></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('loading-overlay-text').textContent = msg;
    el.classList.remove('hidden');
}
function hideLoadingOverlay() { document.getElementById('loading-overlay')?.classList.add('hidden'); }

function toggleAutoSpeech() {
    autoSpeechEnabled = !autoSpeechEnabled;
    localStorage.setItem('autoSpeechEnabled', autoSpeechEnabled ? 'true' : 'false');
    if (!autoSpeechEnabled) stopSpeaking();
    updateAutoSpeechButtonUI();
}

function updateAutoSpeechButtonUI() {
    const btn = document.getElementById('btn-toggle-autospeech');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (autoSpeechEnabled) {
        icon.className = 'fa-solid fa-volume-high';
        btn.title = 'Đang BẬT tự động đọc câu hỏi — bấm để tắt';
        btn.classList.remove('bg-gray-100', 'text-gray-400', 'border-gray-200');
        btn.classList.add('bg-yellow-50', 'text-yellow-600', 'border-yellow-200');
    } else {
        icon.className = 'fa-solid fa-volume-xmark';
        btn.title = 'Đang TẮT tự động đọc câu hỏi — bấm để bật';
        btn.classList.remove('bg-yellow-50', 'text-yellow-600', 'border-yellow-200');
        btn.classList.add('bg-gray-100', 'text-gray-400', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-mapin')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });
    document.getElementById('login-mahs')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doLogin();
    });

    window.addEventListener('click', () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx && AudioContext) audioCtx = new AudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    }, { once: true });

    updateAutoSpeechButtonUI();
});

// ==========================================
// TRUNG TÂM MINI GAME LỚP 3 (12 game, lưới 3x4)
// ==========================================
// ==========================================
// THEME DÙNG CHUNG CHO TOÀN BỘ MINI GAME
// Giữ ngôn ngữ thiết kế của phần Học: card pastel, 2 cột, badge số lượng,
// màu sắc luân phiên theo từng game để vui mắt nhưng vẫn đồng bộ toàn app.
// ==========================================
const MINIGAME_TOPIC_PALETTES = SUBTOPIC_PALETTES;

function miniGameHash(text = '') {
    return [...String(text)].reduce((acc, ch) => ((acc * 31) + ch.charCodeAt(0)) >>> 0, 7);
}

function getMiniGamePaletteOrder(seed = 'minigame') {
    const order = MINIGAME_TOPIC_PALETTES.map((_, i) => i);
    let state = miniGameHash(seed) || 1;
    for (let i = order.length - 1; i > 0; i--) {
        state = (state * 1664525 + 1013904223) >>> 0;
        const j = state % (i + 1);
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order.map(i => MINIGAME_TOPIC_PALETTES[i]);
}

function getMiniGameTopicName(topicId) {
    if (topicId === null || topicId === undefined || topicId === 'all') return 'Trộn tất cả các nhóm';
    const g = getMiniGameTopicGroups().find(x => Number(x.id) === Number(topicId));
    return g ? `${g.id}. ${g.name}` : `Nhóm ${topicId}`;
}

function renderMiniGameTopicMenu({
    gameKey,
    onChoose,
    subtitle = 'Chọn 1 trong 6 Nhóm từ vựng để bắt đầu chơi nhé!',
    countFilter = null,
    mixLabel = 'Trộn tất cả các nhóm'
}) {
    const groups = getMiniGameTopicGroups();
    const palettes = getMiniGamePaletteOrder(gameKey || 'minigame');
    const countFor = (topicId) => {
        let pool = getMiniGameVocabPool({ topicId });
        if (typeof countFilter === 'function') pool = pool.filter(countFilter);
        return pool.length;
    };
    const total = countFor('all');
    return `
        <div class="mg-topic-menu w-full max-w-4xl mx-auto">
            <div class="w-full bg-yellow-50/35 border-2 border-yellow-100 rounded-2xl px-4 py-4 md:py-5 text-center mb-3">
                <p class="text-base md:text-lg text-gray-700 font-bold leading-relaxed">${escapeHtml(subtitle)}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                ${groups.map((g, idx) => {
                    const style = palettes[idx % palettes.length];
                    return `
                        <button onclick="${onChoose}(${g.id})" class="mg-topic-card p-3.5 md:p-4 ${style.card} border-2 rounded-xl font-bold text-left transition-all flex items-center justify-between shadow-sm pastel-btn min-h-[76px]">
                            <span class="text-base md:text-[17px] leading-snug pr-2"><strong class="${style.num} mr-1.5">${g.id}.</strong>${escapeHtml(g.name)}</span>
                            <span class="text-sm font-extrabold ${style.badge} px-2.5 py-0.5 rounded-full border shrink-0 ml-1.5 shadow-inner">${countFor(g.id)} từ</span>
                        </button>`;
                }).join('')}
            </div>
            <div class="mt-3 flex justify-center">
                <button onclick="${onChoose}('all')" class="mg-mix-btn pastel-btn inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm md:text-base shadow-md border border-purple-300">
                    <span>🌟 ${escapeHtml(mixLabel)}</span>
                    <span class="text-xs md:text-sm font-black bg-white/20 px-2 py-0.5 rounded-full">${total} từ</span>
                </button>
            </div>
        </div>`;
}

function ensureMiniGameThemeStyles() {
    if (document.getElementById('minigame-theme-v3')) return;
    const style = document.createElement('style');
    style.id = 'minigame-theme-v3';
    style.textContent = `
        #view-game-play > div { max-width: 56rem !important; }
        #game-play-title { font-size: 1.2rem !important; }
        #game-play-container { font-size: 16px; }
        #game-play-container .text-\\[10px\\] { font-size: 12px !important; }
        #game-play-container .text-\\[11px\\] { font-size: 13px !important; }
        #game-play-container .text-xs { font-size: 14px !important; }
        #game-play-container .mg-topic-card { min-height: 78px; }
        #game-play-container .mg-topic-card:hover { transform: translateY(-2px); }
        #game-play-container .mg-mix-btn { min-width: 250px; }
        @media (max-width: 640px) {
            #view-game-play > div { max-width: 100% !important; }
            #game-play-title { font-size: 1.05rem !important; }
            #game-play-container .mg-mix-btn { min-width: 0; width: auto; }
        }
    `;
    document.head.appendChild(style);
}

const MINIGAME_LIST = [
    { id: 'word-search', title: '1. Word Search', desc: 'Tìm từ giấu trong ô chữ', icon: '🔍', ready: true },
    { id: 'word-scramble', title: '2. Word Scramble', desc: 'Sắp xếp chữ cái thành từ', icon: '🔤', ready: true },
    { id: 'bingo', title: '3. Bingo', desc: 'Nghe và tìm đúng từ trên bảng', icon: '🎲', ready: true },
    { id: 'fishing-game', title: '4. Fishing Game', desc: 'Câu đúng con cá mang từ', icon: '🎣', ready: true },
    { id: 'sentence-train', title: '5. Sentence Train', desc: 'Xếp toa từ thành câu đúng', icon: '🚂', ready: true },
    { id: 'grammar-river', title: '6. Grammar River', desc: 'Nhảy qua đúng giới từ', icon: '🐸', ready: true },
    { id: 'qa-bridge', title: '7. Q&A Bridge', desc: 'Ghép đúng câu hỏi - trả lời', icon: '🌉', ready: true },
    { id: 'sentence-doctor', title: '8. Sentence Doctor', desc: 'Tìm và chữa lỗi ngữ pháp', icon: '🩺', ready: true },
    { id: 'action-race', title: '9. Action Race', desc: 'Đua xe cùng động từ hành động', icon: '🏎️', ready: true },
    { id: 'feeling-detective', title: '10. Feeling Detective', desc: 'Truy tìm tính từ và trạng thái', icon: '🕵️', ready: true },
    { id: 'a-or-an-factory', title: '11. A or An Factory', desc: 'Phân loại mạo từ a / an', icon: '🏭', ready: true },
    { id: 'teacher-says', title: '12. Teacher Says', desc: 'Phản xạ với câu mệnh lệnh', icon: '🤖', ready: true }
];

function openMiniGameHub() {
    stopSpeaking();
    // Bắt buộc đăng nhập mới vào được Mini Game (giống mục 11, Đấu trường đề thi, Tiến trình tuần)
    if (!requirePremium('Mini Game')) return;
    inAlphaIpaFlow = false;
    inMiniGameFlow = true;
    activeExamContext = null; activeRoadmapContext = null; activeTopicId = null; pendingTopicQuiz = null;
    updateNavTabs("Mini Game", "🎮", null);

    ensureMiniGameThemeStyles();
    const grid = document.getElementById('minigame-grid');
    grid.innerHTML = MINIGAME_LIST.map((g, idx) => {
        const style = getMiniGamePaletteOrder('hub')[idx % MINIGAME_TOPIC_PALETTES.length];
        return `
        <div onclick="openGamePlay('${g.id}')" class="p-3.5 md:p-4 flex flex-col items-center text-center cursor-pointer transition-all group ${style.card} border-2 rounded-[26px] min-h-[132px] justify-between relative shadow-sm pastel-btn">
            ${!g.ready ? `<span class="absolute top-2 right-2 bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-amber-200">Sắp ra mắt</span>` : ''}
            <div class="text-4xl group-hover:scale-110 transition-transform mt-1">${g.icon}</div>
            <div class="w-full">
                <h3 class="font-extrabold ${style.num} text-base leading-tight">${g.title}</h3>
                <p class="text-sm text-gray-700 font-bold mt-1 w-full leading-snug">${g.desc}</p>
            </div>
        </div>`;
    }).join('');

    switchAppView('view-minigame-hub');
}

// Đường dẫn file JS riêng của từng game — chỉ tải về máy khi bé THẬT SỰ bấm vào game đó,
// không bắt tải sẵn hết 12 game ngay từ đầu (giữ app.js gọn nhẹ dù sau này thêm bao nhiêu game).
const GAME_SCRIPT_MAP = {
    'word-search': 'assets/js/games/word-search.js?v=mg4',
    'word-scramble': 'assets/js/games/word-scramble.js?v=mg4',
    'bingo': 'assets/js/games/bingo.js?v=mg4',
    'fishing-game': 'assets/js/games/fishing-game.js?v=mg4',
    'sentence-train': 'assets/js/games/sentence-train.js?v=mg5',
    'grammar-river': 'assets/js/games/grammar-river.js?v=mg6',
    'qa-bridge': 'assets/js/games/qa-bridge.js?v=mg7',
    'sentence-doctor': 'assets/js/games/sentence-doctor.js?v=mg8',
    'action-race': 'assets/js/games/action-race.js?v=mg9',
    'feeling-detective': 'assets/js/games/feeling-detective.js?v=mg10',
    'a-or-an-factory': 'assets/js/games/a-or-an-factory.js?v=mg11',
    'teacher-says': 'assets/js/games/teacher-says.js?v=mg12'
};
const loadedGameScripts = {};

function loadGameScript(src) {
    if (loadedGameScripts[src]) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { loadedGameScripts[src] = true; resolve(); };
        script.onerror = () => reject(new Error(`Không tải được file game: ${src}`));
        document.body.appendChild(script);
    });
}

async function openGamePlay(gameId) {
    stopSpeaking();
    ensureMiniGameThemeStyles();
    inMiniGameFlow = true;
    const game = MINIGAME_LIST.find(g => g.id === gameId);
    if (!game) return;

    if (!game.ready) {
        alert(`Game "${game.title}" đang được xây dựng, sắp ra mắt sớm nhé! Con quay lại sau nha!`);
        return;
    }

    document.getElementById('game-play-title').innerHTML = `<span>${game.icon}</span><span>${game.title}</span>`;
    updateNavTabs("Mini Game", "🎮", game.title);
    switchAppView('view-game-play');

    const scriptSrc = GAME_SCRIPT_MAP[gameId];
    if (scriptSrc) {
        document.getElementById('game-play-container').innerHTML = `<p class="text-center text-gray-400 font-bold py-8">Đang tải game...</p>`;
        try {
            await loadGameScript(scriptSrc);
        } catch (e) {
            document.getElementById('game-play-container').innerHTML = `<p class="text-center text-rose-500 font-bold py-8">Không tải được game, bé thử lại nhé!</p>`;
            return;
        }
    }

    if (gameId === 'word-search') startWordSearchGame();
    if (gameId === 'word-scramble') startWordScrambleGame();
    if (gameId === 'bingo') startBingoGame();
    if (gameId === 'fishing-game') startFishingGame();
    if (gameId === 'sentence-train') startSentenceTrainGame();
    if (gameId === 'grammar-river') startGrammarRiverGame();
    if (gameId === 'qa-bridge') startQABridgeGame();
    if (gameId === 'sentence-doctor') startSentenceDoctorGame();
    if (gameId === 'action-race') startActionRaceGame();
    if (gameId === 'feeling-detective') startFeelingDetectiveGame();
    if (gameId === 'a-or-an-factory') startAOrAnFactoryGame();
    if (gameId === 'teacher-says') startTeacherSaysGame();
}

/** Lấy nguồn từ vựng thật của chương trình (kho tra nghĩa xây từ Flashcards Library) —
 * chỉ lấy từ ĐƠN (không dấu cách/gạch nối), độ dài 3-7 ký tự để vừa vặn lưới ô chữ. */
function getWordSearchVocabPool(topicId = 'all') {
    return getMiniGameVocabPool({ topicId, singleWordOnly: true, minLength: 3, maxLength: 7 })
        .map(item => ({ w: item.word.toUpperCase(), vi: item.vietnamese }));
}


tryAutoLogin();