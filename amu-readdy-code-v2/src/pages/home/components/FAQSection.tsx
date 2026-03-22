import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { faq } = useHomePageContent();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* 左側標題 */}
          <FadeIn direction="up" delay={0} className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#cd9651] leading-tight mb-6">
                {faq.titleLine1}<br />{faq.titleLine2}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                {faq.description}
              </p>
            </div>
          </FadeIn>

          {/* 右側問答列表 */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-[#ddd5c5]">
              {faq.items.map((item, index) => (
                <FadeIn key={index} direction="up" delay={index * 80} threshold={0.06}>
                  <div className="py-6">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start justify-between text-left group cursor-pointer"
                    >
                      <div className="flex items-start gap-5 flex-1 pr-4">
                        <span className="text-xs font-semibold text-[#cd9651] tracking-widest mt-1 flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium text-slate-800 text-base leading-relaxed group-hover:text-[#cd9651] transition-colors duration-200">
                          {item.question}
                        </span>
                      </div>
                      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i
                          className={`ri-add-line text-xl text-[#cd9651] transition-transform duration-300 ${
                            openIndex === index ? 'rotate-45' : ''
                          }`}
                        ></i>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-10">
                        <p className="text-slate-600 leading-relaxed text-sm">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
