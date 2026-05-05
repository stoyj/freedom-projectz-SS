// Определя правилния път — различен за главната страница и за pages/
const isSubPage = window.location.pathname.includes("/pages/");
const navPath = isSubPage ? "../components/nav.html" : "components/nav.html";

fetch(navPath)
  .then((r) => r.text())
  .then((html) => {
    document.getElementById("nav-placeholder").innerHTML = html;

    // Мобилното меню
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    toggle.addEventListener("click", () => menu.classList.toggle("open"));

    // Езикът се инициализира СЛЕД като навигацията е в DOM-а
    if (typeof initLanguage === "function") initLanguage();
  });
