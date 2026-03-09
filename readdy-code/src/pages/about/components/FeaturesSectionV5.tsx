
import { useState } from 'react';

const features = [
  {
    tag: '御守哲學',
    title: '預防醫學的先行者',
    description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
    icon: 'ri-shield-star-line',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20traditional%20Chinese%20medicine%20apothecary%20shelf%20with%20neatly%20arranged%20glass%20jars%20of%20dried%20herbs%2C%20warm%20amber%20lighting%2C%20wooden%20shelves%2C%20cream%20background%2C%20soft%20bokeh%2C%20professional%20interior%20photography%2C%20warm%20golden%20tones%2C%20peaceful%20healing%20space&width=1200&height=600&seq=v5-bg-01&orientation=landscape',
  },
  {
    tag: '艾苜協奏',
    title: '醫食同源的雙重療癒',
    description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
    icon: 'ri-leaf-line',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20overhead%20view%20of%20fresh%20green%20herbs%20and%20dried%20botanical%20ingredients%20arranged%20artfully%20on%20warm%20cream%20linen%2C%20small%20ceramic%20bowls%2C%20natural%20morning%20light%2C%20soft%20shadows%2C%20minimalist%20apothecary%20aesthetic%2C%20warm%20sage%20and%20beige%20tones%2C%20lifestyle%20photography&width=1200&height=600&seq=v5-bg-02&orientation=landscape',
  },
  {
    tag: '科技中醫',
    title: '無痛光能修復技術',
    description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
    icon: 'ri-flashlight-line',
    image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20medical%20treatment%20room%20with%20soft%20glowing%20ambient%20light%2C%20clean%20white%20walls%2C%20contemporary%20medical%20equipment%20with%20gentle%20warm%20glow%2C%20serene%20and%20calm%20atmosphere%2C%20professional%20healthcare%20interior%2C%20warm%20cream%20and%20white%20tones%2C%20soft%20focus&width=1200&height=600&seq=v5-bg-03&orientation=landscape',
  },
  {
    tag: '專屬定製',
    title: '全生命週期的守護',
    description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
    icon: 'ri-heart-pulse-line',
    image: 'https://readdy.ai/api/search-image?query=Warm%20sunlit%20consultation%20room%20in%20a%20modern%20Chinese%20medicine%20clinic%2C%20comfortable%20chairs%2C%20soft%20cream%20and%20beige%20interior%2C%20potted%20green%20plants%2C%20wooden%20accents%2C%20gentle%20natural%20light%20through%20sheer%20curtains%2C%20welcoming%20and%20nurturing%20atmosphere%2C%20interior%20lifestyle%20photography&width=1200&height=600&seq=v5-bg-04&orientation=landscape',
  },
];

export default function FeaturesSectionV5() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#a67c52] mb-3">BRAND FEATURES</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800 mb-4">品牌特色</h2>
          <div className="w-16 h-0.5 bg-[#a67c52] mx-auto"></div>
        </div>

        {/* 主體：全寬大圖切換 + 底部 Tab */}
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: '520px' }}>
          {/* 大圖區 */}
          <div className="relative h-full">
            {features.map((f, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover object-top"
                />
                {/* 深色漸層 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/90 via-[#1a1208]/40 to-transparent"></div>

                {/* 中央文字 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pb-24">
                  <div className="w-12 h-0.5 bg-[#e8c98a] mb-6"></div>
                  <span className="text-xs tracking-[0.3em] text-[#e8c98a] mb-3">{f.tag}</span>
                  <h3 className="text-3xl lg:text-4xl font-serif font-normal text-white mb-5 leading-snug">{f.title}</h3>
                  <p className="text-base text-white/75 leading-relaxed max-w-lg">{f.description}</p>
                  <div className="w-12 h-0.5 bg-[#e8c98a] mt-6"></div>
                </div>
              </div>
            ))}

            {/* 底部 Tab 切換列 */}
            <div className="absolute bottom-0 left-0 right-0 flex">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 flex flex-col items-center justify-center gap-1.5 py-5 cursor-pointer transition-all duration-300 border-t-2 ${
                    active === i
                      ? 'bg-[#2e2620]/90 border-[#e8c98a] backdrop-blur-sm'
                      : 'bg-[#1a1208]/70 border-transparent hover:bg-[#2e2620]/60 backdrop-blur-sm'
                  }`}
                >
                  <div className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 ${active === i ? 'text-[#e8c98a]' : 'text-white/50'}`}>
                    <i className={`${f.icon} text-lg`}></i>
                  </div>
                  <span className={`text-xs tracking-widest transition-colors duration-300 ${active === i ? 'text-[#e8c98a]' : 'text-white/50'}`}>
                    {f.tag}
                  </span>
                </button>
              ))}
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
