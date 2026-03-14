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
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#cd9651] hover:bg-[#b8843d] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 scale-100 cursor-pointer"
        aria-label="Line客服"
        onClick={() => window.open('https://lin.ee/EeONEJc', '_blank')}
      >
        <i className="ri-line-fill text-white text-2xl"></i>
      </button>
    </div>
  );
}
