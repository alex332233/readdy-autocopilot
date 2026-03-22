import {useState} from 'react';
import FadeIn from '../../../components/base/FadeIn';
import type {AboutPhilosophyCard} from '../../../sanity/types';
import {getAboutPageDataAttribute} from '../../../sanity/dataAttributes';

export default function PhilosophySection({title, cards}: {title: string; cards: AboutPhilosophyCard[]}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-40 overflow-hidden bg-[#fdf8f2]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0} direction="up" duration={1600}>
          <div className="text-center mb-20">
            <h2
              className="text-3xl lg:text-4xl font-serif"
              data-sanity={getAboutPageDataAttribute('philosophyTitle')}
              style={{
                color: '#3e3a39',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              {title}
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={`${card.title}-${i}`} delay={i * 220} direction="up" duration={1600} className="h-full">
              <div
                className="relative h-full bg-white rounded-2xl p-7 border border-[#e8ddd0] hover:border-[#cd9651] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="text-xs tracking-[0.2em] text-[#cd9651] font-medium block mb-4"
                  data-sanity={getAboutPageDataAttribute(`philosophyCards[${i}].number`)}
                  style={{WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}}
                >
                  {card.number}
                </span>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5ede0] group-hover:bg-[#cd9651] transition-colors duration-300 mb-5">
                  <i className={`${card.icon} text-lg text-[#cd9651] group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3
                  className="text-base font-serif leading-snug mb-3"
                  data-sanity={getAboutPageDataAttribute(`philosophyCards[${i}].title`)}
                  style={{
                    color: '#3e3a39',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {card.title}
                </h3>
                <div className={`h-px bg-[#cd9651] mb-3 transition-all duration-300 ${hovered === i ? 'w-10' : 'w-6'}`}></div>
                <p
                  className="text-xs leading-relaxed"
                  data-sanity={getAboutPageDataAttribute(`philosophyCards[${i}].description`)}
                  style={{
                    color: '#3e3a39',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
