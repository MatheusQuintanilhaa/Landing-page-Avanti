document.addEventListener("DOMContentLoaded", () => {
  // Aguarda o carregamento do header
  setTimeout(() => {
    const categoriesBtn = document.getElementById("menuButton");
    const categoriesMenu = document.querySelector(".categories-menu");
    const menu = document.getElementById("menu");

    categoriesBtn.addEventListener("click", () => {
      console.log("ooooooooooo");
      menu.classList.toggle("hidden");
    });

    // function scrollToSection(sectionId) {
    //   const section = document.getElementById(sectionId);
    //   section.scrollIntoView({ behavior: "smooth" });
    //   menu.classList.add("hidden"); // Fecha o menu após clicar
    // }

    // if (categoriesBtn) {
    //   categoriesBtn.addEventListener("click", () => {
    //     console.log("Botão de categorias clicado!");
    //     const categoriesMenu = document.querySelector(
    //       "#categories-menu-container .categories-menu"
    //     );

    //     if (categoriesMenu) {
    //       categoriesMenu.classList.toggle("open");
    //     } else {
    //       console.warn("Menu de categorias ainda não está carregado.");
    //     }
    //   });
    // } else {
    //   console.warn("Elemento .categories-btn não encontrado.");
    // }
  }, 100);
});
