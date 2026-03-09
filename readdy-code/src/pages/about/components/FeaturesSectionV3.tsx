
const features = [
  {
    tag: '御守哲學',
    title: '預防醫學的先行者',
    description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
    image: 'https://readdy.ai/api/search-image?query=A%20serene%20professional%20traditional%20Chinese%20medicine%20practitioner%20gently%20examining%20a%20patients%20pulse%20in%20a%20warm%20modern%20clinic%2C%20soft%20golden%20natural%20light%2C%20cream%20and%20beige%20interior%2C%20wooden%20elements%2C%20peaceful%20caring%20atmosphere%2C%20professional%20lifestyle%20photography%2C%20shallow%20depth%20of%20field%2C%20warm%20bokeh&width=600&height=700&seq=v3-feat-01&orientation=portrait',
  },
  {
    tag: '艾苜協奏',
    title: '醫食同源的雙重療癒',
    description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
    image: 'https://readdy.ai/api/search-image?query=Beautiful%20flat%20lay%20of%20traditional%20Chinese%20herbal%20medicine%20ingredients%20in%20small%20wooden%20bowls%2C%20dried%20herbs%2C%20fresh%20green%20plants%2C%20warm%20natural%20sunlight%20from%20above%2C%20soft%20cream%20and%20beige%20linen%20background%2C%20minimalist%20clean%20aesthetic%2C%20professional%20product%20photography%2C%20top%20view%2C%20warm%20tones&width=600&height=700&seq=v3-feat-02&orientation=portrait',
  },
  {
    tag: '科技中醫',
    title: '無痛光能修復技術',
    description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
    image: 'https://readdy.ai/api/search-image?query=Modern%20advanced%20medical%20laser%20therapy%20equipment%20in%20a%20clean%20contemporary%20clinic%20room%2C%20soft%20warm%20ambient%20lighting%2C%20high-tech%20medical%20device%20with%20gentle%20light%20beam%2C%20minimalist%20white%20and%20beige%20interior%2C%20professional%20medical%20photography%2C%20calm%20and%20reassuring%20atmosphere&width=600&height=700&seq=v3-feat-03&orientation=portrait',
  },
  {
    tag: '專屬定製',
    title: '全生命週期的守護',
    description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
    image: 'https://readdy.ai/api/search-image?query=Warm%20and%20caring%20scene%20of%20a%20female%20Chinese%20medicine%20doctor%20consulting%20with%20diverse%20patients%20including%20a%20young%20woman%20and%20a%20mother%20with%20child%20in%20a%20bright%20airy%20modern%20clinic%2C%20soft%20cream%20and%20beige%20tones%2C%20professional%20nurturing%20atmosphere%2C%20lifestyle%20photography%2C%20natural%20light&width=600&height=700&seq=v3-feat-04&orientation=portrait',
  },
];

export default function FeaturesSectionV3() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800 mb-4">品牌特色</h2>
          <div className="w-16 h-0.5 bg-[#a67c52] mx-auto"></div>
        </div>

        {/* 四欄橫排卡片 */}
        <div className="grid grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ height: '520px' }}
            >
              {/* 圖片 */}
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* 常態漸層遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* hover 深色遮罩 */}
              <div className="absolute inset-0 bg-[#2e2620]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 常態底部文字 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-3">
                <span className="text-[10px] tracking-[0.25em] text-[#e8c98a] block mb-2">{f.tag}</span>
                <h3 className="text-lg font-serif font-normal text-white leading-snug">{f.title}</h3>
              </div>

              {/* hover 展開內容：置中 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-7 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {/* 金色裝飾線 */}
                <div className="w-8 h-0.5 bg-[#e8c98a] mb-5"></div>
                <span className="text-[10px] tracking-[0.25em] text-[#e8c98a] block mb-3">{f.tag}</span>
                <h3 className="text-xl font-serif font-normal text-white mb-4 leading-snug">{f.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{f.description}</p>
                <div className="w-8 h-0.5 bg-[#e8c98a] mt-5"></div>
              </div>

              {/* 序號角標 */}
              <div className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-white/30 text-white/50 text-xs font-serif group-hover:border-[#e8c98a]/60 group-hover:text-[#e8c98a] transition-all duration-500">
                {String(i + 1).padStart(2, '0')}
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
