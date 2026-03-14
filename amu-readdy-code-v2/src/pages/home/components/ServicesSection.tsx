import FadeIn from '../../../components/base/FadeIn';
import { servicesData } from '../../../mocks/services';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#cd9651]">
              主治項目
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              融合傳統中醫精髓與現代醫學理念，針對各類常見病症提供個人化診療方案，從根本調理體質，守護您與家人的健康。
            </p>
          </div>
        </FadeIn>

        {/* 手機版：橫向滑動 */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-6 shadow-sm border border-[#cd9651]/40 flex-shrink-0 snap-start"
                style={{ width: '72vw', maxWidth: '280px' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#cd9651]/10 text-[#cd9651]">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#cd9651] flex items-center justify-center">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#cd9651] mb-3">{service.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-medium text-[#cd9651]">了解更多</span>
                  <i className="ri-arrow-right-line text-sm text-[#cd9651]"></i>
                </div>
              </div>
            ))}
          </div>
          {/* 滑動提示點 */}
          <div className="flex justify-center gap-1.5 mt-3">
            {servicesData.map((_, index) => (
              <div key={index} className="w-1.5 h-1.5 rounded-full bg-[#cd9651]/30"></div>
            ))}
          </div>
        </div>

        {/* 桌面版：原有 grid */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 80} threshold={0.08}>
              <div className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#cd9651]/40 hover:border-[#cd9651] h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#cd9651]/10 text-[#cd9651]">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#cd9651] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-1 group-hover:text-[#cd9651] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#cd9651] mb-3">{service.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-[#cd9651]">了解更多</span>
                  <i className="ri-arrow-right-line text-sm text-[#cd9651]"></i>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
