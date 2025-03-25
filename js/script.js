// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    });
}

// Navbar Scroll Effect with Opacity and Refresh Handling
function userScroll() {
    const navbar = document.querySelector('.navbar');

    function applyNavbarStyles() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('navbar-sticky');
        }
    }

    // Apply styles on scroll
    window.addEventListener('scroll', applyNavbarStyles);

    // Check and apply styles on page load/refresh
    window.addEventListener('load', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
            navbar.classList.add('navbar-sticky');
            navbar.style.opacity = '0.95';
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);
