
import FadeIn from '../../../components/base/FadeIn';

export default function AboutSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="w-full bg-[#f5ede0] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[700px] lg:min-h-[750px]">
        {/* 左側文字區 */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 py-24 lg:py-32 px-8 lg:pl-24 lg:pr-16">
          <FadeIn direction="up" delay={0}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#cd9651] leading-tight mb-3">
              關於艾苜中醫
            </h2>
            <p className="text-sm text-[#cd9651] italic tracking-widest mb-8">
              Amulette Chinese Medical Clinic
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={120}>
            <p className="text-xl font-medium mb-6 leading-relaxed" style={{ color: '#374151' }}>
              您與家人的隨身健康御守
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#374151' }}>
              在繁忙的生活中，艾苜致力於在您身體失衡前便先一步承接。我們懂妳的優雅，更懂您對家人健康的牽掛。走進艾苜，帶走的不只是一帖藥方，而是身心靈被安穩接住的暖光。
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={240}>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-[#cd9651] pl-4">
                <p className="font-bold text-gray-800 text-base mb-1">「艾」是呵護</p>
                <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                  像月光般溫潤，照料女性生理節律，讓您的優雅源自健康的自然發光。
                </p>
              </div>
              <div className="border-l-2 border-[#cd9651] pl-4">
                <p className="font-bold text-gray-800 text-base mb-1">「苜」是滋養</p>
                <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>
                  像大地般深根，為全家人紮穩健康地基，注入源源不絕的生命動能。
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={360}>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center px-7 py-3.5 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-medium cursor-pointer transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              <span className="text-[14px] font-medium tracking-[0.1em]">關於艾苜中醫診所</span>
              <i className="ri-arrow-right-line ml-3 transition-all duration-300"></i>
            </button>
          </FadeIn>
        </div>

        {/* 右側圖片區 */}
        <FadeIn direction="left" delay={100} className="w-full lg:w-1/2 h-[480px] lg:h-auto">
          <img
            alt="艾苜中醫診所環境"
            className="w-full h-full object-cover object-top"
            src="https://readdy.ai/api/search-image?query=Elegant%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20wooden%20shelves%20displaying%20ceramic%20herb%20jars%20and%20dried%20herbs%2C%20soft%20natural%20lighting%20through%20window%2C%20modern%20minimalist%20design%20combined%20with%20traditional%20elements%2C%20peaceful%20and%20professional%20atmosphere%2C%20warm%20earth%20tones%2C%20clean%20aesthetic&width=800&height=1000&seq=about-clinic-002&orientation=portrait"
          />
        </FadeIn>
      </div>
    </section>
  );
}
