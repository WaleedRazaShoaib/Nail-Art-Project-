let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideTexts = document.querySelectorAll('.slide-text');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    slideTexts[currentSlide].style.bottom = '-50px'; // reset text position
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    slideTexts[currentSlide].style.bottom = '20px'; // end position
}

function autoPlay() {
    showSlide(currentSlide += 1);
}


setInterval(autoPlay, 3000);

showSlide(currentSlide);







