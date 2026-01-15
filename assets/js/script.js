const sideMenu = document.querySelector("#sideMenu");

function openMenu() {
    if (sideMenu) sideMenu.style.transform = "translateX(-16rem)";
}

function closeMenu() {
    if (sideMenu) sideMenu.style.transform = "translateX(16rem)";
}

/* ------------------- DARK MODE LOGIC ------------------- */
const sunIcon = "./assets/img/icons/sun.svg";
const moonIcon = "./assets/img/icons/moon_icon.png";

// Initialize Theme
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const iconCheck = () => {
    if (document.documentElement.classList.contains("dark")) {
        if (themeIcon) {
            themeIcon.src = sunIcon;
            themeIcon.className = "w-5 cursor-pointer hover:scale-110 transition-transform duration-300"; // Reset classes
            themeIcon.style.filter = "none"; // Native white SVG
        }
    } else {
        if (themeIcon) {
            themeIcon.src = moonIcon;
            themeIcon.className = "w-5 cursor-pointer hover:scale-110 transition-transform duration-300";
            themeIcon.classList.remove("invert");
            themeIcon.style.filter = "none";
        }
    }
};

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    iconCheck();
};

// Toggle Theme Function
const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    iconCheck();
};

// Initial Check
themeCheck();

// Add Event Listener if button exists
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
}


/* ------------------- PROJELER VERİSİ & MANTIĞI ------------------- */

const projects = [
    {
        id: 1,
        index: 1,
        title: "Stock App",
        category: "Fullstack",
        categoryColor: "text-green-600 bg-green-50",
        description: "A comprehensive stock management application.",
        fullDescription: "Stok takibi ve yönetimi için geliştirilmiş kapsamlı bir fullstack uygulama. Kullanıcıların ürün ekleme, güncelleme ve stok durumlarını anlık olarak izlemelerine olanak tanır. Modern web teknolojileri ile performansı ve kullanıcı deneyimini ön planda tutar.",
        tools: ["Node.js", "Express", "MongoDB", "React", "Redux"],
        image: "./assets/img/projects/StockAPI.gif",
        features: [
            "Stok Giriş/Çıkış Takibi",
            "Dashboard Raporlama",
            "Kullanıcı Yetkilendirme",
            "Responsive Arayüz"
        ],
        percentages: [
            { name: "Backend (Node.js)", value: 45, color: "bg-green-500" },
            { name: "Frontend (React)", value: 40, color: "bg-blue-500" },
            { name: "Database", value: 15, color: "bg-yellow-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Proje Kurulumu", desc: "React ve Node.js ortamlarının hazırlanması." },
            { date: "Step 2", title: "Veritabanı Tasarımı", desc: "MongoDB şemalarının ve ilişkilerin kurgulanması." },
            { date: "Step 3", title: "API Geliştirme", desc: "RESTful endpoint'lerin yazılması ve test edilmesi." },
            { date: "Step 4", title: "Auth Entegrasyonu", desc: "JWT ile güvenli giriş sisteminin kurulması." },
            { date: "Step 5", title: "Frontend Arayüzü", desc: "React bileşenleri ve Redux state yönetimi." },
            { date: "Step 6", title: "Entegrasyon", desc: "Frontend ve Backend'in birbirine bağlanması." },
            { date: "Step 7", title: "Deployment", desc: "Uygulamanın sunucuya taşınması." }
        ],
        gallery: [],
        link: "project-detail.html?id=1",
        githubLink: "https://github.com/yiitfeehat/FS-StockApp"
    },
    {
        id: 2,
        index: 6,
        title: "Rent A Car API",
        category: "Backend",
        categoryColor: "text-red-600 bg-red-50",
        description: "RESTful API for a car rental system.",
        fullDescription: "Araç kiralama süreçlerini yöneten güçlü bir Backend servisi. Müşteri yönetimi, araç envanteri, kiralama işlemleri ve faturalandırma gibi temel işlevleri kapsayan RESTful mimaride tasarlanmış bir API.",
        tools: ["Java", "Spring Boot", "PostgreSQL", "API"],
        image: "./assets/img/projects/rent-a-car-api.png",
        features: [
            "Kurumsal Mimari",
            "SOLID Prensipleri",
            "Validation & Exception Handling",
            "Clean Code"
        ],
        percentages: [
            { name: "Java/Spring", value: 70, color: "bg-red-500" },
            { name: "SQL", value: 30, color: "bg-blue-600" }
        ],
        timeline: [
            { date: "Step 1", title: "Gereksinim Analizi", desc: "Kiralama sistemi ihtiyaçlarının belirlenmesi." },
            { date: "Step 2", title: "ER Diyagramı", desc: "Veritabanı ilişkilerinin çizilmesi." },
            { date: "Step 3", title: "Entity Katmanı", desc: "Java sınıfları ve veritabanı eşleştirmeleri." },
            { date: "Step 4", title: "Business Logic", desc: "İş kurallarının (Manager) kodlanması." },
            { date: "Step 5", title: "API Testleri", desc: "Postman ile endpoint kontrolleri." }
        ],
        gallery: [],
        link: "project-detail.html?id=2",
        githubLink: "https://github.com/yiitfeehat/RentACarAPI_V1"
    },
    {
        id: 3,
        index: 4,
        title: "Pizza API",
        category: "Fullstack",
        categoryColor: "text-green-600 bg-green-50",
        description: "Backend service for a food ordering system.",
        fullDescription: "Online yemek siparişi sistemleri için geliştirilmiş, hızlı ve güvenilir bir arka uç servisi. Sipariş takibi, menü yönetimi ve sepet işlemlerini yönetir.",
        tools: ["Backend", "API", "Database"],
        image: "./assets/img/projects/pizzaapi.gif",
        features: [
            "Hızlı Yanıt Süresi",
            "Sipariş Yönetimi",
            "Dinamik Menü Yapısı"
        ],
        percentages: [
            { name: "Backend", value: 60, color: "bg-red-500" },
            { name: "Database", value: 20, color: "bg-yellow-500" },
            { name: "Frontend", value: 20, color: "bg-blue-500" }
        ],
        gallery: [],
        link: "project-detail.html?id=3",
        githubLink: "https://github.com/yiitfeehat/PizzaAPI_V1"
    },
    {
        id: 4,
        index: 3,
        title: "Amazon Shopping ",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "A clone of the Amazon shopping interface.",
        fullDescription: "Dünyanın en büyük e-ticaret sitelerinden biri olan Amazon'un arayüz klonu. Karmaşık CSS yapıları ve modern frontend teknikleri kullanılarak birebir görsel benzerlik hedeflenmiştir.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "./assets/img/projects/amazon-clone.gif",
        features: [
            "Pixel-Perfect Tasarım",
            "Responsive Layout",
            "İnteraktif Elementler"
        ],
        percentages: [
            { name: "CSS", value: 70, color: "bg-blue-500" },
            { name: "HTML", value: 20, color: "bg-orange-500" },
            { name: "JavaScript", value: 10, color: "bg-yellow-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Analiz", desc: "Amazon sitesinin yapısının incelenmesi." },
            { date: "Step 2", title: "Header/Footer", desc: "Navigasyon ve alt yapının kodlanması." },
            { date: "Step 3", title: "Grid Yapısı", desc: "Ürün kartları ve listeleme düzeni." },
            { date: "Step 4", title: "Responsive", desc: "Mobil uyumluluk çalışmaları." }
        ],
        gallery: [],
        link: "project-detail.html?id=4",
        githubLink: "https://github.com/yiitfeehat/Amazon-Shopping"
    },
    {
        id: 5,
        index: 5,
        title: "Rock Paper Scissors",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "Classic Rock Paper Scissors game with JS.",
        fullDescription: "JavaScript kullanılarak geliştirilen, etkileşimli Taş-Kağıt-Makas oyunu. Kullanıcıya karşı bilgisayar mantığı ve skor takibi içerir.",
        tools: ["JavaScript", "HTML", "CSS"],
        image: "./assets/img/projects/rock-paper-scissors.gif",
        features: [
            "Oyun Mantığı",
            "Skor Tablosu",
            "DOM Manipülasyonu"
        ],
        percentages: [
            { name: "JavaScript", value: 80, color: "bg-yellow-400" },
            { name: "CSS", value: 15, color: "bg-blue-500" },
            { name: "HTML", value: 5, color: "bg-orange-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Setup", desc: "Proje dosyalarının oluşturulması." },
            { date: "Step 2", title: "Oyun Mantığı", desc: "JS ile kazanma/kaybetme algoritmaları." },
            { date: "Step 3", title: "UI Tasarımı", desc: "Kullanıcı arayüzünün giydirilmesi." },
            { date: "Step 4", title: "V2 Güncellemesi", desc: "Hata düzeltmeleri ve iyileştirmeler." }
        ],
        gallery: [],
        link: "project-detail.html?id=5",
        githubLink: "https://github.com/yiitfeehat/RockPaperScissorsV2.0"
    },
    {
        id: 6,
        index: 6,
        title: "Guess The Number",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "Number guessing game requiring logic and luck.",
        fullDescription: "Kullanıcının tutulan sayıyı tahmin etmeye çalıştığı eğlenceli bir web tabanlı oyun. Sayı aralığı ve tahmin hakkı gibi dinamik özellikler barındırır.",
        tools: ["JavaScript", "HTML", "CSS"],
        image: "./assets/img/projects/guess-the-number.gif",
        features: [
            "Rastgele Sayı Üretimi",
            "Kullanıcı Geri Bildirimi",
            "Yüksek Skor Takibi"
        ],
        percentages: [
            { name: "JavaScript", value: 85, color: "bg-yellow-400" },
            { name: "CSS", value: 10, color: "bg-blue-500" },
            { name: "HTML", value: 5, color: "bg-orange-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Logic", desc: "Sayı tahmin algoritmasının yazılması." },
            { date: "Step 2", title: "Input Kontrolü", desc: "Kullanıcı girişlerinin doğrulanması." },
            { date: "Step 3", title: "Görselleştirme", desc: "Oyun ekranının tasarlanması." }
        ],
        gallery: [],
        link: "project-detail.html?id=6",
        githubLink: "https://github.com/yiitfeehat/guessthenumber"
    },
    {
        id: 7,
        index: 2,
        title: "Car A Man",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "Creative styling project using HTML & CSS.",
        fullDescription: "Sadece HTML ve CSS kullanılarak oluşturulmuş, yaratıcı bir arayüz çalışması. Animasyonlar ve görsel hiyerarşi üzerine odaklanılmıştır.",
        tools: ["HTML", "CSS", "Animation"],
        image: "./assets/img/projects/car-a-man.gif",
        features: [
            "CSS Animasyonları",
            "Flexbox/Grid Yapısı",
            "Yaratıcı Tasarım"
        ],
        percentages: [
            { name: "CSS", value: 90, color: "bg-blue-500" },
            { name: "HTML", value: 10, color: "bg-orange-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Konsept", desc: "Tasarım fikrinin belirlenmesi." },
            { date: "Step 2", title: "Çizim", desc: "CSS ile şekillerin oluşturulması." },
            { date: "Step 3", title: "Animasyon", desc: "Hareketli bileşenlerin eklenmesi." }
        ],
        gallery: [],
        link: "project-detail.html?id=7",
        githubLink: "https://github.com/yiitfeehat/car-a-man"
    },
    {
        id: 8,
        index: 8,
        title: "Coffee Page",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "A landing page design for a coffee shop.",
        fullDescription: "Bir kahve dükkanı için tasarlanmış şık ve davetkar açılış sayfası. Menü gösterimi, kampanya alanları ve iletişim bölümleri içerir.",
        tools: ["HTML", "CSS"],
        image: "./assets/img/projects/coffeePage.gif",
        features: [
            "Estetik Tasarım",
            "Typography Kullanımı",
            "Renk Uyumu"
        ],
        percentages: [
            { name: "CSS", value: 80, color: "bg-blue-500" },
            { name: "HTML", value: 20, color: "bg-orange-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Layout", desc: "Sayfa iskeletinin oluşturulması." },
            { date: "Step 2", title: "Styling", desc: "Renk ve font seçimlerinin uygulanması." },
            { date: "Step 3", title: "Responsive", desc: "Mobil görünüm uyarlamaları." }
        ],
        gallery: [],
        link: "project-detail.html?id=8",
        githubLink: "https://github.com/yiitfeehat/coffeepage"
    },
    {
        id: 9,
        index: 9,
        title: "Sabahattin Ali",
        category: "Frontend",
        categoryColor: "text-blue-600 bg-blue-50",
        description: "Tribute website for the famous author.",
        fullDescription: "Ünlü yazar Sabahattin Ali'nin hayatını, eserlerini ve şiirlerini tanıtan biyografik web sitesi. Okuma kolaylığı sağlayan tipografi ve düzen kullanımı.",
        tools: ["HTML", "CSS"],
        image: "./assets/img/projects/Sabahattin-Ali.gif",
        features: [
            "Biyografik İçerik",
            "Minimalist Tasarım",
            "Okuma Odaklı"
        ],
        percentages: [
            { name: "HTML", value: 60, color: "bg-orange-500" },
            { name: "CSS", value: 40, color: "bg-blue-500" }
        ],
        timeline: [
            { date: "Step 1", title: "Araştırma", desc: "İçerik ve materyal toplanması." },
            { date: "Step 2", title: "Tasarım", desc: "Minimalist okuma düzeninin kurgulanması." },
            { date: "Step 3", title: "Kodlama", desc: "HTML yapısının oluşturulması." }
        ],
        gallery: [],
        link: "project-detail.html?id=9",
        githubLink: "https://github.com/yiitfeehat/Sabahattin-Ally"
    }
];

// Sayfa yüklendiğinde çalışacak kod
document.addEventListener("DOMContentLoaded", () => {

    /* ------------------- ICON HELPER ------------------- */
    const getToolIcon = (tool) => {
        const t = tool.toLowerCase();
        // Frontend
        if (t.includes("react")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#222"/><circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="#61DAFB" stroke-width="1.5" fill="none"/><ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="#61DAFB" stroke-width="1.5" fill="none"/><ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" stroke="#61DAFB" stroke-width="1.5" fill="none"/></svg>';
        if (t.includes("tailwind")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0001 6C12.0001 6 15.0001 3 18.0001 3C21.0001 3 24.0001 6 20.0001 9C16.0001 12 15.0001 12 15.0001 12C15.0001 12 12.0001 15 9.0001 15C6.0001 15 3.0001 12 7.0001 9C11.0001 6 12.0001 6 12.0001 6Z" fill="#38BDF8"/><path d="M6.0001 13C6.0001 13 9.0001 10 12.0001 10C15.0001 10 18.0001 13 14.0001 16C10.0001 19 9.0001 19 9.0001 19C9.0001 19 6.0001 22 3.0001 22C0.0001 22 -2.9999 19 1.0001 16C5.0001 13 6.0001 13 6.0001 13Z" fill="#38BDF8"/></svg>';
        if (t.includes("redux")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#764ABC"/><circle cx="12" cy="12" r="3" fill="white"/></svg>';
        if (t.includes("framer")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="black"><path d="M4 0h16v8h-8zM4 12h8v8zM4 8h8l8 8H4z"/></svg>';
        if (t.includes("html")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#E34F26"><path d="M2.5 2H21.5L19.5 19L12 21.5L4.5 19L2.5 2Z"/><path d="M17 17L12 19L7 17L6.5 12H15.5L15 15.5L12 16.5L9 15.5L8.5 14H6.5L7.5 17L12 18.5L16.5 17L17.5 10H8L7.5 8H18L18.5 4H5L5.5 8H3.5L3 2H21L20.5 8H19.5L19 19Z" fill="white"/></svg>';
        if (t.includes("css")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#1572B6"><path d="M2.5 2H21.5L19.5 19L12 21.5L4.5 19L2.5 2Z"/><path d="M17 17L12 19L7 17L6.5 12H15.5L15 15.5L12 16.5L9 15.5L8.5 14H6.5L7.5 17L12 18.5L16.5 17L17.5 10H8L7.5 8H18L18.5 4H5L5.5 8H3.5L3 2H21L20.5 8H19.5L19 19Z" fill="white"/></svg>';

        // Backend
        if (t.includes("node")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#339933"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/><path d="M12 18C13.5 18 14.5 17 14.5 15.5C14.5 14 13.5 13 12 13C10.5 13 9.5 14 9.5 15.5C9.5 17 10.5 18 12 18Z" fill="white"/></svg>';
        if (t.includes("mongo")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#47A248"><path d="M12 2C12 2 4 10 4 15C4 19 8 22 12 22C16 22 20 19 20 15C20 10 12 2 12 2Z"/><path d="M12 22V2" stroke="white" stroke-width="1"/></svg>';
        if (t.includes("express")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="black"><circle cx="12" cy="12" r="10"/><path d="M8 12H16" stroke="white" stroke-width="2"/></svg>';
        if (t.includes("api")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#000"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#555"/></svg>';
        if (t.includes("axios")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#5A29E4"><path d="M12 2L2 19H22L12 2Z"/></svg>';
        if (t.includes("sortable")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#FFC107"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>';

        // Langs
        if (t.includes("java")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#F7DF1E"><path d="M2 22h20V2H2v20z" fill="#F7DF1E"/><path d="M6 6h12v12H6V6z" fill="#000"/><path d="M14.5 15.5h-5v-7h5v7z" fill="#F7DF1E"/></svg>'; // JS Icon placeholder stylistic
        if (t.includes("type")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#3178C6"><path d="M2 22h20V2H2v20z" fill="#3178C6"/><path d="M14 16h-2v-6h-2v6H8v-8h6v8z" fill="#fff"/></svg>';

        // Design & Tools
        if (t.includes("figma")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0)"><path d="M6 12C6 15.3137 8.68629 18 12 18V12H6Z" fill="#0ACF83"/><path d="M18 12C18 15.3137 15.3137 18 12 18V12H18Z" fill="#1ABCFE"/><path d="M6 6C6 9.31371 8.68629 12 12 12V6H6Z" fill="#F24E1E"/><path d="M18 6C18 9.31371 15.3137 12 12 12V6H18Z" fill="#FF7262"/><path d="M12 0C8.68629 0 6 2.68629 6 6H12V0Z" fill="#A259FF"/></g></svg>';
        if (t.includes("illustrator")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#FF9A00"><path d="M2.5 2H21.5V22H2.5V2Z"/><path d="M12 6L7 18H9L10 15H14L15 18H17L12 6ZM11 13L12 9L13 13H11Z" fill="#330000"/><path d="M17 13C17 12 17.5 11.5 18 11.5C18.5 11.5 19 12 19 13C19 14 19 15 19 17V18H17V17V13Z" fill="#330000"/></svg>';
        if (t.includes("photoshop")) return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="#31A8FF"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 7H10C12 7 13 8 13 9.5C13 11 12 12 10 12H8V17H7V7ZM8 8V11H10C11 11 11.5 10.5 11.5 9.5C11.5 8.5 11 8 10 8H8Z" fill="#001E36"/><path d="M14 10C14 9 14.5 8.5 15.5 8.5C16.5 8.5 17 9 17 10H18C18 8 16 7 15 7C13 7 12.5 8 12.5 9C12.5 10 13 10.5 14 11C15 11.5 15.5 12 15.5 13C15.5 14 14.5 14.5 13.5 14.5C12.5 14.5 12 14 12 12H11C11 14 12 15 13.5 15C15 15 16.5 14 16.5 12.5C16.5 11.5 16 11 14 10Z" fill="#001E36"/></svg>';

        // Default (Code icon)
        return '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="gray"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>';
    };

    // 1. ALL PROJECTS PAGE RENDER
    const projectsContainer = document.getElementById("all-projects-grid");
    if (projectsContainer) {
        const sortedProjects = projects.sort((a, b) => (a.index || 999) - (b.index || 999));
        projectsContainer.innerHTML = sortedProjects.map(project => `
            <a href="${project.link}" class="block group">
                <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] hover:-translate-y-2 duration-500 transition-all cursor-pointer h-full bg-white dark:bg-gray-800">
                    <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 duration-500">
                    </div>
                    <div class="p-6">
                        <span class="text-xs font-bold ${project.categoryColor} px-2 py-1 rounded-full mb-2 inline-block">${project.category}</span>
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">${project.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${project.description}</p>
                        <div class="flex gap-2 flex-wrap">
                            ${project.tools.map(tool => `<span class="text-xs text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded flex items-center gap-1">${getToolIcon(tool).replace('w-6 h-6', 'w-3 h-3 dark:invert')} ${tool}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // 2. PROJECT DETAIL PAGE RENDER
    const projectContent = document.getElementById("project-content");
    if (projectContent) {
        // URL'den ID'yi al
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id'));

        // Projeyi bul
        const project = projects.find(p => p.id === projectId);

        if (!project) {
            projectContent.innerHTML = `
                <div class="text-center py-20">
                    <h2 class="text-3xl font-bold text-gray-800">Proje Bulunamadı</h2>
                    <p class="text-gray-600 mt-4">Aradığınız proje mevcut değil veya kaldırılmış.</p>
                    <a href="all-projects.html" class="inline-block mt-6 px-6 py-2 bg-black text-white rounded-full">Tüm Projelere Dön</a>
                </div>
            `;
            return;
        }

        // --- Dynamic Background ---
        const dynamicBg = document.getElementById("dynamic-bg");
        if (dynamicBg) {
            dynamicBg.style.backgroundImage = `url('${project.image}')`;
            dynamicBg.style.backgroundSize = "cover";
            dynamicBg.style.backgroundPosition = "center";
        }

        // --- Render Content ---

        // 1. Hero / Header
        let html = `
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-20 animate-fade-in-up">
                <div class="flex-1">
                    <span class="inline-block px-4 py-1.5 rounded-full text-sm font-bold ${project.categoryColor} mb-6 tracking-wide uppercase">${project.category}</span>
                    <h1 class="text-4xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">${project.title}</h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 font-light">${project.fullDescription || project.description}</p>
                    
                    <div class="flex flex-col sm:flex-row gap-4">
                         ${project.demoLink ? `
                         <a href="${project.demoLink}" target="_blank" class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold btn-hover-effect flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                            <span>Canlı Demo</span>
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                         </a>` : ''}
                         <a href="${project.githubLink}" target="_blank" class="group px-8 py-4 bg-[#24292e] text-white rounded-full font-bold btn-hover-effect flex items-center justify-center gap-3 shadow-lg hover:shadow-gray-500/30 hover:bg-black transition-all duration-300 dark:border dark:border-gray-600">
                            <span class="w-6 h-6 fill-current">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.37-12-12-12"/></svg>
                            </span>
                            <span>GitHub'da İncele</span>
                         </a>
                    </div>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-gray-100 rotate-1 hover:rotate-0 transition duration-500 dark:border-gray-700 dark:bg-gray-800">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-auto object-cover">
                    </div>
                </div>
            </div>
        `;

        // 2. Project Stats & Tech Stack (ENHANCED)
        html += `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 animate-fade-in-up" style="animation-delay: 100ms;">
                <!-- Tools Section -->
                <div class="lg:col-span-1">
                    <div class="border border-gray-100 p-8 rounded-3xl bg-white shadow-xl shadow-gray-100/50 h-full dark:bg-gray-800 dark:border-gray-700 dark:shadow-none">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                             📌 Kullanılan Araçlar
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            ${project.tools.map(tool => `
                                <div class="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-500">
                                    <div class="mb-2 transform group-hover:scale-110 transition-transform duration-300">${getToolIcon(tool)}</div>
                                    <span class="text-xs font-semibold text-gray-600 dark:text-gray-300 text-center">${tool}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Features Section -->
                <div class="lg:col-span-2">
                     <div class="border border-gray-100 p-8 rounded-3xl bg-white shadow-xl shadow-gray-100/50 h-full dark:bg-gray-800 dark:border-gray-700 dark:shadow-none">
                         <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            ✨ Proje Özellikleri
                         </h3>
                         <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            ${project.features ? project.features.map(feature => `
                                <li class="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-sm transition-all dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                                    <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-sm dark:bg-green-900/30 dark:text-green-400">✓</div>
                                    <span class="text-gray-700 font-medium pt-1 dark:text-gray-300">${feature}</span>
                                </li>
                            `).join('') : '<p class="text-gray-500">Özellik listesi eklenmedi.</p>'}
                         </ul>
                    </div>
                </div>
            </div>
        `;

        // 3. Tech Stack Breakdown (Percentages)
        if (project.percentages && project.percentages.length > 0) {
            html += `
                <div class="mb-20 animate-fade-in-up" style="animation-delay: 200ms;">
                    <div class="border border-gray-100 p-8 lg:p-10 rounded-3xl bg-white shadow-xl shadow-gray-100/50 dark:bg-gray-800 dark:border-gray-700 dark:shadow-none">
                        <h2 class="text-2xl font-bold mb-8 flex items-center gap-2 dark:text-white">📊 Teknoloji Dağılımı</h2>
                        <div class="space-y-6"> 
                            ${project.percentages.map(stat => `
                                <div>
                                    <div class="flex justify-between mb-2">
                                        <span class="font-bold text-gray-700 dark:text-gray-300">${stat.name}</span>
                                        <span class="font-bold text-gray-900 dark:text-white">${stat.value}%</span>
                                    </div>
                                    <div class="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                                        <div class="${stat.color || 'bg-blue-600'} h-4 rounded-full relative overflow-hidden transition-all duration-1000" style="width: ${stat.value}%">
                                            <div class="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // 4. Project Timeline (Continuous Line Design)
        if (project.timeline && project.timeline.length > 0) {
            html += `
                <div class="mb-20 animate-fade-in-up" style="animation-delay: 250ms;">
                     <h2 class="text-2xl font-bold mb-10 flex items-center gap-2">🚀 Geliştirme Hikayesi</h2>
                     
                     <div class="relative pt-10 pb-10 overflow-x-auto hide-scrollbar">
                        <!-- Main Container -->
                        <div class="flex items-start px-4 min-w-max">
                            ${project.timeline.map((item, index) => {
                const isLast = index === project.timeline.length - 1;
                return `
                                <div class="relative w-64 md:w-80 group">
                                    <!-- Connecting Line -->
                                    ${!isLast ? `<div class="absolute top-[1.15rem] left-1/2 w-full h-1 bg-gray-200 group-hover:bg-blue-100 transition-colors duration-500"></div>` : ''}
                                    
                                    <!-- Step Dot -->
                                    <div class="relative z-10 w-10 h-10 mx-auto bg-white border-4 border-blue-600 rounded-full shadow-lg group-hover:scale-125 group-hover:border-blue-500 transition-all duration-300 flex items-center justify-center">
                                        <span class="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                                    </div>
                                    
                                    <!-- Content -->
                                    <div class="text-center mt-6 px-4">
                                        <span class="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Adım ${index + 1}</span>
                                        <h4 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">${item.title}</h4>
                                        <p class="text-sm text-gray-500 leading-relaxed">${item.desc}</p>
                                    </div>
                                </div>
                                `;
            }).join('')}
                        </div>
                     </div>
                </div>
            `;
        }

        // 5. Gallery
        if (project.gallery && project.gallery.length > 0) {
            html += `
                <div class="mb-20 animate-fade-in-up" style="animation-delay: 300ms;">
                    <h2 class="text-2xl font-bold mb-8 flex items-center gap-2">📷 Proje Galerisi</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${project.gallery.map(img => `
                            <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer relative aspect-video">
                                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-300"></div>
                                <img src="${img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeri">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        projectContent.innerHTML = html;

        // --- Navigation Logic (Prev/Next) ---
        const sortedProjects = projects.sort((a, b) => (a.index || 999) - (b.index || 999));
        const currentIndex = sortedProjects.findIndex(p => p.id === projectId);

        const prevBtn = document.getElementById("prev-project-btn");
        const nextBtn = document.getElementById("next-project-btn");
        const prevName = document.getElementById("prev-project-name");
        const nextName = document.getElementById("next-project-name");

        if (currentIndex > 0) {
            const prevProject = sortedProjects[currentIndex - 1];
            prevBtn.href = `project-detail.html?id=${prevProject.id}`;
            prevName.innerText = prevProject.title;
            prevBtn.classList.remove("opacity-0", "pointer-events-none");
        }

        if (currentIndex < sortedProjects.length - 1) {
            const nextProject = sortedProjects[currentIndex + 1];
            nextBtn.href = `project-detail.html?id=${nextProject.id}`;
            nextName.innerText = nextProject.title;
            nextBtn.classList.remove("opacity-0", "pointer-events-none");
        }
    }
});