// MOBILE IMAGE OPTIMIZER - KHUSUS MOBILE SAJA
// Desktop tetap menggunakan gambar original tanpa perubahan

class MobileOnlyOptimizer {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.mobileCache = new Map();
        this.isInitialized = false;
    }

    // Deteksi mobile device yang akurat
    isMobileDevice() {
        return window.innerWidth <= 768 || 
               /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0);
    }

    // Compress gambar khusus untuk mobile
    async compressForMobile(imagePath) {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            img.onload = () => {
                // Mobile compression settings - aggressive compression
                const maxWidth = 800;
                const maxHeight = 600;
                const quality = 0.65; // 65% quality untuk balance speed vs quality
                
                let { width, height } = img;
                
                // Calculate new dimensions
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                if (height > maxHeight) {
                    width = (width * maxHeight) / height;
                    height = maxHeight;
                }
                
                // Set canvas dan compress
                this.canvas.width = width;
                this.canvas.height = height;
                this.ctx.drawImage(img, 0, 0, width, height);
                
                const compressedDataUrl = this.canvas.toDataURL('image/jpeg', quality);
                resolve(compressedDataUrl);
            };
            
            img.onerror = () => {
                console.warn(`Failed to compress mobile image: ${imagePath}`);
                resolve(null); // Return null jika gagal
            };
            
            img.src = `images/${imagePath}`;
        });
    }

    // Get image source - compressed untuk mobile, original untuk desktop
    async getImageSrc(imagePath) {
        // DESKTOP: selalu return original tanpa processing
        if (!this.isMobileDevice()) {
            return `images/${imagePath}`;
        }
        
        // MOBILE: check cache atau compress
        const cacheKey = `mobile_${imagePath}`;
        
        if (this.mobileCache.has(cacheKey)) {
            return this.mobileCache.get(cacheKey);
        }
        
        // Compress untuk mobile
        try {
            const compressedSrc = await this.compressForMobile(imagePath);
            
            if (compressedSrc) {
                this.mobileCache.set(cacheKey, compressedSrc);
                console.log(`Mobile compressed: ${imagePath}`);
                return compressedSrc;
            } else {
                // Fallback ke original jika compress gagal
                return `images/${imagePath}`;
            }
        } catch (error) {
            console.warn('Mobile compression error:', error);
            return `images/${imagePath}`;
        }
    }

    // Preload khusus mobile
    async preloadMobileImages(slideArray) {
        if (!this.isMobileDevice()) {
            console.log('Desktop detected - using original images');
            return; // Skip preload untuk desktop
        }
        
        console.log('Mobile detected - starting compression...');
        
        for (const slide of slideArray) {
            try {
                await this.getImageSrc(slide.image);
            } catch (error) {
                console.warn(`Failed to preload mobile: ${slide.image}`);
            }
        }
        
        console.log('Mobile images compressed and cached!');
    }
}

// Initialize mobile optimizer
const mobileOptimizer = new MobileOnlyOptimizer();

// Enhanced showSlide function yang detect mobile/desktop
async function showSlideOptimized(index) {
    if (!slides[index]) return;
    
    const slide = slides[index];
    const hero = document.querySelector('.hero');
    const subtitle = document.querySelector('.hero-subtitle');
    const title = document.querySelector('.hero-title');
    
    // Fade out text
    subtitle.style.opacity = '0';
    title.style.opacity = '0';
    
    setTimeout(async () => {
        // Get optimal image source (mobile = compressed, desktop = original)
        const imageSrc = await mobileOptimizer.getImageSrc(slide.image);
        
        // Update background image
        hero.style.backgroundImage = `url('${imageSrc}')`;
        
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
        subtitle.textContent = slide.subtitle;
        title.innerHTML = slide.title;
        
        // Fade text back in with delay for smoother effect
        setTimeout(() => {
            subtitle.style.opacity = '1';
            title.style.opacity = '1';
        }, 100);
    }, 400);
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Override global showSlide HANYA jika mobile optimizer berhasil load
if (typeof window !== 'undefined') {
    // Backup original function jika ada
    window.originalShowSlide = window.showSlide;
    
    // Replace dengan optimized version
    window.showSlide = showSlideOptimized;
    
    // Initialize saat DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        // Preload mobile images jika mobile device
        if (typeof slides !== 'undefined') {
            mobileOptimizer.preloadMobileImages(slides);
        }
        
        const deviceType = mobileOptimizer.isMobileDevice() ? 'Mobile' : 'Desktop';
        console.log(`Mobile Optimizer initialized for: ${deviceType}`);
    });
}
