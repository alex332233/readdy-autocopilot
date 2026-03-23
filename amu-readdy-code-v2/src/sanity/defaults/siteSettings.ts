import type {SiteSettingsContent} from '../types';

export const defaultSiteSettingsContent: SiteSettingsContent = {
  title: '全站設定',
  headerLogo: {
    url: 'https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/31a31369a1df40450d9f72af90ec2886.png',
    alt: '艾苜中醫診所',
  },
  headerNavItems: [
    { label: '關於艾苜', kind: 'route', target: '/about' },
    { label: '健保項目', kind: 'route', target: '/insurance' },
    {
      label: '特色療程',
      kind: 'route',
      target: '/featured-treatments',
      children: [
        { label: '御顏・緊緻', kind: 'route', target: '/featured-treatments/facial' },
        { label: '登峰・轉骨', kind: 'route', target: '/featured-treatments/growth' },
      ],
    },
    { label: '醫師團隊', kind: 'route', target: '/team' },
    { label: '真實見證', kind: 'route', target: '/cases' },
    { label: '衛教資訊', kind: 'route', target: '/health-education' },
  ],
  headerCta: {
    label: '立即預約',
    kind: 'scroll',
    target: 'booking',
  },
  footerLogo: {
    url: 'https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/2d074e29a45efc84d09e4dff77e4bad7.png',
    alt: '艾苜中醫診所',
  },
  footerTagline: '您與家人的專屬健康御守',
  footerLinkGroups: [
    {
      title: '關於艾苜',
      links: [
        { label: '診所介紹', kind: 'route', target: '/about' },
        { label: '醫療理念', kind: 'scroll', target: 'why-choose' },
        { label: '醫師團隊', kind: 'route', target: '/team' },
        { label: '聯絡我們', kind: 'scroll', target: 'location' },
      ],
    },
    {
      title: '醫療服務',
      links: [
        { label: '內科調理', kind: 'scroll', target: 'services' },
        { label: '婦科治療', kind: 'scroll', target: 'services' },
        { label: '兒科調理', kind: 'scroll', target: 'services' },
        { label: '美顏針灸', kind: 'scroll', target: 'services' },
      ],
    },
  ],
  clinicInfoTitle: '診所資訊',
  address: '704臺南市北區北安路一段239號',
  phone: '06 252 0699',
  email: 'amulettecmc@gmail.com',
  socialLinks: [
    { platform: 'Instagram', icon: 'ri-instagram-line', url: 'https://www.instagram.com' },
    { platform: 'Facebook', icon: 'ri-facebook-fill', url: 'https://www.facebook.com' },
  ],
  copyright: '© 2025 艾苜中醫診所. All rights reserved.',
  builderLink: {
    label: 'Website Builder',
  },
};
