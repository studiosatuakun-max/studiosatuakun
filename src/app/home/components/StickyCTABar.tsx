'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Appears after scrolling past resources row
    const handleScroll = () => {
      if (dismissed) return;
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      // Show after scrolling ~1.5 screens
      if (scrollY > windowH * 1.5) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Mock submit — backend connection point
    setSubmitted(true);
  };

  if (dismissed) return null;

  return (
    <div
      className={`sticky-cta-bar fixed bottom-0 left-0 right-0 z-50 bg-ink border-t border-accent/30 ${
        visible ? 'visible' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left label */}
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper">
              Free Build Guide
            </p>
            <p className="font-sans text-xs text-paper/50 mt-0.5">
              Audit templates · Migration checklists · Block boilerplates
            </p>
          </div>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex items-stretch gap-0 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work@company.com"
              required
              className="form-input-ink flex-1 md:w-64 border-paper/20 text-paper placeholder:text-paper/30 focus:border-accent"
              aria-label="Work email address"
            />
            <button
              type="submit"
              className="font-mono text-xs uppercase tracking-widest px-6 bg-accent text-paper hover:bg-accent-hover transition-colors duration-200 flex-shrink-0"
            >
              Unlock Library
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3">
            <Icon name="CheckCircleIcon" size={16} className="text-accent" variant="solid" />
            <p className="font-mono text-xs text-paper/80">Check your inbox — library link sent.</p>
          </div>
        )}

        {/* Dismiss */}
        <button
          onClick={() => {
            setDismissed(true);
            setVisible(false);
          }}
          className="absolute top-3 right-4 text-paper/30 hover:text-paper/70 transition-colors duration-200"
          aria-label="Dismiss"
        >
          <Icon name="XMarkIcon" size={16} />
        </button>
      </div>
    </div>
  );
}
