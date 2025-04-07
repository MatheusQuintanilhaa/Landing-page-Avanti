function loadComponent(componentPath, targetElementId) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetElementId).innerHTML = html;
    });
}

window.onload = function () {
  loadComponent("../../components/header.html", "header-container");
  loadComponent("../../components/banner.html", "banner-container");
  loadComponent("../../components/footer.html", "footer-container");
  // Call loadComponent for your new featured product component
  loadComponent(
    "../../components/featured-product.html",
    "featured-product-container"
  );
};
