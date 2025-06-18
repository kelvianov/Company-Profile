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
        image: 'desktop3.jpg',
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
        hero.style.backgroundImage = `url('images/${slides[index].image}')`;        // Remove previous slide classes
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
        subtitle.textContent = slides[index].subtitle;
        title.innerHTML = slides[index].title;
        
        // Fade text back in with delay for smoother effect
        setTimeout(() => {
            subtitle.style.opacity = '1';
            title.style.opacity = '1';
        }, 100);
    }, 400);
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// Manual dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Initialize first slide
showSlide(0);

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');    // Open mobile menu
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
