import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { CATEGORIES, getTemplatesByCategory, CategorySlug } from '@/data/catalog';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const categoryInfo = CATEGORIES.find((c) => c.id === category);
  if (!categoryInfo) {
    notFound();
  }

  const templates = getTemplatesByCategory(category as CategorySlug);

  return (
    <main className="relative bg-paper text-ink min-h-screen flex flex-col">
      <Header />

      {/* Category Hero */}
      <div className="flex-1">
        <div className="px-6 md:px-10 pt-32 pb-16 border-b border-[rgba(107,110,115,0.25)]">
          <Link
            href="/#katalog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors mb-8"
          >
            <Icon name="ArrowLeftIcon" size={12} />
            Back to Catalog
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 flex items-center justify-center border border-[rgba(107,110,115,0.25)] rounded-full text-ink">
              <Icon name={categoryInfo.iconName} size={18} />
            </div>
            <h1 className="font-mono text-4xl md:text-5xl font-light tracking-tight">
              {categoryInfo.title}
            </h1>
          </div>
          <p className="font-sans text-lg text-graphite max-w-2xl">{categoryInfo.description}</p>
        </div>

        {/* Templates Grid */}
        <div className="px-6 md:px-10 py-16">
          {templates.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[rgba(107,110,115,0.25)] flex flex-col items-center">
              <Icon name="CodeBracketIcon" size={32} className="text-graphite mb-4 opacity-50" />
              <p className="font-mono text-sm text-graphite uppercase tracking-widest">
                No templates yet
              </p>
              <p className="font-sans text-sm text-graphite mt-2">
                Check back soon for new additions to this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group border border-[rgba(107,110,115,0.25)] hover:border-ink transition-colors duration-300 flex flex-col"
                >
                  <Link
                    href={template.previewUrl}
                    className="block relative h-[250px] bg-[rgba(107,110,115,0.05)] border-b border-[rgba(107,110,115,0.25)] flex items-center justify-center overflow-hidden group-hover:bg-[rgba(107,110,115,0.08)] transition-colors"
                  >
                    {template.imageUrl ? (
                      <AppImage
                        src={template.imageUrl}
                        alt={template.title}
                        fill
                        className="object-cover img-zoom"
                      />
                    ) : (
                      <Icon
                        name={categoryInfo.iconName}
                        size={48}
                        className="text-graphite opacity-20 relative z-10"
                      />
                    )}
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-ink text-paper rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Live
                      </span>
                    </div>
                  </Link>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-mono text-xl font-medium mb-3">{template.title}</h3>
                    <p className="font-sans text-sm text-graphite leading-relaxed mb-6 flex-1">
                      {template.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {template.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 bg-[rgba(107,110,115,0.05)] text-graphite"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[rgba(107,110,115,0.15)] mt-auto">
                      <Link
                        href={template.previewUrl}
                        className="block w-full text-center font-mono text-xs uppercase tracking-widest px-4 py-3 bg-ink text-paper hover:bg-accent transition-colors"
                      >
                        Live Preview
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
