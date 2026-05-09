// БГ: Зарежда footer компонента асинхронно
// EN: Loads the footer component asynchronously
async function loadFooter() {
  const isSubPage = window.location.pathname.includes("/pages/");
  const footerPath = isSubPage
    ? "../components/footer.html"
    : "components/footer.html";
  try {
    const response = await fetch(footerPath);
    const html = await response.text();
    document.getElementById("footer-placeholder").innerHTML = html;
    // БГ: Прилага текущия език към footer-а
    // EN: Apply current language to footer
    if (typeof setLanguage === "function") {
      const savedLang = localStorage.getItem("lang") || "bg";
      setLanguage(savedLang);
    }
  } catch (err) {
    console.error("Footer load error:", err);
  }
}
loadFooter();
