/* MOBILE MENU - JavaScript khusus untuk mobile menu functionality */
/* File ini hanya dimuat pada mobile device */

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Check if elements exist (mobile only)
    if (!hamburgerMenu || !mobileMenuOverlay || !closeMenu) {
        return; // Exit if mobile elements don't exist
    }

    // Open mobile menu
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.add('active');
        hamburgerMenu.classList.add('menu-open');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close mobile menu
    function closeMobileMenu() {
        hamburgerMenu.classList.remove('active');
        hamburgerMenu.classList.remove('menu-open');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    closeMenu.addEventListener('click', closeMobileMenu);

    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
