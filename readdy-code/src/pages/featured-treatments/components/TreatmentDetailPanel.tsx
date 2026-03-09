
import { useEffect, useRef } from 'react';
import FacialDetailSection from '../../treatments/components/FacialDetailSection';
import GrowthDetailSection from '../../treatments/components/GrowthDetailSection';

interface TreatmentDetailPanelProps {
  activeId: string | null;
  onClose: () => void;
}

const DETAIL_MAP: Record<string, { label: string; component: React.ReactNode }> = {
  'facial': {
    label: '御顏・緊緻',
    component: <FacialDetailSection />,
  },
  'growth': {
    label: '登峰・轉骨',
    component: <GrowthDetailSection />,
  },
};

export default function TreatmentDetailPanel({ activeId, onClose }: TreatmentDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeId && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [activeId]);

  if (!activeId || !DETAIL_MAP[activeId]) return null;

  const detail = DETAIL_MAP[activeId];

  return (
    <div ref={panelRef} className="w-full">
      {/* 分頁標題列 */}
      <div className="bg-[#faf6f0] border-t-2 border-[#cd9651] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-[#cd9651] rounded-full"></div>
          <span className="text-lg font-bold text-[#cd9651]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
            {detail.label} — 詳細介紹
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#cd9651] text-[#cd9651] text-sm font-medium hover:bg-[#cd9651] hover:text-white transition-all duration-200 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-close-line text-base"></i>
          收起詳情
        </button>
      </div>

      {/* 詳細內容 */}
      <div>
        {detail.component}
      </div>
    </div>
  );
}
