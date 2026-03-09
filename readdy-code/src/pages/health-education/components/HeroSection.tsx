
export default function HeroSection() {
  return (
    <section className="relative pt-24 overflow-hidden bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1
          className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          衛教資訊
        </h1>
        <p className="text-sm text-gray-500 max-w-lg leading-relaxed tracking-wide">
          專業醫師撰寫，讓您更了解中醫調理的知識與日常保健之道
        </p>
      </div>
    </section>
  );
}
