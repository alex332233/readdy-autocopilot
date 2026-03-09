import { useState } from 'react';

interface Specialty {
  name: string;
  items: string[];
}

interface DoctorCardV3Props {
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

export default function DoctorCardV3({
  name,
  title,
  image,
  education,
  experience,
  specialties,
  specialTreatments,
  index,
}: DoctorCardV3Props) {
  const [activeTab, setActiveTab] = useState<'specialty' | 'edu' | 'special'>('specialty');

  const tabs = [
    { key: 'specialty' as const, label: '專長科別' },
    { key: 'edu' as const, label: '學歷經歷' },
    ...(specialTreatments.length > 0
      ? [{ key: 'special' as const, label: '特色治療' }]
      : []),
  ];

  const isEven = index % 2 === 0;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

        {/* 左側照片 */}
        <div className="relative lg:w-80 xl:w-96 flex-shrink-0">
          <div className="w-full h-72 lg:h-full min-h-[420px]">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* 底部漸層 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
          {/* 手機版姓名 */}
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:hidden">
            <h3 className="text-xl font-bold text-white">{name} <span className="text-base font-normal text-white/80">{title}</span></h3>
          </div>
        </div>

        {/* 右側內容 */}
        <div className="flex-1 p-8 xl:p-10 flex flex-col">

          {/* 頂部：標籤 + 姓名 */}
          <div className="mb-6">
            {/* 桌機版姓名 */}
            <div className="hidden lg:flex items-center gap-3">
              <h3 className="text-3xl font-bold text-stone-800">{name}</h3>
              <span className="text-base text-stone-400 font-normal">{title}</span>
            </div>
          </div>

          {/* Tab 切換 */}
          <div className="flex gap-0 mb-6 border-b border-stone-100">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 -mb-px cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-[#cd9651] text-[#cd9651]'
                    : 'border-transparent text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 內容 */}
          <div className="flex-1">

            {/* 專長科別 */}
            {activeTab === 'specialty' && (
              <div className="space-y-4">
                {Object.entries(specialties).map(([key, specialty]) => (
                  <div key={key} className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#cd9651]/10 flex-shrink-0 mt-0.5">
                      <i className={`${specialtyIcons[key] ?? 'ri-medicine-bottle-line'} text-[#cd9651] text-sm`}></i>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-stone-700 mr-2">{specialty.name}</span>
                      <span className="text-sm text-stone-500 leading-relaxed">
                        {specialty.items.join('、')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 學歷經歷 */}
            {activeTab === 'edu' && (
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-[#cd9651] text-base"></i>
                    </div>
                    <span className="text-sm font-semibold text-stone-700">學歷</span>
                  </div>
                  <ul className="space-y-2 pl-8">
                    {education.map((edu, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                        <span className="text-sm text-stone-500 leading-relaxed">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-stone-100 pt-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-briefcase-line text-[#cd9651] text-base"></i>
                    </div>
                    <span className="text-sm font-semibold text-stone-700">經歷</span>
                  </div>
                  <ul className="space-y-2 pl-8">
                    {experience.map((exp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                        <span className="text-sm text-stone-500 leading-relaxed">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 特色治療 */}
            {activeTab === 'special' && (
              <div>
                <p className="text-sm text-stone-400 mb-4 leading-relaxed">
                  結合傳統中醫精髓與現代醫學技術，提供個人化的特色療程。
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {specialTreatments.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 py-2.5 px-3 bg-stone-50 rounded-lg border border-stone-100">
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className="ri-checkbox-circle-line text-[#cd9651] text-sm"></i>
                      </div>
                      <span className="text-sm text-stone-600">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
