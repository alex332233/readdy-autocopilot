
const features = [
  {
    tag: '御守哲學',
    number: '01',
    title: '預防醫學的先行者',
    description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
  },
  {
    tag: '艾苜協奏',
    number: '02',
    title: '醫食同源的雙重療癒',
    description: '完美平衡「醫療治療」與「生活養護」，結合艾的醫療溫煦與苜的食療生機，喚醒身體自癒力。',
  },
  {
    tag: '科技中醫',
    number: '03',
    title: '無痛光能修復技術',
    description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
  },
  {
    tag: '專屬定製',
    number: '04',
    title: '全生命週期的守護',
    description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
  },
];

export default function FeaturesSectionV6() {
  return (
    <section className="py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* 標題 */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800 mb-4">品牌特色</h2>
        </div>

        {/* 橫向分欄列表：每項左右分佈 */}
        <div className="space-y-0 divide-y divide-[#d9cfc4]">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex items-start gap-12 py-10 transition-colors duration-300 hover:bg-[#f3ede4] px-6 -mx-6 rounded-xl"
            >
              {/* 序號 */}
              <span className="text-5xl font-serif text-[#d9cfc4] group-hover:text-[#c4a97a] transition-colors duration-300 leading-none pt-1 w-16 flex-shrink-0">
                {f.number}
              </span>

              {/* 標籤 + 標題 */}
              <div className="w-56 flex-shrink-0 pt-1">
                <span className="text-[10px] tracking-[0.3em] text-[#a67c52] block mb-2">{f.tag}</span>
                <h3 className="text-xl font-serif font-normal text-gray-800 leading-snug">{f.title}</h3>
              </div>

              {/* 分隔線 */}
              <div className="flex-shrink-0 w-px self-stretch bg-[#d9cfc4] mx-4"></div>

              {/* 描述 */}
              <p className="flex-1 text-sm text-gray-500 leading-relaxed pt-1">{f.description}</p>

              {/* 右側箭頭裝飾 */}
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#d9cfc4] group-hover:border-[#a67c52] group-hover:text-[#a67c52] text-[#d9cfc4] transition-all duration-300 mt-1">
                <i className="ri-arrow-right-line text-sm"></i>
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 rounded-3xl overflow-hidden relative bg-[#cd9651]">
          <div className="relative z-10 py-16 px-10 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-serif font-normal mb-4">
              艾苜中醫，您的健康護身符
            </h3>
            <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
              讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。
            </p>
            <button
              onClick={() => window.REACT_APP_NAVIGATE?.('/#booking')}
              className="inline-flex items-center gap-2 bg-white text-[#cd9651] px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-colors duration-300 whitespace-nowrap cursor-pointer"
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
