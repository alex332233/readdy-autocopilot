import { getCasesPageDataAttribute } from '../../../sanity/dataAttributes';

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  enableVisualEditing?: boolean;
  getDataAttribute?: (path: string) => string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  enableVisualEditing = false,
  getDataAttribute,
}: Props) {
  const scrollToBooking = () => {
    window.REACT_APP_NAVIGATE('/#booking');
  };

  const dataAttributeGetter = getDataAttribute || getCasesPageDataAttribute;

  return (
    <section className="py-20 bg-gradient-to-br from-[#cd9651] to-[#b8843f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <span data-sanity={enableVisualEditing ? dataAttributeGetter('ctaTitle') : undefined}>
            {title || '您也想擁有健康的身體嗎？'}
          </span>
        </h2>
        <p
          className="text-lg text-white/90 mb-8 leading-relaxed whitespace-pre-line"
          data-sanity={enableVisualEditing ? dataAttributeGetter('ctaDescription') : undefined}
        >
          {description || '每個人的體質不同，需要的調理方式也不同\n讓我們的專業醫師為您量身打造專屬的治療計畫'}
        </p>
        <button
          onClick={scrollToBooking}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#cd9651] rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
        >
          <span data-sanity={enableVisualEditing ? dataAttributeGetter('ctaButtonText') : undefined}>
            {buttonText || '立即預約諮詢'}
          </span>
          <i className="ri-arrow-right-line text-base transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>
      </div>
    </section>
  );
}
