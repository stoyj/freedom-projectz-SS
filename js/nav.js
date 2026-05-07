async function loadNav() {
  const isSubPage = window.location.pathname.includes("/pages/");
  const navPath = isSubPage ? "../components/nav.html" : "components/nav.html";
  try {
    const response = await fetch(navPath);
    const html = await response.text();
    document.getElementById("nav-placeholder").innerHTML = html;
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => menu.classList.toggle("open"));
    }
    if (typeof initLanguage === "function") initLanguage();
  } catch (err) {
    console.error("Nav load error:", err);
  }
}
loadNav();
