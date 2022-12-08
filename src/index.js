const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {   
    const visibility = nav.getAttribute("data-visible") ?? "false";
    // if the nav is closed, open it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

const skillToggle = document.querySelector('.skills-toggle');
const carousel = document.querySelector(".carousel");
var count = 0;

skillToggle.addEventListener("click", () => {
    count += 1;
    count = count % 5;
    carousel.style.setProperty('--position', count);
})

