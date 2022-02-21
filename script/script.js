const prevArrow = document.querySelector(".arrow_prev");
const nextArrow = document.querySelector(".arrow_next");
const slides = document.querySelectorAll(".carousel__item");
const bikefilters = document.querySelectorAll(".bikes-list__item");
const bikeSlides = document.querySelectorAll(".bikes-list__slide");

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

function setFilterState(element) {
  bikefilters.forEach(elem => elem.classList.remove('selected'));
  element.classList.add('selected');
}

function filterBikes(id) {
  bikeSlides.forEach(elem => {
    if (elem.classList.contains(id)) {
      elem.classList.remove('hidden');
    } else {
      elem.classList.add('hidden');
    }
  })
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

bikefilters.forEach(element => {
  element.addEventListener('click', () => {
    filterBikes(element.getAttribute('id'));
    setFilterState(element);
  });
});

