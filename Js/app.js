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




document.addEventListener("DOMContentLoaded", function () {
    let navlinks = document.querySelectorAll("#Navbar .nav-link");
    let currentpage = window.location.pathname.split('/').pop();
    //loop
    navlinks.forEach(function (link) {
        //remove active class
        link.classList.remove("active");
        if (link.getAttribute('href') === currentpage) {
            link.classList.add("active");
        }
    });


})