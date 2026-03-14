import { useRef } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { testimonialsData } from '../../../mocks/testimonials';

const avatarImages: Record<number, string> = {
  0: 'https://readdy.ai/api/search-image?query=portrait%20of%20a%20professional%20asian%20woman%20in%20her%20thirties%20smiling%20warmly%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_0&orientation=squarish',
  1: 'https://readdy.ai/api/search-image?query=portrait%20of%20a%20professional%20asian%20man%20in%20his%20forties%20smiling%20confidently%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_1&orientation=squarish',
  2: 'https://readdy.ai/api/search-image?query=portrait%20of%20a%20middle%20aged%20asian%20woman%20smiling%20warmly%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_2&orientation=squarish',
  3: 'https://readdy.ai/api/search-image?query=portrait%20of%20a%20young%20asian%20woman%20in%20her%20twenties%20smiling%20brightly%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_3&orientation=squarish',
  4: 'https://readdy.ai/api/search-image?query=portrait%20of%20an%20elegant%20asian%20woman%20in%20her%20fifties%20smiling%20gently%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_4&orientation=squarish',
  5: 'https://readdy.ai/api/search-image?query=portrait%20of%20a%20professional%20asian%20man%20in%20his%20thirties%20smiling%20at%20camera%20soft%20studio%20lighting%20clean%20white%20background%20minimal%20style&width=320&height=320&seq=testimonial_avatar_5&orientation=squarish',
};

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="py-32 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-[#cd9651]">
              真實見證
            </h2>
            <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
              來自真實患者的治療心得與推薦
            </p>
          </div>
        </FadeIn>

        {/* 卡片滑動區 */}
        <FadeIn direction="up" delay={150}>
          <div className="relative">
            {/* 左箭頭 */}
            <button
              onClick={() => scroll('left')}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-stone-100 hover:bg-[#cd9651] hover:text-white hover:border-[#cd9651] transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-lg"></i>
            </button>

            {/* 卡片容器 */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
                >
                  {/* 星評 */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                    ))}
                  </div>

                  {/* 引言符號 */}
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-double-quotes-l text-[#cd9651] text-2xl leading-none"></i>
                  </div>

                  {/* 內容 */}
                  <p className="text-[#374151] text-sm leading-relaxed flex-1">
                    {testimonial.content}
                  </p>

                  {/* 底部：頭像 + 姓名 + Google + 時間 */}
                  <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#cd9651]/30">
                        <img
                          src={avatarImages[index]}
                          alt={testimonial.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold text-stone-800">{testimonial.name}</span>
                          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white border border-stone-200 text-[10px] font-bold text-[#4285F4] leading-none">G</span>
                        </div>
                        <span className="text-xs text-stone-400">{testimonial.service}</span>
                      </div>
                    </div>
                    <span className="text-xs text-stone-400 whitespace-nowrap">{testimonial.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 右箭頭 */}
            <button
              onClick={() => scroll('right')}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md border border-stone-100 hover:bg-[#cd9651] hover:text-white hover:border-[#cd9651] transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-lg"></i>
            </button>
          </div>
        </FadeIn>

        {/* 提示文字 */}
        <FadeIn direction="up" delay={250}>
          <p className="text-center text-xs text-stone-400 mt-4 flex items-center justify-center gap-1.5">
            <i className="ri-drag-move-line"></i>
            左右滑動查看更多
          </p>

          {/* 查看更多按鈕 */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer text-sm">
              查看更多評價
              <i className="ri-external-link-line ml-2"></i>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
