let lastScrollPosition = 0
let scrollDirection = 'unset'

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY 
    
    if (currentScrollPosition > lastScrollPosition) {
        console.log('Scrolling down')
            console.log(currentScrollPosition)
        if (scrollDirection !== 'down' && currentScrollPosition > 30) {
            scrollDirection = 'down'
            handleNavbarEvent('down')
        }
    } else if (currentScrollPosition < lastScrollPosition) {
        console.log('Scrolling up')
        if (scrollDirection !== 'up') {
            scrollDirection = 'up'
            handleNavbarEvent('up')
        }
    }

    lastScrollPosition = currentScrollPosition; 
});

function handleNavbarEvent(direction) {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    switch (direction) {
        case 'up':
            navbar.classList.remove('hide-navbar');
            navbar.classList.add('show-navbar');
            break;
        case 'down':
            navbar.classList.remove('show-navbar');
            navbar.classList.add('hide-navbar');
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lastScrollPosition = window.scrollY;
    console.log('ez')
    // Start at the top of the page
    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 3);

    // Scroll to the last scroll position
    setTimeout(() => {
        window.scrollTo({
            top: lastScrollPosition,
            behavior: 'smooth' // Uses CSS smooth scrolling
        });
    }, 100); // Slight delay to ensure the page is rendered

    let hamburger = document.getElementById('hamburger');
    let menuOverlay = document.getElementById('menu-overlay');
    console.log(hamburger)
    // Toggle Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuOverlay.classList.toggle('active');

        // Disable scrolling when the menu is open
        if (menuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

});
