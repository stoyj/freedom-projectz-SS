// ===== ВСИЧКИ ТЕКСТОВЕ НА ДВАТА ЕЗИКА =====
const translations = {
  bg: {
    // Навигация
    nav_home: "Начало",
    nav_story: "Нашата История",
    nav_mission: "Мисия",
    nav_projects: "Проекти",
    nav_donate: "Подкрепи",
    nav_contact: "Контакт",

    // Hero секция
    hero_tagline: "Свобода. Надежда. Любов в действие.",
    hero_title: "Freedom Projectz",
    hero_text:
      "Вярваме, че истинската свобода не е само за нас самите, а е покана да служим на другите с любов, надежда и грижа.",
    hero_btn_primary: "Подкрепи",
    hero_btn_secondary: "Нашата История",
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_story: "Our Story",
    nav_mission: "Mission",
    nav_projects: "Projects",
    nav_donate: "Donate",
    nav_contact: "Contact",

    // Hero section
    hero_tagline: "Freedom. Hope. Love in action.",
    hero_title: "Freedom Projectz",
    hero_text:
      "We believe that true freedom is not just for ourselves, but an invitation to serve others with love, hope and care.",
    hero_btn_primary: "Support Us",
    hero_btn_secondary: "Our Story",
  },
};

// ===== ФУНКЦИЯ КОЯТО СМЕНЯ ЕЗИКА =====
function setLanguage(lang) {
  // Запазва избора на потребителя
  localStorage.setItem("lang", lang);

  // Намира всички елементи с data-i18n и ги превежда
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Маркира активния бутон
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById(`lang-${lang}`).classList.add("active");
}

// ===== ЗАРЕЖДА ЗАПАЗЕНИЯ ЕЗИК ПРИ ОТВАРЯНЕ =====
function initLanguage() {
  const savedLang = localStorage.getItem("lang") || "bg";
  setLanguage(savedLang);
}
