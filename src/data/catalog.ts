export type CategorySlug =
  'landing-page' | 'web-app' | 'dashboard' | 'software-studio' | 'ai-automation';

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
    id: 'software-studio',
    title: 'Software Studio',
    description: 'Custom enterprise architectures and bespoke integrations.',
    iconName: 'CodeBracketSquareIcon',
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
    id: 'scaffold_1784613264918',
    category: 'landing-page',
    title: 'Web Agency — Portfolio & Services',
    description:
      'Template agensi digital premium. Cocok untuk web agency, software house, atau freelancer yang ingin tampil profesional dengan portofolio, layanan, dan halaman kontak.',
    githubUrl: 'https://github.com/studiosatuakun-max/scaffold_1784613264918',
    previewUrl: '/preview/scaffold_1784613264918',
    techStack: ['Modern Framework', 'UI Library', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://scaffold1784613264918.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fscaffold1784613264918.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'fade_1784619000074',
    category: 'landing-page',
    title: 'Barbershop 24/7 — Dark & Premium',
    description:
      'Template barbershop modern dengan nuansa dark premium. Dilengkapi galeri potongan, booking online, kuis rekomendasi gaya rambut, dan jadwal layanan 24/7.',
    githubUrl: 'https://github.com/studiosatuakun-max/fade_1784619000074',
    previewUrl: '/preview/fade_1784619000074',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://fade1784619000074.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Ffade1784619000074.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'sober_1784698889697',
    category: 'landing-page',
    title: 'Rehab Center — Medical & Therapy',
    description:
      'Template website profesional untuk klinik rehabilitasi, pusat pemulihan, atau layanan terapi. Dilengkapi fitur program treatment, jadwal konseling, dan edukasi.',
    githubUrl: 'https://github.com/studiosatuakun-max/sober_1784698889697',
    previewUrl: '/preview/sober_1784698889697',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://sober1784698889697.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fsober1784698889697.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'appraise_1784699261083',
    category: 'landing-page',
    title: 'Real Estate Appraisal — Property Valuation',
    description:
      'Template website untuk jasa penilai properti (appraisal) atau layanan real estate. Cocok untuk menampilkan studi kasus valuasi rumah, portofolio proyek, dan proses kerja profesional.',
    githubUrl: 'https://github.com/studiosatuakun-max/appraise_1784699261083',
    previewUrl: '/preview/appraise_1784699261083',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://appraise1784699261083.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fappraise1784699261083.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'forecast_1784699756735',
    category: 'dashboard',
    title: 'Operations Center & Data Monitoring',
    description:
      'Template dashboard profesional untuk pemantauan data real-time, manajemen operasi, atau platform B2B SaaS. Dilengkapi matriks data dan visualisasi metrik.',
    githubUrl: 'https://github.com/studiosatuakun-max/forecast_1784699756735',
    previewUrl: '/preview/forecast_1784699756735',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://forecast1784699756735.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fforecast1784699756735.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'bookings_1784700170158',
    category: 'web-app',
    title: 'Salon Booking & Social Media Manager',
    description:
      'Template web app khusus untuk salon, klinik kecantikan, atau barbershop. Menggabungkan fitur booking online, manajemen jadwal, dan analisa konversi social media dalam satu platform.',
    githubUrl: 'https://github.com/studiosatuakun-max/bookings_1784700170158',
    previewUrl: '/preview/bookings_1784700170158',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://bookings1784700170158.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fbookings1784700170158.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'weave_1784700324971',
    category: 'web-app',
    title: 'Artisan Bundle Drop — E-Commerce',
    description:
      'Template website e-commerce untuk produk artisan, rilis produk khusus (drop), atau kerajinan tangan. Dilengkapi countdown timer pre-order dan desain estetik natural.',
    githubUrl: 'https://github.com/studiosatuakun-max/weave_1784700324971',
    previewUrl: '/preview/weave_1784700324971',
    techStack: ['Modern Framework', 'Utility CSS'],
    liveDemoUrl: 'https://weave1784700324971.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fweave1784700324971.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'triage_1784986284137',
    category: 'landing-page',
    title: 'Vet Clinic 24/7 — Animal Emergency & Triage',
    description:
      'Template website untuk klinik hewan dan rumah sakit darurat hewan (veterinary ER) 24 jam. Dilengkapi panduan triase kondisi darurat, profil tim dokter hewan, dan layanan panggilan cepat.',
    githubUrl: 'https://github.com/studiosatuakun-max/triage_1784986284137',
    previewUrl: '/preview/triage_1784986284137',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://triage1784986284137.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Ftriage1784986284137.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
  {
    id: 'bargain_1785085750387',
    category: 'web-app',
    title: 'Bargain Outlet — Surplus & Deals Marketplace',
    description:
      'Template web app marketplace barang diskon, surplus gudang (overstock), dan produk open box. Dilengkapi fitur penawaran flash sale (doorbusters), manajemen stok real-time, dan keranjang belanja interaktif.',
    githubUrl: 'https://github.com/studiosatuakun-max/bargain_1785085750387',
    previewUrl: '/preview/bargain_1785085750387',
    techStack: ['Modern Framework', 'Utility CSS', 'Animations'],
    liveDemoUrl: 'https://bargain1785085750387.vercel.app/home',
    imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2Fbargain1785085750387.vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
  },
];

export function getTemplatesByCategory(category: CategorySlug): CatalogTemplate[] {
  return TEMPLATES.filter((t) => t.category === category);
}
