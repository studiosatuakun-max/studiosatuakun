import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ResourcesBento from './components/ResourcesBento';
import CaseStudiesBento from './components/CaseStudiesBento';
import TeamBento from './components/TeamBento';
import ServicesAccordion from './components/ServicesAccordion';
import BlogSection from './components/BlogSection';

export default function HomePage() {
  return (
    <main className="relative bg-paper text-ink">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <ResourcesBento />
      <CaseStudiesBento />
      <ServicesAccordion />
      <TeamBento />
      <BlogSection />
      <Footer />
    </main>
  );
}
