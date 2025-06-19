# Hero Section Position Fix - Mobile

## Problem
Hero section di tampilan mobile terlalu turun/rendah, terlalu banyak ruang kosong di atas yang membuat konten utama tidak terlihat optimal.

## Solution
Mengoptimalkan posisi hero section untuk mobile dengan perubahan berikut:

### CSS Changes in mobile.css

#### 1. Hero Section Positioning (Line 262-265)
**Before:**
```css
.hero {
    align-items: flex-end;
    padding-bottom: 180px;
}
```

**After:**
```css
.hero {
    align-items: center;
    padding-bottom: 60px;
    padding-top: 80px;
}
```

#### 2. Hero Content Spacing (Line 267-272)
**Before:**
```css
.hero-content {
    padding-top: 0;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
}
```

**After:**
```css
.hero-content {
    padding-top: 20px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 0;
}
```

#### 3. Small Mobile Hero Positioning (Line 432-434)
**Before:**
```css
.hero {
    padding-bottom: 160px;
}
```

**After:**
```css
.hero {
    padding-bottom: 40px;
    padding-top: 70px;
}
```

#### 4. Small Mobile Hero Content (Line 437-440)
**Before:**
```css
.hero-content {
    padding-left: 15px;
    padding-right: 15px;
}
```

**After:**
```css
.hero-content {
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    margin-top: 0;
}
```

## Key Improvements

1. **Centered Alignment**: Mengubah `align-items` dari `flex-end` ke `center` agar hero content berada di tengah viewport
2. **Reduced Bottom Padding**: Mengurangi `padding-bottom` dari 180px ke 60px (mobile) dan 160px ke 40px (small mobile)
3. **Added Top Padding**: Menambahkan `padding-top` 80px (mobile) dan 70px (small mobile) untuk memberikan ruang dari header
4. **Optimized Content Spacing**: Menyesuaikan padding pada hero-content untuk spacing yang lebih baik

## Result
- Hero section sekarang berada di posisi yang lebih optimal di tampilan mobile
- Konten utama (title, subtitle) lebih terlihat tanpa perlu scroll
- Masih mempertahankan ruang yang cukup untuk header (logo & hamburger menu)
- Responsive untuk berbagai ukuran mobile (480px ke bawah dan normal mobile)

## Testing
Silakan test di berbagai device mobile:
- Mobile normal (768px ke bawah)
- Small mobile (480px ke bawah)
- Berbagai orientasi (portrait/landscape)

Pastikan hero content terlihat dengan baik dan tidak overlap dengan header elements.
