import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedTreatmentCard from '../treatments/components/FeaturedTreatmentCard';

export default function FeaturedTreatmentsPage() {
  const featuredCategories = [
    {
      title: '御顏・緊緻',
      englishTitle: 'Facial Rejuvenation',
      icon: 'ri-sparkling-line',
      color: '#cd9651',
      treatments: [
        {
          title: '專業臉部美容療程',
          description: '結合傳統中醫與現代美容技術，針對臉部肌膚進行深層調理，改善膚質、緊緻輪廓，讓您重現青春光采。',
          tags: ['美顏針灸', '緊緻拉提', '膚質改善']
        }
      ]
    },
    {
      title: '登峰・轉骨',
      englishTitle: 'Growth Enhancement',
      icon: 'ri-line-chart-line',
      color: '#8b7355',
      treatments: [
        {
          title: '青少年成長發育調理',
          description: '把握黃金成長期，透過中醫調理促進骨骼發育、增強體質，為孩子的健康成長奠定良好基礎。',
          tags: ['轉骨調理', '體質強化', '成長促進']
        }
      ]
    },
    {
      title: '調經・助孕',
      englishTitle: 'Fertility Support',
      icon: 'ri-heart-pulse-line',
      color: '#d4a574',
      treatments: [
        {
          title: '婦科調理與助孕療程',
          description: '針對月經不調、備孕需求提供專業調理，平衡內分泌，提升受孕機率。',
          tags: ['月經調理', '助孕調理', '內分泌平衡']
        }
      ]
    },
    {
      title: '減重・塑身',
      englishTitle: 'Weight Management',
      icon: 'ri-scales-3-line',
      color: '#b8956a',
      treatments: [
        {
          title: '健康減重與體態雕塑',
          description: '透過中醫調理配合現代技術，健康減重、雕塑體態，打造理想身形。',
          tags: ['健康減重', '體態雕塑', '代謝調理']
        }
      ]
    },
    {
      title: '過敏・免疫',
      englishTitle: 'Allergy & Immunity',
      icon: 'ri-shield-cross-line',
      color: '#9d8b6f',
      treatments: [
        {
          title: '過敏體質調理',
          description: '改善過敏症狀，增強免疫系統，從根本調理體質，減少過敏發作。',
          tags: ['過敏調理', '免疫提升', '體質改善']
        }
      ]
    },
    {
      title: '疼痛・復健',
      englishTitle: 'Pain Management',
      icon: 'ri-hand-heart-line',
      color: '#a89176',
      treatments: [
        {
          title: '疼痛管理與復健治療',
          description: '針對各類疼痛問題提供專業治療，加速復健進程，恢復身體機能。',
          tags: ['疼痛緩解', '復健治療', '功能恢復']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf6f0]">
      <Navbar scrolled={false} />
      <HeroSection />
      
      <section className="py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCategories.map((category, index) => (
              <FeaturedTreatmentCard
                key={index}
                category={category}
                hasDetail={true}
                detailPath={
                  category.title === '御顏・緊緻'
                    ? '/featured-treatments/facial'
                    : category.title === '登峰・轉骨'
                    ? '/featured-treatments/growth'
                    : category.title === '調經・助孕'
                    ? '/featured-treatments/fertility'
                    : category.title === '減重・塑身'
                    ? '/featured-treatments/weight'
                    : category.title === '過敏・免疫'
                    ? '/featured-treatments/allergy'
                    : '/featured-treatments/pain'
                }
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
