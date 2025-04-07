function loadComponent(componentPath, targetSelector, callback) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      if (targetSelector.startsWith("#")) {
        const element = document.getElementById(targetSelector.slice(1));
        if (element) element.innerHTML = html;
      } else if (targetSelector.startsWith(".")) {
        document.querySelectorAll(targetSelector).forEach((el) => {
          el.innerHTML = html;
        });
      } else {
        console.warn(`Seletor inválido: ${targetSelector}`);
      }

      if (typeof callback === "function") {
        callback();
      }
    })
    .catch((error) => {
      console.error(`Erro ao carregar o componente ${componentPath}:`, error);
    });
}

window.onload = function () {
  loadComponent("../../components/header.html", "#header-container");
  loadComponent("../../components/banner.html", "#banner-container");
  loadComponent("../../components/footer.html", "#footer-container");
  loadComponent(
    "../../components/featured-product.html",
    ".featured-product-container"
  );
  loadComponent(
    "../../components/productFeatureSection.html",
    ".product-feature-section-container"
  );

  loadComponent(
    "../../components/productsCarousel.html",
    ".products-container-wrapper",
    initializeSwiper
  );
};
