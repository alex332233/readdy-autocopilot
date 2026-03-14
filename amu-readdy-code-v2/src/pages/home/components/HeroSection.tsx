import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

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
          alt="艾草意象"
          className="w-full h-full object-cover object-center"
          src="https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/86c1fda8d4a973044d459bcf3069ab1e.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f6f1] via-[#f8f6f1]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-28 xl:px-40">
        <div className="max-w-xl">
          {/* 主標題 */}
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) 300ms',
            }}
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.4] tracking-[0.08em] text-stone-800">
              以艾醫身
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.4] tracking-[0.08em] mt-0 md:mt-2 text-stone-800">
              以苜養心
            </span>
          </h1>

          {/* 副標題 */}
          <p
            className="text-base md:text-lg text-stone-500 font-light tracking-[0.05em] leading-[2] mb-12 max-w-md"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) 550ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) 550ms',
            }}
          >
            在這裡,我們用溫柔的雙手與傳承千年的智慧,
            <br />
            守護妳與家人的每一刻健康時光
          </p>

          {/* CTA 按鈕 */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 1800ms cubic-bezier(0.16, 1, 0.3, 1) 800ms, transform 1800ms cubic-bezier(0.16, 1, 0.3, 1) 800ms',
            }}
          >
            <button onClick={scrollToBooking} className="group inline-flex items-center cursor-pointer">
              <span className="text-[15px] font-medium text-[#cd9651] tracking-[0.1em] relative">
                立即預約諮詢
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cd9651] scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4a5d4a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
              <i className="ri-arrow-right-line ml-3 text-[#cd9651] group-hover:text-[#4a5d4a] group-hover:translate-x-1 transition-all duration-300"></i>
            </button>
          </div>
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
        <button onClick={scrollToAbout} className="flex flex-col items-center gap-3 cursor-pointer group">
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
