(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
// Initialize the image carousel with fade effect
$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    animateOut: 'fadeOut',  // This enables the fade-out transition effect
    animateIn: 'fadeIn',    // This enables the fade-in transition effect
    onChanged: syncCarousels
});

// Initialize the text carousel with fade effect
$(".text-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
    loop: true,
    smartSpeed: 1500,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    onChanged: syncCarousels
});

// Function to synchronize both carousels
function syncCarousels(event) {
    const imageIndex = $(".header-carousel").find('.owl-item.active').index();
    const textIndex = $(".text-carousel").find('.owl-item.active').index();

    // Check if the indices are different to keep them synchronized
    if (imageIndex !== textIndex) {
        $(".text-carousel").trigger("to.owl.carousel", [imageIndex, 1500, true]);
        $(".header-carousel").trigger("to.owl.carousel", [textIndex, 1500, true]);
    }
}


// Initialize Slider
function initializeSlider() {
    const slider = document.querySelector('.slider');
    const imageBefore = document.querySelector('.image-before');
    const imageAfter = document.querySelector('.image-after');

    slider.addEventListener('input', function (e) {
        const value = e.target.value;
        imageBefore.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        imageAfter.style.clipPath = `inset(0 0 0 ${value}%)`;
    });
}

// Run initializeSlider on page load
document.addEventListener("DOMContentLoaded", initializeSlider);



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);

