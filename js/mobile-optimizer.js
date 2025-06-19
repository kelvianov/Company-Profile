/* MOBILE OPTIMIZER - JavaScript khusus untuk optimasi mobile */
/* File ini berisi optimasi loading gambar dan performa mobile */

// Mobile Image Loading Optimization
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
    }

    // Mobile performance optimizations
    document.addEventListener('DOMContentLoaded', function() {
        // Reduce animation intensity on mobile
        if (window.innerWidth <= 480) {
            const style = document.createElement('style');
            style.textContent = `
                * {
                    transition-duration: 0.2s !important;
                    animation-duration: 0.2s !important;
                }
            `;
            document.head.appendChild(style);
        }
    });
})();
