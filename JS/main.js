// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count-1", 0, 10, 2000);
  counter("count-2", 100, 20, 3000);
  counter("count-3", 0, 30, 4000);
  counter("count-4", 0, 24, 2800);
});

// swiper
let swiper = new Swiper(".swiper-container.app-screen", {
  effect: "coverflow",
  loop: true,
  autoplaySpeed: 3000,
  centeredSlides: true,
  slidesPerView: "auto",
  autoPlay: {
    delay: 5000,
    disableInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  paginationClickable: true,
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
});
