import { useNavigate } from 'react-router';
import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';

export default function TeamSection() {
  const navigate = useNavigate();
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
              <FadeIn direction="up" delay={200}>
                <button
                  onClick={() => navigate('/team')}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-[#cd9651] text-white rounded-full text-sm font-medium hover:bg-[#b8823d] transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  更多醫師介紹
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1.5"></i>
                </button>
              </FadeIn>
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
                  data-sanity={getHomePageDataAttribute('team.image')}
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
