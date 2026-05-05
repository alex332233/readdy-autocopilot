import FadeIn from '../../../components/base/FadeIn';
import {getSiteSettingsDataAttribute} from '../../../sanity/dataAttributes';
import {useSiteSettingsContent} from '../../../sanity/useSiteSettingsContent';

export default function LocationSection() {
  const siteSettings = useSiteSettingsContent();
  const section = siteSettings.locationSection;

  return (
    <section id="location" className="py-20 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#cd9651]"
              data-sanity={getSiteSettingsDataAttribute('locationSection.title')}
            >
              {section.title}
            </h2>
            <p
              className="text-base text-slate-600 max-w-2xl mx-auto"
              data-sanity={getSiteSettingsDataAttribute('locationSection.subtitle')}
            >
              {section.subtitle}
            </p>
          </div>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={100} className="order-2 lg:order-1">
            <img
              alt={section.image.alt}
              className="w-full rounded-3xl shadow-2xl"
              src={section.image.url}
              data-sanity={getSiteSettingsDataAttribute('locationSection.image')}
            />
          </FadeIn>
          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn direction="up" delay={0}>
              <div>
                <h3
                  className="text-2xl font-serif font-bold text-slate-800 mb-3"
                  data-sanity={getSiteSettingsDataAttribute('locationSection.clinicName')}
                >
                  {section.clinicName}
                </h3>
                <p
                  className="text-base text-slate-600 mb-6"
                  data-sanity={getSiteSettingsDataAttribute('locationSection.clinicDescription')}
                >
                  {section.clinicDescription}
                </p>
              </div>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn direction="up" delay={80}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cd9651]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-[#cd9651] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">診所地址</h4>
                    <p
                      className="text-slate-600 leading-relaxed"
                      data-sanity={getSiteSettingsDataAttribute('address')}
                    >
                      {siteSettings.address}
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={160}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cd9651]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-[#cd9651] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">聯絡電話</h4>
                    <p
                      className="text-slate-600 leading-relaxed"
                      data-sanity={getSiteSettingsDataAttribute('phone')}
                    >
                      {siteSettings.phone}
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={240}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#cd9651]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-[#cd9651] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">營業時間</h4>
                    <p
                      className="text-slate-600 leading-relaxed whitespace-pre-line"
                      data-sanity={getSiteSettingsDataAttribute('locationSection.hours')}
                    >
                      {section.hours}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={320}>
              <button
                onClick={() => window.open(section.mapLink, '_blank')}
                data-sanity={getSiteSettingsDataAttribute('locationSection.mapLink')}
                className="inline-flex items-center px-8 py-4 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-navigation-line mr-2"></i>Google 地圖導航
              </button>
            </FadeIn>
          </div>
        </div>
        <FadeIn direction="up" delay={100}>
          <div className="mt-16">
            <div className="bg-white rounded-3xl p-4 shadow-lg">
              <iframe
                src={section.mapEmbedUrl}
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="艾苜中醫診所位置地圖"
                className="rounded-2xl"
                data-sanity={getSiteSettingsDataAttribute('locationSection.mapEmbedUrl')}
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
