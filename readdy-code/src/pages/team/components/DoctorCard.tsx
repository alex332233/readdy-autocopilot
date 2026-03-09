interface Specialty {
  name: string;
  items: string[];
}

interface DoctorCardProps {
  name: string;
  title: string;
  image: string;
  education: string[];
  experience: string[];
  specialties: Record<string, Specialty>;
  specialTreatments: string[];
  reverse?: boolean;
}

export default function DoctorCard({
  name,
  title,
  image,
  education,
  experience,
  specialties,
  specialTreatments,
  reverse = false
}: DoctorCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
      {/* 醫師照片 */}
      <div className="w-full lg:w-80 flex-shrink-0">
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div className="w-full h-[500px]">
            <img
              src={image}
              alt={`${name}${title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-lg text-white/90">{title}</p>
          </div>
        </div>
      </div>

      {/* 醫師資訊 */}
      <div className="flex-1">
        {/* 學歷 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="ri-graduation-cap-line text-[#cd9651]"></i>
            學歷
          </h4>
          <ul className="space-y-2">
            {education.map((edu, index) => (
              <li key={index} className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#cd9651] before:rounded-full">
                {edu}
              </li>
            ))}
          </ul>
        </div>

        {/* 經歷 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="ri-briefcase-line text-[#cd9651]"></i>
            經歷
          </h4>
          <ul className="space-y-2">
            {experience.map((exp, index) => (
              <li key={index} className="text-gray-700 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#cd9651] before:rounded-full">
                {exp}
              </li>
            ))}
          </ul>
        </div>

        {/* 專長科別 */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i className="ri-stethoscope-line text-[#cd9651]"></i>
            專長科別
          </h4>
          <div className="space-y-4">
            {Object.values(specialties).map((specialty, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-bold text-gray-800 mb-2">{specialty.name}</h5>
                <div className="flex flex-wrap gap-2">
                  {specialty.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 特色治療 */}
        {specialTreatments.length > 0 && (
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i className="ri-star-line text-[#cd9651]"></i>
              特色治療
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialTreatments.map((treatment, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#cd9651] text-white text-sm rounded-full font-medium"
                >
                  {treatment}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}