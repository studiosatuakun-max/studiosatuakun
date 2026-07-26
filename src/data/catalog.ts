export type CategorySlug =
  'landing-page' | 'web-app' | 'dashboard' | 'umkm' | 'ai-automation';

export interface CategoryInfo {
  id: CategorySlug;
  title: string;
  description: string;
  iconName: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'High-conversion, SEO optimized, and blazing fast frontend experiences.',
    iconName: 'DocumentTextIcon',
  },
  {
    id: 'web-app',
    title: 'Web App',
    description: 'Interactive portals, booking systems, and SaaS frontends.',
    iconName: 'WindowIcon',
  },
  {
    id: 'dashboard',
    title: 'Dashboard Monitoring',
    description: 'Admin panels, data visualization, and reporting tools.',
    iconName: 'ChartBarSquareIcon',
  },
  {
    id: 'umkm',
    title: 'UMKM & Bisnis Lokal',
    description: 'Sistem ERP lokal, POS, dan portal operasional terpadu untuk UMKM dan bisnis menengah.',
    iconName: 'BuildingStorefrontIcon',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'LLM integrations, RAG systems, and agentic workflows.',
    iconName: 'SparklesIcon',
  },
];

export interface CatalogTemplate {
  id: string; // The unique slug for the template, e.g., 'scaffold-178'
  category: CategorySlug;
  title: string;
  description: string;
  githubUrl: string;
  previewUrl: string; // Internal route like `/preview/scaffold-178`
  techStack: string[];
  imageUrl?: string;
  liveDemoUrl?: string; // Real URL to embed in the iframe
}

// This array will be populated by the AI Agent when a github link is provided
export const TEMPLATES: CatalogTemplate[] = [
  {
    id: 'scaffold',
    category: 'landing-page',
    title: 'Web Agency — Portfolio & Services',
    description:
      'Template agensi digital premium. Cocok untuk web agency, software house, atau freelancer yang ingin tampil profesional dengan portofolio, layanan, dan halaman kontak.',
    githubUrl: 'https://github.com/studiosatuakun-max/scaffold_1784613264918',
    previewUrl: '/preview/scaffold',
    techStack: ['Modern Framework', 'UI Library', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://scaffold1784613264918.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fscaffold1784613264918.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'fade',
    category: 'landing-page',
    title: 'Barbershop 24/7 — Dark & Premium',
    description:
      'Template barbershop modern dengan nuansa dark premium. Dilengkapi galeri potongan, booking online, kuis rekomendasi gaya rambut, dan jadwal layanan 24/7.',
    githubUrl: 'https://github.com/studiosatuakun-max/fade_1784619000074',
    previewUrl: '/preview/fade',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://fade1784619000074.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Ffade1784619000074.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'sober',
    category: 'landing-page',
    title: 'Rehab Center — Medical & Therapy',
    description:
      'Template website profesional untuk klinik rehabilitasi, pusat pemulihan, atau layanan terapi. Dilengkapi fitur program treatment, jadwal konseling, dan edukasi.',
    githubUrl: 'https://github.com/studiosatuakun-max/sober_1784698889697',
    previewUrl: '/preview/sober',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://sober1784698889697.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fsober1784698889697.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'appraise',
    category: 'landing-page',
    title: 'Real Estate Appraisal — Property Valuation',
    description:
      'Template website untuk jasa penilai properti (appraisal) atau layanan real estate. Cocok untuk menampilkan studi kasus valuasi rumah, portofolio proyek, dan proses kerja profesional.',
    githubUrl: 'https://github.com/studiosatuakun-max/appraise_1784699261083',
    previewUrl: '/preview/appraise',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://appraise1784699261083.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fappraise1784699261083.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'forecast',
    category: 'dashboard',
    title: 'Operations Center & Data Monitoring',
    description:
      'Template dashboard profesional untuk pemantauan data real-time, manajemen operasi, atau platform B2B SaaS. Dilengkapi matriks data dan visualisasi metrik.',
    githubUrl: 'https://github.com/studiosatuakun-max/forecast_1784699756735',
    previewUrl: '/preview/forecast',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://forecast1784699756735.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fforecast1784699756735.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'bookings',
    category: 'web-app',
    title: 'Salon Booking & Social Media Manager',
    description:
      'Template web app khusus untuk salon, klinik kecantikan, atau barbershop. Menggabungkan fitur booking online, manajemen jadwal, dan analisa konversi social media dalam satu platform.',
    githubUrl: 'https://github.com/studiosatuakun-max/bookings_1784700170158',
    previewUrl: '/preview/bookings',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://bookings1784700170158.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fbookings1784700170158.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'weave',
    category: 'web-app',
    title: 'Artisan Bundle Drop — E-Commerce',
    description:
      'Template website e-commerce untuk produk artisan, rilis produk khusus (drop), atau kerajinan tangan. Dilengkapi countdown timer pre-order dan desain estetik natural.',
    githubUrl: 'https://github.com/studiosatuakun-max/weave_1784700324971',
    previewUrl: '/preview/weave',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://weave1784700324971.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fweave1784700324971.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'triage',
    category: 'landing-page',
    title: 'Vet Clinic 24/7 — Animal Emergency & Triage',
    description:
      'Template website untuk klinik hewan dan rumah sakit darurat hewan (veterinary ER) 24 jam. Dilengkapi panduan triase kondisi darurat, profil tim dokter hewan, dan layanan panggilan cepat.',
    githubUrl: 'https://github.com/studiosatuakun-max/triage_1784986284137',
    previewUrl: '/preview/triage',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://triage1784986284137.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Ftriage1784986284137.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'bargain',
    category: 'web-app',
    title: 'Bargain Outlet — Surplus & Deals Marketplace',
    description:
      'Template web app marketplace barang diskon, surplus gudang (overstock), dan produk open box. Dilengkapi fitur penawaran flash sale (doorbusters), manajemen stok real-time, dan keranjang belanja interaktif.',
    githubUrl: 'https://github.com/studiosatuakun-max/bargain_1785085750387',
    previewUrl: '/preview/bargain',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://bargain1785085750387.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fbargain1785085750387.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'yield',
    category: 'dashboard',
    title: 'AgriTech Dashboard — Territory & Sales Monitoring',
    description:
      'Template dashboard pemantauan teritori penjualan, analitik diler, dan proyeksi pendapatan khusus industri agribisnis serta pertanian (AgriTech). Dilengkapi pemetaan interaktif real-time, pelacakan siklus panen, serta integrasi sistem ERP.',
    githubUrl: 'https://github.com/studiosatuakun-max/yield_1785086471655',
    previewUrl: '/preview/yield',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://yield1785086471655.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fyield1785086471655.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'cultivar',
    category: 'dashboard',
    title: 'AgriTech Dashboard — Farm Operations & Crop Monitoring',
    description:
      'Template dashboard pusat komando operasi pertanian dan perkebunan (AgriTech) untuk memantau siklus panen, pemeliharaan alat berat, dan logistik lapangan secara terpadu. Cocok untuk agribisnis skala menengah hingga besar yang ingin mendigitalisasi pencatatan dari spreadsheet ke sistem real-time.',
    githubUrl: 'https://github.com/studiosatuakun-max/cultivar_1785086656942',
    previewUrl: '/preview/cultivar',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://cultivar1785086656942.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fcultivar1785086656942.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'greennagan',
    category: 'umkm',
    title: 'Resto ERP & POS Hub — Multi-Branch Management',
    description:
      'Template sistem ERP dan POS terintegrasi khusus untuk restoran, kafe, atau UMKM F&B multi-cabang. Dilengkapi 5 modul role khusus (Owner ERP, Waiter Pad, Cashier POS, Kitchen KDS, dan Manager Hub) secara real-time.',
    githubUrl: 'https://github.com/studiosatuakun-max/GreenNagan',
    previewUrl: '/preview/greennagan',
    techStack: ['Next.js 16', 'Tailwind CSS', 'Lucide Icons'],
    liveDemoUrl: 'https://greennagan-deels-projects.vercel.app',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fgreennagan-deels-projects.vercel.app&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'mesa',
    category: 'umkm',
    title: 'Artisan F&B Resto — Online Ordering & Menu Portal',
    description:
      'Template website komersial untuk restoran, cloud kitchen, dan bisnis kuliner (F&B) UMKM. Dilengkapi menu bento interaktif, slider foto hidangan before/after, promo flash deal, dan integrasi pemesanan langsung.',
    githubUrl: 'https://github.com/studiosatuakun-max/mesa_1785086036479',
    previewUrl: '/preview/mesa',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://mesa1785086036479.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fmesa1785086036479.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'lather',
    category: 'umkm',
    title: 'Artisan Bath & Body — Wholesale & Retail Portal',
    description:
      'Template portal e-commerce grosir (wholesale) dan ritel untuk UMKM produk kecantikan artisan, sabun organik, dan body care. Dilengkapi bento grid katalog produk, kuis rekomendasi interaktif, serta kalkulator margin bisnis reseller.',
    githubUrl: 'https://github.com/studiosatuakun-max/lather_1785089830799',
    previewUrl: '/preview/lather',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://lather1785089830799.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Flather1785089830799.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
];

export function getTemplatesByCategory(category: CategorySlug): CatalogTemplate[] {
  return TEMPLATES.filter((t) => t.category === category);
}
