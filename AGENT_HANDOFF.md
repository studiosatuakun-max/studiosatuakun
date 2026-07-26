# 🤖 AGENT HANDOFF: Studio Satu Akun — Catalog Expansion

Dokumen ini adalah panduan lengkap buat agent berikutnya untuk melanjutkan pengembangan katalog **studiosatuakun.id**. Baca seluruh dokumen ini sebelum mengambil tindakan apapun.

---

## 🎯 Konteks & Tujuan

**studiosatuakun.id** adalah platform etalase jasa web development milik PT Studio Satu Akun. Arsitekturnya adalah **dual-funnel conversion catalog**:

1. User browse kategori → lihat kartu template
2. Klik "Live Preview" → masuk ke `/preview/[slug]` dengan iframe penuh
3. Di preview ada **2 CTA**: Konsultasi WA (warm lead) + Pesan Sekarang (hot lead)
4. "Pesan Sekarang" → form brief di `/checkout/[slug]` → data masuk ke Supabase

---

## 🗂️ Struktur Proyek (Yang Relevan)

```
src/
├── data/
│   └── catalog.ts          ← DATABASE UTAMA semua template & kategori
├── app/
│   ├── home/               ← Homepage utama SSA
│   ├── katalog/
│   │   └── [category]/     ← Halaman daftar template per kategori
│   ├── preview/
│   │   └── [slug]/         ← Live preview wrapper (iframe + dual CTA)
│   └── checkout/
│       ├── [slug]/         ← Form project brief (React Hook Form + Zod)
│       └── success/        ← Halaman konfirmasi setelah submit
├── lib/
│   └── supabase.ts         ← Supabase client
supabase/
└── migrations/             ← SQL schema tabel orders
.agents/
└── AGENTS.md               ← Aturan otomasi agent (baca ini!)
```

---

## 📦 5 Kategori Katalog

| Slug | Judul | Cocok untuk |
|---|---|---|
| `landing-page` | Landing Page | Barbershop, Agency, UMKM, F&B, dll |
| `web-app` | Web App | Booking system, SaaS frontend, portal |
| `dashboard` | Dashboard Monitoring | Admin panel, data viz, reporting |
| `software-studio` | Software Studio | Enterprise, bespoke software |
| `ai-automation` | AI Automation | LLM, RAG, agentic workflows |

---

## ➕ Cara Menambah Template Baru

### Metode 1: Otomatis (Direkomendasikan)

User tinggal share link GitHub repo. Agent langsung jalankan langkah ini secara otomatis (sudah ada aturannya di `.agents/AGENTS.md`):

```bash
# 1. Clone repo ke /tmp
cd /tmp && git clone https://github.com/studiosatuakun-max/[SLUG]

# 2. Install & Deploy ke Vercel
cd /tmp/[SLUG] && npm install
npx vercel --token $VERCEL_TOKEN --yes --prod
# → Catat URL: https://[slug].vercel.app

# 3. Update catalog.ts (lihat format di bawah)
# 4. git add src/data/catalog.ts && git commit -m "feat: add [slug]" && git push
```

### Metode 2: Manual (Jika repo tidak bisa di-clone)

Edit `src/data/catalog.ts` dan tambah entry baru ke array `TEMPLATES`:

```typescript
{
  id: 'nama_clean_slug',          // Slug bersih tanpa angka timestamp (e.g. 'fade')
  category: 'landing-page',       // Salah satu dari 5 kategori di atas
  title: 'Nama Deskriptif',       // Langsung paham → "Barbershop 24/7 — Dark Premium"
  description: 'Deskripsi...',    // 1-2 kalimat, bahasa Indonesia, orientasi bisnis
  githubUrl: 'https://github.com/studiosatuakun-max/nama_repo_12345',
  previewUrl: '/preview/nama_clean_slug', // URL preview bersih tanpa angka timestamp
  techStack: ['Next.js 15', 'Tailwind CSS'],
  liveDemoUrl: 'https://nama_repo_12345.vercel.app/home',
  imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fnama_repo_12345.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
}
```

---

## 🔑 Credentials & Environment

Semua tersimpan di `.env.local` (JANGAN COMMIT ke Git):

```
VERCEL_TOKEN=[ada di .env.local — jangan share ke Git]
NEXT_PUBLIC_SUPABASE_URL=https://verqhtsmuebvggtkmyrz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[ada di .env.local]
NEXT_PUBLIC_WA_NUMBER=6282260880878
```

---

## 🖼️ Sistem Screenshot Preview (Microlink)

Gambar preview di halaman katalog **otomatis diambil sebagai screenshot live** dari URL Vercel template.

Format URL screenshot:
```
https://api.microlink.io/?url=https%3A%2F%2F[SLUG].vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg
```

Tidak perlu upload gambar manual — cukup deploy ke Vercel dan URL screenshot otomatis generate.

---

## 🗄️ Database Orders (Supabase)

- **Project:** `verqhtsmuebvggtkmyrz.supabase.co`
- **Tabel:** `orders`
- **Dashboard:** https://supabase.com/dashboard/project/verqhtsmuebvggtkmyrz/editor

Setiap kali user submit form checkout, data tersimpan otomatis dengan kolom:
`id, created_at, template_id, template_title, full_name, email, whatsapp, company, domain_plan, content_status, addons, notes, status`

---

## ✅ Template Kategori yang Sudah Ada

### Landing Page
| ID | Judul | Live Demo |
|---|---|---|
| `scaffold` | Web Agency — Portfolio & Services | https://scaffold1784613264918.vercel.app |
| `fade` | Barbershop 24/7 — Dark & Premium | https://fade1784619000074.vercel.app |
| `sober` | Rehab Center — Medical & Therapy | https://sober1784698889697.vercel.app |
| `appraise` | Real Estate Appraisal — Property Valuation | https://appraise1784699261083.vercel.app |
| `triage` | Vet Clinic 24/7 — Animal Emergency & Triage | https://triage1784986284137.vercel.app |

### Dashboard Monitoring
| ID | Judul | Live Demo |
|---|---|---|
| `forecast` | Operations Center & Data Monitoring | https://forecast1784699756735.vercel.app |
| `yield` | AgriTech Dashboard — Territory & Sales Monitoring | https://yield1785086471655.vercel.app |

### Web App
| ID | Judul | Live Demo |
|---|---|---|
| `bookings` | Salon Booking & Social Media Manager | https://bookings1784700170158.vercel.app |
| `weave` | Artisan Bundle Drop — E-Commerce | https://weave1784700324971.vercel.app |
| `bargain` | Bargain Outlet — Surplus & Deals Marketplace | https://bargain1785085750387.vercel.app |

### Software Studio, AI Automation
→ **Kosong — prioritas pengisian berikutnya!**

---

## 📋 Checklist Saat Menambah Template Baru

- [ ] Clone repo & verify bisa di-build
- [ ] Deploy ke Vercel dengan token yang tersedia
- [ ] Catat URL produksi Vercel
- [ ] Tentukan kategori yang tepat
- [ ] Tulis judul deskriptif (bukan nama repo!)
- [ ] Tulis deskripsi bahasa Indonesia, orientasi bisnis bukan teknis
- [ ] Tambah entry ke `TEMPLATES` array di `catalog.ts`
- [ ] Gunakan Microlink untuk `imageUrl` (otomatis screenshot)
- [ ] Commit: `feat: add [nama template] to catalog`
- [ ] Push ke GitHub → Vercel auto-redeploy

---

## 🚫 Yang Jangan Dilakukan

- Jangan commit `.env.local` ke Git
- Jangan set `liveDemoUrl` ke `localhost:xxxx` (tidak akan jalan di production)
- Jangan pakai nama repo mentah sebagai judul (e.g., `fade_1784619000074`)
- Jangan lupa update `ProgressLog.md` setelah selesai menambah batch template
