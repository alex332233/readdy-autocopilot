import type {
  FeaturedTreatmentCardContent,
  FeaturedTreatmentDetailContent,
  FeaturedTreatmentPageContent,
  FeaturedTreatmentSection,
} from '../types';

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
      title: '御顏・緊緻',
      englishTitle: 'Facial Rejuvenation',
      icon: 'ri-sparkling-line',
      color: '#cd9651',
      treatmentTitle: '專業臉部美容療程',
      description: '結合傳統中醫與現代美容技術，針對臉部肌膚進行深層調理，改善膚質、緊緻輪廓，讓您重現青春光采。',
      tags: ['美顏針灸', '緊緻拉提', '膚質改善'],
      detailSlug: 'facial',
    },
    {
      title: '登峰・轉骨',
      englishTitle: 'Growth Enhancement',
      icon: 'ri-line-chart-line',
      color: '#8b7355',
      treatmentTitle: '青少年成長發育調理',
      description: '把握黃金成長期，透過中醫調理促進骨骼發育、增強體質，為孩子的健康成長奠定良好基礎。',
      tags: ['轉骨調理', '體質強化', '成長促進'],
      detailSlug: 'growth',
    },
    {
      title: '調經・助孕',
      englishTitle: 'Fertility Support',
      icon: 'ri-heart-pulse-line',
      color: '#d4a574',
      treatmentTitle: '婦科調理與助孕療程',
      description: '針對月經不調、備孕需求提供專業調理，平衡內分泌，提升受孕機率。',
      tags: ['月經調理', '助孕調理', '內分泌平衡'],
      detailSlug: 'fertility',
    },
    {
      title: '減重・塑身',
      englishTitle: 'Weight Management',
      icon: 'ri-scales-3-line',
      color: '#b8956a',
      treatmentTitle: '健康減重與體態雕塑',
      description: '透過中醫調理配合現代技術，健康減重、雕塑體態，打造理想身形。',
      tags: ['健康減重', '體態雕塑', '代謝調理'],
      detailSlug: 'weight',
    },
    {
      title: '過敏・免疫',
      englishTitle: 'Allergy & Immunity',
      icon: 'ri-shield-cross-line',
      color: '#9d8b6f',
      treatmentTitle: '過敏體質調理',
      description: '改善過敏症狀，增強免疫系統，從根本調理體質，減少過敏發作。',
      tags: ['過敏調理', '免疫提升', '體質改善'],
      detailSlug: 'allergy',
    },
    {
      title: '疼痛・復健',
      englishTitle: 'Pain Management',
      icon: 'ri-hand-heart-line',
      color: '#a89176',
      treatmentTitle: '疼痛管理與復健治療',
      description: '針對各類疼痛問題提供專業治療，加速復健進程，恢復身體機能。',
      tags: ['疼痛緩解', '復健治療', '功能恢復'],
      detailSlug: 'pain',
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
  description = '若您想先了解是否適合此療程，歡迎先預約諮詢。',
): FeaturedTreatmentDetailContent => ({
  title,
  slug,
  subtitle: '內容待設計定稿後補充',
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
    title: '御顏・緊緻',
    slug: 'facial',
    subtitle: '由內而外的無創微雕',
    themeColor: '#cd9651',
    sections: facialSections,
    disclaimer: '【艾苜中醫溫馨提醒】本網站所提及之療程效能、預期結果及恢復期，將因個人體質、年齡與生活作息而有所差異。任何醫療處置均有其潛在風險（如體質敏感者可能產生局部微小瘀青等），實際治療計畫需由本診所專業中醫師親自診斷、評估後方可執行。',
    cta: sharedCta,
  },
  growth: {
    title: '登峰・轉骨',
    slug: 'growth',
    subtitle: '科學中醫的循證轉骨',
    themeColor: '#a67c52',
    sections: growthSections,
    disclaimer: '【艾苜中醫溫馨提醒】本網站所提及之生長發育調理、體質改善等療程效能與進度，將因每位孩童的個人體質、年齡、骨齡發展及日常作息而有所差異。任何醫療處置均需視個人情況調整，實際的治療計畫（含雷射針灸與客製方劑之頻率與劑量），必須由本診所專業中醫師親自看診、評估相關數據後方可制定並執行。',
    cta: sharedCta,
  },
  fertility: createPlaceholderDetail('調經・助孕', 'fertility', '#d4a574'),
  weight: createPlaceholderDetail('減重・塑身', 'weight', '#b8956a'),
  allergy: createPlaceholderDetail('過敏・免疫', 'allergy', '#9d8b6f'),
  pain: createPlaceholderDetail('疼痛・復健', 'pain', '#a89176'),
};
