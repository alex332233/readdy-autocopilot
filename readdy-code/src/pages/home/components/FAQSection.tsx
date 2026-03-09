
import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { faqData } from '../../../mocks/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#f8f5f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">常見問題</h2>
            <p className="text-base text-slate-600">
              我們整理了最常被問到的問題,希望能幫助您更了解我們的服務
            </p>
          </div>
        </FadeIn>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={index * 60} threshold={0.06}>
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-500">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#faf8f5] transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-8 h-8 rounded-full bg-[#cd9651] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      Q
                    </div>
                    <span className="font-medium text-slate-800 text-base">{faq.question}</span>
                  </div>
                  <i
                    className={`ri-arrow-down-s-line text-xl text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-4 pl-16">
                    <div className="bg-[#f8f5f0] rounded-lg p-4">
                      <p className="text-slate-700 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
