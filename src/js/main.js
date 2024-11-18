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
    // Smooth scrolldown to last location
    const lastScrollPosition = window.scrollY;

    setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 3);

    setTimeout(() => {
        window.scrollTo({
            top: lastScrollPosition,
            behavior: 'smooth'
        });
    }, 20);

    // Hamburger menu
    let hamburger = document.getElementById('hamburger');
    let menuOverlay = document.getElementById('menu-overlay');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuOverlay.classList.toggle('active');

         if (menuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            menuOverlay.style.overflowY = 'auto'; 
            
            menuOverlay.style.visibility = 'visible';
        } else {
            document.body.style.overflow = '';
            menuOverlay.style.overflowY = '';

            setTimeout(() => {
                menuOverlay.style.visibility = 'hidden';
            }, 300);
        }
    });

});
