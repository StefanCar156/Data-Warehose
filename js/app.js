const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const testimonialsContainer = document.querySelector(".testimonials-container");
const childrenNum = testimonialsContainer.childElementCount;
let testimonialCounter = 0;

nextBtn.addEventListener("click", () => {
  if (testimonialCounter > childrenNum - 2) {
    return;
  }
  testimonialCounter++;
  testimonialsContainer.style.transform =
    "translateX(" + -testimonialCounter * 385 + "px)";
  testimonialsContainer.style.transition = "transform 0.4s ease";
});

prevBtn.addEventListener("click", () => {
  if (testimonialCounter < 1) {
    return;
  }
  testimonialCounter--;
  testimonialsContainer.style.transform =
    "translateX(" + -testimonialCounter * 385 + "px)";
  testimonialsContainer.style.transition = "transform 0.4s ease";
});
