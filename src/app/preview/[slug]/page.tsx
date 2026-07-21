import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { TEMPLATES } from '@/data/catalog';

export default async function PreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const template = TEMPLATES.find(t => t.id === slug);
  if (!template) {
    notFound();
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-paper text-ink">
      {/* Top Preview Bar */}
      <div className="h-14 border-b border-[rgba(107,110,115,0.25)] flex items-center justify-between px-6 flex-shrink-0 bg-paper z-50 relative">
        {/* Left: Back and Info */}
        <div className="flex items-center gap-4 h-full">
          <Link 
            href={`/katalog/${template.category}`}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors h-full border-r border-[rgba(107,110,115,0.25)] pr-4"
          >
            <Icon name="ArrowLeftIcon" size={14} />
            <span>All Foundations</span>
          </Link>
          <div className="font-mono text-sm font-medium">
            {template.title}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 h-full">
           <a 
            href={template.liveDemoUrl || '#'}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 font-mono text-xs text-graphite hover:text-ink transition-colors"
           >
             <Icon name="ArrowsPointingOutIcon" size={14} />
             <span>View in full screen</span>
           </a>
           
           <div className="h-full border-l border-[rgba(107,110,115,0.25)] pl-4 flex items-center">
             <Link 
               href={`/checkout/${template.id}`}
               className="font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 bg-ink text-paper hover:bg-accent transition-colors"
             >
               Use this Foundation
             </Link>
           </div>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 w-full bg-[rgba(107,110,115,0.05)] relative">
        {template.liveDemoUrl ? (
          <iframe 
            src={template.liveDemoUrl}
            className="w-full h-full border-none"
            title={`${template.title} Preview`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-graphite p-6 text-center">
            <Icon name="WindowIcon" size={48} className="mb-4 opacity-50" />
            <h2 className="font-mono text-xl font-medium mb-2 text-ink">Preview Unavailable</h2>
            <p className="font-sans text-sm max-w-md">The live demo URL for this foundation has not been configured yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
