import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';

export default function TeamSection() {
  const { team } = useHomePageContent();

  return (
    <section id="team" className="py-32 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* 左側文字 */}
          <div className="lg:col-span-4">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-[#cd9651]">{team.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {team.subtitle}
              </p>
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                {team.description}
              </p>
              <div className="flex flex-col gap-3">
                {team.doctors.map((doc, i) => (
                  <FadeIn key={i} direction="up" delay={200 + i * 100}>
                    <div className="flex items-center gap-3 py-3 border-b border-gray-200 last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#cd9651] flex-shrink-0"></div>
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{doc.name}</span>
                        <span className="text-xs text-gray-400 ml-2">{doc.title}</span>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* 右側團體照 */}
          <div className="lg:col-span-8">
            <FadeIn direction="up" delay={150}>
              <div
                className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[520px]"
                data-sanity-edit-group
                data-sanity-edit-target
              >
                <img
                  src={team.image.url}
                  alt={team.image.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                  data-sanity={getHomePageDataAttribute('team.image.url')}
                />
                {/* 底部漸層名牌 */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-8 py-6">
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
