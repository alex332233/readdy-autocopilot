import type {
  DoctorProfileContent,
  DoctorSchedule,
  DoctorSpecialtyGroup,
} from '../../../sanity/types';
import { getDoctorProfileDocumentDataAttribute } from '../../../sanity/dataAttributes';

interface DoctorCardV5Props {
  documentId: string;
  doctorId: number;
  name: string;
  title: string;
  image: DoctorProfileContent['image'];
  bio?: string;
  education: string[];
  experience: string[];
  specialtyGroups: DoctorSpecialtyGroup[];
  specialTreatments: string[];
  schedule?: DoctorSchedule;
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

const getSpecialtyGroupFieldBase = (specialty: DoctorSpecialtyGroup, index: number) =>
  specialty._key ? `specialtyGroups[_key=="${specialty._key}"]` : `specialtyGroups[${index}]`;

function ScheduleTable({
  documentId,
  schedule,
  note,
}: {
  documentId: string;
  schedule: DoctorSchedule;
  note?: string;
}) {
  const sessions = [
    { key: 'morning', value: schedule.morning },
    { key: 'afternoon', value: schedule.afternoon },
    { key: 'evening', value: schedule.evening },
  ] as const;

  return (
    <div>
      <h4 className="text-sm font-bold text-stone-800 mb-4">門診資訊</h4>
      <div className="rounded-xl overflow-hidden border border-[#e8ddd0] bg-[#faf6f0]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#e8ddd0]">
              <th className="py-3 px-4 text-left w-24"></th>
              {DAYS.map((d) => (
                <th key={d.key} className="py-3 px-2 text-center font-medium text-stone-500 text-xs">
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, si) => (
              <tr key={session.key} className={si < sessions.length - 1 ? 'border-b border-[#e8ddd0]' : ''}>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#cd9651] flex-shrink-0"></span>
                    <div>
                      <div
                        className="font-semibold text-stone-700 text-sm leading-tight"
                        data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `schedule.${session.key}.label`)}
                      >
                        {session.value.label}
                      </div>
                      <div
                        className="text-xs text-stone-400 leading-tight"
                        data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `schedule.${session.key}.time`)}
                      >
                        {session.value.time}
                      </div>
                    </div>
                  </div>
                </td>
                {DAYS.map((d) => {
                  const active = session.value[d.key];
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
            <p className="text-xs text-stone-500 leading-relaxed" data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'scheduleNote')}>
              {note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DoctorCardV5({
  documentId,
  doctorId,
  name,
  title,
  image,
  bio,
  education,
  experience,
  specialtyGroups,
  specialTreatments,
  schedule,
  scheduleNote,
}: DoctorCardV5Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="relative lg:w-64 xl:w-72 flex-shrink-0 bg-[#f5ede0]" data-sanity-edit-group data-sanity-edit-target>
          <div className="w-full h-72 lg:h-full">
            {image.url ? (
              <img
                src={image.url}
                alt={image.alt || `${name}${title}`}
                className="w-full h-full object-cover object-top"
                data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'image')}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#f5ede0] text-center px-6" data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'image')}>
                <div>
                  <p className="text-base font-semibold text-stone-600">{name}</p>
                  <p className="text-sm text-stone-400 mt-1">尚未上傳醫師照片</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 p-8 xl:p-10">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-stone-800" data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'name')}>
              {name}
            </h3>
            <p className="text-sm text-stone-400 mt-0.5" data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'title')}>
              {title}
            </p>
          </div>

          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-3">專長科別</h4>
            <div className="flex flex-wrap gap-2">
              {specialtyGroups.map((specialty, groupIndex) => {
                const fieldBase = getSpecialtyGroupFieldBase(specialty, groupIndex);

                return (
                  <div
                    key={`${specialty._key || specialty.slug}-${groupIndex}`}
                    className="flex items-center gap-1.5 bg-[#faf6f0] border border-[#cd9651]/20 rounded-full px-3 py-1"
                    data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `${fieldBase}.name`)}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i
                        className={`${specialtyIcons[specialty.slug] ?? 'ri-medicine-bottle-line'} text-[#cd9651] text-xs`}
                        data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `${fieldBase}.slug`)}
                      ></i>
                    </div>
                    <span
                      className="text-xs font-medium text-stone-600 whitespace-nowrap"
                      data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `${fieldBase}.name`)}
                    >
                      {specialty.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {specialTreatments.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-bold text-stone-800 mb-3">特色治療</h4>
              <div className="flex flex-wrap gap-2">
                {specialTreatments.map((treatment, treatmentIndex) => (
                  <span
                    key={treatmentIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#cd9651] rounded-full text-xs text-white font-medium whitespace-nowrap"
                    data-sanity={getDoctorProfileDocumentDataAttribute(documentId, `specialTreatments[${treatmentIndex}]`)}
                  >
                    <i className="ri-sparkling-2-line text-xs"></i>
                    {treatment}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-stone-100 my-5"></div>

          <div className="mb-5">
            <h4 className="text-sm font-bold text-stone-800 mb-2">關於醫師</h4>
            <p className="text-sm text-stone-500 leading-relaxed" data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'bio')}>
              {bio ?? specialtyGroups.map((s) => `${s.name}（${s.items.slice(0, 2).join('、')}${s.items.length > 2 ? '等' : ''}）`).join('；')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-stone-800 mb-3">個人資訊</h4>
            <div className="flex flex-col gap-y-2">
              {education.length > 0 && (
                <div className="flex items-start gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium mt-0.5">•</span>
                  <span>
                    <span className="font-medium text-stone-600">學歷：</span>
                    <span data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'education')}>
                      {education.join('、')}
                    </span>
                  </span>
                </div>
              )}
              {experience.length > 0 && (
                <div className="flex items-start gap-1.5 text-sm text-stone-500">
                  <span className="text-[#cd9651] font-medium mt-0.5">•</span>
                  <span>
                    <span className="font-medium text-stone-600">經歷：</span>
                    <span data-sanity={getDoctorProfileDocumentDataAttribute(documentId, 'experience')}>
                      {experience.join('、')}
                    </span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {schedule && (
        <div className="border-t border-stone-100 px-8 xl:px-10 py-8 xl:py-10">
          <ScheduleTable documentId={documentId} schedule={schedule} note={scheduleNote} />
        </div>
      )}
    </div>
  );
}
