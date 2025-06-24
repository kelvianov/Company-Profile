<p align="center">
  <img src="docs/personal-logo.png" width="200" alt="KosKu Logo" />
</p>


# Comapany Profile - Indonesia's Best Brownies Pastry

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

**Live Website:** [https://company-profile-sandy.vercel.app/](https://company-profile-sandy.vercel.app/)



## 📋 Project Overview

**Monyenyo** is a modern, responsive website for Indonesia's premier brownies pastry company. This project showcases a clean, professional web presence that emphasizes quality, craftsmanship, and the irresistible appeal of premium brownies.

### 🎯 Project Goals

- Create a modern, visually appealing website for a premium pastry brand
- Implement responsive design for optimal viewing across all devices
- Develop an engaging hero section with automated image slider
- Establish a professional online presence with clean code architecture
- Provide complete, up-to-date contact and outlet information

## ✨ Key Features

### 🖼️ **Dynamic Hero Section**
- **Automated Image Slider**: 3 high-quality images with smooth transitions
- **Manual Navigation**: Interactive dot pagination for user control
- **Responsive Text Positioning**: Precisely positioned text overlays for each slide
- **No Loading Delays**: Instant visibility of all components

### 🧭 **Professional Navigation**
- **Fixed Header**: Persistent navigation with solid white background (not transparent)
- **Social Media Integration**: Direct links to Instagram, TikTok, and YouTube
- **Contact Information**: Prominently displayed phone number
- **Clean Typography**: Modern Inter font family throughout

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Flexible Layout**: Adapts seamlessly from desktop to mobile
- **Touch-Friendly**: Optimized interactions for mobile users

### 📞 **Contact & Communication**
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Complete Contact Info**: Full address, email, and phone details
- **Professional Footer**: Clean, organized company information

### 🏪 **Outlet Information**
- **Dedicated Outlets Page**: All store locations and contact details
- **Consistent Branding**: Outlet info matches main site style

## 🛠️ Technical Implementation

### **Architecture**
```
monyenyo/
├── index.html              # Main HTML structure
├── about.html              # About page
├── menu.html               # Menu page
├── blogs.html              # Blog page
├── outlets.html            # Outlets/locations page
├── contact.html            # Contact page
├── css/
│   ├── main.css            # Global styling
│   ├── about.css           # About page styling
│   ├── blogs.css           # Blog page styling
│   ├── menu.css            # Menu page styling
│   ├── outlets.css         # Outlets page styling
│   ├── contact.css         # Contact page styling
│   ├── header.css          # Header/navbar styling
│   ├── footer.css          # Footer styling
│   └── wa-float.css        # WhatsApp button styling
├── js/
│   ├── slider.js           # Hero slider functionality
│   └── translation.js      # Language toggle functionality
├── images/                 # All images and icons
└── README.md               # Project documentation
```

### **Technologies Used**

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic markup and structure | Latest |
| **CSS3** | Modern styling and responsive design | Latest |
| **JavaScript (ES6+)** | Interactive slider & language toggle | Latest |
| **Font Awesome** | Professional iconography | 6.4.0 |
| **Google Fonts** | Typography (Inter font family) | Latest |

### **Browser Compatibility**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Philosophy

### **Visual Identity**
- **Color Palette**: Warm browns (#8B4513) with clean whites and grays
- **Typography**: Modern Inter font for readability and professionalism
- **Layout**: Clean, minimalist design emphasizing content
- **Imagery**: High-quality product photography

### **User Experience**
- **Instant Loading**: No delays on component visibility
- **Smooth Interactions**: Subtle hover effects and transitions
- **Clear Navigation**: Intuitive user flow and information hierarchy
- **Mobile Optimization**: Seamless experience across all devices

## 🚀 Getting Started

### **Prerequisites**
- Web browser (Chrome, Firefox, Safari, Edge)
- Basic web server (optional for local development)

### **Installation & Setup**

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd monyenyo
   ```

2. **Direct File Access**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **Local Server (Recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the Website**
   ```
   Local: http://localhost:8000
   Direct: file:///path/to/index.html
   ```

## 📁 File Structure Details

### **HTML Structure**
- **Semantic HTML5**: Proper use of header, main, section, footer elements
- **SEO Optimized**: Meta tags, proper heading hierarchy
- **Accessibility**: ARIA labels and semantic markup
- **Consistent Navbar**: Solid white background, always visible
- **Section Spacing**: Proportional margin and padding between sections

### **CSS Organization**
- **Modular Styling**: Organized by components and pages
- **Mobile-First**: Responsive breakpoints at 480px, 768px, 1024px
- **Modern Techniques**: Flexbox, Grid, CSS Custom Properties

### **JavaScript Features**
- **Vanilla JS**: No external dependencies
- **Performance Optimized**: Lightweight and efficient
- **Event-Driven**: Clean event handling for slider and language toggle
- **Translation Support**: Multi-language toggle (EN/ID)

## 🎯 Performance Metrics

- **Page Load Time**: < 2 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Mobile PageSpeed Score**: 90+
- **Desktop PageSpeed Score**: 95+

## 🔧 Customization Guide

### **Updating Content**
1. **Hero Images**: Replace files in `/images/` directory
2. **Contact Information**: Update footer section in all HTML files
3. **Social Links**: Modify href attributes in navigation and footer
4. **Brand Colors**: Update CSS custom properties in `main.css`
5. **Outlet Info**: Edit `outlets.html` for store locations

### **Slider Configuration**
```javascript
// In slider.js - modify these values:
const slideInterval = 4000; // Change slide duration
const slides = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Update images
```

## 📞 Contact Information

**Company**: Monyenyo

**Address**: Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150  
**Email**: hello@monyenyo.com  
**Phone**: +62 822-9502-9308  

**Social Media**:
- [Instagram](#)
- [YouTube](#)
- [TikTok](#)
- [Facebook](#)

## 🏪 Outlet Locations

Lihat halaman [outlets.html](outlets.html) untuk daftar outlet dan kontak cabang terbaru.

## 📄 License

This project is proprietary software developed for Kelvianov. All rights reserved.

---

**Built with ❤️ for Indonesia's finest brownies pastry experience**

*Last Updated: June 2025*
