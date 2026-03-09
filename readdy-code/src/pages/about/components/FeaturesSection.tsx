
import { useState } from 'react';

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      tag: '御守哲學',
      title: '預防醫學的先行者',
      description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
      image: 'https://readdy.ai/api/search-image?query=A%20serene%20professional%20traditional%20Chinese%20medicine%20practitioner%20gently%20examining%20a%20patients%20pulse%20in%20a%20warm%20modern%20clinic%2C%20soft%20golden%20natural%20light%2C%20cream%20and%20beige%20interior%2C%20wooden%20elements%2C%20peaceful%20caring%20atmosphere%2C%20professional%20lifestyle%20photography%2C%20shallow%20depth%20of%20field%2C%20warm%20bokeh&width=600&height=440&seq=about-feat-01&orientation=landscape',
      size: 'large',
    },
    {
      tag: '艾苜協奏',
      title: '醫食同源的雙重療癒',
      description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20flat%20lay%20of%20traditional%20Chinese%20herbal%20medicine%20ingredients%20in%20small%20wooden%20bowls%2C%20dried%20herbs%2C%20fresh%20green%20plants%2C%20acupuncture%20needles%2C%20warm%20natural%20sunlight%20from%20above%2C%20soft%20cream%20and%20beige%20linen%20background%2C%20minimalist%20clean%20aesthetic%2C%20professional%20product%20photography%2C%20top%20view%2C%20warm%20tones&width=600&height=440&seq=about-feat-02&orientation=landscape',
      size: 'small',
    },
    {
      tag: '科技中醫',
      title: '無痛光能修復技術',
      description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
      image: 'https://readdy.ai/api/search-image?query=Modern%20advanced%20medical%20laser%20therapy%20equipment%20in%20a%20clean%20contemporary%20clinic%20room%2C%20soft%20warm%20ambient%20lighting%2C%20high-tech%20medical%20device%20with%20gentle%20light%20beam%2C%20minimalist%20white%20and%20beige%20interior%2C%20professional%20medical%20photography%2C%20calm%20and%20reassuring%20atmosphere&width=600&height=440&seq=about-feat-03&orientation=landscape',
      size: 'small',
    },
    {
      tag: '專屬定製',
      title: '全生命週期的守護',
      description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
      image: 'https://readdy.ai/api/search-image?query=Warm%20and%20caring%20scene%20of%20a%20female%20Chinese%20medicine%20doctor%20consulting%20with%20diverse%20patients%20including%20a%20young%20woman%20and%20a%20mother%20with%20child%20in%20a%20bright%20airy%20modern%20clinic%2C%20soft%20cream%20and%20beige%20tones%2C%20professional%20nurturing%20atmosphere%2C%20lifestyle%20photography%2C%20natural%20light&width=600&height=440&seq=about-feat-04&orientation=landscape',
      size: 'large',
    },
  ];

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800 mb-4">品牌特色</h2>
          <div className="w-16 h-0.5 bg-[#a67c52] mx-auto"></div>
        </div>

        {/* 第一排：大卡 + 小卡 */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          {/* 大卡 */}
          <div
            className="col-span-2 relative h-[480px] rounded-3xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={features[0].image}
              alt={features[0].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* 常態遮罩 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500"></div>
            {/* hover 遮罩 */}
            <div className={`absolute inset-0 bg-[#3d3228]/75 transition-opacity duration-500 ${hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* 底部常態文字 */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${hoveredIndex === 0 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-2 block">{features[0].tag}</span>
              <h3 className="text-2xl font-serif font-normal text-white">{features[0].title}</h3>
            </div>

            {/* hover 展開內容 */}
            <div className={`absolute inset-0 flex flex-col justify-center px-10 transition-all duration-500 ${hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-4 block">{features[0].tag}</span>
              <h3 className="text-3xl font-serif font-normal text-white mb-5">{features[0].title}</h3>
              <div className="w-10 h-0.5 bg-[#e8c98a] mb-5"></div>
              <p className="text-base text-white/85 leading-relaxed">{features[0].description}</p>
            </div>
          </div>

          {/* 小卡 */}
          <div
            className="col-span-1 relative h-[480px] rounded-3xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={features[1].image}
              alt={features[1].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500"></div>
            <div className={`absolute inset-0 bg-[#3d3228]/75 transition-opacity duration-500 ${hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-500 ${hoveredIndex === 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-2 block">{features[1].tag}</span>
              <h3 className="text-xl font-serif font-normal text-white">{features[1].title}</h3>
            </div>

            <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-all duration-500 ${hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-4 block">{features[1].tag}</span>
              <h3 className="text-2xl font-serif font-normal text-white mb-4">{features[1].title}</h3>
              <div className="w-8 h-0.5 bg-[#e8c98a] mb-4"></div>
              <p className="text-sm text-white/85 leading-relaxed">{features[1].description}</p>
            </div>
          </div>
        </div>

        {/* 第二排：小卡 + 大卡 */}
        <div className="grid grid-cols-3 gap-5">
          {/* 小卡 */}
          <div
            className="col-span-1 relative h-[480px] rounded-3xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={features[2].image}
              alt={features[2].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500"></div>
            <div className={`absolute inset-0 bg-[#3d3228]/75 transition-opacity duration-500 ${hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-500 ${hoveredIndex === 2 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-2 block">{features[2].tag}</span>
              <h3 className="text-xl font-serif font-normal text-white">{features[2].title}</h3>
            </div>

            <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-all duration-500 ${hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-4 block">{features[2].tag}</span>
              <h3 className="text-2xl font-serif font-normal text-white mb-4">{features[2].title}</h3>
              <div className="w-8 h-0.5 bg-[#e8c98a] mb-4"></div>
              <p className="text-sm text-white/85 leading-relaxed">{features[2].description}</p>
            </div>
          </div>

          {/* 大卡 */}
          <div
            className="col-span-2 relative h-[480px] rounded-3xl overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={features[3].image}
              alt={features[3].title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500"></div>
            <div className={`absolute inset-0 bg-[#3d3228]/75 transition-opacity duration-500 ${hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${hoveredIndex === 3 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-2 block">{features[3].tag}</span>
              <h3 className="text-2xl font-serif font-normal text-white">{features[3].title}</h3>
            </div>

            <div className={`absolute inset-0 flex flex-col justify-center px-10 transition-all duration-500 ${hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs tracking-[0.2em] text-[#e8c98a] mb-4 block">{features[3].tag}</span>
              <h3 className="text-3xl font-serif font-normal text-white mb-5">{features[3].title}</h3>
              <div className="w-10 h-0.5 bg-[#e8c98a] mb-5"></div>
              <p className="text-base text-white/85 leading-relaxed">{features[3].description}</p>
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 rounded-3xl overflow-hidden relative bg-[#3d3228]">
          <div className="relative z-10 py-16 px-10 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4">
              艾苜中醫，您的健康護身符
            </h3>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
              讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。
            </p>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')}
              className="inline-flex items-center gap-2 bg-[#cd9651] text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[#b8843f] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              立即預約初診
              <i className="ri-arrow-right-line text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
