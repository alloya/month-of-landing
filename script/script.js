const prevArrow = document.querySelector(".arrow_prev");
const nextArrow = document.querySelector(".arrow_next");
const slides = document.querySelectorAll(".carousel__item");
let slideIndex = 1;

function showSlide(index) {
  if (index > slides.length) {
    slideIndex = 1
  } else if (index < 1) {
    slideIndex = slides.length;
  }
  else {
    slideIndex = index;
  }
  slides[slideIndex-1].classList.remove('hidden');
}

showSlide(slideIndex);
prevArrow.addEventListener('click', () => {
  slides[slideIndex-1].classList.add('hidden');
  showSlide(slideIndex - 1);
});
nextArrow.addEventListener('click', () => {
  slides[slideIndex-1].classList.add('hidden');
  showSlide(slideIndex + 1);
});