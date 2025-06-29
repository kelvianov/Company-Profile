<p align="center">
  <img src="docs/personal-logo.png" width="200" alt="KosKu Logo" />
</p>

# Laravel Filament - Manajemen Transaksi & Kategori

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Filament](https://img.shields.io/badge/Filament-3B82F6?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Aplikasi manajemen transaksi dan kategori berbasis Laravel + Filament Admin.**

---

## 📋 Ringkasan Proyek

Aplikasi ini memudahkan pengelolaan data transaksi dan kategori secara efisien, dengan panel admin modern berbasis Filament. Mendukung autentikasi, CRUD, dan dashboard statistik.

### 🎯 Fitur Utama
- CRUD Kategori & Transaksi
- Dashboard Admin Filament
- Autentikasi User
- Migrasi & Seeder database
- Responsive & mudah dikembangkan

## 🛠️ Struktur Proyek
```
app/
  Filament/
    Pages/
    Resources/
    Widgets/
  Http/
    Controllers/
  Models/
    Category.php
    Transaction.php
    User.php
config/
database/
  migrations/
  seeders/
public/
resources/
routes/
storage/
tests/
```

## 🚀 Instalasi & Setup

1. **Clone repository**
   ```bash
   git clone [repository-url]
   cd Laravel-Filament
   ```
2. **Install dependency**
   ```bash
   composer install
   npm install
   ```
3. **Copy file env & generate key**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
5. **Migrasi & seeder**
   ```bash
   php artisan migrate --seed
   ```
6. **Jalankan server lokal**
   ```bash
   php artisan serve
   ```

## 📁 File Penting
- `app/Models/Category.php` & `Transaction.php` : Model utama
- `app/Filament/Resources/` : Resource Filament (CRUD)
- `routes/web.php` : Routing utama
- `database/migrations/` : Struktur tabel

## 👤 Kontributor
- [Nama Anda] (ganti dengan nama Anda)

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT.

---

**Built with ❤️ using Laravel & Filament**

*Last Updated: June 2025*
