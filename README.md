# Digital Wedding Invitation (Undangan Pernikahan Digital) 💍

Aplikasi undangan pernikahan digital interaktif dan responsif, dibangun dengan ekosistem modern menggunakan Next.js (App Router), Tailwind CSS v4, Framer Motion, dan Supabase. Desain dioptimalkan untuk perangkat mobile (*mobile-first*) dan kaya akan fitur interaksi demi memberikan pengalaman pengguna yang memukau.

## 🌟 Fitur Utama
* **Animasi Interaktif (Framer Motion):** Transisi halaman yang halus dan animasi saat elemen muncul di layar (*fade up*, dll).
* **Music Background (Auto-Play):** Menyediakan kontrol musik latar belakang yang akan mengiringi tamu saat menavigasi undangan.
* **RSVP (Konfirmasi Kehadiran) via WhatsApp:** Form otomatis yang akan meneruskan konfirmasi tamu langsung ke nomor WhatsApp penyelenggara, memastikan interaksi dua arah secara instan dan tanpa _hosting log_ tambahan.
* **Buku Tamu / Ucapan (Guestbook):** Terintegrasi dengan **Supabase** secara _real-time_. Dilengkapi filter pencegahan kata-kata kotor (Bad Words Filter) dan pembatasan IP (Mencegah Spam).
* **Galeri Pre-Wedding:** Layout foto interaktif yang menarik.
* **Otomasi Testing Terpadu:** Di-setup menggunakan pustaka E2E **Playwright** untuk memastikan stabilitas kode antarmuka.

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Database & Services:** Supabase
- **E2E Testing:** Playwright
- **Font & Icon:** Google Fonts (Next/Font) & Custom SVG.

## ⚙️ Prerequisites (Prasyarat)
Pastikan Anda sudah meng-install:
1. [Node.js](https://nodejs.org/en) versi stabil (v18 ke atas)
2. Akun [Supabase](https://supabase.com/) untuk inisialisasi Database Buku Tamu.

## 🚀 Panduan Instalasi (Installation)

1. **Clone repositori ini dan masuk ke foldernya:**
   ```bash
   git clone <url-repo-ini>
   cd wedding-invitation
   ```

2. **Install semua dependensi paket:**
   ```bash
   npm install
   ```

3. **Atur Environment Variables (Variabel Lingkungan):**
   Duplikat file konfigurasi lokal Anda dengan membuat file `.env.local` di *root* direktori, lalu isi dengan format berikut:
   ```env
   # Ganti dengan nomor handphone tujuan penerima RSVP (Gunakan kode negara, Ex: 628...)
   NEXT_PUBLIC_WHATSAPP_NUMBER=6288218144707

   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=https://[YOUR_SUPABASE_PROJECT].supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=[YOUR_SUPABASE_ANON_KEY]
   
   # WAJIB UNTUK SERVER ACTIONS: Ini bersifat rahasia (Service Role Key), ambil di Dashboard Supabase agar bisa mem-bypass RLS
   SUPABASE_SERVICE_ROLE_KEY=[YOUR_SUPABASE_SERVICE_ROLE_KEY]
   ```

4. **Persiapan Database Supabase:**
   Anda perlu membuat `2 Tabel` di Supabase Anda:
   - Tabel `messages` -> Memiliki kolom `id` (int/uuid), `name` (text), `message` (text), `created_at` (timestamp).
   - Tabel `comment_ips` -> Memiliki kolom `id` (int/uuid), `ip` (text), `created_at` (timestamp).
   *(Pastikan Row Level Security / RLS aktif dan diatur sesuai kebutuhan Anda)*

5. **Jalankan Aplikasi:**
   ```bash
   npm run dev
   ```
   Aplikasi Anda kini sudah mengudara dan berjalan secara langsung di `http://localhost:3000`.

## 🧪 Testing (Pengujian Playwright)

Project ini telah dipasangi otomatisasi skenario antarmuka bot menggunakan Playwright.
Untuk memastikan modifikasi Anda tidak merusak (*break*) UI / Halaman, Anda dapat melakukan verifikasi E2E kapanpun.

- Headless Testing (Jalankan di background / CI):
  ```bash
  npm run test:e2e
  ```
- UI Testing (Lihat bagaimana bot klik dan mengisi undangan Anda di antarmuka grafis):
  ```bash
  npm run test:ui
  ```

## 🌐 Deployment
Sangat disarankan untuk melakukan *deploy* aplikasi ini menggunakan **[Vercel](https://vercel.com/new)**.
1. Sambungkan repositori GitHub Anda ke Vercel.
2. Saat Setup, masukkan konfigurasi `.env.local` dari langkah instalasi ke kolom **Environment Variables** di Vercel Dashboard.
3. Klik Deploy, Vercel akan otomatis mengenali Next.js dan menjabarkan rute yang ada.

---
Dibuat dengan ❤️ untuk hari kebahagiaan!
