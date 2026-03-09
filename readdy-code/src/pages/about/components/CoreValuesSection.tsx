
export default function CoreValuesSection() {
  const values = [
    {
      number: '01',
      icon: 'ri-shield-check-line',
      title: 'Amulette 般的守護',
      description: '以「護身符」為名，落實「治未病」哲學。在亞健康階段即介入調理，為身體築起第一道防線。',
    },
    {
      number: '02',
      icon: 'ri-scales-3-line',
      title: '理性與感性的平衡',
      description: '融合中醫陰陽智慧與現代醫學觀點，不談玄學，只專注於幫身體找回「動態平衡」。',
    },
    {
      number: '03',
      icon: 'ri-heart-3-line',
      title: '妳是家庭的核心',
      description: '專注於 20-50 歲女性的生命歷程。我們先照顧好身為「家庭支柱」的妳，讓妳有餘力去愛妳所愛的人。',
    },
    {
      number: '04',
      icon: 'ri-team-line',
      title: '全家人的醫療團隊',
      description: '以婦兒科的細膩為起點，延伸至結構、內科與全人照護，提供「從女生到全家」的完整健康對策。',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-normal text-gray-800">
            艾與苜：剛柔並濟的醫學智慧
          </h2>
        </div>

        {/* 四欄卡片 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#cd9651]/40 hover:border-[#cd9651]"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#cd9651]/10 text-[#cd9651]">
                  {value.number}
                </span>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#cd9651] transition-all duration-300 group-hover:scale-110">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
              </div>
              <h3 className="font-serif text-xl font-normal text-gray-800 mb-3 group-hover:text-[#cd9651] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-[#cd9651]">了解更多</span>
                <i className="ri-arrow-right-line text-sm text-[#cd9651]"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
