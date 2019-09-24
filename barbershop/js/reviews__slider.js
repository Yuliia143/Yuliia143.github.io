let slideReviewsIndex = 1;
showReviewsSlides(slideReviewsIndex);

function plusReviewsSlides(n) {
    showReviewsSlides(slideReviewsIndex += n);
}

function currentReviewsSlide(n) {
    showReviewsSlides(slideReviewsIndex = n);
}

function showReviewsSlides(n) {
    let i;
    let reviews__slides = document.getElementsByClassName("reviews__slider__item");
    let reviews__toggles = document.getElementsByClassName("reviews__slider__toggle");
    if (n > reviews__slides.length) {
        slideReviewsIndex = 1;
    }
    if (n < 1) {
        slideReviewsIndex = reviews__slides.length;
    }
    for (i = 0; i < reviews__toggles.length; i++) {
        reviews__slides[i].style.display = "none";
        reviews__toggles[i].className = reviews__toggles[i].className.replace(" active", "");
    }
    reviews__slides[slideReviewsIndex - 1].style.display = "block";
    reviews__toggles[slideReviewsIndex - 1].className += " active";
}