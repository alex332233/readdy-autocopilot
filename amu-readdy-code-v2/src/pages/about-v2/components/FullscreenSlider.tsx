import { useState, useEffect, useCallback, useRef } from 'react';

// This slider intentionally stays static for now.
// The design is still likely to change, so we are not mapping it into Sanity / Presentation yet.
const slides = [
  {
    id: 1,
    image: 'https://readdy.ai/api/search-image?query=Elegant%20traditional%20Chinese%20medicine%20clinic%20reception%20area%20warm%20natural%20light%20wooden%20reception%20desk%20with%20fresh%20white%20orchids%20minimalist%20shelving%20displaying%20antique%20herb%20jars%20and%20ceramic%20vessels%20soft%20cream%20walls%20with%20subtle%20texture%20refined%20luxury%20TCM%20wellness%20interior%20design%20calm%20serene%20atmosphere%20no%20people%20high%20end%20medical%20spa%20aesthetic&width=1920&height=1080&seq=slider-clinic-reception-2025-v9&orientation=landscape',
    label: '01',
  },
  {
    id: 2,
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20traditional%20Chinese%20herbal%20medicine%20ingredients%20dried%20herbs%20roots%20bark%20seeds%20flowers%20goji%20berries%20astragalus%20ginseng%20wolfberry%20chrysanthemum%20spread%20on%20aged%20wooden%20surface%20warm%20natural%20light%20close%20up%20macro%20photography%20rich%20earthy%20tones%20amber%20brown%20cream%20colors%20elegant%20TCM%20apothecary%20aesthetic%20highly%20detailed%20textures&width=1920&height=1080&seq=slider-tcm-herbs-2025-v3&orientation=landscape',
    label: '02',
  },
];

export default function FullscreenSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const DURATION = 5000;

  // 視差滾動
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 當區塊進入視窗時開始計算
      const scrolled = windowH - rect.top;
      const total = windowH + rect.height;
      const ratio = Math.max(0, Math.min(1, scrolled / total));
      // 幅度：最多往上移動 180px
      setOffsetY(ratio * 180);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 700);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        next();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [current, next]);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: '65vh', minHeight: '420px', background: '#f5f0e8' }}>
      {/* 整個區塊視差位移 */}
      <div
        className="absolute w-full"
        style={{
          top: '-90px',
          height: 'calc(100% + 200px)',
          transform: `translateY(-${offsetY}px)`,
          transition: 'transform 0.05s linear',
          willChange: 'transform',
          background: '#f5f0e8',
        }}
      >
        {/* 背景圖層 */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
          >
            <img
              src={s.image}
              alt={s.label}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}

        {/* 深色遮罩 */}
        <div className="absolute inset-0 z-10" style={{ background: 'rgba(248,246,241,0.08)' }} />

        {/* 右下角：縮圖導覽 */}
        <div className="absolute bottom-10 right-10 z-20 flex items-end gap-3">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="relative overflow-hidden cursor-pointer transition-all duration-500 group"
              style={{
                width: i === current ? '80px' : '52px',
                height: '52px',
                opacity: i === current ? 1 : 0.55,
                outline: 'none',
                border: 'none',
                padding: 0,
                flexShrink: 0,
              }}
            >
              <img
                src={s.image}
                alt={s.label}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: i === current ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.3)' }}
              />
              {i === current && (
                <div className="absolute bottom-0 left-0 h-[2px] w-full" style={{ background: 'rgba(255,255,255,0.25)' }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${progress}%`,
                      background: '#e8c97a',
                      transition: 'width 30ms linear',
                    }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 右側箭頭 */}
        <button
          onClick={next}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer group flex items-center justify-center"
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(4px)',
            transition: 'all 0.3s ease',
          }}
        >
          <i className="ri-arrow-right-line text-white text-lg group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
