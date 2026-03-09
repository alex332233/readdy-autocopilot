
import FadeIn from '../../../components/base/FadeIn';

export default function WhyChooseSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-choose" className="py-20 lg:py-28" style={{ backgroundColor: '#f5ede0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-[#cd9651]">
                為什麼選擇艾苜
                <br />
                守護您的健康
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={120}>
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                  上醫治未病:古籍《黃帝內經》有云,真正的醫術不應止於「挽救」,更在於「預防」。艾苜(Amulette)源自法語的「御守」,如同御守在災厄來臨前擋去風雨。
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
                  我們致力於在您身體失衡的初期,便先一步介入調理。讓每一次的診療,都是為您築起一道溫柔而堅實的健康防線。不只治病,更守護您的健康。
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={240}>
              <div className="pt-4">
                <button
                  onClick={scrollToBooking}
                  className="inline-flex items-center px-8 py-3 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-medium transition-all whitespace-nowrap text-sm cursor-pointer"
                >
                  立即預約諮詢
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={100}>
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="艾苜中醫診療情境"
                className="w-full h-full object-cover object-top"
                src="https://readdy.ai/api/search-image?query=Modern%20Chinese%20medicine%20consultation%20room%20with%20professional%20female%20doctor%20and%20patient%20having%20warm%20conversation%2C%20elegant%20minimalist%20interior%20design%20with%20natural%20wood%20elements%20and%20soft%20lighting%2C%20peaceful%20healing%20atmosphere%2C%20contemporary%20medical%20practice%20combined%20with%20traditional%20wisdom&width=800&height=1000&seq=why-choose-new-003&orientation=portrait"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
