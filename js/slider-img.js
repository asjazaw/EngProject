const sliderImages = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const slides = sliderImages.querySelectorAll('img');
const totalSlides = slides.length;

let slideIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  const slideWidth = sliderImages.clientWidth;
  sliderImages.style.transform = `translateX(${-index * slideWidth}px)`;
  slideIndex = index; // Update the slideIndex value
}

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

showSlide(slideIndex);
