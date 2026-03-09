
interface Specialty {
  name: string;
  items: string[];
}

interface DoctorCardV4Props {
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

export default function DoctorCardV4({
  name,
  title,
  image,
  education,
  experience,
  specialties,
  specialTreatments,
  index,
}: DoctorCardV4Props) {
  const isEven = index % 2 === 0;

  // 組合所有專長為一段簡介文字
  const specialtySummary = Object.values(specialties)
    .map(s => `${s.name}（${s.items.slice(0, 2).join('、')}${s.items.length > 2 ? '等' : ''}）`)
    .join('；');

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

        {/* 照片區 */}
        <div className="relative lg:w-72 xl:w-80 flex-shrink-0">
          {/* 淺暖色背景 */}
          <div className="absolute inset-0 bg-[#f5ede0]"></div>
          {/* 職稱標籤 */}
          <div className="absolute top-5 left-5 z-10">
            <span className="bg-white/90 backdrop-blur-sm text-stone-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-stone-100">
              {title}
            </span>
          </div>
          <div className="relative w-full h-80 lg:h-full min-h-[480px]">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* 內容區 */}
        <div className="flex-1 p-8 xl:p-10 flex flex-col gap-6">

          {/* 姓名 */}
          <div>
            <h3 className="text-3xl font-bold text-stone-800 mb-2">{name}</h3>
            {/* 專長簡介段落 */}
            <p className="text-sm text-stone-500 leading-relaxed">{specialtySummary}</p>
          </div>

          {/* 專長科別圖示列 */}
          <div className="flex items-center gap-3 flex-wrap">
            {Object.entries(specialties).map(([key, specialty]) => (
              <div key={key} className="flex items-center gap-1.5 bg-[#faf6f0] border border-[#cd9651]/20 rounded-full px-3 py-1.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${specialtyIcons[key] ?? 'ri-medicine-bottle-line'} text-[#cd9651] text-xs`}></i>
                </div>
                <span className="text-xs font-medium text-stone-600 whitespace-nowrap">{specialty.name}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100"></div>

          {/* 學歷區塊 */}
          <div>
            <h4 className="text-base font-bold text-stone-800 mb-3">{name} 學歷</h4>
            <p className="text-sm text-stone-500 mb-3 leading-relaxed">
              具備紮實的學術背景，致力於中西醫整合與臨床研究。
            </p>
            <ul className="space-y-2">
              {education.map((edu, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#cd9651] flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                  <span className="text-sm text-stone-600 leading-relaxed">{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 經歷區塊 */}
          <div>
            <h4 className="text-base font-bold text-stone-800 mb-3">{name} 經歷</h4>
            <p className="text-sm text-stone-500 mb-3 leading-relaxed">
              豐富的臨床實務經驗，曾服務於多家知名醫療機構。
            </p>
            <ul className="space-y-2">
              {experience.map((exp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#cd9651] flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-xs"></i>
                  </div>
                  <span className="text-sm text-stone-600 leading-relaxed">{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 特色治療 */}
          {specialTreatments.length > 0 && (
            <>
              <div className="border-t border-stone-100"></div>
              <div>
                <h4 className="text-base font-bold text-stone-800 mb-3">特色治療</h4>
                <div className="flex flex-wrap gap-2">
                  {specialTreatments.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#cd9651] rounded-full text-xs text-white font-medium whitespace-nowrap"
                    >
                      <i className="ri-sparkling-2-line text-xs"></i>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
