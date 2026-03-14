import FadeIn from '../../../components/base/FadeIn';
import { useParallax } from '../../../hooks/useParallax';

function ParallaxImage({ src, alt, speed = 0.03 }: { src: string; alt: string; speed?: number }) {
  const { ref, offset } = useParallax<HTMLDivElement>({ speed });
  return (
    <div ref={ref} className="absolute inset-0">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        style={{
          transform: `translateY(${offset}px) scale(1.18)`,
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
    </div>
  );
}

export default function CoreValuesSection() {
  const values = [
    {
      number: '01',
      title: '御守哲學｜預防醫學的先行者',
      description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
      imageUrl: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20acupuncture%20needles%20being%20carefully%20placed%20on%20a%20patient%20back%20by%20skilled%20practitioner%20hands%20close%20up%20macro%20photography%20warm%20golden%20candlelight%20glow%20ancient%20healing%20ritual%20earthy%20amber%20tones%20professional%20clinical%20setting%20serene%20protective%20atmosphere%20wooden%20treatment%20table&width=800&height=600&seq=corevalue-acupuncture-refresh-01&orientation=landscape',
    },
    {
      number: '02',
      title: '艾苜協奏｜醫食同源的雙重療癒',
      description: '完美平衡「醫療治療」與「生活養護」。結合「艾」的醫療溫煦（古法針灸與漢方）與「苜」的食療生機（現代營養學與體質調理），喚醒身體自癒力。',
      imageUrl: 'https://public.readdy.ai/ai/img_res/edited_77f9a24d194451eb56ad962aedf15bef_24fac78e.jpg',
    },
    {
      number: '03',
      title: '科技中醫｜無痛光能修復技術',
      description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
      imageUrl: 'https://readdy.ai/api/search-image?query=Modern%20medical%20laser%20therapy%20device%20emitting%20soft%20red%20low%20level%20light%20on%20patient%20skin%20in%20clean%20bright%20clinical%20room%20professional%20healthcare%20equipment%20stainless%20steel%20and%20white%20surfaces%20gentle%20blue%20and%20white%20ambient%20lighting%20advanced%20technology%20meets%20traditional%20healing%20concept%20minimalist%20medical%20interior&width=800&height=600&seq=corevalue-laser-tech-refresh-03&orientation=landscape',
    },
    {
      number: '04',
      title: '專屬定製｜全生命週期的守護',
      description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
      imageUrl: 'https://readdy.ai/api/search-image?query=Three%20generations%20of%20Asian%20women%20grandmother%20mother%20and%20young%20daughter%20sitting%20together%20in%20sunlit%20garden%20laughing%20and%20holding%20hands%20cherry%20blossom%20petals%20falling%20around%20them%20soft%20golden%20afternoon%20light%20shallow%20depth%20of%20field%20warm%20cream%20and%20blush%20tones%20joyful%20multigenerational%20family%20bond%20lifestyle%20photography&width=800&height=600&seq=corevalue-generations-refresh-04&orientation=landscape',
    },
  ];

  return (
    <section className="py-0 bg-[#f8f6f1]">
      {values.map((value, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={index}
            className={`group relative flex flex-col lg:flex-row lg:items-stretch min-h-auto lg:min-h-[600px] ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            {/* 圖片側 */}
            <div className="relative w-full lg:w-1/2 overflow-hidden" style={{ minHeight: '280px' }}>
              <ParallaxImage src={value.imageUrl} alt={value.title} speed={0.03} />
            </div>

            {/* 文字側 */}
            <div
              className={`relative w-full lg:w-1/2 flex items-center transition-colors duration-700 ${
                isEven ? 'bg-white group-hover:bg-[#faf8f5]' : 'bg-[#faf8f5] group-hover:bg-white'
              }`}
            >
              <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
                <FadeIn delay={index * 100} direction="up" duration={1600}>
                  <h3
                    className="text-2xl lg:text-3xl xl:text-4xl font-serif font-normal leading-tight mb-5 lg:mb-6"
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
