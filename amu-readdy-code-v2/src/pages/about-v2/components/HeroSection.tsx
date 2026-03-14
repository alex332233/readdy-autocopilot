import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('origin-story');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f6f1]">
      {/* 右側圖片 */}
      <div
        className="absolute right-0 top-0 w-[55%] h-full"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateX(0)' : 'translateX(10px)',
          transition: 'opacity 2000ms cubic-bezier(0.16, 1, 0.3, 1) 100ms, transform 2000ms cubic-bezier(0.16, 1, 0.3, 1) 100ms',
        }}
      >
        <img
          alt="艾苜中醫封面"
          className="w-full h-full object-cover object-top"
          src="https://readdy.ai/api/search-image?query=Serene%20Asian%20woman%20in%20white%20linen%20robe%20sitting%20peacefully%20in%20a%20sunlit%20room%20surrounded%20by%20fresh%20green%20mugwort%20branches%20and%20dried%20herbs%20on%20wooden%20table%20soft%20diffused%20morning%20light%20warm%20ivory%20tones%20tranquil%20wellness%20sanctuary%20minimal%20Japanese-inspired%20interior%20feminine%20healing%20atmosphere&width=1200&height=900&seq=about-hero-refresh-2025-v1&orientation=landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f1] via-[#f8f6f1]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-xl">
          <p
            className="text-[11px] tracking-[0.3em] text-[#cd9651] uppercase mb-6"
            style={{ fontFamily: "'Noto Serif TC', serif", ...fadeUp(200) }}
          >
            About Us
          </p>

          <h1
            className="mb-8"
            style={{ fontFamily: "'Noto Serif TC', serif", ...fadeUp(380) }}
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.4] tracking-[0.08em] text-stone-800">
              關於艾苜
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.4] tracking-[0.08em] mt-2 text-stone-800">
              我們的故事
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-stone-500 font-light tracking-[0.05em] leading-[2] mb-12 max-w-md"
            style={fadeUp(600)}
          >
            一個名字，一份承諾
            <br />
            守護每一位女性與她背後的家
          </p>
        </div>
      </div>

      {/* Scroll 提示 */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) 1200ms',
        }}
      >
        <button onClick={scrollToContent} className="flex flex-col items-center gap-3 cursor-pointer group">
          <span className="text-[10px] font-light text-stone-400 tracking-[0.2em] uppercase group-hover:text-stone-600 transition-colors duration-300">
            Scroll
          </span>
          <div className="relative w-[1px] h-12 bg-stone-300/50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-6 bg-stone-400 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
