import FadeIn from '../../../components/base/FadeIn';

const galleryImages = [
  {
    url: "https://readdy.ai/api/search-image?query=modern%20traditional%20chinese%20medicine%20clinic%20interior%20warm%20lighting%20wooden%20furniture%20elegant%20reception%20area%20soft%20beige%20tones%20plants%20decoration%20professional%20medical%20environment%20cozy%20atmosphere%20high%20end%20aesthetic&width=800&height=900&seq=gallery_left_main&orientation=portrait",
    label: "Clinic Space",
    labelZh: "診所空間"
  },
  {
    url: "https://readdy.ai/api/search-image?query=chinese%20medicine%20consultation%20room%20doctor%20patient%20warm%20wooden%20desk%20herbal%20medicine%20bottles%20soft%20natural%20light%20professional%20calm%20atmosphere%20elegant%20interior%20design&width=800&height=440&seq=gallery_right_top&orientation=landscape",
    label: "Consultation Room",
    labelZh: "診療室"
  },
  {
    url: "https://readdy.ai/api/search-image?query=acupuncture%20treatment%20room%20clean%20white%20bed%20soft%20lighting%20relaxing%20spa%20like%20atmosphere%20traditional%20chinese%20medicine%20clinic%20peaceful%20serene%20environment%20warm%20tones&width=800&height=440&seq=gallery_right_bottom&orientation=landscape",
    label: "Treatment Room",
    labelZh: "治療室"
  },
];

export default function ClinicGallerySection() {
  return (
    <section className="w-full overflow-hidden py-2 bg-[#faf6ef]">
      <div className="flex gap-2 w-full" style={{ maxHeight: '680px' }}>
        {/* 左側大圖 */}
        <FadeIn direction="up" delay={0} className="w-1/2 flex-shrink-0 relative overflow-hidden group cursor-pointer">
          <div className="w-full h-full" style={{ height: '680px' }}>
            <img
              src={galleryImages[0].url}
              alt={galleryImages[0].label}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 block"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <div className="flex flex-col items-center gap-1">
              <span className="text-white text-xl font-light tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {galleryImages[0].label}
              </span>
              <span className="text-white/90 text-base tracking-widest" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                {galleryImages[0].labelZh}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 右側上下兩圖 */}
        <div className="w-1/2 flex flex-col gap-2" style={{ height: '680px' }}>
          {galleryImages.slice(1).map((img, i) => (
            <FadeIn key={i} direction="up" delay={(i + 1) * 100} className="flex-1 relative overflow-hidden group cursor-pointer">
              <div className="w-full h-full">
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 block"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-white text-lg font-light tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {img.label}
                  </span>
                  <span className="text-white/90 text-sm tracking-widest" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                    {img.labelZh}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
