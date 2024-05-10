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







document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="top">
<div class="container-fluid divNavbar">
    <a class="navbar-brand" href="#">
   
        <img src="images/pnglogo.png" alt="Nail Art" id="logo">
        <p> <span class="headin">N</span>AILART</p>
  
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container-fluid maindiv">
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./AboutUs.html">About Us </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="./services.html">Services </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Nail Art Designs
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./geometdesign.html">geometric design</a></li>
                        <li><a class="dropdown-item" href="./facesNail.html">Faces Nails</a></li>
                        <li><a class="dropdown-item" href="./floralNails.html">Florals Nails</a></li>
                        <li><a class="dropdown-item" href="./flowersNails.html">Flowers Nails</a></li>
                        <li><a class="dropdown-item" href="./holograpNails.html">Holographics Nails</a></li>
                    </ul>
                </li>
              
                <li class="nav-item">
                    <a class="nav-link" href="#gallerysec">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contactUs.html">Contact Us </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="acessories.html">Acessories </a>
                </li>

            </ul>
        </div>
    </div>
</div>
</nav>
`

//slicing main code

document.addEventListener("DOMContentLoaded", function(){
    //GET ALL LINK IN THE NAVBAR
var navLinks = document.querySelectorAll("#navbar .nav-link");
    //check the current url to determine weather link should be active
    var cuurentpage = window.location.pathname.split('/').pop();
    //loop 
    navLinks.forEach(function(link){
        //remove active class
        link.classList.remove("active");
        if(link.getAttribute('href') === cuurentpage ){
            link.classList.add("active");
        }
    });
})