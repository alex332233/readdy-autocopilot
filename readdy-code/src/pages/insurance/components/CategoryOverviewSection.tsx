
import { useState } from 'react';

const categories = [
  {
    title: '內科：本草・歸元',
    englishTitle: 'Holistic Restoration',
    subtitle: '失眠・自律神經・癌後調理・雜病・婦科保健',
    icon: 'ri-leaf-line',
    anchorId: 'category-0',
    image: 'https://readdy.ai/api/search-image?query=Soft%20warm%20herbal%20medicine%20flat%20lay%20dried%20chamomile%20lavender%20rose%20petals%20on%20linen%20cloth%20muted%20sage%20green%20cream%20ivory%20tones%20gentle%20morning%20light%20airy%20dreamy%20botanical%20wellness%20spa%20aesthetic%20minimal%20serene%20healing%20atmosphere&width=600&height=700&seq=ins_heal_01&orientation=portrait',
  },
  {
    title: '婦科：月・悅・圓',
    englishTitle: 'Lunar Wellness',
    subtitle: '不孕調理・產後調理・更年期症候群',
    icon: 'ri-heart-pulse-line',
    anchorId: 'category-1',
    image: 'https://readdy.ai/api/search-image?query=Delicate%20pink%20blush%20rose%20petals%20scattered%20on%20soft%20white%20linen%20warm%20candlelight%20glow%20muted%20dusty%20rose%20cream%20tones%20feminine%20gentle%20wellness%20ritual%20serene%20tranquil%20healing%20spa%20mood%20dreamy%20soft%20focus%20bokeh&width=600&height=700&seq=ins_heal_02&orientation=portrait',
  },
  {
    title: '兒少：小苗・茁壯',
    englishTitle: 'Sprouting Wellness',
    subtitle: '轉骨發育・注意力不足過動症・近視輔助治療',
    icon: 'ri-seedling-line',
    anchorId: 'category-2',
    image: 'https://readdy.ai/api/search-image?query=Tiny%20green%20seedling%20sprouting%20from%20soft%20soil%20warm%20sunlight%20streaming%20through%20muted%20sage%20mint%20cream%20tones%20gentle%20nature%20growth%20vitality%20pure%20clean%20minimal%20background%20peaceful%20healing%20botanical&width=600&height=700&seq=ins_heal_03&orientation=portrait',
  },
  {
    title: '皮膚科：肌膚・煥采',
    englishTitle: 'Skin Radiance',
    subtitle: '青春痘・蕁麻疹・濕疹・汗皰疹・乾癬',
    icon: 'ri-sparkling-line',
    anchorId: 'category-3',
    image: 'https://readdy.ai/api/search-image?query=Smooth%20glowing%20skin%20texture%20close%20up%20soft%20warm%20peach%20ivory%20tones%20botanical%20herbs%20jade%20roller%20rose%20quartz%20crystal%20on%20white%20linen%20gentle%20diffused%20light%20serene%20beauty%20ritual%20minimal%20elegant%20healing%20spa&width=600&height=700&seq=ins_heal_04&orientation=portrait',
  },
  {
    title: '針灸：經絡・導引',
    englishTitle: 'Meridian Guidance',
    subtitle: '中風後遺症・帕金森・顏面神經麻痺・疤痕沾黏・筋骨痠痛',
    icon: 'ri-pulse-line',
    anchorId: 'category-4',
    image: 'https://readdy.ai/api/search-image?query=Zen%20acupuncture%20healing%20atmosphere%20warm%20amber%20honey%20tones%20smooth%20river%20stones%20incense%20smoke%20wisps%20soft%20candlelight%20wooden%20surface%20muted%20earth%20tones%20serene%20calm%20meditative%20wellness%20sanctuary%20minimal&width=600&height=700&seq=ins_heal_05&orientation=portrait',
  },
];

interface Props {
  categoryRefs: React.RefObject<HTMLDivElement>[];
}

export default function CategoryOverviewSection({ categoryRefs }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    const ref = categoryRefs[index];
    if (ref?.current) {
      const offset = 100;
      const top = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex gap-3 h-[520px]">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0"
              style={{
                flex: hoveredIndex === index ? '3.5' : '1',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              {/* 背景圖 */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700"
                style={{ transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
              />

              {/* 漸層遮罩 — 更輕柔，暖棕色調 */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: hoveredIndex === index
                    ? 'linear-gradient(to top, rgba(80,50,20,0.72) 0%, rgba(80,50,20,0.25) 55%, rgba(80,50,20,0.08) 100%)'
                    : 'linear-gradient(to top, rgba(60,38,14,0.55) 0%, rgba(60,38,14,0.18) 60%, rgba(60,38,14,0.04) 100%)',
                }}
              ></div>

              {/* 收合狀態：直排英文標題 */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-400"
                style={{ opacity: hoveredIndex === index ? 0 : 1 }}
              >
                <p
                  className="text-white/70 text-xs tracking-[0.25em] uppercase font-light"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    letterSpacing: '0.2em',
                  }}
                >
                  {cat.englishTitle}
                </p>
              </div>

              {/* 展開狀態：完整內容 */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-500"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                {/* 圖示 */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full mb-4"
                  style={{ backgroundColor: 'rgba(205,150,81,0.80)' }}
                >
                  <i className={`${cat.icon} text-white text-lg`}></i>
                </div>

                {/* 英文小標 */}
                <p className="text-[#e8c48a] text-xs tracking-[0.25em] uppercase mb-2 font-light">
                  {cat.englishTitle}
                </p>

                {/* 中文主標 */}
                <h3
                  className="text-white text-2xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  {cat.title}
                </h3>

                {/* 分隔線 */}
                <div className="w-8 h-px bg-[#cd9651]/70 mb-4"></div>

                {/* 次分類說明 */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* 箭頭提示 */}
                <div className="mt-5 flex items-center gap-2 text-[#e8c48a] text-sm font-medium">
                  <span>了解更多</span>
                  <i className="ri-arrow-down-line text-base"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
