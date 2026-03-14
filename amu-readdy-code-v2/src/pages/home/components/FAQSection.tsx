import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { faqData } from '../../../mocks/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                常見<br />問題
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                我們整理了最常被問到的問題，希望能幫助您更了解我們的服務。
              </p>
            </div>
          </FadeIn>

          {/* 右側問答列表 */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-[#ddd5c5]">
              {faqData.map((faq, index) => (
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
                          {faq.question}
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
                        <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
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
