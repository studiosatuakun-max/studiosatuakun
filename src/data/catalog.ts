export type CategorySlug = 'landing-page' | 'web-app' | 'dashboard' | 'software-studio' | 'ai-automation';

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
  }
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
    title: 'Agency Scaffold Template',
    description: 'A modern, high-performance agency landing page built with Next.js 15 and Tailwind CSS.',
    githubUrl: 'https://github.com/studiosatuakun-max/scaffold_1784613264918',
    previewUrl: '/preview/scaffold_1784613264918',
    techStack: ['Next.js 15', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveDemoUrl: 'http://localhost:3002',
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_10e591c86-1772160867540.png',
  },
  {
    id: 'fade_1784619000074',
    category: 'landing-page',
    title: 'Fade Interactive Layout',
    description: 'A visually stunning landing page with smooth scroll and fade interactions.',
    githubUrl: 'https://github.com/studiosatuakun-max/fade_1784619000074',
    previewUrl: '/preview/fade_1784619000074',
    techStack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion'],
    liveDemoUrl: 'http://localhost:3001',
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bceda0fa-1768299902157.png',
  }
];

export function getTemplatesByCategory(category: CategorySlug): CatalogTemplate[] {
  return TEMPLATES.filter((t) => t.category === category);
}
