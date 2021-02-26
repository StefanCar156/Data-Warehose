// Responsive Styles
function responsiveStyle() {
  const homeSection = document.querySelector("#home-section");
  const homeImg = document.querySelector(".home-image");
  const homeText = document.querySelector(".home-text");

  if (window.innerWidth <= 1024) {
    homeSection.insertBefore(homeImg, homeText);
    prevBtn.querySelector("img").src = "../img/prev-btn-2.png";
    nextBtn.querySelector("img").src = "../img/next-btn-2.png";
  } else {
    homeSection.insertBefore(homeText, homeImg);
    prevBtn.querySelector("img").src = "../img/prev-btn.png";
    nextBtn.querySelector("img").src = "../img/next-btn.png";
  }

  handleSlideImages()
}

window.onresize = responsiveStyle;

// Navbar Toggle
const navBtn = document.querySelector(".menu-btn");
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

// Fixed Nav
let scrollPosition = 0
const header = document.querySelector("header")

function fixedNav() {
  // Display navbar if scrolling upwards, Hide it if scrolling downwards
  if ((document.body.getBoundingClientRect()).top > scrollPosition) {
    header.classList.add('fixed-nav')
  } else {
    header.classList.remove('fixed-nav')
  }
  // save the new position for iteration.
  scrollPosition = (document.body.getBoundingClientRect()).top;

  // Show/hide box shadow
  if ((document.body.getBoundingClientRect()).top > 1) {
      header.style.boxShadow = "none"
  }
  else {
      header.style.boxShadow = "2px 2px 10px 2px rgba(0, 0, 0, 0.1)"
  }
}

window.addEventListener("scroll", () => {
  showBackToTopBtn();
  fixedNav();
});

// Back To Top
const backToTopBtn = document.querySelector("#back-to-top");

function showBackToTopBtn() {
  if (window.scrollY < 700) {
    backToTopBtn.style.display = "none";
  } else {
    backToTopBtn.style.display = "inline";
  }
}

backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Testimonials Section

const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonialComponent = document.querySelector(".testimonials-component");
const childrenNum = testimonialsContainer.childElementCount;
let testimonialCounter = 0;

const handleSlideImages = () => {
  testimonialsContainer.style.transform = "translateX(" + -testimonialComponent.clientWidth * testimonialCounter + "px)"
  testimonialsContainer.style.transition = "transform 0.5s ease"
}

nextBtn.addEventListener("click", () => {
  if (testimonialCounter > childrenNum - 2) {
    return;
  }
  testimonialCounter++;
  handleSlideImages()
});

prevBtn.addEventListener("click", () => {
  if (testimonialCounter < 1) {
    return;
  }
  testimonialCounter--;
  handleSlideImages()
});