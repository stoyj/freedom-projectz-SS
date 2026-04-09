// Определя правилния път според страницата
const isSubPage = window.location.pathname.includes("/pages/");
const navPath = isSubPage ? "../components/nav.html" : "components/nav.html";

// Зарежда навигацията
fetch(navPath)
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Мобилното меню
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  });
