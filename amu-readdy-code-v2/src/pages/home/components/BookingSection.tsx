
import FadeIn from '../../../components/base/FadeIn';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';
import { useHomePageContent } from '../useHomePageContent';

export default function BookingSection() {
  const { booking } = useHomePageContent();

  return (
    <section id="booking" className="scroll-mt-24 md:scroll-mt-28 py-14 bg-[#cd9651]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">{booking.title}</h2>
            <p className="text-white/90 text-sm">{booking.subtitle}</p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6">
          {booking.cards.map((card, index) => {
            const isExternal = card.href.startsWith('http');
            const buttonClass =
              card.buttonTheme === 'line'
                ? 'bg-[#06C755] hover:bg-[#05a348]'
                : 'bg-[#cd9651] hover:bg-[#b8843d]';

            return (
              <FadeIn key={index} direction="up" delay={100 + index * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#cd9651] rounded-full mx-auto mb-4">
                    <i
                      className={`${card.icon} text-xl text-white`}
                      data-sanity={getHomePageDataAttribute(`booking.cards[${index}].icon`)}
                    ></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#cd9651] mb-4">{card.title}</h3>
                  {card.href.startsWith('tel:') ? (
                    <a
                      href={card.href}
                      className="block text-2xl font-bold text-gray-800 hover:text-[#cd9651] transition-colors duration-300 cursor-pointer mb-4"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-2xl font-bold text-gray-800 mb-4">{card.value}</p>
                  )}
                  <a
                    href={card.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center px-6 py-2.5 ${buttonClass} text-white text-sm rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer`}
                  >
                    <i
                      className={`${card.icon} mr-2`}
                      data-sanity={getHomePageDataAttribute(`booking.cards[${index}].icon`)}
                    ></i>{card.buttonText}
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
