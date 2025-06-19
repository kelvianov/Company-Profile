/* SLIDER CORE - Universal JavaScript untuk slider functionality */
/* File ini berisi logic slider yang sama untuk desktop dan mobile */

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
