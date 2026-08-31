/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// ---------- Dark mode / Light mode toggle ----------
// El tema inicial ya se aplicó en un <script> dentro del <head> de
// index.html (para no tener parpadeo). Aquí solo conectamos el botón.
(function () {
  var root = document.documentElement;
  var toggleBtn = document.getElementById("themeToggle");
  var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function syncButton(theme) {
    if (!toggleBtn) return;
    var isDark = theme === "dark";
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  }

  // Refleja en el botón el tema que ya quedó aplicado al cargar
  syncButton(root.getAttribute("data-theme"));

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      syncButton(next);
    });
  }

  // Si el usuario nunca eligió manualmente un tema, seguimos el
  // cambio de preferencia del sistema operativo en tiempo real
  mediaQuery.addEventListener("change", function (e) {
    if (localStorage.getItem("theme")) return; // ya eligió, no lo pisamos
    var theme = e.matches ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    syncButton(theme);
  });
})();