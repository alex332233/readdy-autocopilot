
import FadeIn from '../../../components/base/FadeIn';

export default function BookingSection() {
  return (
    <section id="booking" className="py-14 bg-[#cd9651]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">預約艾苜</h2>
            <p className="text-white/90 text-sm">選擇您偏好的聯繫方式,立即開始您的健康調理之旅</p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6">
          <FadeIn direction="up" delay={100}>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 flex items-center justify-center bg-[#cd9651] rounded-full mx-auto mb-4">
                <i className="ri-phone-fill text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-[#cd9651] mb-4">電話預約</h3>
              <a
                href="tel:062520699"
                className="block text-2xl font-bold text-gray-800 hover:text-[#cd9651] transition-colors duration-300 cursor-pointer mb-4"
              >
                06 252 0699
              </a>
              <a
                href="tel:062520699"
                className="inline-flex items-center px-6 py-2.5 bg-[#cd9651] hover:bg-[#b8843d] text-white text-sm rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>立即撥打
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 flex items-center justify-center bg-[#cd9651] rounded-full mx-auto mb-4">
                <i className="ri-line-fill text-xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-[#cd9651] mb-4">LINE 預約</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">@艾苜中醫</p>
              <a
                href="https://lin.ee/EeONEJc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 bg-[#06C755] hover:bg-[#05a348] text-white text-sm rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-line-fill mr-2"></i>加入好友
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
