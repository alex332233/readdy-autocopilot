import { faqData } from '../../mocks/faq';
import { processSteps } from '../../mocks/process';
import { servicesData } from '../../mocks/services';
import { testimonialsData } from '../../mocks/testimonials';
import type { HomePageContent } from '../types';

export const defaultHomePageContent: HomePageContent = {
  hero: {
    titleLine1: '以艾醫身',
    titleLine2: '以苜養心',
    subtitle: '在這裡,我們用溫柔的雙手與傳承千年的智慧,\n守護妳與家人的每一刻健康時光',
    ctaText: '立即預約諮詢',
    ctaTarget: 'booking',
    image: {
      url: 'https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/86c1fda8d4a973044d459bcf3069ab1e.png',
      alt: '艾草意象',
    },
  },
  about: {
    title: '關於艾苜中醫',
    englishTitle: 'Amulette Chinese Medical Clinic',
    lead: '您與家人的隨身健康御守',
    description:
      '在繁忙的生活中，艾苜致力於在您身體失衡前便先一步承接。我們懂妳的優雅，更懂您對家人健康的牽掛。走進艾苜，帶走的不只是一帖藥方，而是身心靈被安穩接住的暖光。',
    features: [
      {
        title: '「艾」是呵護',
        description: '像月光般溫潤，照料女性生理節律，讓您的優雅源自健康的自然發光。',
      },
      {
        title: '「苜」是滋養',
        description: '像大地般深根，為全家人紮穩健康地基，注入源源不絕的生命動能。',
      },
    ],
    ctaText: '關於艾苜中醫診所',
    ctaTarget: 'services',
    image: {
      url: 'https://readdy.ai/api/search-image?query=Elegant%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20wooden%20shelves%20displaying%20ceramic%20herb%20jars%20and%20dried%20herbs%2C%20soft%20natural%20lighting%20through%20window%2C%20modern%20minimalist%20design%20combined%20with%20traditional%20elements%2C%20peaceful%20and%20professional%20atmosphere%2C%20warm%20earth%20tones%2C%20clean%20aesthetic&width=800&height=1000&seq=about-clinic-002&orientation=portrait',
      alt: '艾苜中醫診所環境',
    },
  },
  services: {
    title: '主治項目',
    description:
      '融合傳統中醫精髓與現代醫學理念，針對各類常見病症提供個人化診療方案，從根本調理體質，守護您與家人的健康。',
    items: servicesData,
  },
  whyChoose: {
    titleLine1: '為什麼選擇艾苜',
    titleLine2: '守護您的健康',
    paragraphs: [
      '上醫治未病:古籍《黃帝內經》有云,真正的醫術不應止於「挽救」,更在於「預防」。艾苜(Amulette)源自法語的「御守」,如同御守在災厄來臨前擋去風雨。',
      '我們致力於在您身體失衡的初期,便先一步介入調理。讓每一次的診療,都是為您築起一道溫柔而堅實的健康防線。不只治病,更守護您的健康。',
    ],
    ctaText: '立即預約諮詢',
    ctaTarget: 'booking',
    image: {
      url: 'https://readdy.ai/api/search-image?query=Modern%20Chinese%20medicine%20consultation%20room%20with%20professional%20female%20doctor%20and%20patient%20having%20warm%20conversation%2C%20elegant%20minimalist%20interior%20design%20with%20natural%20wood%20elements%20and%20soft%20lighting%2C%20peaceful%20healing%20atmosphere%2C%20contemporary%20medical%20practice%20combined%20with%20traditional%20wisdom&width=800&height=1000&seq=why-choose-new-003&orientation=portrait',
      alt: '艾苜中醫診療情境',
    },
  },
  team: {
    title: '醫師陣容',
    subtitle: '以仁心仁術，守護您與家人的健康',
    description:
      '艾苜中醫診所匯聚三位專業中醫師，各具深厚學術背景與豐富臨床經驗，涵蓋內科、婦科、皮膚科、針灸及中醫美容等多元領域，為每位患者提供最適切的個人化調理方案。',
    doctors: [
      { name: '李俊廷 醫師', title: '內科・針灸・自律神經' },
      { name: '歐陽汝亭 醫師', title: '皮膚科・婦科・中醫美容' },
      { name: '吳雅筠 醫師', title: '婦科・兒科・物理治療' },
    ],
    image: {
      url: 'https://readdy.ai/api/search-image?query=Three%20professional%20Chinese%20medicine%20doctors%20group%20portrait%20in%20white%20medical%20coats%20standing%20together%20in%20a%20modern%20bright%20clinic%20interior%20warm%20natural%20lighting%20elegant%20minimalist%20background%20all%20smiling%20confidently%20high%20quality%20professional%20medical%20team%20photography%20warm%20tones&width=900&height=600&seq=team-group-photo-clinic&orientation=landscape',
      alt: '艾苜中醫診所醫師團隊',
    },
  },
  process: {
    title: '初診流程',
    subtitle: '五個步驟，開啟您的健康守護之旅',
    steps: processSteps,
  },
  booking: {
    title: '預約艾苜',
    subtitle: '選擇您偏好的聯繫方式,立即開始您的健康調理之旅',
    cards: [
      {
        title: '電話預約',
        value: '06 252 0699',
        href: 'tel:062520699',
        buttonText: '立即撥打',
        icon: 'ri-phone-fill',
        buttonTheme: 'brand',
      },
      {
        title: 'LINE 預約',
        value: '@艾苜中醫',
        href: 'https://lin.ee/EeONEJc',
        buttonText: '加入好友',
        icon: 'ri-line-fill',
        buttonTheme: 'line',
      },
    ],
  },
  faq: {
    titleLine1: '常見',
    titleLine2: '問題',
    description: '我們整理了最常被問到的問題，希望能幫助您更了解我們的服務。',
    items: faqData,
  },
  gallery: {
    images: [
      {
        url: 'https://readdy.ai/api/search-image?query=modern%20traditional%20chinese%20medicine%20clinic%20interior%20warm%20lighting%20wooden%20furniture%20elegant%20reception%20area%20soft%20beige%20tones%20plants%20decoration%20professional%20medical%20environment%20cozy%20atmosphere%20high%20end%20aesthetic&width=800&height=900&seq=gallery_left_main&orientation=portrait',
        label: 'Clinic Space',
        labelZh: '診所空間',
      },
      {
        url: 'https://readdy.ai/api/search-image?query=chinese%20medicine%20consultation%20room%20doctor%20patient%20warm%20wooden%20desk%20herbal%20medicine%20bottles%20soft%20natural%20light%20professional%20calm%20atmosphere%20elegant%20interior%20design&width=800&height=440&seq=gallery_right_top&orientation=landscape',
        label: 'Consultation Room',
        labelZh: '診療室',
      },
      {
        url: 'https://readdy.ai/api/search-image?query=acupuncture%20treatment%20room%20clean%20white%20bed%20soft%20lighting%20relaxing%20spa%20like%20atmosphere%20traditional%20chinese%20medicine%20clinic%20peaceful%20serene%20environment%20warm%20tones&width=800&height=440&seq=gallery_right_bottom&orientation=landscape',
        label: 'Treatment Room',
        labelZh: '治療室',
      },
    ],
  },
  testimonials: {
    title: '真實見證',
    description: '來自真實患者的治療心得與推薦',
    items: testimonialsData,
    ctaText: '查看更多評價',
  },
};
