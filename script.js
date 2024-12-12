// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show/hide the scroll button based on scroll position
window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = 
        (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'block' : 'none';
});

// Scroll to the top smoothly when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Home link dropdown functionality
const homeLink = document.getElementById('home-link');
const homeDropdown = document.getElementById('home-dropdown');

if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        homeDropdown.style.display = homeDropdown.style.display === 'block' ? 'none' : 'block';
    });
}

// Close dropdown if clicking outside
window.addEventListener('click', (e) => {
    if (homeLink && !homeLink.contains(e.target) && !homeDropdown.contains(e.target)) {
        homeDropdown.style.display = 'none';
    }
});

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
