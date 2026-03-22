import type { AboutPageContent } from '../types';

export const defaultAboutPageContent: AboutPageContent = {
  title: '關於艾苜',
  summary: '艾苜中醫的品牌起源、理念、核心價值與分院資訊。',
  originStory: {
    introQuote: '" 源於護身符的初心，守護家的靈魂 "',
    scrollLabel: 'Scroll',
    blocks: [
      {
        layout: 'imageText',
        heading: '「艾苜」這個名字',
        subheading: '源自法文 "Amulette"（護身符）的諧音',
        paragraphs: [
          '這不僅是一個代號，更是一份溫柔的承諾——我們期許自己不只是生病後的維修站，而是能在疾病發生之前，就先為您擋下風雨，實踐中醫「治未病」的最高智慧。',
          '這份守護的初心，建構了我們對健康的獨特觀點。我們發現，無論是中醫傳承千年的「陰平陽秘」，還是現代醫學所追求的生理恆定，真理其實只有一個：健康並非追求極端的強壯，而是身心的「動態平衡」。因此，艾苜致力於融合古老的調理智慧與現代的科學視野，不偏廢任一方，只為了幫現代人找回這份失落的穩定。',
        ],
        primaryImage: {
          url: 'https://readdy.ai/api/search-image?query=Elegant%20flat%20lay%20composition%20on%20aged%20linen%20fabric%20featuring%20fresh%20mugwort%20artemisia%20branches%20tied%20with%20natural%20twine%20alongside%20white%20porcelain%20tea%20bowl%20dried%20chrysanthemum%20petals%20rose%20buds%20wolfberries%20and%20thin%20gold%20acupuncture%20needles%20arranged%20with%20refined%20minimalist%20aesthetic%20soft%20side%20lighting%20warm%20ivory%20cream%20and%20pale%20sage%20tones%20no%20people%20traditional%20Chinese%20herbal%20medicine%20feminine%20healing%20luxury%20wellness%20brand%20photography&width=800&height=1067&seq=origin-story-mugwort-flatlay-brand-new-v9&orientation=portrait',
          alt: '艾苜命名由來',
        },
      },
      {
        layout: 'textImage',
        introText: '而在這份平衡的哲學背後\n我們看見了最需要被承接的身影',
        heading: '我們深知，20到50歲的女性\n往往是家庭中最堅韌的支柱',
        paragraphs: ['從女孩蛻變為母親，妳總是默默承受著生活的重量，成為先生的後盾、孩子的港灣，卻常在忙碌中忘了照顧自己。'],
        primaryImage: {
          url: 'https://readdy.ai/api/search-image?query=Graceful%20Asian%20woman%20in%20her%20thirties%20sitting%20peacefully%20by%20a%20sunlit%20window%20in%20a%20cozy%20home%20interior%20holding%20a%20warm%20ceramic%20tea%20cup%20wearing%20soft%20linen%20clothing%20surrounded%20by%20potted%20green%20plants%20wooden%20shelves%20with%20books%20and%20dried%20flowers%20gentle%20morning%20light%20casting%20warm%20golden%20shadows%20serene%20domestic%20atmosphere%20calm%20and%20balanced%20lifestyle%20feminine%20wellness%20concept%20warm%20cream%20and%20sage%20tones&width=800&height=600&seq=origin-story-modern-woman-lifestyle-brand-new-2025&orientation=landscape',
          alt: '現代女性的生命歷程',
        },
      },
      {
        layout: 'splitImagesText',
        introText: '這就是為什麼\n艾苜選擇以婦兒科的細膩為起點',
        paragraphs: [
          '我們希望先溫柔地接住辛苦的妳，\n幫妳找回身心的平衡；再以妳為中心，\n將這份專業的醫療守護，\n延伸至妳最珍視的家人。',
        ],
        primaryImage: {
          url: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20herbal%20treatment%20setup%20elegant%20white%20porcelain%20bowls%20filled%20with%20dried%20herbs%20moxa%20sticks%20acupuncture%20needles%20arranged%20on%20aged%20wooden%20tray%20with%20soft%20linen%20cloth%20warm%20candlelight%20glow%20muted%20earth%20tones%20cream%20ivory%20sage%20green%20refined%20luxury%20TCM%20wellness%20clinic%20feminine%20healing%20aesthetic%20no%20people%20flat%20lay&width=800&height=600&seq=origin-bottom-left-tcm-herbs-2025-v1&orientation=landscape',
          alt: '婦兒科診療',
        },
        secondaryImage: {
          url: 'https://readdy.ai/api/search-image?query=Serene%20Asian%20mother%20in%20soft%20linen%20robe%20sitting%20cross%20legged%20on%20bed%20gently%20cradling%20sleeping%20infant%20wrapped%20in%20cream%20muslin%20cloth%20warm%20diffused%20morning%20light%20streaming%20through%20sheer%20curtains%20cozy%20minimalist%20bedroom%20wooden%20furniture%20potted%20plant%20nearby%20intimate%20tender%20family%20moment%20warm%20ivory%20and%20blush%20tones%20lifestyle%20photography&width=800&height=600&seq=origin-bottom-right-mother-infant-2025-v1&orientation=landscape',
          alt: '家庭守護',
        },
      },
      {
        layout: 'logoText',
        paragraphs: [
          '因為我們深信：妳好，家就好。',
          '艾苜中醫，願做您與家人的健康護身符\n在生活的縫隙中，築起最溫柔的防線。',
        ],
        primaryImage: {
          url: 'https://static.readdy.ai/image/8d6cf5771052b01e9700d88a6623b6b6/949f28e475de5dd6f62cc683c4a67874.png',
          alt: '艾苜中醫 LOGO',
        },
      },
    ],
  },
  philosophyTitle: '艾與苜：剛柔並濟的醫學智慧',
  philosophyCards: [
    {
      number: '01',
      icon: 'ri-shield-check-line',
      title: 'Amulette 般的守護',
      description: '以「護身符」為名，落實「治未病」哲學。在亞健康階段即介入調理，為身體築起第一道防線。',
    },
    {
      number: '02',
      icon: 'ri-scales-3-line',
      title: '理性與感性的平衡',
      description: '融合中醫陰陽智慧與現代醫學觀點，不談玄學，只專注於幫身體找回「動態平衡」。',
    },
    {
      number: '03',
      icon: 'ri-heart-line',
      title: '妳是家庭的核心',
      description: '專注於 20-50 歲女性的生命歷程。我們先照顧好身為「家庭支柱」的妳，讓妳有餘力去愛妳所愛的人。',
    },
    {
      number: '04',
      icon: 'ri-group-line',
      title: '全家人的醫療團隊',
      description: '以婦兒科的細膩為起點，延伸至結構、內科與全人照護，提供「從女生到全家」的完整健康對策。',
    },
  ],
  coreValues: [
    {
      number: '01',
      title: '御守哲學｜預防醫學的先行者',
      description: '重新定義醫病關係，艾苜不只在生病時介入，更致力於在日常中建立隱形守護網，以精準調理預防身體磨損。',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20acupuncture%20needles%20being%20carefully%20placed%20on%20a%20patient%20back%20by%20skilled%20practitioner%20hands%20close%20up%20macro%20photography%20warm%20golden%20candlelight%20glow%20ancient%20healing%20ritual%20earthy%20amber%20tones%20professional%20clinical%20setting%20serene%20protective%20atmosphere%20wooden%20treatment%20table&width=800&height=600&seq=corevalue-acupuncture-refresh-01&orientation=landscape',
        alt: '御守哲學',
      },
    },
    {
      number: '02',
      title: '艾苜協奏｜醫食同源的雙重療癒',
      description: '完美平衡「醫療治療」與「生活養護」。結合「艾」的醫療溫煦（古法針灸與漢方）與「苜」的食療生機（現代營養學與體質調理），喚醒身體自癒力。',
      image: {
        url: 'https://public.readdy.ai/ai/img_res/edited_77f9a24d194451eb56ad962aedf15bef_24fac78e.jpg',
        alt: '醫食同源',
      },
    },
    {
      number: '03',
      title: '科技中醫｜無痛光能修復技術',
      description: '引進低能量雷射針灸，提供無痛、無創的治療體驗，將尖端科技與傳統醫學完美結合，特別適合兒童與懼針患者。',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Modern%20medical%20laser%20therapy%20device%20emitting%20soft%20red%20low%20level%20light%20on%20patient%20skin%20in%20clean%20bright%20clinical%20room%20professional%20healthcare%20equipment%20stainless%20steel%20and%20white%20surfaces%20gentle%20blue%20and%20white%20ambient%20lighting%20advanced%20technology%20meets%20traditional%20healing%20concept%20minimalist%20medical%20interior&width=800&height=600&seq=corevalue-laser-tech-refresh-03&orientation=landscape',
        alt: '科技中醫',
      },
    },
    {
      number: '04',
      title: '專屬定製｜全生命週期的守護',
      description: '從初經到熟齡，從備孕到產後，乃至於孩子的成長轉骨，提供精準且具備溫度的客製化中醫調理方案。',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Three%20generations%20of%20Asian%20women%20grandmother%20mother%20and%20young%20daughter%20sitting%20together%20in%20sunlit%20garden%20laughing%20and%20holding%20hands%20cherry%20blossom%20petals%20falling%20around%20them%20soft%20golden%20afternoon%20light%20shallow%20depth%20of%20field%20warm%20cream%20and%20blush%20tones%20joyful%20multigenerational%20family%20bond%20lifestyle%20photography&width=800&height=600&seq=corevalue-generations-refresh-04&orientation=landscape',
        alt: '全生命週期守護',
      },
    },
  ],
  branchesTitle: '診所據點',
  branchesSubtitle: '艾苜中醫在台南多處設有診所，就近為您提供專業中醫服務',
  branches: [
    {
      name: '艾苜中醫 · 北區院',
      tag: '總院',
      address: '704臺南市北區北安路一段239號',
      phone: '06 252 0699',
      hours: '週一至週六 09:00–21:00\n週日公休',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8234567890123!2d120.200711!3d23.012694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890123',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=23.012694,120.200711',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Modern%20traditional%20Chinese%20medicine%20clinic%20exterior%20in%20Taiwan%2C%20warm%20golden%20signage%2C%20clean%20professional%20entrance%20with%20plants%2C%20bright%20daytime%2C%20minimalist%20design&width=480&height=300&seq=branch-001&orientation=landscape',
        alt: '艾苜中醫 · 北區院',
      },
    },
    {
      name: '艾苜中醫 · 東區院',
      tag: '分院',
      address: '701臺南市東區東門路二段156號',
      phone: '06 235 8899',
      hours: '週一至週六 09:00–21:00\n週日公休',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.218!3d22.993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890124',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=22.993,120.218',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20clinic%20storefront%20in%20Taiwan%20city%20street%2C%20elegant%20wooden%20sign%2C%20warm%20interior%20lighting%20visible%20through%20glass%2C%20evening%20atmosphere%2C%20professional%20medical%20clinic&width=480&height=300&seq=branch-002&orientation=landscape',
        alt: '艾苜中醫 · 東區院',
      },
    },
    {
      name: '艾苜中醫 · 永康院',
      tag: '分院',
      address: '710臺南市永康區中山南路88號',
      phone: '06 312 4455',
      hours: '週一至週六 09:00–21:00\n週日公休',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.232!3d23.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890125',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=23.035,120.232',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Chinese%20medicine%20clinic%20in%20suburban%20Taiwan%2C%20modern%20building%20with%20traditional%20elements%2C%20green%20plants%20at%20entrance%2C%20clean%20white%20facade%20with%20gold%20accents%2C%20daytime%20photo&width=480&height=300&seq=branch-003&orientation=landscape',
        alt: '艾苜中醫 · 永康院',
      },
    },
    {
      name: '艾苜中醫 · 仁德院',
      tag: '分院',
      address: '717臺南市仁德區中正路三段320號',
      phone: '06 266 7788',
      hours: '週一至週六 09:00–21:00\n週日公休',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d120.178!3d22.958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ1LjciTiAxMjDCsDEyJzAyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1234567890126',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=22.958,120.178',
      image: {
        url: 'https://readdy.ai/api/search-image?query=New%20traditional%20Chinese%20medicine%20clinic%20in%20Taiwan%20residential%20area%2C%20bright%20modern%20exterior%2C%20warm%20welcoming%20entrance%20with%20wooden%20elements%2C%20natural%20light%2C%20professional%20healthcare%20facility&width=480&height=300&seq=branch-004&orientation=landscape',
        alt: '艾苜中醫 · 仁德院',
      },
    },
  ],
};
