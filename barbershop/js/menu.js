let navMain = document.querySelector(".navigation");
let navToggle = document.querySelector(".navigation__toggle");

navMain.classList.remove("navigation--nojs");

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains("navigation--closed")) {
        navMain.classList.remove("navigation--closed");
        navMain.classList.add("navigation--opened");
    } else {
        navMain.classList.add("navigation--closed");
        navMain.classList.remove("navigation--opened");
    }
});