if (window.matchMedia("(max-width: 767px)").matches) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slider__item");
        let toggles = document.getElementsByClassName("slider__toggle");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < toggles.length; i++) {
            toggles[i].className = toggles[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        toggles[slideIndex - 1].className += " active";
    }
}