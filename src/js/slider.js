$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, // Show one item at a time
        loop: true, // Enable infinite loop
        margin: 0, // No spacing between items
        nav: false, // Disable next/prev buttons
        dots: true, // Enable dot navigation
        autoplay: true, // Auto-slide the banners
        autoplayTimeout: 5000, // 5 seconds (adjust for slower autoplay)
        autoplayHoverPause: true, // Pause on hover
        smartSpeed: 2000, // Transition speed in milliseconds (1 second)
        dragEndSpeed: 600 // Smooth drag effect
    });
});