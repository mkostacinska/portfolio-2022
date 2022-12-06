const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }

    console.log(visiblity);
})