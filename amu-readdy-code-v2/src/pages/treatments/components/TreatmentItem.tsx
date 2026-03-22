import { useRef, useEffect, useState } from 'react';

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
  dataPathPrefix?: string;
  getDataAttribute?: (path: string) => string;
}

export default function TreatmentItem({
  treatment,
  color,
  isExpanded,
  onToggle,
  dataPathPrefix,
  getDataAttribute,
}: TreatmentItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [treatment]);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle();
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div
      className="border-b border-gray-100 last:border-b-0 transition-all duration-300"
      style={{
        backgroundColor: isExpanded ? `${color}08` : 'transparent',
      }}
    >
      {/* 左側指示條 */}
      <div className="relative flex">
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 ease-in-out"
          style={{
            backgroundColor: color,
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'top',
          }}
        />

        <button
          onClick={handleToggle}
          className="w-full pl-5 pr-2 py-5 flex items-center justify-between cursor-pointer group transition-all duration-200"
        >
          {/* 標題區 */}
          <div className="flex items-center gap-3 text-left">
            {/* 小圓點 */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
              style={{
                backgroundColor: color,
                opacity: isExpanded ? 1 : 0.35,
                transform: isExpanded ? 'scale(1.4)' : 'scale(1)',
              }}
            />
            <h4
              className="text-base lg:text-lg font-serif font-semibold transition-colors duration-200"
              style={{ color: isExpanded ? color : '#374151' }}
              data-sanity={dataPathPrefix && getDataAttribute ? getDataAttribute(`${dataPathPrefix}.title`) : undefined}
            >
              {treatment.title}
            </h4>
          </div>

          {/* 箭頭圖示 */}
          <div
            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 ml-4 transition-all duration-300"
            style={{
              backgroundColor: isExpanded ? color : 'transparent',
              border: `1.5px solid ${isExpanded ? color : '#d1d5db'}`,
              transform: isAnimating ? 'scale(0.88)' : 'scale(1)',
            }}
          >
            <i
              className={`ri-arrow-down-s-line text-base transition-transform duration-400 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              style={{ color: isExpanded ? '#fff' : '#9ca3af' }}
            />
          </div>
        </button>
      </div>

      {/* 展開內容 */}
      <div
        className="overflow-hidden transition-all duration-450 ease-in-out"
        style={{
          maxHeight: isExpanded ? `${contentHeight + 40}px` : '0px',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="pl-10 pr-4 pb-5 transition-transform duration-400 ease-out"
          style={{
            transform: isExpanded ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          {/* 說明文字 */}
          <p
            className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4"
            data-sanity={dataPathPrefix && getDataAttribute ? getDataAttribute(`${dataPathPrefix}.description`) : undefined}
          >
            {treatment.description}
          </p>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {treatment.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:opacity-80"
                data-sanity={
                  dataPathPrefix && getDataAttribute ? getDataAttribute(`${dataPathPrefix}.tags[${tagIdx}]`) : undefined
                }
                style={{
                  backgroundColor: `${color}18`,
                  color,
                  border: `1px solid ${color}40`,
                  animationDelay: `${tagIdx * 50}ms`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
