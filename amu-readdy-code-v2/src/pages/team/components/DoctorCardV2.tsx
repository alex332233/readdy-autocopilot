
import { useState } from 'react';

interface Specialty {
  name: string;
  items: string[];
}

interface DoctorCardV2Props {
  name: string;
  title: string;
  image: string;
  education: string[];
  experience: string[];
  specialties: Record<string, Specialty>;
  specialTreatments: string[];
  index: number;
}

const specialtyIcons: Record<string, string> = {
  internal: 'ri-heart-pulse-line',
  gynecology: 'ri-women-line',
  pediatrics: 'ri-child-line',
  dermatology: 'ri-skin-line',
  acupuncture: 'ri-focus-3-line',
  beauty: 'ri-sparkling-line',
};

const specialtyColors: Record<string, string> = {
  internal: 'bg-amber-50 border-amber-200 text-amber-800',
  gynecology: 'bg-rose-50 border-rose-200 text-rose-800',
  pediatrics: 'bg-sky-50 border-sky-200 text-sky-800',
  dermatology: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  acupuncture: 'bg-violet-50 border-violet-200 text-violet-800',
  beauty: 'bg-pink-50 border-pink-200 text-pink-800',
};

export default function DoctorCardV2({
  name,
  title,
  image,
  education,
  experience,
  specialties,
  specialTreatments,
  index,
}: DoctorCardV2Props) {
  const [activeTab, setActiveTab] = useState<'specialty' | 'edu' | 'special'>('specialty');

  const tabs = [
    { key: 'specialty' as const, label: '專長科別', icon: 'ri-stethoscope-line' },
    { key: 'edu' as const, label: '學歷經歷', icon: 'ri-graduation-cap-line' },
    ...(specialTreatments.length > 0
      ? [{ key: 'special' as const, label: '特色治療', icon: 'ri-star-line' }]
      : []),
  ];

  const indexLabel = ['01', '02', '03'][index] ?? `0${index + 1}`;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-100">
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* 左側：照片區 */}
        <div className="relative lg:w-72 xl:w-80 flex-shrink-0 overflow-hidden">
          <div className="w-full h-72 lg:h-full">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* 漸層遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/5" />

          {/* 編號 */}
          <div className="absolute top-5 left-5">
            <span className="text-5xl font-black text-white/20 leading-none select-none">{indexLabel}</span>
          </div>

          {/* 姓名浮層（手機版） */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#cd9651] uppercase mb-1">Doctor</p>
            <h3 className="text-2xl font-bold text-white">{name} <span className="text-lg font-normal text-white/80">{title}</span></h3>
          </div>
        </div>

        {/* 右側：內容區 */}
        <div className="flex-1 flex flex-col p-8 xl:p-10">

          {/* 姓名（桌機版） */}
          <div className="hidden lg:flex items-end gap-4 mb-8 pb-6 border-b border-stone-100">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#cd9651] uppercase mb-1">Doctor</p>
              <h3 className="text-3xl font-bold text-stone-800">
                {name}
                <span className="text-xl font-normal text-stone-400 ml-2">{title}</span>
              </h3>
            </div>
            <div className="ml-auto flex-shrink-0">
              <span className="text-7xl font-black text-stone-100 leading-none select-none">{indexLabel}</span>
            </div>
          </div>

          {/* Tab 切換 */}
          <div className="flex gap-1 mb-6 bg-stone-50 rounded-xl p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-white text-stone-800 shadow-sm'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                <i className={`${tab.icon} text-base`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 內容 */}
          <div className="flex-1">

            {/* 專長科別 */}
            {activeTab === 'specialty' && (
              <div className="grid sm:grid-cols-2 gap-3 animate-fadeIn">
                {Object.entries(specialties).map(([key, specialty]) => (
                  <div
                    key={key}
                    className={`rounded-xl border p-4 ${specialtyColors[key] ?? 'bg-stone-50 border-stone-200 text-stone-800'}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 flex items-center justify-center">
                        <i className={`${specialtyIcons[key] ?? 'ri-medicine-bottle-line'} text-base`}></i>
                      </div>
                      <span className="font-bold text-sm">{specialty.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {specialty.items.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 bg-white/70 rounded-full border border-current/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 學歷經歷 */}
            {activeTab === 'edu' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#cd9651]/10">
                      <i className="ri-graduation-cap-line text-[#cd9651] text-base"></i>
                    </div>
                    <h5 className="font-bold text-stone-700 text-sm tracking-wide">學歷</h5>
                  </div>
                  <ul className="space-y-2.5">
                    {education.map((edu, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                        <span className="text-stone-600 text-sm leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-stone-100 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#cd9651]/10">
                      <i className="ri-briefcase-line text-[#cd9651] text-base"></i>
                    </div>
                    <h5 className="font-bold text-stone-700 text-sm tracking-wide">經歷</h5>
                  </div>
                  <ul className="space-y-2.5">
                    {experience.map((exp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                        <span className="text-stone-600 text-sm leading-relaxed">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 特色治療 */}
            {activeTab === 'special' && (
              <div className="animate-fadeIn">
                <p className="text-stone-500 text-sm mb-5 leading-relaxed">
                  結合傳統中醫精髓與現代醫學技術，提供個人化的特色療程。
                </p>
                <div className="flex flex-wrap gap-3">
                  {specialTreatments.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#cd9651]/10 to-[#cd9651]/5 border border-[#cd9651]/20 rounded-xl"
                    >
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-sparkling-2-line text-[#cd9651] text-sm"></i>
                      </div>
                      <span className="text-stone-700 text-sm font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 底部預約按鈕 */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <button
              onClick={() => window.REACT_APP_NAVIGATE('/#booking')}
              className="flex items-center gap-2 px-6 py-3 bg-[#cd9651] hover:bg-[#b8843f] text-white text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-calendar-check-line text-sm"></i>
              </div>
              預約 {name} 醫師
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
