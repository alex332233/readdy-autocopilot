import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';
import {getSanityImageUrl} from '../../../sanity/imageUrl';

export default function ClinicGallerySection() {
  const { gallery } = useHomePageContent();

  return (
    <section className="w-full overflow-hidden py-2 bg-[#faf6ef]">
      <div className="flex gap-2 w-full" style={{ maxHeight: '680px' }}>
        {/* 左側大圖 */}
        <FadeIn direction="up" delay={0} className="w-1/2 flex-shrink-0 relative overflow-hidden group cursor-pointer">
          <div
            className="w-full h-full"
            data-sanity-edit-group
            data-sanity-edit-target
            style={{ height: '680px' }}
          >
            <img
              src={getSanityImageUrl(gallery.images[0], {width: 1000, height: 1360, fit: 'crop', quality: 86})}
              alt={gallery.images[0].alt || gallery.images[0].label}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 block"
              data-sanity={getHomePageDataAttribute('gallery.images[0].image')}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/25 md:bg-black/0 md:group-hover:bg-black/30 transition-all duration-500" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400">
            <div className="flex flex-col items-center gap-1">
              <span className="text-white text-xl font-light tracking-[0.25em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {gallery.images[0].label}
              </span>
              <span className="text-white/90 text-base tracking-widest" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                {gallery.images[0].labelZh}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* 右側上下兩圖 */}
        <div className="w-1/2 flex flex-col gap-2" style={{ height: '680px' }}>
          {gallery.images.slice(1).map((img, i) => (
            <FadeIn key={i} direction="up" delay={(i + 1) * 100} className="flex-1 relative overflow-hidden group cursor-pointer">
              <div
                className="w-full h-full"
                data-sanity-edit-group
                data-sanity-edit-target
              >
                <img
                  src={getSanityImageUrl(img, {width: 900, height: 680, fit: 'crop', quality: 86})}
                  alt={img.alt || img.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 block"
                  data-sanity={getHomePageDataAttribute(`gallery.images[${i + 1}].image`)}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/25 md:bg-black/0 md:group-hover:bg-black/30 transition-all duration-500" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400">
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
