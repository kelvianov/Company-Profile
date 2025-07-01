// translation.js - simple language toggle for index.html

document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            HOME: 'HOME',
            ABOUT: 'ABOUT',
            MENU: 'MENU',
            BLOGS: 'BLOGS',
            OUTLETS: 'OUTLETS',
            CONTACT: 'CONTACT',
            'Soft. Crispy. Irresistible.': 'Soft. Crispy. Irresistible.',
            "INDONESIA'S BEST\nBROWNIES PASTRY": "INDONESIA'S BEST<br>BROWNIES PASTRY",
            'OUR COMPANY': 'OUR COMPANY',
            'TRADITIONAL\nINDONESIAN FOODS\nAND HERITAGE': 'TRADITIONAL<br>INDONESIAN FOODS<br>AND HERITAGE',
            'The Heart of Every Kitchen': 'The Heart of Every Kitchen',
            'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.': 'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.',
            'Innovation Meets Tradition': 'Innovation Meets Tradition',
            "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.": "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.",
            'Learn More About Us': 'Learn More About Us',
            'SPECIALTY DISHES': 'SPECIALTY DISHES',
            'FRESH FROM THE KITCHEN': 'FRESH FROM THE KITCHEN',
            'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.': 'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.',
            'Traditional Indonesian': 'Traditional Indonesian',
            'Authentic recipes passed down through generations with original spices and cooking methods': 'Authentic recipes passed down through generations with original spices and cooking methods',
            'Modern Presentation': 'Modern Presentation',
            'Contemporary plating and presentation techniques while preserving authentic flavors': 'Contemporary plating and presentation techniques while preserving authentic flavors',
            'Premium Quality': 'Premium Quality',
            'Only the finest local ingredients sourced directly from trusted Indonesian suppliers': 'Only the finest local ingredients sourced directly from trusted Indonesian suppliers',
            'OUR SPECIALTY': 'OUR SPECIALTY',
            'DELICIOUS MENU': 'DELICIOUS MENU',
            'Discover our signature collection of traditional Indonesian brownies and pastries, crafted with love and the finest ingredients.': 'Discover our signature collection of traditional Indonesian brownies and pastries, crafted with love and the finest ingredients.',
            'Chocolate Brownies': 'Chocolate Brownies',
            'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.': 'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.',
            'Brownies': 'Brownies',
            'Traditional Pastry': 'Traditional Pastry',
            'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.': 'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.',
            'Pastry': 'Pastry',
            'Premium Cake': 'Premium Cake',
            'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.': 'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.',
            'Cake': 'Cake',            'View Full Menu': 'View Full Menu',
            'OUR STORIES': 'OUR STORIES',
            'STORIES & INSIGHTS': 'STORIES & INSIGHTS',
            'LATEST FROM BLOG': 'LATEST FROM BLOG',
            'Discover the passion, tradition, and innovation behind every Monyenyo creation': 'Discover the passion, tradition, and innovation behind every Monyenyo creation',
            'Discover the passion, tradition, and innovation behind every Monyenyo creation through our collection of stories, recipes, and behind-the-scenes moments.': 'Discover the passion, tradition, and innovation behind every Monyenyo creation through our collection of stories, recipes, and behind-the-scenes moments.',
            'FEATURED': 'FEATURED',
            'Heritage': 'Heritage',
            'The Art of Traditional Indonesian Brownies': 'The Art of Traditional Indonesian Brownies',
            'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies': 'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies',
            'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies. From ancient spice blending techniques to modern presentation methods, discover how we honor Indonesia\'s rich culinary heritage.': 'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies. From ancient spice blending techniques to modern presentation methods, discover how we honor Indonesia\'s rich culinary heritage.',
            'Recipes': 'Recipes',
            'Secrets to Perfect Brownies': 'Secrets to Perfect Brownies',
            'Behind Scenes': 'Behind Scenes',
            'Morning at Monyenyo Kitchen': 'Morning at Monyenyo Kitchen',            "Indonesia's Spice Heritage": "Indonesia's Spice Heritage",
            'Family Recipe Legacy': 'Family Recipe Legacy',
            'View All Stories': 'View All Stories',
            'Read Full Story': 'Read Full Story',
            'EXPLORE BY CATEGORY': 'EXPLORE BY CATEGORY',
            'Find stories that interest you most': 'Find stories that interest you most',
            'All Stories': 'All Stories',
            'Tips & Tricks': 'Tips & Tricks',
            'Head Pastry Chef': 'Head Pastry Chef',
            'by Chef Budi': 'by Chef Budi',
            'by Chef Sari': 'by Chef Sari',
            'by Team Monyenyo': 'by Team Monyenyo',
            'by Chef Maria': 'by Chef Maria',
            'by Chef Andi': 'by Chef Andi',
            'by Founder': 'by Founder',
            'Home Baking Made Simple': 'Home Baking Made Simple',
            'A Day in Monyenyo Kitchen': 'A Day in Monyenyo Kitchen',
            'Indonesian Spices in Modern Baking': 'Indonesian Spices in Modern Baking',
            'Traditional Pastry Recipes': 'Traditional Pastry Recipes',
            'Preserving Culinary Heritage': 'Preserving Culinary Heritage',
            'Master the art of creating the perfect brownie texture with our time-tested techniques and premium ingredient secrets.': 'Master the art of creating the perfect brownie texture with our time-tested techniques and premium ingredient secrets.',
            'Explore how traditional Indonesian spices like pandan, cinnamon, and nutmeg transform modern pastry creations.': 'Explore how traditional Indonesian spices like pandan, cinnamon, and nutmeg transform modern pastry creations.',
            'Follow our bakers through their daily routine of creating fresh, delicious pastries from dawn to dusk.': 'Follow our bakers through their daily routine of creating fresh, delicious pastries from dawn to dusk.',
            'Professional tips and tricks to elevate your home baking game and achieve bakery-quality results.': 'Professional tips and tricks to elevate your home baking game and achieve bakery-quality results.',
            'Recreate classic Indonesian pastries at home with our authentic family recipes passed down through generations.': 'Recreate classic Indonesian pastries at home with our authentic family recipes passed down through generations.',
            'Our mission to preserve and celebrate Indonesia\'s rich baking traditions while embracing modern innovation.': 'Our mission to preserve and celebrate Indonesia\'s rich baking traditions while embracing modern innovation.',
            'Load More Stories': 'Load More Stories',
            'Stay in the Loop': 'Stay in the Loop',
            'Get our latest stories, recipes, and exclusive offers delivered straight to your inbox.': 'Get our latest stories, recipes, and exclusive offers delivered straight to your inbox.',
            'Subscribe': 'Subscribe',
            'We respect your privacy. Unsubscribe at any time.': 'We respect your privacy. Unsubscribe at any time.',
            'Enter your email address': 'Enter your email address',
            'Traditional Indonesian cuisine with authentic flavors and modern culinary techniques.': 'Traditional Indonesian cuisine with authentic flavors and modern culinary techniques.',
            'Contact Us': 'Contact Us',
            'We\'d love to hear from you. Reach out for any questions, feedback, or collaboration opportunities.': 'We\'d love to hear from you. Reach out for any questions, feedback, or collaboration opportunities.',
            'Name': 'Name',
            'Your Name': 'Your Name',
            'Email': 'Email',
            'you@email.com': 'you@email.com',
            'Message': 'Message',
            'Type your message...': 'Type your message...',
            'Send Message': 'Send Message',
            'Message sent': 'Message sent',
            'Follow Us': 'Follow Us',
            'Social Media': 'Social Media',
            'All Rights Reserved.': 'All Rights Reserved.'
        },
        id: {
            HOME: 'BERANDA',
            ABOUT: 'TENTANG',
            MENU: 'MENU',
            BLOGS: 'BLOG',
            OUTLETS: 'OUTLET',
            CONTACT: 'KONTAK',
            'Soft. Crispy. Irresistible.': 'Lembut. Renyah. Tak Tertahankan.',
            "INDONESIA'S BEST\nBROWNIES PASTRY": "BROWNIES PASTRY<br>TERBAIK DI INDONESIA",
            'OUR COMPANY': 'TENTANG KAMI',
            'TRADITIONAL\nINDONESIAN FOODS\nAND HERITAGE': 'MAKANAN TRADISIONAL<br>INDONESIA & WARISAN',
            'The Heart of Every Kitchen': 'Jantung Setiap Dapur',
            'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.': 'Restoran bukan sekadar tempat makan—mereka adalah pusat tradisi, budaya, dan kreativitas.',
            'Innovation Meets Tradition': 'Inovasi Bertemu Tradisi',
            "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.": "Restoran akan terus berkembang, menyeimbangkan tradisi memasak dengan kebutuhan konsumen modern.",
            'Learn More About Us': 'Selengkapnya Tentang Kami',
            'SPECIALTY DISHES': 'MENU SPESIAL',
            'FRESH FROM THE KITCHEN': 'SEGAR DARI DAPUR',
            'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.': 'Rasakan perpaduan sempurna cita rasa tradisional Indonesia dengan teknik kuliner modern, dibuat setiap hari dengan bahan terbaik.',
            'Traditional Indonesian': 'Masakan Tradisional',
            'Authentic recipes passed down through generations with original spices and cooking methods': 'Resep otentik turun-temurun dengan rempah dan teknik asli',
            'Modern Presentation': 'Presentasi Modern',
            'Contemporary plating and presentation techniques while preserving authentic flavors': 'Teknik plating dan presentasi modern tanpa menghilangkan cita rasa asli',
            'Premium Quality': 'Kualitas Premium',
            'Only the finest local ingredients sourced directly from trusted Indonesian suppliers': 'Hanya bahan lokal terbaik langsung dari pemasok terpercaya',
            'OUR SPECIALTY': 'SPESIAL KAMI',
            'DELICIOUS MENU': 'MENU LEZAT',
            'Discover our signature collection of traditional Indonesian brownies and pastries, crafted with love and the finest ingredients.': 'Temukan koleksi brownies dan pastry tradisional khas kami, dibuat dengan cinta dan bahan terbaik.',
            'Chocolate Brownies': 'Brownies Cokelat',
            'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.': 'Brownies cokelat legit dengan kakao premium dan rempah tradisional. Manis dan tekstur seimbang.',
            'Brownies': 'Brownies',
            'Traditional Pastry': 'Pastry Tradisional',
            'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.': 'Pastry Indonesia otentik, luar renyah dalam lembut. Resep turun-temurun.',
            'Pastry': 'Pastry',
            'Premium Cake': 'Kue Premium',
            'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.': 'Kue lapis mewah dengan bahan premium dan tampilan modern. Perpaduan tradisi dan gaya kontemporer.',
            'Cake': 'Kue',            'View Full Menu': 'Lihat Menu Lengkap',
            'OUR STORIES': 'CERITA KAMI',
            'STORIES & INSIGHTS': 'CERITA & WAWASAN',
            'LATEST FROM BLOG': 'TERBARU DARI BLOG',
            'Discover the passion, tradition, and innovation behind every Monyenyo creation': 'Temukan semangat, tradisi, dan inovasi di balik setiap kreasi Monyenyo',
            'Discover the passion, tradition, and innovation behind every Monyenyo creation through our collection of stories, recipes, and behind-the-scenes moments.': 'Temukan semangat, tradisi, dan inovasi di balik setiap kreasi Monyenyo melalui koleksi cerita, resep, dan momen di balik layar kami.',
            'FEATURED': 'UNGGULAN',
            'Heritage': 'Warisan',
            'The Art of Traditional Indonesian Brownies': 'Seni Brownies Tradisional Indonesia',
            'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies': 'Jelajahi tradisi memanggang turun-temurun saat kami mengungkap rahasia di balik brownies andalan kami',
            'Journey through generations of baking traditions as we unveil the secrets behind our signature brownies. From ancient spice blending techniques to modern presentation methods, discover how we honor Indonesia\'s rich culinary heritage.': 'Jelajahi tradisi memanggang turun-temurun saat kami mengungkap rahasia di balik brownies andalan kami. Dari teknik mencampur rempah kuno hingga metode presentasi modern, temukan bagaimana kami menghormati warisan kuliner Indonesia yang kaya.',
            'Recipes': 'Resep',
            'Secrets to Perfect Brownies': 'Rahasia Brownies Sempurna',
            'Behind Scenes': 'Di Balik Layar',
            'Morning at Monyenyo Kitchen': 'Pagi di Dapur Monyenyo',            "Indonesia's Spice Heritage": "Warisan Rempah Indonesia",
            'Family Recipe Legacy': 'Warisan Resep Keluarga',
            'View All Stories': 'Lihat Semua Cerita',
            'Read Full Story': 'Baca Cerita Lengkap',
            'EXPLORE BY CATEGORY': 'JELAJAHI BERDASARKAN KATEGORI',
            'Find stories that interest you most': 'Temukan cerita yang paling menarik bagi Anda',
            'All Stories': 'Semua Cerita',
            'Tips & Tricks': 'Tips & Trik',
            'Head Pastry Chef': 'Kepala Koki Pastry',
            'by Chef Budi': 'oleh Chef Budi',
            'by Chef Sari': 'oleh Chef Sari',
            'by Team Monyenyo': 'oleh Tim Monyenyo',
            'by Chef Maria': 'oleh Chef Maria',
            'by Chef Andi': 'oleh Chef Andi',
            'by Founder': 'oleh Pendiri',
            'Home Baking Made Simple': 'Memanggang di Rumah Jadi Mudah',
            'A Day in Monyenyo Kitchen': 'Sehari di Dapur Monyenyo',
            'Indonesian Spices in Modern Baking': 'Rempah Indonesia dalam Kue Modern',
            'Traditional Pastry Recipes': 'Resep Pastry Tradisional',
            'Preserving Culinary Heritage': 'Melestarikan Warisan Kuliner',
            'Master the art of creating the perfect brownie texture with our time-tested techniques and premium ingredient secrets.': 'Kuasai seni menciptakan tekstur brownies sempurna dengan teknik teruji dan rahasia bahan premium kami.',
            'Explore how traditional Indonesian spices like pandan, cinnamon, and nutmeg transform modern pastry creations.': 'Jelajahi bagaimana rempah tradisional Indonesia seperti pandan, kayu manis, dan pala mengubah kreasi pastry modern.',
            'Follow our bakers through their daily routine of creating fresh, delicious pastries from dawn to dusk.': 'Ikuti rutinitas harian para baker kami dalam menciptakan pastry segar dan lezat dari fajar hingga senja.',
            'Professional tips and tricks to elevate your home baking game and achieve bakery-quality results.': 'Tips dan trik profesional untuk meningkatkan kemampuan memanggang di rumah dan mencapai hasil berkualitas toko roti.',
            'Recreate classic Indonesian pastries at home with our authentic family recipes passed down through generations.': 'Buat ulang pastry klasik Indonesia di rumah dengan resep keluarga otentik yang diturunkan lintas generasi.',
            'Our mission to preserve and celebrate Indonesia\'s rich baking traditions while embracing modern innovation.': 'Misi kami melestarikan dan merayakan tradisi memanggang Indonesia yang kaya sambil merangkul inovasi modern.',
            'Load More Stories': 'Muat Lebih Banyak Cerita',
            'Stay in the Loop': 'Tetap Terhubung',
            'Get our latest stories, recipes, and exclusive offers delivered straight to your inbox.': 'Dapatkan cerita terbaru, resep, dan penawaran eksklusif langsung ke email Anda.',
            'Subscribe': 'Berlangganan',
            'We respect your privacy. Unsubscribe at any time.': 'Kami menghormati privasi Anda. Batal berlangganan kapan saja.',
            'Enter your email address': 'Masukkan alamat email Anda',
            'Traditional Indonesian cuisine with authentic flavors and modern culinary techniques.': 'Masakan tradisional Indonesia dengan cita rasa otentik dan teknik kuliner modern.',
            'Contact Us': 'Hubungi Kami',
            'We\'d love to hear from you. Reach out for any questions, feedback, or collaboration opportunities.': 'Kami ingin mendengar dari Anda. Hubungi kami untuk pertanyaan, umpan balik, atau peluang kolaborasi.',
            'Name': 'Nama',
            'Your Name': 'Nama Anda',
            'Email': 'Email',
            'you@email.com': 'anda@email.com',
            'Message': 'Pesan',
            'Type your message...': 'Ketik pesan Anda...',
            'Send Message': 'Kirim Pesan',
            'Message sent': 'Pesan terkirim',
            'Follow Us': 'Ikuti Kami',
            'Social Media': 'Media Sosial',
            'All Rights Reserved.': 'Hak Cipta Dilindungi.'
        }
    };

    function translatePage(lang) {
        // Translate nav links
        document.querySelectorAll('.nav-link').forEach(function(link) {
            if (link.hasAttribute('data-no-translate')) return;
            const key = link.textContent.trim();
            if (translations[lang][key]) link.textContent = translations[lang][key];
        });
        // Translate mobile nav
        document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
            if (link.hasAttribute('data-no-translate')) return;
            const key = link.textContent.trim();
            if (translations[lang][key]) link.textContent = translations[lang][key];
        });
        // Translate static text (headings, etc)
        document.querySelectorAll('[data-translate]').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'A' || el.tagName === 'H3' || el.tagName === 'DIV') {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        // Translate placeholders
        document.querySelectorAll('input[placeholder]').forEach(function(input) {
            if (input.hasAttribute('data-no-translate')) return;
            const key = input.getAttribute('placeholder');
            if (translations[lang][key]) {
                input.setAttribute('placeholder', translations[lang][key]);
            }
        });
        // Translate data-translate-placeholder
        document.querySelectorAll('[data-translate-placeholder]').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
        // Translate labels, buttons, etc
        document.querySelectorAll('label[data-translate], button[data-translate]').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        // Translate footer
        document.querySelectorAll('.footer h4').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            const key = el.textContent.trim();
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        document.querySelectorAll('.footer-desc').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            const key = el.textContent.trim();
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });
        document.querySelectorAll('.footer-bottom p').forEach(function(el) {
            if (el.hasAttribute('data-no-translate')) return;
            if (el.hasAttribute('data-translate')) {
                const key = el.getAttribute('data-translate');
                if (translations[lang][key]) {
                    el.innerHTML = '© 2024 Monyenyo. ' + translations[lang][key];
                }
            } else {
                const key = el.textContent.trim().replace('© 2024 Monyenyo. ', '');
                if (translations[lang][key]) el.innerHTML = '© 2024 Monyenyo. ' + translations[lang][key];
            }
        });
    }

    // EN/ID button event
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
            // Simpan pilihan bahasa ke localStorage
            localStorage.setItem('monyenyo_lang', lang);
        });
    });

    // Mark all static text for translation
    function markTranslatables() {
        const staticMap = {
            'p.hero-subtitle': 'Soft. Crispy. Irresistible.',
            'h1.hero-title': "INDONESIA'S BEST\nBROWNIES PASTRY",
            'span.company-label': 'OUR COMPANY',
            'h1.hero-main-title': 'TRADITIONAL\nINDONESIAN FOODS\nAND HERITAGE',
            'h2.hero-main-title': 'TRADITIONAL\nINDONESIAN FOODS\nAND HERITAGE',
            'h3:contains("The Heart of Every Kitchen")': 'The Heart of Every Kitchen',
            'p:contains("Restaurants are much more than just places where food is sold")': 'Restaurants are much more than just places where food is sold—they are hubs of tradition, culture, and creativity.',
            'h3:contains("Innovation Meets Tradition")': 'Innovation Meets Tradition',
            'p:contains("Restaurants will continue to evolve")': "Restaurants will continue to evolve, balancing the rich traditions of cooking with the modern consumer's needs.",
            'a.about-btn': 'Learn More About Us',
            'span.fresh-label': 'SPECIALTY DISHES',
            'h2.fresh-title': 'FRESH FROM THE KITCHEN',
            'p.fresh-description': 'Experience the perfect fusion of traditional Indonesian flavors with modern culinary techniques, crafted daily with the finest ingredients.',
            'h3:contains("Traditional Indonesian")': 'Traditional Indonesian',
            'p:contains("Authentic recipes passed down through generations")': 'Authentic recipes passed down through generations with original spices and cooking methods',
            'h3:contains("Modern Presentation")': 'Modern Presentation',
            'p:contains("Contemporary plating and presentation techniques")': 'Contemporary plating and presentation techniques while preserving authentic flavors',
            'h3:contains("Premium Quality")': 'Premium Quality',
            'p:contains("Only the finest local ingredients sourced directly")': 'Only the finest local ingredients sourced directly from trusted Indonesian suppliers',
            'span.menu-section-label': 'OUR SPECIALTY',
            'h2.menu-section-title': 'DELICIOUS MENU',
            'p.menu-section-description': 'Discover our signature collection of traditional Indonesian brownies and pastries, crafted with love and the finest ingredients.',
            'h3.menu-section-name:contains("Chocolate Brownies")': 'Chocolate Brownies',
            'p.menu-section-desc:contains("Rich and fudgy chocolate brownies")': 'Rich and fudgy chocolate brownies made with premium cocoa and traditional Indonesian spices. Perfect balance of sweetness and texture.',
            'span.menu-section-category:contains("Brownies")': 'Brownies',
            'h3.menu-section-name:contains("Traditional Pastry")': 'Traditional Pastry',
            'p.menu-section-desc:contains("Authentic Indonesian pastry")': 'Authentic Indonesian pastry with crispy exterior and soft interior. Made with traditional recipes passed down through generations.',
            'span.menu-section-category:contains("Pastry")': 'Pastry',
            'h3.menu-section-name:contains("Premium Cake")': 'Premium Cake',
            'p.menu-section-desc:contains("Luxurious layered cake")': 'Luxurious layered cake with premium ingredients and modern presentation. A perfect fusion of traditional taste and contemporary style.',
            'span.menu-section-category:contains("Cake")': 'Cake',
            'a.menu-section-btn': 'View Full Menu',
            'div.featured-blog-badge': 'FEATURED',
            'div.featured-badge': 'FEATURED'
        };
        Object.keys(staticMap).forEach(function(selector) {
            // Tambahan: Batasi .hero-title hanya di index.html
            if (selector === 'h1.hero-title') {
                // Cek jika di index.html (bisa pakai id unik di body misal <body id="home">)
                if (document.body && document.body.id === 'home') {
                    document.querySelectorAll(selector).forEach(function(el) {
                        el.setAttribute('data-translate', staticMap[selector]);
                    });
                }
            } else if (selector === 'h1.hero-main-title') {
                // h1.hero-main-title ada di halaman about.html dan blogs.html
                // Hanya set data-translate jika belum ada, untuk menghindari menimpa yang sudah ada
                document.querySelectorAll(selector).forEach(function(el) {
                    if (!el.hasAttribute('data-translate')) {
                        el.setAttribute('data-translate', staticMap[selector]);
                    }
                });
            } else if (selector === 'div.featured-blog-badge') {
                // featured-blog-badge hanya ada di index.html, jadi aman untuk ditambahkan
                document.querySelectorAll(selector).forEach(function(el) {
                    el.setAttribute('data-translate', staticMap[selector]);
                });
            } else if (selector === 'div.featured-badge') {
                // featured-badge ada di halaman blogs.html, jadi aman untuk ditambahkan
                document.querySelectorAll(selector).forEach(function(el) {
                    el.setAttribute('data-translate', staticMap[selector]);
                });
            } else if (selector.includes(':contains')) {
                // Custom contains selector
                const [base, text] = selector.split(':contains');
                document.querySelectorAll(base).forEach(function(el) {
                    if (el.textContent.trim().includes(text.replace(/\(|\)|"/g, ''))) {
                        el.setAttribute('data-translate', staticMap[selector]);
                    }
                });
            } else {
                document.querySelectorAll(selector).forEach(function(el) {
                    // Hanya set data-translate jika belum ada
                    if (!el.hasAttribute('data-translate')) {
                        el.setAttribute('data-translate', staticMap[selector]);
                    }
                });
            }
        });
    }
    markTranslatables();

    // Saat halaman load, cek localStorage dan set bahasa jika ada
    var savedLang = localStorage.getItem('monyenyo_lang');
    if (savedLang && document.querySelector('.lang-btn[data-lang="' + savedLang + '"]')) {
        document.querySelectorAll('.lang-btn').forEach(function(b) { b.classList.remove('active'); });
        document.querySelector('.lang-btn[data-lang="' + savedLang + '"]').classList.add('active');
        translatePage(savedLang);
    }
});