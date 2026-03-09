interface Treatment {
  title: string;
  description: string;
  tags: string[];
  caseLink?: boolean;
}

interface TreatmentItemProps {
  treatment: Treatment;
  color: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function TreatmentItem({ treatment, color, isExpanded, onToggle }: TreatmentItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full px-2 py-3 flex items-center justify-between cursor-pointer hover:bg-[#faf8f4]/60 transition-colors duration-200 group"
      >
        <h4 className="text-base lg:text-lg font-serif font-semibold text-gray-800 text-left group-hover:text-[#cd9651] transition-colors duration-200">
          {treatment.title}
        </h4>
        <i 
          className={`ri-arrow-down-s-line text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          style={{ color }}
        ></i>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pb-4">
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4">
            {treatment.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {treatment.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: color }}
              >
                {tag}
              </span>
            ))}
          </div>

          {treatment.caseLink && (
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => {
                console.log('查看案例');
              }}
            >
              <span>點擊看案例</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
