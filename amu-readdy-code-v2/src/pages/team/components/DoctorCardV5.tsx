interface Specialty {
  name: string;
  items: string[];
}

interface ScheduleSession {
  label: string;
  time: string;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

interface Schedule {
  morning: ScheduleSession;
  afternoon: ScheduleSession;
  evening: ScheduleSession;
}

interface DoctorCardV5Props {
  name: string;
  title: string;
  image: string;
  bio?: string;
  education: string[];
  experience: string[];
  specialties: Record<string, Specialty>;
  specialTreatments: string[];
  index: number;
  schedule?: Schedule;
  scheduleNote?: string;
}

const specialtyIcons: Record<string, string> = {
  internal: 'ri-heart-pulse-line',
  gynecology: 'ri-women-line',
  pediatrics: 'ri-user-heart-line',
  dermatology: 'ri-leaf-line',
  acupuncture: 'ri-focus-3-line',
  beauty: 'ri-sparkling-line',
};

const DAYS = [
  { key: 'mon', label: '週一' },
  { key: 'tue', label: '週二' },
  { key: 'wed', label: '週三' },
  { key: 'thu', label: '週四' },
  { key: 'fri', label: '週五' },
  { key: 'sat', label: '週六' },
  { key: 'sun', label: '週日' },
] as const;

function ScheduleTable({ schedule, note }: { schedule: Schedule; note?: string }) {
  const sessions = [schedule.morning, schedule.afternoon, schedule.evening];

  return (
    <div>
      <h4 className="text-sm font-bold text-stone-800 mb-4">門診資訊</h4>
      <div className="rounded-xl overflow-hidden border border-[#e8ddd0] bg-[#faf6f0]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e8ddd0]">
              <th className="py-3 px-4 text-left w-24"></th>
              {DAYS.map(d => (
                <th key={d.key} className="py-3 px-2 text-center font-medium text-stone-500 text-xs">
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, si) => (
              <tr
                key={si}
                className={si < sessions.length - 1 ? 'border-b border-[#e8ddd0]' : ''}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                    <div>
                      <div className="font-semibold text-stone-700 text-sm leading-tight">{session.label}</div>
                      <div className="text-xs text-stone-400 leading-tight">{session.time}</div>
                    </div>
                  </div>
                </td>
                {DAYS.map(d => {
                  const active = session[d.key];
                  return (
                    <td key={d.key} className="py-4 px-2 text-center">
                      {active ? (
                        <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#e8f5e9]">
                          <i className="ri-check-line text-[#4caf50] text-sm"></i>
                        </div>
                      ) : (
                        <span className="text-stone-300 text-base leading-none">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {note && (
          <div className="px-4 py-3 border-t border-[#e8ddd0] bg-[#f5ede0]/60">
            <p className="text-xs text-stone-500 leading-relaxed">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DoctorCardV5({
  name,
  title,
  image,
  bio,
  education,
  experience,
  specialties,
  specialTreatments,
  index,
  schedule,
  scheduleNote,
}: DoctorCardV5Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">

      {/* 上半部：照片 + 資訊並排 */}
      <div className="flex flex-col lg:flex-row">

        {/* 左側照片區 */}
        <div className="relative lg:w-64 xl:w-72 flex-shrink-0 bg-[#f5ede0]">
          <div className="w-full h-72 lg:h-full">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* 右側內容區 */}
        <div className="flex-1 p-8 xl:p-10">

          {/* 頂部：姓名 */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-stone-800">{name}</h3>
            <p className="text-sm text-stone-400 mt-0.5">{title}</p>
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
            <div className="mb-5">
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

          <div className="border-t border-stone-100 my-5"></div>

          {/* 關於醫師 */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-2">關於醫師</h4>
            <p className="text-sm text-stone-500 leading-relaxed">
              {bio ?? Object.values(specialties)
                .map(s => `${s.name}（${s.items.slice(0, 2).join('、')}${s.items.length > 2 ? '等' : ''}）`)
                .join('；')}
            </p>
          </div>

          {/* 個人資訊 */}
          <div>
            <h4 className="text-sm font-bold text-stone-800 mb-3">個人資訊</h4>
            <div className="flex flex-col gap-y-2">
              {education.length > 0 && (
                <div className="flex items-start gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium mt-0.5">•</span>
                  <span>
                    <span className="font-medium text-stone-600">學歷：</span>
                    {education.join('、')}
                  </span>
                </div>
              )}
              {experience.length > 0 && (
                <div className="flex items-start gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium mt-0.5">•</span>
                  <span>
                    <span className="font-medium text-stone-600">經歷：</span>
                    {experience.join('、')}
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 下半部：門診時刻表（與整張卡片同寬） */}
      {schedule && (
        <div className="border-t border-stone-100 px-8 xl:px-10 py-8 xl:py-10">
          <ScheduleTable schedule={schedule} note={scheduleNote} />
        </div>
      )}

    </div>
  );
}
