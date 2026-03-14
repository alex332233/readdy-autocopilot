import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

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
    <section className="relative pt-24 overflow-hidden bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1
          className="text-4xl lg:text-5xl font-bold text-[#cd9651] mb-4 leading-tight"
          style={{ fontFamily: "'Noto Serif TC', serif", ...fadeUp(100) }}
        >
          醫師團隊
        </h1>
        <p className="text-base text-gray-600 max-w-lg leading-relaxed" style={fadeUp(300)}>
          三位專業中醫師，各擅其長，以豐富的臨床經驗與現代醫學知識，為您提供全方位的健康照護。
        </p>
      </div>
    </section>
  );
}
