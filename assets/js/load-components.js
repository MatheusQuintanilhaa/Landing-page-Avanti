function loadComponent(componentPath, targetSelector, callback) {
  console.log(`Tentando carregar: ${componentPath}`);
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      console.log(`Componente ${componentPath} carregado com sucesso.`);
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
      console.error(`Erro ao carregar ${componentPath}:`, error);
    });
}

window.onload = function () {
  loadComponent("../components/header.html", "#header-container");
  loadComponent(
    "../components/categories-menu.html",
    "#categories-menu-container"
  );
  loadComponent("../components/banner.html", "#banner-container");
  loadComponent("../components/footer.html", "#footer-container");
  loadComponent(
    "../components/featured-product.html",
    ".featured-product-container"
  );
  loadComponent(
    "../components/productFeatureSection.html",
    ".product-feature-section-container"
  );
  loadComponent(
    "../components/productsCarousel.html",
    ".products-container-wrapper",
    initializeSwiper
  );
  loadComponent(
    "../components/contact-banner.html",
    ".contact-banner-container"
  );
};
