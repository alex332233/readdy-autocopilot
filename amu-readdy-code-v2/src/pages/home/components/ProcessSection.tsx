
import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';
import { useHomePageContent } from '../useHomePageContent';
import { getHomePageDataAttribute } from '../../../sanity/dataAttributes';

export default function ProcessSection() {
  const { process } = useHomePageContent();
  const [activeStep, setActiveStep] = useState(0);
  const current = process.steps[activeStep];
  const handlePrev = () => setActiveStep((prev) => Math.max(0, prev - 1));
  const handleNext = () => setActiveStep((prev) => Math.min(process.steps.length - 1, prev + 1));

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-[#cd9651] mb-3">{process.title}</h2>
            <p className="text-gray-500 text-base">{process.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          {/* Step Navigator */}
          <div className="relative flex items-start justify-between mb-12">
            <div className="absolute top-6 left-0 right-0 h-px bg-gray-200 z-0" style={{ left: '5%', right: '5%' }} />
            {process.steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative z-10 flex flex-col items-center gap-2 cursor-pointer whitespace-nowrap group"
                  style={{ width: `${100 / process.steps.length}%` }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#cd9651] border-[#cd9651] text-white shadow-md'
                        : isPast
                        ? 'bg-[#f5e9d6] border-[#cd9651] text-[#cd9651]'
                        : 'bg-white border-gray-300 text-gray-400 group-hover:border-[#cd9651] group-hover:text-[#cd9651]'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isActive ? 'text-[#cd9651]' : 'text-gray-400 group-hover:text-[#cd9651]'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="bg-[#f9f7f4] rounded-2xl overflow-hidden shadow-md flex flex-col lg:flex-row min-h-[320px]">
            <div
              className="lg:w-1/2 w-full h-64 lg:h-auto flex-shrink-0"
              data-sanity-edit-group
              data-sanity-edit-target
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-top"
                data-sanity={getHomePageDataAttribute(`process.steps[${activeStep}].image`)}
              />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-between p-8 lg:p-10">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#cd9651] mb-3 uppercase">{current.step}</p>
                <h3 className="text-3xl font-serif font-bold text-gray-800 mb-5">{current.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{current.description}</p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  disabled={activeStep === 0}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#cd9651] hover:text-[#cd9651] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-arrow-left-s-line text-lg" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeStep === process.steps.length - 1}
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#cd9651] hover:text-[#cd9651] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-arrow-right-s-line text-lg" />
                </button>
                <span className="text-sm text-gray-400">{activeStep + 1} / {process.steps.length}</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
