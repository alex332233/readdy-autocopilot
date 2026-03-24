export const siteSettingsSeed = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  title: '全站設定',
  headerLogo: {
    url: 'https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/31a31369a1df40450d9f72af90ec2886.png',
    alt: '艾苜中醫診所',
  },
  headerNavItems: [
    {_key: 'nav-about', label: '關於艾苜', kind: 'route', target: '/about'},
    {_key: 'nav-insurance', label: '健保項目', kind: 'route', target: '/insurance'},
    {
      _key: 'nav-featured',
      label: '特色療程',
      kind: 'route',
      target: '/featured-treatments',
      children: [
        {_key: 'nav-featured-facial', label: '御顏・緊緻', kind: 'route', target: '/featured-treatments/facial'},
        {_key: 'nav-featured-growth', label: '登峰・轉骨', kind: 'route', target: '/featured-treatments/growth'},
      ],
    },
    {_key: 'nav-team', label: '醫師團隊', kind: 'route', target: '/team'},
    {_key: 'nav-cases', label: '真實見證', kind: 'route', target: '/cases'},
    {_key: 'nav-health', label: '衛教資訊', kind: 'route', target: '/health-education'},
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
      _key: 'footer-about',
      title: '關於艾苜',
      links: [
        {_key: 'footer-about-intro', label: '診所介紹', kind: 'route', target: '/about'},
        {_key: 'footer-about-philosophy', label: '醫療理念', kind: 'scroll', target: 'why-choose'},
        {_key: 'footer-about-team', label: '醫師團隊', kind: 'route', target: '/team'},
        {_key: 'footer-about-contact', label: '聯絡我們', kind: 'scroll', target: 'location'},
      ],
    },
    {
      _key: 'footer-services',
      title: '醫療服務',
      links: [
        {_key: 'footer-service-1', label: '內科調理', kind: 'scroll', target: 'services'},
        {_key: 'footer-service-2', label: '婦科治療', kind: 'scroll', target: 'services'},
        {_key: 'footer-service-3', label: '兒科調理', kind: 'scroll', target: 'services'},
        {_key: 'footer-service-4', label: '美顏針灸', kind: 'scroll', target: 'services'},
      ],
    },
  ],
  clinicInfoTitle: '診所資訊',
  address: '704臺南市北區北安路一段239號',
  phone: '06 252 0699',
  email: 'amulettecmc@gmail.com',
  socialLinks: [
    {_key: 'social-instagram', platform: 'Instagram', icon: 'ri-instagram-line', url: 'https://www.instagram.com'},
    {_key: 'social-facebook', platform: 'Facebook', icon: 'ri-facebook-fill', url: 'https://www.facebook.com'},
  ],
  locationSection: {
    title: '診所據點',
    subtitle: '歡迎蒞臨艾苜中醫診所，我們期待為您服務',
    clinicName: '艾苜中醫診所',
    clinicDescription: '位於台南市北區，交通便利，環境舒適溫馨',
    hours: '週一至週六 09:00–21:00\n週日公休',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=23.012694,120.200711',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234567890123!2d120.200711!3d23.012694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890123',
    image: {
      url: 'https://readdy.ai/api/search-image?query=Modern%20traditional%20Chinese%20medicine%20clinic%20exterior%20and%20interior%2C%20warm%20welcoming%20entrance%2C%20professional%20medical%20facility%20with%20traditional%20elements%2C%20clean%20and%20bright%20environment%20in%20Taiwan&width=600&height=400&seq=clinic-location-001&orientation=landscape',
      alt: '艾苜中醫診所外觀',
    },
  },
  copyright: '© 2025 艾苜中醫診所. All rights reserved.',
  builderLink: {
    label: 'Website Builder',
    kind: 'external',
    target: '',
  },
  floatingLineButton: {
    enabled: true,
    ariaLabel: 'Line客服',
    link: {
      label: 'LINE',
      kind: 'external',
      target: 'https://lin.ee/EeONEJc',
    },
  },
}
