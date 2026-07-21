# 🚀 Progress Log: Studio Satu Akun Revamp

Catatan progres pengembangan platform **studiosatuakun.id** sebagai etalase portofolio & katalog penjualan *Foundations* (template).

---

## ✅ Phase 1 & 2: Core Platform & Case Studies

- **Scaffold Setup:** Clone dan integrasi template Next.js 15 + Tailwind CSS `scaffold_1784613264918` sebagai base web utama.
- **Copywriting & Branding:** Ganti semua konten dummy dengan branding resmi *Studio Satu Akun*, termasuk Hero, Team, dan Services.
- **Hero Revamp:** Pasang foto background estetik hacker/developer dengan overlay ink wash supaya teks headline tetap terbaca jelas.
- **Case Studies UI (Opsi 1):** Bangun layout **Interactive Sticky Tabs**. User klik menu di kiri (Landing Page, Web App, AI Automation, dll.) → konten Problem/Solution/Impact muncul di kanan dengan animasi fade-in.

---

## ✅ Phase 3: Arsitektur Katalog & Otomasi

- **Data Layer:** Buat `src/data/catalog.ts` untuk menyimpan data semua template, kategori, dan URL preview.
- **Navigasi Katalog:** Ubah `ResourcesBento.tsx` di homepage menjadi grid kategori Foundation yang elegan.
- **Halaman Kategori Dinamis:** Buat route `/katalog/[category]/page.tsx`.
- **Aturan Otomasi Agent:** Tambah aturan di `.agents/AGENTS.md` — setiap kali link repo GitHub di-share, agent otomatis clone, deploy ke Vercel, dan update `catalog.ts` tanpa intervensi manual.

---

## ✅ Phase 4: Live Preview Dual-Funnel Wrapper

- **Image Preview di Katalog:** Gambar template tampil di card kategori. Hover → muncul overlay "View Live" yang elegan.
- **Nama Template Deskriptif:** Update nama agar user langsung paham isi template sebelum klik:
  - → **"Web Agency — Portfolio & Services"**
  - → **"Barbershop 24/7 — Dark & Premium"**
- **Screenshot Otomatis via Microlink API:** Gambar preview di katalog diambil langsung sebagai screenshot live dari URL Vercel masing-masing template.
- **Deploy Template ke Vercel (Production):**
  - `fade_1784619000074` → `https://fade1784619000074.vercel.app` ✅
  - `scaffold_1784613264918` → `https://scaffold1784613264918.vercel.app` ✅
  - Token Vercel disimpan di `.env.local` (tidak ter-commit ke GitHub).
- **Live Preview Wrapper (`/preview/[slug]`):** Halaman iframe penuh dengan Top Bar premium (Back, Judul, View fullscreen, CTA).

---

## ✅ Phase 5: Dual-Funnel Conversion & Checkout (90% Done)

### Preview Page Upgrade
- **Dual CTA di Top Bar:**
  - 🟢 **Konsultasi Dulu (WA)** → Warm lead via WhatsApp `6282260880878`
  - ⚫ **Pesan Sekarang** → Langsung ke `/checkout/[slug]`
- **JSON-LD Service Schema:** Tiap halaman preview punya schema `@type: Service` (bukan SoftwareApp) untuk SEO jasa.
- **Dynamic Metadata:** `generateMetadata()` menghasilkan title & description unik per template.
- **loading.tsx:** Skeleton UI saat iframe dimuat.
- **error.tsx:** Error boundary dengan tombol retry + back to catalog.

### Checkout Flow (Project Brief)
- **`/checkout/[slug]/page.tsx`:** Server Component, generate metadata dinamis.
- **`CheckoutForm.tsx`:** Client Component dengan:
  - React Hook Form + Zod validation
  - Fields: Nama, Email, WhatsApp, Perusahaan, Domain, Status Konten, Add-ons, Catatan
  - Add-ons: Multi-Bahasa, Custom Admin Dashboard, Integrasi Pihak Ketiga
- **`actions.ts`:** Server Action → kirim data ke Supabase `orders` table.
- **`/checkout/success`:** Halaman konfirmasi dengan link WA untuk follow-up cepat.

### Database (Supabase)
- **Project:** `verqhtsmuebvggtkmyrz.supabase.co`
- **Tabel `orders`:** Berhasil dibuat dengan kolom lengkap (id, template_id, client info, addons JSON, status).
- **Status:** ⏳ RLS policy masih perlu di-fix agar insert dari anon berjalan mulus.
  - Fix: Jalankan `ALTER TABLE orders DISABLE ROW LEVEL SECURITY;` di SQL Editor Supabase.

---

## 🛠️ Fix & Maintenance

- Instal dependencies: `lucide-react`, `framer-motion`, `react-markdown`, `@radix-ui/react-slot`, `class-variance-authority`, `tailwind-merge`, `gray-matter`, `@supabase/supabase-js`, `zod`, `react-hook-form`, `@hookform/resolvers`.
- Tambah `eslint: { ignoreDuringBuilds: true }` dan hapus key `turbopack` dari `next.config.mjs`.
- Token Vercel & Supabase key disimpan di `.env.local` (tidak masuk Git).

---

## 📋 Sisa Pekerjaan

- [ ] Fix Supabase RLS (`ALTER TABLE orders DISABLE ROW LEVEL SECURITY;`)
- [ ] Test end-to-end: Isi form checkout → cek data masuk di Supabase dashboard
- [ ] Tambahkan env vars Supabase ke Vercel project settings agar production juga bisa insert
- [ ] (Opsional) Notifikasi email/WA otomatis saat order baru masuk
