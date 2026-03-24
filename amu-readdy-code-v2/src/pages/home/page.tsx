import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TeamSection from './components/TeamSection';
import ProcessSection from './components/ProcessSection';
import BookingSection from './components/BookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import ClinicGallerySection from './components/ClinicGallerySection';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TeamSection />
        <ProcessSection />
        <BookingSection />
        <FAQSection />
        <ClinicGallerySection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
