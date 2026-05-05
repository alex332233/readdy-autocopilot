import type {
  FeaturedTreatmentCardContent,
  FeaturedTreatmentDetailContent,
  FeaturedTreatmentPageContent,
  FeaturedTreatmentSection,
} from '../types';
import {
  bodyCases,
  decoctionCases,
  eyeCases,
  laserCases,
} from '../../pages/featured-treatments/components/specializedDetailContent';

const sharedCta = {
  title: '艾苜中醫，您的健康護身符',
  description: '讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。',
  buttonText: '立即預約初診',
};

export const defaultFeaturedTreatmentsPageContent: FeaturedTreatmentPageContent = {
  title: '特色療程',
  heroTitle: '特色療程',
  heroDescription: '結合中醫專業與個人化調理，為不同需求提供溫和且具方向性的療程方案。',
  cards: [
    {
      treatmentKey: 'facial',
      title: '御顏・緊緻',
      englishTitle: 'Facial Rejuvenation',
      icon: 'ri-sparkling-line',
      color: '#c8884a',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Elegant%20close%20up%20of%20a%20beautiful%20Asian%20woman%20glowing%20radiant%20skin%20soft%20warm%20golden%20light%20cream%20ivory%20background%20subtle%20botanical%20herbs%20nearby%20serene%20beauty%20ritual%20spa%20atmosphere%20minimal%20luxurious%20tranquil%20wellness%20aesthetic%20smooth%20porcelain%20complexion&width=600&height=780&seq=feat_facial_hero_01&orientation=portrait',
        alt: '御顏・緊緻',
      },
      treatmentTitle: '美顏針',
      description: '以針代刀的溫柔塑顏術。這不是侵入性的手術，而是喚醒肌膚底層膠原蛋白的藝術。美顏針透過極細微的針具刺激臉部筋膜層 (SMAS)，針對細紋、法令紋、臉部下垂與大小臉進行精密微雕。',
      tags: ['日韓美顏針', '中藥調理'],
      detailSlug: 'facial',
    },
    {
      treatmentKey: 'growth',
      title: '登峰・轉骨',
      englishTitle: 'Growth Enhancement',
      icon: 'ri-line-chart-line',
      color: '#cd9651',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Tiny%20green%20bamboo%20shoots%20sprouting%20upward%20strong%20sunlight%20filtering%20through%20soft%20misty%20morning%20air%20sage%20mint%20and%20warm%20earth%20tones%20clean%20minimal%20background%20growth%20vitality%20youth%20energy%20nature%20healing%20botanical%20wellness%20serene%20peaceful&width=600&height=780&seq=feat_growth_hero_01&orientation=portrait',
        alt: '登峰・轉骨',
      },
      treatmentTitle: '兒少成長',
      description: '把握一生一次的黃金生長窗，許孩子一個自信的高度。我們的轉骨計畫結合了無痛雷射針灸與客製化轉骨方，針對生長板尚未閉合的孩童進行衝刺調理。',
      tags: ['過敏體質', '性早熟', '轉骨增高'],
      detailSlug: 'growth',
    },
    {
      treatmentKey: 'body',
      title: '輕盈・體雕',
      englishTitle: 'Body Sculpting',
      icon: 'ri-scales-3-line',
      color: '#b87d3a',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Serene%20Asian%20woman%20in%20soft%20athleisure%20silhouette%20standing%20near%20window%20warm%20morning%20backlight%20cream%20and%20ivory%20linen%20tones%20gentle%20shadow%20play%20on%20smooth%20skin%20healthy%20body%20wellness%20balance%20minimal%20calm%20lifestyle%20photography%20flowing%20fabric&width=600&height=780&seq=feat_body_hero_01&orientation=portrait',
        alt: '輕盈・體雕',
      },
      treatmentTitle: '體態管理',
      description: '重塑身體的代謝記憶，找回輕盈的自己。我們避開極端的節食，採用埋線減重技術，如同在體內安放了24小時運作的代謝教練。',
      tags: ['中藥調理', '體雕針灸'],
      detailSlug: 'body',
    },
    {
      treatmentKey: 'eye',
      title: '明眸・亮視',
      englishTitle: 'Eye Care',
      icon: 'ri-eye-line',
      color: '#d4a25a',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Extreme%20close%20up%20of%20a%20beautiful%20Asian%20eye%20with%20crystal%20clear%20iris%20and%20glowing%20dewy%20skin%20soft%20natural%20light%20soft%20sage%20green%20and%20ivory%20tones%20clear%20vision%20eye%20health%20wellness%20serene%20healing%20beauty%20ritual%20calm%20peaceful%20atmosphere&width=600&height=780&seq=feat_eye_hero_01&orientation=portrait',
        alt: '明眸・亮視',
      },
      treatmentTitle: '精彩視界',
      description: '為靈魂之窗點入一滴甘露，重現清澈神采。這是專為數位時代設計的護眼儀式。針對3C重度使用者常見的眼睛乾澀、眼壓過高、視力模糊與眼睛疲勞，我們採用特殊的「眼針」療法。',
      tags: ['中藥調理', '眼針'],
      detailSlug: 'eye',
    },
    {
      treatmentKey: 'laser',
      title: '光能・修復',
      englishTitle: 'Laser Acupuncture',
      icon: 'ri-flashlight-line',
      color: '#5a8a6a',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Soft%20warm%20laser%20light%20beams%20over%20smooth%20skin%20surface%20golden%20amber%20light%20rays%20healing%20energy%20flow%20minimal%20clean%20background%20warm%20honey%20tones%20futuristic%20yet%20natural%20medical%20wellness%20atmosphere%20serene%20glow%20technology%20meets%20nature&width=600&height=780&seq=feat_laser_hero_01&orientation=portrait',
        alt: '光能・修復',
      },
      treatmentTitle: '無痛雷射針灸',
      description: '純淨光能的無痛注入，喚醒細胞深層的自癒力。害怕針刺感嗎？雷射針灸是您的最佳選擇。我們利用低能量雷射光束照射穴位，達到無痛、無創的治療效果。',
      tags: ['無痛針感', '穴位精準刺激'],
      detailSlug: 'laser',
    },
    {
      treatmentKey: 'decoction',
      title: '深癒・淬鍊',
      englishTitle: 'Herbal Decoction',
      icon: 'ri-flask-line',
      color: '#4a7a5c',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20medicine%20herbal%20decoction%20simmering%20in%20clay%20pot%20gentle%20steam%20rising%20warm%20amber%20golden%20broth%20dried%20herbs%20scattered%20around%20warm%20earthy%20tones%20moody%20healing%20atmosphere%20ancient%20wisdom%20wellness%20ritual%20minimal%20elegant%20background&width=600&height=780&seq=feat_decoction_hero_01&orientation=portrait',
        alt: '深癒・淬鍊',
      },
      treatmentTitle: '全客製水煎藥',
      description: '這是一場為您量身熬製的健康淬鍊。水煎藥能打破固定藥粉比例的限制，讓醫師能更敏銳地捕捉您每一階段的細微變化，靈活調配專屬處方。',
      tags: ['高階調理', '精準醫療', '專屬處方'],
      detailSlug: 'decoction',
    },
  ],
};

const facialSections: FeaturedTreatmentSection[] = [
  {
    title: '適合對象',
    icon: 'ri-user-heart-line',
    layout: 'textOnly',
    eyebrow: '專為 25–50 歲的都會女性、上班族與忙碌媽媽量身打造',
    content:
      '當妳開始在意細紋悄悄蔓延、法令紋加深、臉部輪廓逐漸失去原本的俐落感，且伴隨氣血不足、壓力大（肝鬱）或容易疲憊（氣虛）等體質狀況。本療程特別推薦給偏好溫和親膚的保養方式，渴望透過喚醒自身肌膚活力，展現自然、柔和且專屬於妳生動美感的妳。',
  },
  {
    title: '妳的困擾，我們懂',
    icon: 'ri-heart-line',
    layout: 'textImage',
    content:
      '歲月與日常壓力，總在不知不覺中讓臉龐留下疲憊的痕跡。黯淡的膚色與逐漸下垂的輪廓線，讓妳希望能有更有效的保養方式。妳或許正在尋找比日常保養更深入、卻又比一般療程更溫和的選擇。繁忙的日程讓妳難以安排較長的修復期，妳渴望能在短暫的時間裡，以低負擔、極短修復期的方式悄悄煥然一新，找回從容與自信。',
    image: {
      url: 'https://readdy.ai/api/search-image?query=A%20serene%20and%20elegant%20portrait%20of%20an%20Asian%20woman%20in%20her%20thirties%20gently%20touching%20her%20face%20with%20both%20hands%2C%20soft%20natural%20lighting%20highlighting%20her%20smooth%20skin%20and%20peaceful%20expression%2C%20warm%20cream%20and%20soft%20beige%20tones%20creating%20a%20spa-like%20atmosphere%2C%20minimalist%20clean%20background%20with%20subtle%20botanical%20elements%2C%20professional%20beauty%20photography%20with%20shallow%20depth%20of%20field%20emphasizing%20facial%20features%20and%20natural%20radiance&width=600&height=500&seq=facial-concern-img-01&orientation=landscape',
      alt: '美顏關懷',
    },
  },
  {
    title: '艾苜的解方：由內而外的無創微雕',
    icon: 'ri-magic-line',
    layout: 'imageText',
    content:
      '「御顏・緊緻療程」完美融合了中醫經絡智慧與西方解剖學的精準。我們運用 <0.12mm 的極細軟針，深入微雕 SMAS 筋膜層，以溫和低痛感的方式順應肌膚紋理，活絡氣血、喚醒肌膚底層的澎潤彈力。',
    additionalContent:
      '療程同步搭配熱能儀器促進微循環，並輔以中藥內服調理體質。短短不到 1 小時的微創針法，表面不易留痕、不影響日常作息與上妝。我們專注於深層放鬆與視覺線條的自然上提，為妳展現緊緻俐落的輪廓線條，宛如天生自帶好氣色。',
    image: {
      url: 'https://readdy.ai/api/search-image?query=A%20professional%20and%20calming%20scene%20of%20traditional%20Chinese%20medicine%20facial%20acupuncture%20treatment%2C%20ultra-fine%20needles%20delicately%20placed%20on%20an%20Asian%20womans%20face%2C%20soft%20warm%20lighting%20in%20a%20modern%20clean%20clinic%20setting%20with%20cream%20and%20sage%20green%20tones%2C%20the%20practitioner%20wearing%20white%20coat%20with%20gentle%20hands%2C%20serene%20healing%20atmosphere%20with%20subtle%20herbal%20medicine%20jars%20in%20soft%20focus%20background%2C%20medical%20photography%20style%20with%20natural%20light&width=600&height=500&seq=facial-solution-img-02&orientation=landscape',
      alt: '美顏針療程',
    },
  },
  {
    title: '療程體驗：每一次，都是專屬的精雕細琢',
    icon: 'ri-sparkling-2-line',
    layout: 'processCards',
    content: '在艾苜，每一次的美顏，都有我們嚴謹的流程把關：',
    items: [
      {subtitle: '評估剖析｜看見根源', text: '醫師融合中西醫理，細緻檢視妳的面部筋絡結構、肌肉紋理與當下體質，精準鎖定肌膚疲態的真正原因。'},
      {subtitle: '精準策略｜量身訂製', text: '依據個人狀況規劃客製化針法與深度，結合熱能輔助與中藥調理，以最溫和的方式幫助面部肌肉達到平衡與收緊。'},
      {subtitle: '療程執行｜優雅煥新', text: '運用極細軟針搭配專業保養精華，1 小時內幫助視覺線上提、淡化細紋。療程具備極短修復期的優勢，結束後即可亮麗回歸日常。'},
      {subtitle: '追蹤鞏固｜美麗延續', text: '艾苜不僅在乎當下，更在乎長期的氣色調理。我們將提供專屬的居家保養計畫；建議透過完整 6-10 次療程(依據年齡與狀態，療程次數會有所不同)，多數患者能感受較長效的緊緻狀態，讓美麗細水長流。'},
    ],
  },
];

const growthSections: FeaturedTreatmentSection[] = [
  {
    title: '適合對象',
    icon: 'ri-user-heart-line',
    layout: 'textOnly',
    eyebrow: '專為 8–16 歲生長板開放期的青少年設計',
    content: '我們完全體會父母面對孩子身高落後、性早熟風險，或是過敏反覆（如鼻炎、異位性皮膚炎）時的焦慮。在艾苜，我們不只是調理體質，更是以實際數據為本，與您一起溫柔且精準地把握孩子不可逆的黃金成長窗。',
  },
  {
    title: '不只是身高，更是成長路上的卡關',
    icon: 'ri-question-line',
    layout: 'textImage',
    image: {
      url: 'https://readdy.ai/api/search-image?query=A%20warm%20and%20gentle%20scene%20of%20a%20young%20Asian%20child%20standing%20tall%20and%20smiling%20confidently%20next%20to%20a%20height%20measurement%20chart%20on%20a%20soft%20cream%20wall%2C%20natural%20warm%20sunlight%20streaming%20through%20a%20window%2C%20cozy%20and%20nurturing%20atmosphere%2C%20soft%20bokeh%20background%20with%20light%20beige%20and%20warm%20ivory%20tones%2C%20the%20child%20wearing%20casual%20comfortable%20clothing%2C%20hopeful%20and%20joyful%20expression%2C%20minimalist%20clean%20background%2C%20professional%20lifestyle%20photography%20style&width=600&height=500&seq=growth-concern-img-01&orientation=landscape',
      alt: '兒少成長關懷',
    },
    items: [
      {subtitle: '數據焦慮', text: '孩子總是被排在班上第一排？擔心受限於遺傳，或不小心錯過了長高期。'},
      {subtitle: '消化吸收', text: '太瘦怕營養不夠，太胖又怕引發早熟。體重過輕與過重都不利於長高，我們需從源頭改善腸胃吸收。'},
      {subtitle: '過敏干擾', text: '頻繁過敏導致睡眠品質低落，身體長期的「慢性發炎」，會把原本該用來生長的能量過度消耗。'},
      {subtitle: '早熟隱憂', text: '擔心坊間傳統補品成分不明、盲目進補，反而弄巧成拙加速骨齡閉合。'},
      {subtitle: '課業壓力', text: '成長過程中的課業壓力，往往會放大青春期的情緒困擾，讓全家身心俱疲。'},
    ],
  },
  {
    title: '艾苜的解方：科學中醫的「循證轉骨」',
    icon: 'ri-heart-add-line',
    layout: 'imageText',
    content: '我們拒絕盲目大補，主張「先調理，再衝刺」：',
    image: {
      url: 'https://readdy.ai/api/search-image?query=A%20calm%20and%20professional%20traditional%20Chinese%20medicine%20clinic%20interior%20with%20warm%20ambient%20lighting%2C%20a%20wooden%20consultation%20desk%20with%20herbal%20medicine%20jars%20arranged%20neatly%2C%20a%20gentle%20doctor%20in%20white%20coat%20sitting%20across%20from%20a%20young%20patient%20and%20parent%2C%20soft%20beige%20and%20warm%20wood%20tones%20throughout%20the%20room%2C%20potted%20green%20plants%20adding%20life%2C%20serene%20healing%20environment%2C%20architectural%20interior%20photography%20with%20natural%20light&width=600&height=500&seq=growth-solution-img-02&orientation=landscape',
      alt: '艾苜轉骨解方',
    },
    items: [
      {subtitle: '非侵入性雷射針灸', text: '以低能量雷射溫和刺激生長穴位，過程低痛感，降低孩子對傳統針灸的恐懼，讓調理過程更安心。'},
      {subtitle: '數據監控', text: '搭配兒科定期回診追蹤「骨齡 X 光」，用客觀數據精準掌握生長進度，不憑感覺瞎子摸象。'},
      {subtitle: '客製辨證配方', text: '根據孩子的真實體質，精準調配兼顧「疏肝解壓、健脾養胃與輔助生長」的專屬科學中藥處方。'},
      {subtitle: '整合衛教', text: '針對過敏控制、飲食、睡眠與運動給予實質建議，讓孩子像大樹一樣穩健紮根。'},
    ],
  },
  {
    title: '體質調理帶來的正向循環',
    icon: 'ri-refresh-line',
    layout: 'cardsCases',
    items: [
      {subtitle: '過敏體質的蛻變', text: '臨床上常見受鼻炎困擾的孩子，在調理後睡眠品質獲得改善。當身體不再將能量過度消耗於對抗慢性發炎，便能將營養保留給生長所需。'},
      {subtitle: '早熟隱憂的平衡', text: '透過定期的骨齡監控與體質調整，協助許多家長在關鍵時期為孩子平衡體質、輔助延緩早熟趨勢，爭取更多穩健成長的時間。'},
    ],
    cases: [
      {label: '案例 A', text: '飽受鼻炎困擾的國小男孩，經過 3 個月調理，不僅睡眠品質大幅改善，身高也穩步抽高了 6 公分。'},
      {label: '案例 B', text: '透過定期的骨齡監控與體質調整，成功為女孩延緩了性早熟趨勢，讓她有足夠的時間追上同儕高度。'},
    ],
  },
  {
    title: '治療流程：四門守護，層層把關',
    icon: 'ri-door-open-line',
    layout: 'processCards',
    items: [
      {subtitle: '見門｜科學評估', text: '初診透過中醫診斷與骨齡數據交叉比對，精準揪出讓孩子長不高的核心根因。'},
      {subtitle: '敲門｜精準辨證', text: '優先排除過敏或早熟等干擾因子，為孩子擬定專屬的「成長作戰地圖」。'},
      {subtitle: '開門｜溫和治療', text: '無痛雷射針灸與客製方劑雙管齊下，每週追蹤，確保身體隨時處於最佳的吸收狀態。'},
      {subtitle: '家門｜永續保養', text: '療程後的居家衛教指導，將好的健康習慣帶回家庭，讓成長的高度持久且穩定。'},
    ],
  },
];

const createPlaceholderDetail = (
  title: string,
  slug: string,
  themeColor: string,
  subtitle: string,
  description = '若您想先了解是否適合此療程，歡迎先預約諮詢。',
): FeaturedTreatmentDetailContent => ({
  title,
  slug,
  subtitle,
  themeColor,
  sections: [{title: '內容規劃中', layout: 'textOnly', content: '此療程詳細內容將於設計與文案定稿後補上。'}],
  disclaimer: '',
  cta: {
    title: '艾苜中醫，您的健康護身符',
    description,
    buttonText: '立即預約初診',
  },
});

export const defaultFeaturedTreatmentDetails: Record<string, FeaturedTreatmentDetailContent> = {
  facial: {
    treatmentKey: 'facial',
    title: '御顏・緊緻',
    slug: 'facial',
    subtitle: '由內而外的無創微雕',
    themeColor: '#cd9651',
    sections: facialSections,
    disclaimer: '【艾苜中醫溫馨提醒】本網站所提及之療程效能、預期結果及恢復期，將因個人體質、年齡與生活作息而有所差異。任何醫療處置均有其潛在風險（如體質敏感者可能產生局部微小瘀青等），實際治療計畫需由本診所專業中醫師親自診斷、評估後方可執行。',
    cta: sharedCta,
  },
  growth: {
    treatmentKey: 'growth',
    title: '登峰・轉骨',
    slug: 'growth',
    subtitle: '科學中醫的循證轉骨',
    themeColor: '#a67c52',
    sections: growthSections,
    disclaimer: '【艾苜中醫溫馨提醒】本網站所提及之生長發育調理、體質改善等療程效能與進度，將因每位孩童的個人體質、年齡、骨齡發展及日常作息而有所差異。任何醫療處置均需視個人情況調整，實際的治療計畫（含雷射針灸與客製方劑之頻率與劑量），必須由本診所專業中醫師親自看診、評估相關數據後方可制定並執行。',
    cta: sharedCta,
  },
  body: {...createPlaceholderDetail('輕盈・體雕', 'body', '#b8956a', '外埋線體雕・內中藥調理，重塑代謝記憶', '若您想先了解體態管理與埋線體雕是否適合自己，歡迎先預約諮詢。'), treatmentKey: 'body'},
  eye: {...createPlaceholderDetail('明眸・亮視', 'eye', '#b8956a', '眼針調理・中藥滋養，重現晶亮神采', '若您想先了解眼針與護眼調理是否適合自己，歡迎先預約諮詢。'), treatmentKey: 'eye'},
  laser: {...createPlaceholderDetail('光能・修復', 'laser', '#5a7a6e', '無痛雷射針灸・溫柔喚醒，讓每個年齡層都能安心調理', '若您想先了解無痛雷射針灸是否適合自己，歡迎先預約諮詢。'), treatmentKey: 'laser'},
  decoction: {...createPlaceholderDetail('深癒・淬鍊', 'decoction', '#5a7a6e', '全客製水煎藥・深層淬鍊，為每一個生命關鍵期精準守護', '若您想先了解全客製水煎藥是否適合自己，歡迎先預約諮詢。'), treatmentKey: 'decoction'},
};

defaultFeaturedTreatmentDetails.body.primaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20thoughtful%20Asian%20woman%20in%20her%20thirties%20looking%20at%20herself%20in%20a%20mirror%20with%20a%20gentle%20concerned%20expression%2C%20wearing%20casual%20comfortable%20clothing%20in%20soft%20morning%20light%2C%20a%20clean%20minimal%20bedroom%20setting%20with%20warm%20ivory%20and%20soft%20beige%20tones%2C%20subtle%20natural%20light%20casting%20soft%20shadows%2C%20the%20scene%20evokes%20quiet%20determination%20and%20self-reflection%20rather%20than%20distress%2C%20peaceful%20mood%2C%20professional%20lifestyle%20photography%20with%20shallow%20depth%20of%20field%2C%20warm%20neutral%20background%20tones&width=600&height=500&seq=body-concern-img-01&orientation=landscape',
  alt: '體態困擾',
};
defaultFeaturedTreatmentDetails.body.secondaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20serene%20and%20modern%20traditional%20Chinese%20medicine%20clinic%20interior%2C%20a%20doctor%20in%20white%20coat%20performing%20acupuncture%20treatment%20on%20a%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20warm%20soft%20lighting%20with%20earthy%20beige%20and%20warm%20wood%20tones%2C%20neatly%20arranged%20herbal%20medicine%20jars%20in%20the%20background%2C%20potted%20green%20plants%20adding%20calm%20vitality%2C%20the%20atmosphere%20is%20professional%20yet%20gentle%20and%20healing%2C%20medical%20lifestyle%20photography%20with%20natural%20window%20light%20streaming%20in&width=600&height=500&seq=body-solution-img-02&orientation=landscape',
  alt: '艾苜體雕解方',
};
defaultFeaturedTreatmentDetails.body.featuredCases = bodyCases.map((item) => ({
  label: item.label,
  name: item.name,
  text: item.content,
  link: item.link,
  image: { url: item.image, alt: item.name },
}));
defaultFeaturedTreatmentDetails.eye.primaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20tired%20Asian%20office%20worker%20in%20his%20late%20twenties%20sitting%20at%20a%20desk%20in%20a%20modern%20bright%20office%2C%20rubbing%20his%20eyes%20with%20both%20hands%2C%20multiple%20computer%20monitors%20glowing%20in%20the%20background%20showing%20code%20and%20spreadsheets%2C%20a%20clean%20minimal%20workspace%20with%20soft%20warm%20white%20and%20light%20gray%20tones%2C%20the%20scene%20conveys%20digital%20eye%20strain%20and%20fatigue%20from%20prolonged%20screen%20use%2C%20professional%20lifestyle%20photography%20with%20shallow%20depth%20of%20field%2C%20natural%20morning%20light%20from%20the%20side%20windows&width=600&height=500&seq=eye-concern-img-01&orientation=landscape',
  alt: '眼部困擾',
};
defaultFeaturedTreatmentDetails.eye.secondaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20serene%20traditional%20Chinese%20medicine%20treatment%20room%2C%20a%20skilled%20doctor%20in%20a%20white%20coat%20gently%20performing%20eye%20acupuncture%20on%20a%20relaxed%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20extremely%20fine%20delicate%20silver%20needles%20carefully%20placed%20around%20the%20eye%20area%20on%20acupoints%2C%20soft%20warm%20natural%20window%20light%2C%20the%20background%20shows%20green%20potted%20plants%20and%20wooden%20shelving%20with%20herbal%20jars%20in%20the%20background%2C%20clean%20clinical%20yet%20warm%20atmosphere%2C%20peaceful%20healing%20medical%20photography%20with%20soft%20teal%20and%20ivory%20color%20palette&width=600&height=500&seq=eye-solution-img-02&orientation=landscape',
  alt: '艾苜眼針解方',
};
defaultFeaturedTreatmentDetails.eye.featuredCases = eyeCases.map((item) => ({
  label: item.label,
  name: item.name,
  text: item.content,
  link: item.link,
  image: { url: item.image, alt: item.name },
}));
defaultFeaturedTreatmentDetails.laser.primaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20worried%20parent%20sitting%20beside%20a%20young%20child%20in%20a%20warm%20Chinese%20medicine%20clinic%20waiting%20room%2C%20the%20child%20looking%20nervous%20and%20hesitant%20about%20the%20upcoming%20treatment%2C%20soft%20amber%20warm%20lighting%20illuminating%20the%20cozy%20interior%20space%2C%20potted%20green%20plants%20and%20wooden%20shelves%20with%20herbal%20jars%20in%20background%2C%20gentle%20calming%20environment%20with%20beige%20ivory%20and%20warm%20gold%20tones%2C%20lifestyle%20medical%20photography%20with%20a%20sense%20of%20empathy%20and%20care%2C%20shallow%20depth%20of%20field&width=600&height=500&seq=laser-concern-v2-01&orientation=landscape',
  alt: '光能修復困擾',
};
defaultFeaturedTreatmentDetails.laser.secondaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20skilled%20Chinese%20medicine%20practitioner%20gently%20holding%20a%20small%20low-level%20laser%20therapy%20device%20near%20acupuncture%20points%20on%20a%20relaxed%20child%20patient%20lying%20on%20a%20clean%20treatment%20bed%2C%20soft%20warm%20amber%20golden%20light%20effect%20emanating%20from%20the%20laser%2C%20no%20needles%20visible%2C%20peaceful%20modern%20clinical%20setting%20with%20wooden%20elements%20and%20green%20plants%2C%20the%20child%20looks%20calm%20and%20comfortable%2C%20warm%20beige%20and%20ivory%20interior%20palette%2C%20professional%20medical%20photography&width=600&height=500&seq=laser-solution-v2-02&orientation=landscape',
  alt: '光能解方',
};
defaultFeaturedTreatmentDetails.laser.featuredCases = laserCases.map((item) => ({
  label: item.label,
  name: item.name,
  text: item.content,
  link: item.link,
  image: { url: item.image, alt: item.name },
}));
defaultFeaturedTreatmentDetails.decoction.secondaryImage = {
  url: 'https://readdy.ai/api/search-image?query=A%20professional%20Chinese%20medicine%20doctor%20in%20a%20clean%20white%20coat%20carefully%20measuring%20and%20blending%20dried%20herbal%20ingredients%20at%20a%20wooden%20apothecary%20counter%2C%20vacuum-sealed%20herbal%20decoction%20pouches%20arranged%20neatly%20beside%20the%20workspace%2C%20warm%20natural%20daylight%20streaming%20through%20large%20windows%2C%20organized%20wooden%20shelving%20with%20labeled%20herbal%20jars%20in%20the%20background%2C%20the%20scene%20conveys%20precision%20craftsmanship%20and%20personalized%20care%2C%20forest%20green%20and%20warm%20earth%20tones%2C%20calm%20clinical%20aesthetic&width=600&height=500&seq=decoction-solution-v2-01&orientation=landscape',
  alt: '艾苜水煎藥解方',
};
defaultFeaturedTreatmentDetails.decoction.featuredCases = decoctionCases.map((item) => ({
  label: item.label,
  name: item.name,
  text: item.content,
  link: item.link,
  image: { url: item.image, alt: item.name },
}));
