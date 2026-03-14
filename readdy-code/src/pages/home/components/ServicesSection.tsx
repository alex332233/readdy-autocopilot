
import FadeIn from '../../../components/base/FadeIn';
import { useRouteLoaderData } from 'react-router-dom';
import { servicesData } from '../../../mocks/services';
import type { HomePageContent } from '../../../sanity/types';

export default function ServicesSection() {
  const loaderData = useRouteLoaderData('home') as HomePageContent | undefined;
  const sectionTitle = loaderData?.servicesTitle || '主治項目';
  const items = loaderData?.servicesItems?.length ? loaderData.servicesItems : servicesData;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#f8f6f1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#cd9651]">
              {sectionTitle}
            </h2>
          </div>
        </FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service, index) => (
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
