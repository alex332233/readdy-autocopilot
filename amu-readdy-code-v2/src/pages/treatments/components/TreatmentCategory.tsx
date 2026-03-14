import { useState } from 'react';
import TreatmentItem from './TreatmentItem';

interface Treatment {
  title: string;
  description: string;
  tags: string[];
  caseLink?: boolean;
}

interface CategoryProps {
  category: {
    title: string;
    subtitle: string;
    englishTitle: string;
    icon: string;
    color: string;
    treatments: Treatment[];
  };
  index: number;
}

export default function TreatmentCategory({ category, index }: CategoryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className={`${index !== 0 ? 'mt-24' : ''} mb-0 last:mb-0`}>
      <div className="flex items-center gap-4 mb-8">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: category.color }}
        >
          <i className={`${category.icon} text-3xl text-white`}></i>
        </div>
        <div>
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gray-800 mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-gray-500 italic">({category.englishTitle})</p>
        </div>
      </div>

      {category.subtitle && (
        <div className="mb-6 pl-20">
          <span 
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: category.color }}
          >
            {category.subtitle}
          </span>
        </div>
      )}

      <div className="pl-0 lg:pl-20 mb-16">
        {category.treatments.map((treatment, idx) => (
          <TreatmentItem
            key={idx}
            treatment={treatment}
            color={category.color}
            isExpanded={expandedIndex === idx}
            onToggle={() => toggleExpand(idx)}
          />
        ))}
      </div>
    </div>
  );
}