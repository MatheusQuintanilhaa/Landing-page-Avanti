// Função para carregar componentes
function loadComponent(componentPath, targetElementId) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetElementId).innerHTML = html;
    });
}

// Carregar componentes quando a página carregar
window.onload = function () {
  loadComponent("../../components/header.html", "header-container");
  loadComponent("../../components/banner.html", "banner-container");
  loadComponent("../../components/footer.html", "footer-container");
  loadComponent("../../components/product-card.html", "products-container");
};
