let link = document.querySelector(".user-list__login");
let popup = document.querySelector(".modal__log-in");
let close = popup.querySelector(".modal__log-in--close");
let form = popup.querySelector(".login-form");
let login = form.querySelector("[name=login]");
let password = form.querySelector("[name=password]");
let storage = localStorage.getItem("login");
let overlay = document.querySelector(".modal__overlay");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal__log-in--show");
    overlay.classList.add("modal__overlay--show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal__log-in--show");
    popup.classList.remove("modal__log-in--error");
    overlay.classList.remove("modal__overlay--show");
});

if (window.matchMedia("(max-width: 767px)").matches) {
    let close_mobile = form.querySelector(".btn-close");
    close_mobile.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal__log-in--show");
        popup.classList.remove("modal__log-in--error");
        overlay.classList.remove("modal__overlay--show");
    });
}

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        console.log("Put login and password");
        popup.classList.add("modal__log-in--error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal__log-in--show")) {
            popup.classList.remove("modal__log-in--show");
            popup.classList.remove("modal__log-in--error");
            overlay.classList.remove("modal__overlay--show");
        }
    }
});