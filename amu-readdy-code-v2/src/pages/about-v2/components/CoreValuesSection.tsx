import FadeIn from '../../../components/base/FadeIn';
import {useParallax} from '../../../hooks/useParallax';
import type {AboutCoreValue} from '../../../sanity/types';
import {getAboutPageDataAttribute} from '../../../sanity/dataAttributes';

function ParallaxImage({src, alt, speed = 0.03, dataAttribute}: {src: string; alt: string; speed?: number; dataAttribute: string}) {
  const {ref, offset} = useParallax<HTMLDivElement>({speed});
  return (
    <div ref={ref} className="absolute inset-0" data-sanity-edit-group data-sanity-edit-target>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        style={{
          transform: `translateY(${offset}px) scale(1.18)`,
          willChange: 'transform',
        }}
        data-sanity={dataAttribute}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default function CoreValuesSection({values}: {values: AboutCoreValue[]}) {
  return (
    <section className="py-0 bg-[#f8f6f1]">
      {values.map((value, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={`${value.title}-${index}`}
            className={`group relative flex flex-col lg:flex-row lg:items-stretch min-h-auto lg:min-h-[600px] ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <div className="relative w-full lg:w-1/2 overflow-hidden" style={{minHeight: '280px'}}>
              <ParallaxImage
                src={value.image.url}
                alt={value.image.alt}
                speed={0.03}
                dataAttribute={getAboutPageDataAttribute(`coreValues[${index}].image`)}
              />
            </div>

            <div
              className={`relative w-full lg:w-1/2 flex items-center transition-colors duration-700 ${
                isEven ? 'bg-white group-hover:bg-[#faf8f5]' : 'bg-[#faf8f5] group-hover:bg-white'
              }`}
            >
              <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
                <FadeIn delay={index * 100} direction="up" duration={1600}>
                  <h3
                    className="text-2xl lg:text-3xl xl:text-4xl font-serif font-normal leading-tight mb-5 lg:mb-6"
                    data-sanity={getAboutPageDataAttribute(`coreValues[${index}].title`)}
                    style={{
                      color: '#3e3a39',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {value.title}
                  </h3>
                  <div className="w-12 lg:w-16 h-0.5 bg-[#cd9651] mb-6 lg:mb-8"></div>
                  <p
                    className="text-sm lg:text-base leading-relaxed"
                    data-sanity={getAboutPageDataAttribute(`coreValues[${index}].description`)}
                    style={{
                      color: '#3e3a39',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {value.description}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
