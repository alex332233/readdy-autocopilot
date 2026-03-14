import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';

const cards = [
  {
    number: '01',
    icon: 'ri-shield-check-line',
    title: 'Amulette 般的守護',
    description: '以「護身符」為名，落實「治未病」哲學。在亞健康階段即介入調理，為身體築起第一道防線。',
  },
  {
    number: '02',
    icon: 'ri-scales-3-line',
    title: '理性與感性的平衡',
    description: '融合中醫陰陽智慧與現代醫學觀點，不談玄學，只專注於幫身體找回「動態平衡」。',
  },
  {
    number: '03',
    icon: 'ri-heart-line',
    title: '妳是家庭的核心',
    description: '專注於 20-50 歲女性的生命歷程。我們先照顧好身為「家庭支柱」的妳，讓妳有餘力去愛妳所愛的人。',
  },
  {
    number: '04',
    icon: 'ri-group-line',
    title: '全家人的醫療團隊',
    description: '以婦兒科的細膩為起點，延伸至結構、內科與全人照護，提供「從女生到全家」的完整健康對策。',
  },
];

export default function PhilosophySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-40 overflow-hidden bg-[#fdf8f2]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0} direction="up" duration={1600}>
          <div className="text-center mb-20">
            <h2
              className="text-3xl lg:text-4xl font-serif"
              style={{
                color: '#3e3a39',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              艾與苜：剛柔並濟的醫學智慧
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 220} direction="up" duration={1600} className="h-full">
              <div
                className="relative h-full bg-white rounded-2xl p-7 border border-[#e8ddd0] hover:border-[#cd9651] hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="text-xs tracking-[0.2em] text-[#cd9651] font-medium block mb-4"
                  style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
                >
                  {card.number}
                </span>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f5ede0] group-hover:bg-[#cd9651] transition-colors duration-300 mb-5">
                  <i className={`${card.icon} text-lg text-[#cd9651] group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3
                  className="text-base font-serif leading-snug mb-3"
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
