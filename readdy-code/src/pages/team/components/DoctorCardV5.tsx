
interface Specialty {
  name: string;
  items: string[];
}

interface DoctorCardV5Props {
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

export default function DoctorCardV5({
  name,
  title,
  image,
  education,
  experience,
  specialties,
  specialTreatments,
  index,
}: DoctorCardV5Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">

        {/* 左側照片區 */}
        <div className="relative lg:w-64 xl:w-72 flex-shrink-0 bg-[#f5ede0]">
          <div className="w-full h-72 lg:h-full min-h-[360px]">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* 右側內容區 */}
        <div className="flex-1 p-8 xl:p-10">

          {/* 頂部：姓名 + 社群圖示 */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-2xl font-bold text-stone-800">{name}</h3>
              <p className="text-sm text-stone-400 mt-0.5">{title}</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:border-[#cd9651] hover:text-[#cd9651] cursor-pointer transition-colors">
                <i className="ri-phone-line text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:border-[#cd9651] hover:text-[#cd9651] cursor-pointer transition-colors">
                <i className="ri-instagram-line text-sm"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:border-[#cd9651] hover:text-[#cd9651] cursor-pointer transition-colors">
                <i className="ri-line-fill text-sm"></i>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 my-5"></div>

          {/* About Me */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-2">關於醫師</h4>
            <p className="text-sm text-stone-500 leading-relaxed">
              {Object.values(specialties)
                .map(s => `${s.name}（${s.items.slice(0, 2).join('、')}${s.items.length > 2 ? '等' : ''}）`)
                .join('；')}
            </p>
          </div>

          {/* Personal Information */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-3">個人資訊</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {education.map((edu, i) => (
                <div key={`edu-${i}`} className="flex items-center gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium">•</span>
                  <span>學歷：{edu}</span>
                </div>
              ))}
              {experience.map((exp, i) => (
                <div key={`exp-${i}`} className="flex items-center gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium">•</span>
                  <span>經歷：{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 專長科別標籤 */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-3">專長科別</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(specialties).map(([key, specialty]) => (
                <div
                  key={key}
                  className="flex items-center gap-1.5 bg-[#faf6f0] border border-[#cd9651]/20 rounded-full px-3 py-1"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${specialtyIcons[key] ?? 'ri-medicine-bottle-line'} text-[#cd9651] text-xs`}></i>
                  </div>
                  <span className="text-xs font-medium text-stone-600 whitespace-nowrap">{specialty.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 特色治療 */}
          {specialTreatments.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-stone-800 mb-3">特色治療</h4>
              <div className="flex flex-wrap gap-2">
                {specialTreatments.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#cd9651] rounded-full text-xs text-white font-medium whitespace-nowrap"
                  >
                    <i className="ri-sparkling-2-line text-xs"></i>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
