
import { useState } from 'react';

const features = [
  {
    tag: '御守哲學',
    title: '預防醫學的先行者',
    description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
    image: 'https://readdy.ai/api/search-image?query=Serene%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20golden%20sunlight%20streaming%20through%20sheer%20curtains%2C%20wooden%20desk%20with%20herbal%20medicine%20jars%2C%20soft%20cream%20walls%2C%20peaceful%20healing%20atmosphere%2C%20elegant%20minimalist%20decor%2C%20professional%20interior%20photography%2C%20warm%20amber%20tones%2C%20bokeh%20background&width=700&height=500&seq=v4-feat-01&orientation=landscape',
    stat: '15+',
    statLabel: '年臨床經驗',
  },
  {
    tag: '艾苜協奏',
    title: '醫食同源的雙重療癒',
    description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20arrangement%20of%20fresh%20medicinal%20herbs%20and%20dried%20botanicals%20on%20a%20warm%20linen%20cloth%2C%20small%20ceramic%20bowls%20with%20herbal%20powder%2C%20soft%20diffused%20natural%20light%2C%20cream%20and%20sage%20green%20tones%2C%20artisan%20apothecary%20aesthetic%2C%20close%20up%20lifestyle%20photography%2C%20warm%20and%20gentle%20mood&width=700&height=500&seq=v4-feat-02&orientation=landscape',
    stat: '3000+',
    statLabel: '調理成功案例',
  },
  {
    tag: '科技中醫',
    title: '無痛光能修復技術',
    description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
    image: 'https://readdy.ai/api/search-image?query=Futuristic%20yet%20warm%20medical%20treatment%20room%20with%20soft%20glowing%20laser%20therapy%20device%2C%20gentle%20blue%20and%20amber%20light%2C%20clean%20white%20and%20beige%20interior%2C%20modern%20medical%20equipment%2C%20calm%20reassuring%20atmosphere%2C%20professional%20healthcare%20photography%2C%20soft%20focus%20background&width=700&height=500&seq=v4-feat-03&orientation=landscape',
    stat: '98%',
    statLabel: '患者滿意度',
  },
  {
    tag: '專屬定製',
    title: '全生命週期的守護',
    description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
    image: 'https://readdy.ai/api/search-image?query=Warm%20family%20portrait%20in%20a%20bright%20modern%20Chinese%20medicine%20clinic%2C%20caring%20female%20doctor%20in%20white%20coat%20consulting%20with%20a%20young%20mother%20and%20child%2C%20soft%20natural%20window%20light%2C%20cream%20and%20beige%20interior%2C%20nurturing%20professional%20atmosphere%2C%20lifestyle%20photography%2C%20gentle%20warm%20tones&width=700&height=500&seq=v4-feat-04&orientation=landscape',
    stat: '4',
    statLabel: '全齡照護方案',
  },
];

export default function FeaturesSectionV4() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#a67c52] mb-3">BRAND FEATURES</p>
            <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800">品牌特色</h2>
          </div>
          <div className="hidden lg:block w-1/2 h-px bg-gradient-to-r from-[#a67c52]/30 to-transparent mb-2"></div>
        </div>

        {/* 橫向滾動時間軸卡片 */}
        <div className="grid grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: '340px' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* 圖片 */}
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* 漸層底部遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/85 via-[#1a1208]/30 to-transparent"></div>

              {/* 左側金色豎線 */}
              <div className={`absolute left-0 top-0 w-1 bg-[#cd9651] transition-all duration-500 ${hovered === i ? 'h-full' : 'h-0'}`}></div>

              {/* 數字統計 — 右上角 */}
              <div className="absolute top-6 right-6 text-right">
                <div className="text-3xl font-serif text-[#e8c98a] leading-none">{f.stat}</div>
                <div className="text-[10px] tracking-widest text-white/60 mt-1">{f.statLabel}</div>
              </div>

              {/* 底部文字 */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-[10px] tracking-[0.25em] text-[#e8c98a] block mb-2">{f.tag}</span>
                <h3 className="text-xl font-serif font-normal text-white mb-0 leading-snug">{f.title}</h3>

                {/* hover 展開描述 */}
                <div className={`overflow-hidden transition-all duration-500 ${hovered === i ? 'max-h-24 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-white/75 leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
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
