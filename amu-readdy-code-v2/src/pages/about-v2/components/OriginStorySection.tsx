import {useEffect, useState} from 'react';
import FadeIn from '../../../components/base/FadeIn';
import {useParallax} from '../../../hooks/useParallax';
import type {AboutOriginStoryContent, AboutStoryBlock} from '../../../sanity/types';
import {getAboutPageDataAttribute} from '../../../sanity/dataAttributes';
import FullscreenSlider from './FullscreenSlider';

function ParallaxImage({
  src,
  alt,
  speed = 0.03,
  dataAttribute,
}: {
  src: string;
  alt: string;
  speed?: number;
  dataAttribute?: string;
}) {
  const {ref, offset} = useParallax<HTMLDivElement>({speed});
  return (
    <div ref={ref} className="w-full h-full" data-sanity-edit-group data-sanity-edit-target>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top"
        style={{transform: `translateY(${offset}px)`, willChange: 'transform'}}
        data-sanity={dataAttribute}
      />
    </div>
  );
}

function renderMultilineText(text?: string) {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

function renderParagraph(paragraph: string, dataAttribute?: string, className = '', fontSize = '14px') {
  return (
    <p
      className={className}
      data-sanity={dataAttribute}
      style={{
        fontFamily: "'Noto Serif TC', serif",
        fontSize,
        color: '#3e3a39',
        lineHeight: 1.9,
        letterSpacing: '0.08em',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {renderMultilineText(paragraph)}
    </p>
  );
}

function TopBlock({block, index}: {block: AboutStoryBlock; index: number}) {
  return (
    <div id="origin-story-content" className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 pt-16 sm:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <FadeIn delay={0} direction="up" duration={1600}>
          <div className="w-full overflow-hidden" style={{aspectRatio: '3/4', background: '#f5f0e8'}}>
            <ParallaxImage
              src={block.primaryImage?.url || ''}
              alt={block.primaryImage?.alt || ''}
              speed={0.03}
              dataAttribute={getAboutPageDataAttribute(`originStory.blocks[${index}].primaryImage`)}
            />
          </div>
        </FadeIn>

        <FadeIn delay={300} direction="up" duration={1600}>
          <div className="pt-0 lg:pt-16 space-y-6">
            <div>
              {block.heading ? (
                <p
                  data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].heading`)}
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: 'clamp(15px, 2.5vw, 18px)',
                    color: '#cd9651',
                    letterSpacing: '0.2em',
                    marginBottom: '6px',
                    fontWeight: 700,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {block.heading}
                </p>
              ) : null}
              {block.subheading ? (
                <p
                  data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].subheading`)}
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: 'clamp(15px, 2.5vw, 18px)',
                    color: '#cd9651',
                    letterSpacing: '0.15em',
                    fontWeight: 700,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {block.subheading}
                </p>
              ) : null}
            </div>

            {block.paragraphs.map((paragraph, paragraphIndex) =>
              renderParagraph(
                paragraph,
                getAboutPageDataAttribute(`originStory.blocks[${index}].paragraphs[${paragraphIndex}]`),
              ),
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function TextImageBlock({block, index}: {block: AboutStoryBlock; index: number}) {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-32 pt-4 sm:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="hidden lg:block" />
        <div className="space-y-8 sm:space-y-10">
          {block.introText ? (
            <FadeIn delay={0} direction="up" duration={1600}>
              <div className="space-y-2">
                <p
                  data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].introText`)}
                  style={{
                    fontFamily: "'Noto Serif TC', serif",
                    fontSize: '15px',
                    color: '#3e3a39',
                    lineHeight: 1.9,
                    letterSpacing: '0.1em',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  {renderMultilineText(block.introText)}
                </p>
              </div>
            </FadeIn>
          ) : null}

          <FadeIn delay={250} direction="up" duration={1600}>
            <div className="space-y-4">
              {block.heading ? (
                <div>
                  <p
                    data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].heading`)}
                    style={{
                      fontFamily: "'Noto Serif TC', serif",
                      fontSize: 'clamp(18px, 3.5vw, 22px)',
                      color: '#cd9651',
                      letterSpacing: '0.18em',
                      lineHeight: 1.7,
                      fontWeight: 700,
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale',
                    }}
                  >
                    {renderMultilineText(block.heading)}
                  </p>
                </div>
              ) : null}
              {block.paragraphs.map((paragraph, paragraphIndex) =>
                renderParagraph(
                  paragraph,
                  getAboutPageDataAttribute(`originStory.blocks[${index}].paragraphs[${paragraphIndex}]`),
                  '',
                  '15px',
                ),
              )}
            </div>
          </FadeIn>

          <FadeIn delay={480} direction="up" duration={1600}>
            <div className="w-full overflow-hidden" style={{aspectRatio: '4/3', background: '#f5f0e8'}}>
              <ParallaxImage
                src={block.primaryImage?.url || ''}
                alt={block.primaryImage?.alt || ''}
                speed={0.03}
                dataAttribute={getAboutPageDataAttribute(`originStory.blocks[${index}].primaryImage`)}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function SplitImagesTextBlock({block, index}: {block: AboutStoryBlock; index: number}) {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24">
      <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-0">
        <FadeIn delay={0} direction="up" duration={1600}>
          <div className="relative w-full lg:flex-shrink-0 lg:w-[380px]" style={{height: undefined}}>
            <div className="relative w-full lg:w-[380px]" style={{height: 'clamp(200px, 45vw, 320px)'}}>
              <div className="absolute overflow-hidden" style={{width: '65%', height: '75%', top: 0, left: 0, background: '#f5f0e8'}}>
                <ParallaxImage
                  src={block.primaryImage?.url || ''}
                  alt={block.primaryImage?.alt || ''}
                  speed={0.025}
                  dataAttribute={getAboutPageDataAttribute(`originStory.blocks[${index}].primaryImage`)}
                />
              </div>
              <div className="absolute overflow-hidden" style={{width: '48%', height: '55%', bottom: 0, right: 0, background: '#f5f0e8'}}>
                <ParallaxImage
                  src={block.secondaryImage?.url || ''}
                  alt={block.secondaryImage?.alt || ''}
                  speed={0.04}
                  dataAttribute={getAboutPageDataAttribute(`originStory.blocks[${index}].secondaryImage`)}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col justify-center lg:pt-16 space-y-6 lg:ml-16">
          {block.introText ? (
            <FadeIn delay={200} direction="up" duration={1600}>
              <p
                data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].introText`)}
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '15px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {renderMultilineText(block.introText)}
              </p>
            </FadeIn>
          ) : null}

          <FadeIn delay={420} direction="up" duration={1600}>
            <div className="space-y-6">
              {block.paragraphs.map((paragraph, paragraphIndex) =>
                renderParagraph(
                  paragraph,
                  getAboutPageDataAttribute(`originStory.blocks[${index}].paragraphs[${paragraphIndex}]`),
                  '',
                  '15px',
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function LogoTextBlock({block, index}: {block: AboutStoryBlock; index: number}) {
  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-32 sm:pb-64 pt-8 sm:pt-16">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0" style={{gap: undefined}}>
        <FadeIn delay={0} direction="up" duration={1800}>
          <div className="flex-shrink-0 flex items-center justify-center" style={{width: '260px', height: '260px'}} data-sanity-edit-group data-sanity-edit-target>
            <img
              src={block.primaryImage?.url || ''}
              alt={block.primaryImage?.alt || ''}
              style={{width: '240px', height: '240px', objectFit: 'contain'}}
              data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].primaryImage`)}
            />
          </div>
        </FadeIn>

        <div className="space-y-3 sm:ml-16 text-center sm:text-left">
          {block.paragraphs.map((paragraph, paragraphIndex) => (
            <FadeIn key={`closing-${paragraphIndex}`} delay={paragraphIndex === 0 ? 200 : 420} direction="up" duration={1800}>
              <p
                data-sanity={getAboutPageDataAttribute(`originStory.blocks[${index}].paragraphs[${paragraphIndex}]`)}
                style={{
                  fontFamily: "'Noto Serif TC', serif",
                  fontSize: '17px',
                  color: '#3e3a39',
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              >
                {renderMultilineText(paragraph)}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OriginStorySection({content}: {content: AboutOriginStoryContent}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('origin-story-content');
    if (el) el.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section className="bg-[#f5f0e8]">
      <div id="origin-story" className="relative min-h-screen w-full flex items-center justify-center text-center px-8">
        <FadeIn delay={600} direction="up" duration={3200}>
          <p
            data-sanity={getAboutPageDataAttribute('originStory.introQuote')}
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontSize: 'clamp(18px, 4vw, 28px)',
              color: '#3e3a39',
              lineHeight: 1.7,
              letterSpacing: '0.15em',
              fontWeight: 700,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              transition: 'opacity 3200ms ease, transform 3200ms ease',
            }}
          >
            {content.introQuote}
          </p>
        </FadeIn>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{transitionDelay: '1200ms'}}
        >
          <button onClick={scrollToContent} className="flex flex-col items-center gap-3 cursor-pointer group">
            <span
              data-sanity={getAboutPageDataAttribute('originStory.scrollLabel')}
              className="text-[10px] font-light tracking-[0.2em] uppercase group-hover:opacity-80 transition-opacity duration-500"
              style={{fontFamily: "'Noto Serif TC', serif", color: '#3e3a39'}}
            >
              {content.scrollLabel}
            </span>
            <div className="relative w-[1px] h-12 overflow-hidden" style={{background: 'rgba(62,58,57,0.3)'}}>
              <div className="absolute top-0 left-0 w-full h-6 animate-bounce" style={{background: '#3e3a39'}}></div>
            </div>
          </button>
        </div>
      </div>

      {content.blocks.map((block, index) => {
        if (block.layout === 'imageText') return <TopBlock key={`block-${index}`} block={block} index={index} />;
        if (block.layout === 'textImage') return <TextImageBlock key={`block-${index}`} block={block} index={index} />;
        if (block.layout === 'splitImagesText') return <SplitImagesTextBlock key={`block-${index}`} block={block} index={index} />;
        if (block.layout === 'logoText') return <LogoTextBlock key={`block-${index}`} block={block} index={index} />;
        return null;
      })}

      <FullscreenSlider />
    </section>
  );
}
