
const features = [
  {
    tag: '御守哲學',
    number: '01',
    title: '預防醫學的先行者',
    description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
    icon: 'ri-shield-star-line',
  },
  {
    tag: '艾苜協奏',
    number: '02',
    title: '醫食同源的雙重療癒',
    description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
    icon: 'ri-leaf-line',
  },
  {
    tag: '科技中醫',
    number: '03',
    title: '無痛光能修復技術',
    description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
    icon: 'ri-flashlight-line',
  },
  {
    tag: '專屬定製',
    number: '04',
    title: '全生命週期的守護',
    description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
    icon: 'ri-heart-pulse-line',
  },
];

export default function FeaturesSectionV7() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] text-[#a67c52] mb-3">BRAND FEATURES</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800 mb-4">品牌特色</h2>
          <div className="w-16 h-0.5 bg-[#a67c52] mx-auto"></div>
        </div>

        {/* 2x2 卡片網格，純文字 */}
        <div className="grid grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative bg-[#faf8f5] rounded-2xl p-10 border border-[#e8e0d4] hover:border-[#c4a97a] hover:shadow-lg transition-all duration-300 group"
            >
              {/* 背景序號水印 */}
              <span className="absolute top-6 right-8 text-7xl font-serif text-[#ede8e0] group-hover:text-[#e0d5c5] transition-colors duration-300 leading-none select-none">
                {f.number}
              </span>

              {/* 圖示 */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0e8da] mb-6 group-hover:bg-[#e8d8c0] transition-colors duration-300">
                <i className={`${f.icon} text-xl text-[#a67c52]`}></i>
              </div>

              {/* 標籤 */}
              <span className="text-[10px] tracking-[0.3em] text-[#a67c52] block mb-3">{f.tag}</span>

              {/* 標題 */}
              <h3 className="text-xl font-serif font-normal text-gray-800 mb-4 leading-snug">{f.title}</h3>

              {/* 分隔線 */}
              <div className="w-10 h-0.5 bg-[#c4a97a] mb-4 group-hover:w-16 transition-all duration-300"></div>

              {/* 描述 */}
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
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
