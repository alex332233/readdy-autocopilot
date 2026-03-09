
import FadeIn from '../../../components/base/FadeIn';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#fcfbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">診所據點</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              歡迎蒞臨艾苜中醫診所,我們期待為您服務
            </p>
          </div>
        </FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={100} className="order-2 lg:order-1">
            <img
              alt="艾苜中醫診所外觀"
              className="w-full rounded-3xl shadow-2xl"
              src="https://readdy.ai/api/search-image?query=Modern%20traditional%20Chinese%20medicine%20clinic%20exterior%20and%20interior%2C%20warm%20welcoming%20entrance%2C%20professional%20medical%20facility%20with%20traditional%20elements%2C%20clean%20and%20bright%20environment%20in%20Taiwan&width=600&height=400&seq=clinic-location-001&orientation=landscape"
            />
          </FadeIn>
          <div className="order-1 lg:order-2 space-y-8">
            <FadeIn direction="up" delay={0}>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">艾苜中醫診所</h3>
                <p className="text-base text-slate-600 mb-6">位於台南市北區,交通便利,環境舒適溫馨</p>
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
                    <p className="text-slate-600 leading-relaxed">704臺南市北區北安路一段239號</p>
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
                    <p className="text-slate-600 leading-relaxed">06 252 0699</p>
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
                    <p className="text-slate-600 leading-relaxed">
                      週一至週六 09:00-21:00
                      <br />
                      週日公休
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="up" delay={320}>
              <button
                onClick={() =>
                  window.open(
                    'https://www.google.com/maps/search/?api=1&query=23.012694,120.200711',
                    '_blank'
                  )
                }
                className="inline-flex items-center px-8 py-4 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-navigation-line mr-2"></i>Google地圖導航
              </button>
            </FadeIn>
          </div>
        </div>
        <FadeIn direction="up" delay={100}>
          <div className="mt-16">
            <div className="bg-white rounded-3xl p-4 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234567890123!2d120.200711!3d23.012694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890123"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="艾苜中醫診所位置地圖"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
