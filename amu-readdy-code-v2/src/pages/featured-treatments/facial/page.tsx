import { useState, useEffect } from 'react';
import Navbar from '../../home/components/Navbar';
import Footer from '../../home/components/Footer';
import FacialDetailSection from '../../treatments/components/FacialDetailSection';
import MoreTreatmentsSection from './components/MoreTreatmentsSection';

export default function FacialDetailPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <div className="relative">
      <Navbar scrolled={scrolled} />
      <main>
        <section className="relative pt-24 overflow-hidden bg-[#faf6f0]">
          <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#cd9651] mb-4 leading-tight"
              style={{ fontFamily: "'Noto Serif TC', serif", ...fadeUp(100) }}
            >
              御顏・緊緻
            </h1>
            <p className="text-base text-gray-600 max-w-lg leading-relaxed" style={fadeUp(300)}>
              由內而外的無創微雕
            </p>
          </div>
        </section>
        <FacialDetailSection />
        <MoreTreatmentsSection />
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
