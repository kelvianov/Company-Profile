/* SLIDER.JS - Unified JavaScript for Monyenyo Website */
/* This file contains all JavaScript functionality in one place */

// NAVBAR SCROLL FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    function updateNavbar() {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            header.classList.remove('hide-on-scroll', 'show-on-scroll-up');
            if (scrollY <= 50) {
                // At top - transparent navbar
            } else if (scrollDirection === 'down' && scrollY > 50) {
                header.classList.add('hide-on-scroll');
            } else if (scrollDirection === 'up' && scrollY > 50) {
                header.classList.add('show-on-scroll-up');
            }
        } else {
            header.classList.remove('hide-on-scroll');
            header.classList.remove('show-on-scroll-up');
            header.classList.remove('desktop-transparent', 'desktop-solid');
            const isAbout = window.location.pathname.includes('about.html');
            const isMenu = window.location.pathname.includes('menu.html');
            if (isAbout || isMenu) {
                header.classList.add('desktop-solid');
            } else {
                if (scrollY > 100) {
                    header.classList.add('desktop-solid');
                } else {
                    header.classList.add('desktop-transparent');
                }
            }
        }
        lastScrollY = scrollY;
    }
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();
});

// SLIDER CORE FUNCTIONALITY
let currentSlide = 0;
const hero = document.querySelector('.hero');
const subtitle = document.querySelector('.hero-subtitle');
const title = document.querySelector('.hero-title');
const dots = document.querySelectorAll('.dot');

const slides = [
    {
        image: 'deskrop1.jpg',
        subtitle: 'Soft. Crispy. Irresistible.',
        title: 'INDONESIA\'S BEST<br>BROWNIES PASTRY'
    },
    {
        image: 'desktop2.jpg', 
        subtitle: 'Fresh. Delicious. Premium.',
        title: 'INDONESIA\'S BEST<br>CAKE & PASTRY'
    },
    {
        image: 'desktop4.jpg', // diganti dari desktop3.jpg
        subtitle: 'Sweet. Perfect. Unforgettable.',
        title: 'INDONESIA\'S BEST<br>DESSERT EXPERIENCE'
    }
];

// Preload remaining images after initial load
function preloadImages() {
    slides.forEach((slide, index) => {
        if (index > 0) { // Skip first image as it's already preloaded in HTML
            const img = new Image();
            img.src = `images/${slide.image}`;
        }
    });
}

// Preload images after a short delay
setTimeout(preloadImages, 1000);

function showSlide(index) {
    // Add fade out effect for text
    subtitle.style.opacity = '0';
    title.style.opacity = '0';
    
    setTimeout(() => {
        // Update background image with smooth transition
        hero.style.backgroundImage = `url('images/${slides[index].image}')`;
        
        // Remove previous slide classes
        hero.className = 'hero';
        
        // Add slide-specific class
        if (index === 0) {
            hero.classList.add('slide-1');
        } else if (index === 1) {
            hero.classList.add('slide-2');
        } else if (index === 2) {
            hero.classList.add('slide-3');
        }
        
        // Update text content
        subtitle.innerHTML = slides[index].subtitle;
        title.innerHTML = slides[index].title;
        
        // Fade text back in
        setTimeout(() => {
            subtitle.style.opacity = '1';
            title.style.opacity = '1';
        }, 200);
        
    }, 300);
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Auto-play functionality
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start auto-play after page load
let autoPlayInterval;
window.addEventListener('load', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
});

// Manual dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Initialize first slide
showSlide(0);

// MOBILE MENU FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    let lastScrollPosition = 0;
    function handleHamburgerClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (hamburgerMenu && mobileMenuOverlay) {
            if (mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            } else {
                lastScrollPosition = window.scrollY;
                hamburgerMenu.classList.add('active');
                hamburgerMenu.classList.add('menu-open');
                mobileMenuOverlay.classList.add('active');
                document.body.style.position = 'fixed';
                document.body.style.top = `-${lastScrollPosition}px`;
                document.body.style.left = '0';
                document.body.style.right = '0';
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
            }
        }
    }
    function closeMobileMenu() {
        if (hamburgerMenu && mobileMenuOverlay) {
            hamburgerMenu.classList.remove('active');
            hamburgerMenu.classList.remove('menu-open');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            window.scrollTo(0, lastScrollPosition);
        }
    }
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', handleHamburgerClick);
        hamburgerMenu.addEventListener('touchstart', handleHamburgerClick);
        const spans = hamburgerMenu.querySelectorAll('span');
        spans.forEach(span => {
            span.addEventListener('click', handleHamburgerClick);
            span.addEventListener('touchstart', handleHamburgerClick);
        });
    }
    if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
        closeMenu.addEventListener('touchstart', closeMobileMenu);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
    if (mobileNavLinks.length > 0) {
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// MOBILE OPTIMIZATION FUNCTIONALITY
(function() {
    // Only run on mobile devices
    if (window.innerWidth > 768) {
        return;
    }

    // Add mobile-specific optimizations
    const hero = document.querySelector('.hero');
    
    if (hero) {
        // Add loading class initially
        hero.classList.add('loading');
        
        // Check if background image is loaded
        function checkImageLoad() {
            const bgImage = window.getComputedStyle(hero).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                const img = new Image();
                img.onload = function() {
                    hero.classList.remove('loading');
                };
                img.onerror = function() {
                    // Keep loading state if image fails
                    console.log('Background image failed to load');
                };
                // Extract URL from CSS background-image property
                const url = bgImage.slice(4, -1).replace(/['"]/g, '');
                img.src = url;
            }
        }
        
        // Check image load after a short delay
        setTimeout(checkImageLoad, 100);
        
        // Mobile-specific image optimization
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (window.innerWidth <= 768) {
                    // Re-optimize for new mobile viewport
                    checkImageLoad();
                }
            }, 250);
        });
    }    // Mobile performance optimizations
    document.addEventListener('DOMContentLoaded', function() {
        // Mobile optimizations without affecting animations
        console.log('Mobile optimizations loaded');
    });
})();
