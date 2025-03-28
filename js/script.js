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

// Video Modal
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src');
    });
}

if (videoModal !== null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute(
            'src',
            videoSrc + '?autoplay=1&modestbranding=1&showInfo=0'
        );
    });

    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', videoSrc);
    });
}

// Project Modal
const detailsBtns = document.querySelectorAll('.project-modal-details');

detailsBtns.forEach((detailsBtn) => {
    detailsBtn.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo(0, 0);

        const modalId = detailsBtn.getAttribute('data-modal-target');

        const modal = bootstrap.Modal.getInstance(
            document.getElementById(modalId)
        );

        if (modal) {
            modal.hide();
        }
    });
});
