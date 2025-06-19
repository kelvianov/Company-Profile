/* MOBILE MENU - JavaScript khusus untuk mobile menu functionality */
/* File ini hanya dimuat pada mobile device */

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing mobile menu...');
    
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Debug log
    console.log('Hamburger element:', hamburgerMenu);
    console.log('Overlay element:', mobileMenuOverlay);
    console.log('Close element:', closeMenu);

    // Ensure hamburger exists
    if (hamburgerMenu) {
        console.log('Adding click listener to hamburger...');
        
        // Multiple event listeners for better compatibility
        hamburgerMenu.addEventListener('click', handleHamburgerClick);
        hamburgerMenu.addEventListener('touchstart', handleHamburgerClick);
        
        // Also add to the spans inside
        const spans = hamburgerMenu.querySelectorAll('span');
        spans.forEach(span => {
            span.addEventListener('click', handleHamburgerClick);
            span.addEventListener('touchstart', handleHamburgerClick);
        });
    } else {
        console.error('Hamburger menu element not found!');
    }    function handleHamburgerClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Hamburger clicked/touched!');
        
        if (hamburgerMenu && mobileMenuOverlay) {
            // Check if menu is currently open
            if (mobileMenuOverlay.classList.contains('active')) {
                // Menu is open, close it
                closeMobileMenu();
            } else {
                // Menu is closed, open it
                hamburgerMenu.classList.add('active');
                hamburgerMenu.classList.add('menu-open');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Menu opened');
            }
        }
    }

    // Close mobile menu
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        if (hamburgerMenu && mobileMenuOverlay) {
            hamburgerMenu.classList.remove('active');
            hamburgerMenu.classList.remove('menu-open');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }    // Close menu when clicking close button
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
        closeMenu.addEventListener('touchstart', closeMobileMenu);
        console.log('Close button event listener added');
    } else {
        console.error('Close menu button not found!');
    }

    // Close menu when clicking overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                console.log('Overlay clicked, closing menu');
                closeMobileMenu();
            }
        });
    }

    // Close menu when clicking nav links
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Nav link clicked, closing menu');
                closeMobileMenu();
            });
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
