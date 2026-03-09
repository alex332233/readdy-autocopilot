import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '480px', height: '52vw', maxHeight: '640px' }}>
      {/* 純色品牌底色 */}
      <div className="absolute inset-0 bg-[#cd9651]"></div>

      {/* 內容層 */}
      <div className="relative z-10 w-full h-full flex items-center pt-24">
        <div className="w-full max-w-6xl mx-auto px-12 flex items-center gap-16 xl:gap-24">

          {/* 左側：標題區 */}
          <div className="flex-shrink-0 max-w-[420px]">
            <h1 className="font-serif leading-tight mb-4">
              <span className="block text-3xl xl:text-4xl font-light text-white tracking-wide">源於護身符的初心，</span>
              <span className="block text-3xl xl:text-4xl font-bold text-white tracking-wide mt-1">守護家的靈魂</span>
            </h1>
          </div>

          {/* 分隔線 */}
          <div className="hidden xl:block w-[1px] h-32 bg-white/30 flex-shrink-0"></div>

          {/* 右側：說明文字區 */}
          <div className="flex-1 max-w-[560px]">
            <p className="text-white/90 text-base xl:text-lg leading-relaxed font-light mb-6">
              「艾苜」這個名字，源自法文{' '}
              <em className="text-white not-italic font-semibold">"Amulette"</em>
              （護身符）的諧音。這不僅是一個代號，更是一份溫柔的承諾——
            </p>
            <p className="text-white/80 text-sm xl:text-base leading-relaxed font-light">
              我們期許自己不只是生病後的維修站，而是能在疾病發生之前，就先為您擋下風雨，實踐中醫「治未病」的最高智慧。
            </p>

            {/* 引言 */}
            <div className="mt-8 pl-5 border-l-2 border-white/50">
              <p className="text-white text-sm tracking-widest font-light italic">
                妳好，家就好。
              </p>
              <p className="text-white/60 text-xs tracking-wider mt-1">— 艾苜中醫核心理念</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
