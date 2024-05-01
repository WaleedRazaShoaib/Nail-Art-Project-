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

// Auto-play slider every 3 seconds
setInterval(autoPlay, 3000);

showSlide(currentSlide);

function validation() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let m = document.getElementById("message").value;

    // Regular expressions
    let checkname = /^[a-zA-Z\s]{4,}$/;
    let checkemail = /^[a-zA-Z0-9_]{3,}@[a-zA-Z]{5,}\.[a-zA-Z]{2,}$/;
    let checkmsg = /^.{1,}$/;

    // Check if name is valid
    if (checkname.test(n)) {


    } else {
        document.getElementById("errorname").innerHTML = "Invalid name";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid name",
        });
        return false;
    }

    // Check if email is valid
    if (checkemail.test(e)) {
        document.getElementById("erroremail").innerHTML = "";
    } else {
        document.getElementById("erroremail").innerHTML = "Invalid email";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid email",
        });
        return false;
    }

    // Check if message is valid
    if (checkmsg.test(m)) {
        document.getElementById("errormsg").innerHTML = "";
    } else {
        document.getElementById("errormsg").innerHTML = "Invalid message";
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid message",
        });
        return false;
    }

    // If all fields are valid
    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Form submitted successfully",
    });
    return true;
}


// document.getElementById("navbar").innerHTML = `

            
document.addEventListener("DOMContentLoaded", function () {
    let navlinks = document.querySelectorAll("#footer .nav-link");
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