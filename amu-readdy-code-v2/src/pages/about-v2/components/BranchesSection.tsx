import { useState } from 'react';
import FadeIn from '../../../components/base/FadeIn';

const branches = [
  {
    id: 1,
    name: '艾苜中醫 · 北區院',
    tag: '總院',
    address: '704臺南市北區北安路一段239號',
    phone: '06 252 0699',
    hours: '週一至週六 09:00–21:00\n週日公休',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234567890123!2d120.200711!3d23.012694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890123',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=23.012694,120.200711',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20traditional%20Chinese%20medicine%20clinic%20exterior%20in%20Taiwan%2C%20warm%20golden%20signage%2C%20clean%20professional%20entrance%20with%20plants%2C%20bright%20daytime%2C%20minimalist%20design&width=480&height=300&seq=branch-001&orientation=landscape',
  },
  {
    id: 2,
    name: '艾苜中醫 · 東區院',
    tag: '分院',
    address: '701臺南市東區東門路二段156號',
    phone: '06 235 8899',
    hours: '週一至週六 09:00–21:00\n週日公休',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.218!3d22.993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890124',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=22.993,120.218',
    image:
      'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20clinic%20storefront%20in%20Taiwan%20city%20street%2C%20elegant%20wooden%20sign%2C%20warm%20interior%20lighting%20visible%20through%20glass%2C%20evening%20atmosphere%2C%20professional%20medical%20clinic&width=480&height=300&seq=branch-002&orientation=landscape',
  },
  {
    id: 3,
    name: '艾苜中醫 · 永康院',
    tag: '分院',
    address: '710臺南市永康區中山南路88號',
    phone: '06 312 4455',
    hours: '週一至週六 09:00–21:00\n週日公休',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.232!3d23.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890125',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=23.035,120.232',
    image:
      'https://readdy.ai/api/search-image?query=Chinese%20medicine%20clinic%20in%20suburban%20Taiwan%2C%20modern%20building%20with%20traditional%20elements%2C%20green%20plants%20at%20entrance%2C%20clean%20white%20facade%20with%20gold%20accents%2C%20daytime%20photo&width=480&height=300&seq=branch-003&orientation=landscape',
  },
  {
    id: 4,
    name: '艾苜中醫 · 仁德院',
    tag: '分院',
    address: '717臺南市仁德區中正路三段320號',
    phone: '06 266 7788',
    hours: '週一至週六 09:00–21:00\n週日公休',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.178!3d22.958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890126',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=22.958,120.178',
    image:
      'https://readdy.ai/api/search-image?query=New%20traditional%20Chinese%20medicine%20clinic%20in%20Taiwan%20residential%20area%2C%20bright%20modern%20exterior%2C%20warm%20welcoming%20entrance%20with%20wooden%20elements%2C%20natural%20light%2C%20professional%20healthcare%20facility&width=480&height=300&seq=branch-004&orientation=landscape',
  },
];

export default function BranchesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="location" className="py-20 bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#cd9651]">診所據點</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              艾苜中醫在台南多處設有診所，就近為您提供專業中醫服務
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {branches.map((branch, i) => (
            <FadeIn key={branch.id} direction="up" delay={i * 80}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* 左側：圖片 */}
                  <div className="w-full md:w-64 lg:w-72 flex-shrink-0 h-52 md:h-auto overflow-hidden">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* 右側：資訊 */}
                  <div className="flex-1 flex flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                            branch.tag === '總院'
                              ? 'bg-[#cd9651] text-white'
                              : 'bg-[#cd9651]/10 text-[#cd9651]'
                          }`}
                        >
                          {branch.tag}
                        </span>
                        <h3 className="text-lg font-bold text-slate-800">{branch.name}</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-map-pin-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">地址</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{branch.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-phone-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">電話</p>
                            <p className="text-sm text-slate-600">{branch.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i className="ri-time-line text-[#cd9651] text-sm"></i>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">營業時間</p>
                            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{branch.hours}</p>
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
                        onClick={() => setExpandedId(expandedId === branch.id ? null : branch.id)}
                        className="inline-flex items-center gap-2 px-5 py-2 border border-[#cd9651] text-[#cd9651] hover:bg-[#cd9651]/10 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer"
                      >
                        <i className={`ri-map-2-line transition-transform duration-300 ${expandedId === branch.id ? 'rotate-180' : ''}`}></i>
                        {expandedId === branch.id ? '收起地圖' : '查看地圖'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 展開地圖 */}
                {expandedId === branch.id && (
                  <div className="border-t border-slate-100 p-4">
                    <iframe
                      key={branch.id}
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
