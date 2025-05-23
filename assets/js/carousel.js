function initializeSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 8,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
}
