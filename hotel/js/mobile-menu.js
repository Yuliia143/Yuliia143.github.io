let header = document.querySelector(".header");
let navMain = document.querySelector(".navigation");
let navToggle = document.querySelector(".navigation__toggle");
navToggle.addEventListener('click', function () {
    if (header.classList.contains("navigation--closed")) {
        header.classList.remove("navigation--closed");
        header.classList.add("navigation--opened");
    } else {
        header.classList.add("navigation--closed");
        header.classList.remove("navigation--opened");
    }
});