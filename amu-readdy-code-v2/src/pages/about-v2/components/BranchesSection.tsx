import {useState} from 'react';
import FadeIn from '../../../components/base/FadeIn';
import type {AboutBranch} from '../../../sanity/types';
import {getAboutPageDataAttribute} from '../../../sanity/dataAttributes';

export default function BranchesSection({
  title,
  subtitle,
  branches,
}: {
  title: string;
  subtitle: string;
  branches: AboutBranch[];
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="location" className="py-20 bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#cd9651]" data-sanity={getAboutPageDataAttribute('branchesTitle')}>
              {title}
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto" data-sanity={getAboutPageDataAttribute('branchesSubtitle')}>
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {branches.map((branch, i) => (
            <FadeIn key={`${branch.name}-${i}`} direction="up" delay={i * 80}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-64 lg:w-72 flex-shrink-0 h-52 md:h-auto overflow-hidden" data-sanity-edit-group data-sanity-edit-target>
                    <img
                      src={branch.image.url}
                      alt={branch.image.alt}
                      className="w-full h-full object-cover object-top"
                      data-sanity={getAboutPageDataAttribute(`branches[${i}].image.url`)}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                            branch.tag === '總院' ? 'bg-[#cd9651] text-white' : 'bg-[#cd9651]/10 text-[#cd9651]'
                          }`}
                          data-sanity={getAboutPageDataAttribute(`branches[${i}].tag`)}
                        >
                          {branch.tag}
                        </span>
                        <h3 className="text-lg font-bold text-slate-800" data-sanity={getAboutPageDataAttribute(`branches[${i}].name`)}>
                          {branch.name}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-map-pin-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">地址</p>
                            <p className="text-sm text-slate-600 leading-relaxed" data-sanity={getAboutPageDataAttribute(`branches[${i}].address`)}>{branch.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-phone-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">電話</p>
                            <p className="text-sm text-slate-600" data-sanity={getAboutPageDataAttribute(`branches[${i}].phone`)}>{branch.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-time-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">營業時間</p>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line" data-sanity={getAboutPageDataAttribute(`branches[${i}].hours`)}>{branch.hours}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => window.open(branch.mapLink, '_blank')}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-[#cd9651] hover:bg-[#b8843d] text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-navigation-line"></i>
                        Google 地圖導航
                      </button>
                      <button
                        onClick={() => setExpandedId(expandedId === i ? null : i)}
                        className="inline-flex items-center gap-2 px-5 py-2 border border-[#cd9651] text-[#cd9651] hover:bg-[#cd9651]/10 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                      >
                        <i className={`ri-map-2-line transition-transform duration-300 ${expandedId === i ? 'rotate-180' : ''}`}></i>
                        {expandedId === i ? '收起地圖' : '查看地圖'}
                      </button>
                    </div>
                  </div>
                </div>

                {expandedId === i && (
                  <div className="border-t border-slate-100 p-4">
                    <iframe
                      key={`${branch.name}-${i}`}
                      src={branch.mapSrc}
                      width="100%"
                      height="360"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name}位置地圖`}
                      className="rounded-xl w-full"
                    ></iframe>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
