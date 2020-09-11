// Testimonials Section

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonialComponent = document.querySelector(".testimonials-component");
const childrenNum = testimonialsContainer.childElementCount;
let testimonialCounter = 0;

nextBtn.addEventListener("click", () => {
  if (testimonialCounter > childrenNum - 2) {
    return;
  }
  testimonialCounter++;
  testimonialsContainer.style.transform =
    "translateX(" +
    -testimonialCounter * testimonialComponent.clientWidth +
    "px)";
  testimonialsContainer.style.transition = "transform 0.4s ease";
});

prevBtn.addEventListener("click", () => {
  if (testimonialCounter < 1) {
    return;
  }
  testimonialCounter--;
  testimonialsContainer.style.transform =
    "translateX(" +
    -testimonialCounter * testimonialComponent.clientWidth +
    "px)";
  testimonialsContainer.style.transition = "transform 0.4s ease";
});

// Responsive Styles
function responsiveStyle() {
  const homeSection = document.querySelector("#home-section");
  const homeImg = document.querySelector(".home-image");
  const homeText = document.querySelector(".home-text");

  if (window.outerWidth <= 1000) {
    homeSection.insertBefore(homeImg, homeText);
    prevBtn.src = "../img/prev-btn-2.png";
    nextBtn.src = "../img/next-btn-2.png";
  } else {
    homeSection.insertBefore(homeText, homeImg);
    prevBtn.src = "../img/prev-btn.png";
    nextBtn.src = "../img/next-btn.png";
  }
}

window.onresize = responsiveStyle;

// Navbar Toggle
const navBtn = document.querySelector(".menu-icon");
const navbar = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav-links-active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-links-active");
  });
});
