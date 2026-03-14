import { useEffect, useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { useParallax } from '../../../hooks/useParallax';
import FullscreenSlider from './FullscreenSlider';

function ParallaxImage({ src, alt, speed = 0.03 }: { src: string; alt: string; speed?: number }) {
  const { ref, offset } = useParallax<HTMLDivElement>({ speed });
  return (
    <div
      ref={ref}
      className="w-full h-full"
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}

export default function OriginStorySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('origin-story-content');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#f5f0e8]">

      {/* ── 封面：全螢幕引言 ── */}
      <div id="origin-story" className="relative min-h-screen w-full flex items-center justify-center text-center px-8">
        <FadeIn delay={600} direction="up" duration={3200}>
          <p
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: 'clamp(18px, 4vw, 28px)',
              color: '#3e3a39',
              lineHeight: 1.7,
              letterSpacing: '0.15em',
              fontWeight: 700,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              transition: 'opacity 3200ms ease, transform 3200ms ease',
            }}
          >
            " 源於護身符的初心，守護家的靈魂 "
          </p>
        </FadeIn>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1200ms' }}
        >
          <button onClick={scrollToContent} className="flex flex-col items-center gap-3 cursor-pointer group">
            <span
              className="text-[10px] font-light tracking-[0.2em] uppercase group-hover:opacity-80 transition-opacity duration-500"
              style={{ fontFamily: "'Noto Serif TC', serif", color: '#3e3a39' }}
            >
              Scroll
            </span>
            <div className="relative w-[1px] h-12 overflow-hidden" style={{ background: 'rgba(62,58,57,0.3)' }}>
              <div className="absolute top-0 left-0 w-full h-6 animate-bounce" style={{ background: '#3e3a39' }}></div>
            </div>
          </button>
        </div>
      </div>

      {/* ── 第一段：左圖右文 ── */}
      <div id="origin-story-content" className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* 圖片 */}
          <FadeIn delay={0} direction="up" duration={1600}>
            <div
              className="w-full overflow-hidden"
              style={{ aspectRatio: '3/4', background: '#f5f0e8' }}
            >
              <ParallaxImage
                src="https://readdy.ai/api/search-image?query=Elegant%20flat%20lay%20composition%20on%20aged%20linen%20fabric%20featuring%20fresh%20mugwort%20artemisia%20branches%20tied%20with%20natural%20twine%20alongside%20white%20porcelain%20tea%20bowl%20dried%20chrysanthemum%20petals%20rose%20buds%20wolfberries%20and%20thin%20gold%20acupuncture%20needles%20arranged%20with%20refined%20minimalist%20aesthetic%20soft%20side%20lighting%20warm%20ivory%20cream%20and%20pale%20sage%20tones%20no%20people%20traditional%20Chinese%20herbal%20medicine%20feminine%20healing%20luxury%20wellness%20brand%20photography&width=800&height=1067&seq=origin-story-mugwort-flatlay-brand-new-v9&orientation=portrait"
                alt="艾苜命名由來"
                speed={0.03}
              />
            </div>
          </FadeIn>

          {/* 文字 */}
          <FadeIn delay={300} direction="up" duration={1600}>
            <div className="pt-0 lg:pt-16 space-y-6">
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: 'clamp(15px, 2.5vw, 18px)',
                    color: '#cd9651',
                    letterSpacing: '0.2em',
                    marginBottom: '6px',
                    fontWeight: 700,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  「艾苜」這個名字
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: 'clamp(15px, 2.5vw, 18px)',
                    color: '#cd9651',
                    letterSpacing: '0.15em',
                    fontWeight: 700,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  源自法文 "Amulette"（護身符）的諧音
                </p>
              </div>

              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '14px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.08em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                這不僅是一個代號，更是一份溫柔的承諾——我們期許自己不只是生病後的維修站，而是能在疾病發生之前，就先為您擋下風雨，實踐中醫「治未病」的最高智慧。
              </p>

              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '14px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.08em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                這份守護的初心，建構了我們對健康的獨特觀點。我們發現，無論是中醫傳承千年的「陰平陽秘」，還是現代醫學所追求的生理恆定，真理其實只有一個：健康並非追求極端的強壯，而是身心的「動態平衡」。因此，艾苜致力於融合古老的調理智慧與現代的科學視野，不偏廢任一方，只為了幫現代人找回這份失落的穩定。
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── 中段引言文字 + 右側圖片區塊 ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-32 pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* 桌機版左側空白，手機版隱藏 */}
          <div className="hidden lg:block" />

          {/* 右側：文字 + 圖片 */}
          <div className="space-y-8 sm:space-y-10">

            <FadeIn delay={0} direction="up" duration={1600}>
              <div className="space-y-2">
                <p
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: '15px',
                    color: '#3e3a39',
                    lineHeight: 1.9,
                    letterSpacing: '0.1em',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  而在這份平衡的哲學背後
                  <br />
                  我們看見了最需要被承接的身影
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250} direction="up" duration={1600}>
              <div className="space-y-4">
                <div>
                  <p
                    style={{
                      fontFamily: "'Noto Serif TC', serif",
                      fontSize: 'clamp(18px, 3.5vw, 22px)',
                      color: '#cd9651',
                      letterSpacing: '0.18em',
                      lineHeight: 1.7,
                      fontWeight: 700,
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    我們深知，20到50歲的女性
                    <br />
                    往往是家庭中最堅韌的支柱
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: '15px',
                    color: '#3e3a39',
                    lineHeight: 1.9,
                    letterSpacing: '0.08em',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  從女孩蛻變為母親，妳總是默默承受著生活的重量，成為先生的後盾、孩子的港灣，卻常在忙碌中忘了照顧自己。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={480} direction="up" duration={1600}>
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: '4/3', background: '#f5f0e8' }}
              >
                <ParallaxImage
                  src="https://readdy.ai/api/search-image?query=Graceful%20Asian%20woman%20in%20her%20thirties%20sitting%20peacefully%20by%20a%20sunlit%20window%20in%20a%20cozy%20home%20interior%20holding%20a%20warm%20ceramic%20tea%20cup%20wearing%20soft%20linen%20clothing%20surrounded%20by%20potted%20green%20plants%20wooden%20shelves%20with%20books%20and%20dried%20flowers%20gentle%20morning%20light%20casting%20warm%20golden%20shadows%20serene%20domestic%20atmosphere%20calm%20and%20balanced%20lifestyle%20feminine%20wellness%20concept%20warm%20cream%20and%20sage%20tones&width=800&height=600&seq=origin-story-modern-woman-lifestyle-brand-new-2025&orientation=landscape"
                  alt="現代女性的生命歷程"
                  speed={0.03}
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </div>

      {/* ── 底部品牌宣言 ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-0">

          {/* 兩張錯位圖片 */}
          <FadeIn delay={0} direction="up" duration={1600}>
            <div className="relative w-full lg:flex-shrink-0 lg:w-[380px]" style={{ height: undefined }}>
              <div
                className="relative w-full lg:w-[380px]"
                style={{ height: 'clamp(200px, 45vw, 320px)' }}
              >
                <div
                  className="absolute overflow-hidden"
                  style={{ width: '65%', height: '75%', top: 0, left: 0, background: '#f5f0e8' }}
                >
                  <ParallaxImage
                    src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20herbal%20treatment%20setup%20elegant%20white%20porcelain%20bowls%20filled%20with%20dried%20herbs%20moxa%20sticks%20acupuncture%20needles%20arranged%20on%20aged%20wooden%20tray%20with%20soft%20linen%20cloth%20warm%20candlelight%20glow%20muted%20earth%20tones%20cream%20ivory%20sage%20green%20refined%20luxury%20TCM%20wellness%20clinic%20feminine%20healing%20aesthetic%20no%20people%20flat%20lay&width=800&height=600&seq=origin-bottom-left-tcm-herbs-2025-v1&orientation=landscape"
                    alt="婦兒科診療"
                    speed={0.025}
                  />
                </div>
                <div
                  className="absolute overflow-hidden"
                  style={{ width: '48%', height: '55%', bottom: 0, right: 0, background: '#f5f0e8' }}
                >
                  <ParallaxImage
                    src="https://readdy.ai/api/search-image?query=Serene%20Asian%20mother%20in%20soft%20linen%20robe%20sitting%20cross%20legged%20on%20bed%20gently%20cradling%20sleeping%20infant%20wrapped%20in%20cream%20muslin%20cloth%20warm%20diffused%20morning%20light%20streaming%20through%20sheer%20curtains%20cozy%20minimalist%20bedroom%20wooden%20furniture%20potted%20plant%20nearby%20intimate%20tender%20family%20moment%20warm%20ivory%20and%20blush%20tones%20lifestyle%20photography&width=800&height=600&seq=origin-bottom-right-mother-infant-2025-v1&orientation=landscape"
                    alt="家庭守護"
                    speed={0.04}
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 右側文字 */}
          <div className="flex flex-col justify-center lg:pt-16 space-y-6 lg:ml-16">
            <FadeIn delay={200} direction="up" duration={1600}>
              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '15px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                這就是為什麼
                <br />
                艾苜選擇以婦兒科的細膩為起點
              </p>
            </FadeIn>

            <FadeIn delay={420} direction="up" duration={1600}>
              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '15px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.08em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                我們希望先溫柔地接住辛苦的妳，
                <br />
                幫妳找回身心的平衡；再以妳為中心，
                <br />
                將這份專業的醫療守護，
                <br />
                延伸至妳最珍視的家人。
              </p>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* ── 收尾：護身符宣言 ── */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-32 sm:pb-64 pt-8 sm:pt-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0" style={{ gap: undefined }}>

          <FadeIn delay={0} direction="up" duration={1800}>
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '260px', height: '260px' }}>
              <img
                src="https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/949f28e475de5dd6f62cc683c4a67874.png"
                alt="艾苜中醫 LOGO"
                style={{ width: '240px', height: '240px', objectFit: 'contain' }}
              />
            </div>
          </FadeIn>

          <div className="space-y-3 sm:ml-16 text-center sm:text-left">
            <FadeIn delay={200} direction="up" duration={1800}>
              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '17px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                因為我們深信：妳好，家就好。
              </p>
            </FadeIn>
            <FadeIn delay={420} direction="up" duration={1800}>
              <p
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '17px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                艾苜中醫，願做您與家人的健康護身符
                <br />
                在生活的縫隙中，築起最溫柔的防線。
              </p>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* ── 滿版幻燈片 ── */}
      <FullscreenSlider />

    </section>
  );
}
