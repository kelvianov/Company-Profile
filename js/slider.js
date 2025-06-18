let currentSlide = 0;
const hero = document.querySelector('.hero');
const subtitle = document.querySelector('.hero-subtitle');
const title = document.querySelector('.hero-title');
const dots = document.querySelectorAll('.dot');
let imagesLoaded = false;
let slideInterval;
let imageCache = {}; // Cache loaded images for instant access
let isAnimating = false;

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

// ULTRA-FAST AGGRESSIVE PRELOADING
function aggressivePreload() {
    const startTime = performance.now();
    let loadedCount = 0;
    const totalImages = slides.length;
    
    console.log('🚀 Starting aggressive image preloading...');
    
    slides.forEach((slide, index) => {
        const img = new Image();
        
        // Maximum priority settings
        img.crossOrigin = 'anonymous';
        img.decoding = 'async';
        img.loading = 'eager';
        img.fetchPriority = index === 0 ? 'high' : 'auto';
        
        img.onload = function() {
            // Store in cache for instant access
            imageCache[slide.image] = this.src;
            loadedCount++;
            
            const loadTime = performance.now() - startTime;
            console.log(`✅ Image ${index + 1}/${totalImages} loaded in ${loadTime.toFixed(2)}ms: ${slide.image}`);
            
            if (loadedCount === totalImages) {
                imagesLoaded = true;
                const totalTime = performance.now() - startTime;
                console.log(`🎯 ALL IMAGES LOADED in ${totalTime.toFixed(2)}ms - READY FOR ULTRA-SMOOTH ANIMATION!`);
                
                // Initialize first slide immediately
                requestAnimationFrame(() => showSlide(0));
            }
        };
        
        img.onerror = function() {
            console.error(`❌ Failed to load image: ${slide.image}`);
            // Create fallback but still continue
            imageCache[slide.image] = `images/${slide.image}`;
            loadedCount++;
            
            if (loadedCount === totalImages) {
                imagesLoaded = true;
                console.log('⚠️ All images processed (some with fallbacks) - Ready!');
                requestAnimationFrame(() => showSlide(0));
            }
        };
          img.src = `images/${slide.image}`;
    });
}

// ULTRA-FAST SLIDE TRANSITION FUNCTION - KEEP ORIGINAL TIMING
function showSlide(index) {
    // Prevent overlapping animations
    if (isAnimating) return;
    
    // Safety check
    if (!slides[index]) return;
    
    isAnimating = true;
    
    // Get cached image URL for fast loading
    const imageUrl = imageCache[slides[index].image] || `images/${slides[index].image}`;
    
    // KEEP ORIGINAL ANIMATION TIMING - ONLY OPTIMIZE LOADING
    subtitle.style.opacity = '0';
    title.style.opacity = '0';
    
    setTimeout(() => {
        // Use cached image for instant loading
        hero.style.backgroundImage = `url('${imageUrl}')`;
        
        // Update slide classes
        hero.className = 'hero';
        if (index === 0) hero.classList.add('slide-1');
        else if (index === 1) hero.classList.add('slide-2');
        else if (index === 2) hero.classList.add('slide-3');
        
        // Update text content
        subtitle.textContent = slides[index].subtitle;
        title.innerHTML = slides[index].title;
        
        // KEEP ORIGINAL FADE-IN TIMING
        setTimeout(() => {
            subtitle.style.opacity = '1';
            title.style.opacity = '1';
            
            // Update dots
            updateDots(index);
            
            // Animation complete
            isAnimating = false;
            
            console.log(`⚡ Slide ${index + 1} loaded with cached image - smooth original animation`);
        }, 300);
    }, 300);
}

function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === activeIndex) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// INSTANT AUTO-SLIDE (faster interval for responsive feel)
setInterval(nextSlide, 4000);

// OPTIMIZED DOT NAVIGATION - No delays, instant transitions
dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isAnimating) {
            currentSlide = index;
            showSlide(currentSlide);
        }
    });
    
    // Also support touch events for mobile
    dot.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (!isAnimating) {
            currentSlide = index;
            showSlide(currentSlide);
        }
    });
});

// START AGGRESSIVE PRELOADING IMMEDIATELY
aggressivePreload();

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