
export default function HeroSection() {
  return (
    <section className="relative pt-24 overflow-hidden bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#cd9651] mb-4 leading-tight" style={{ fontFamily: "'Noto Serif TC', serif" }}>
          醫師團隊
        </h1>
        <p className="text-base text-gray-600 max-w-lg leading-relaxed">
          三位專業中醫師，各擅其長，以豐富的臨床經驗與現代醫學知識，為您提供全方位的健康照護。
        </p>
      </div>
    </section>
  );
}
