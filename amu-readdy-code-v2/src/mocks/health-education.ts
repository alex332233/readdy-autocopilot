
export interface HealthArticle {
  id: number;
  title: string;
  category: string;
  subcategory: string;
  tags: string[];
  author: string;
  date: string;
  updatedDate: string;
  readTime: string;
  views?: number;
  summary: string;
  coverImage: string;
  content: { heading: string; text: string; image?: string }[];
  faq?: { question: string; answer: string }[];
  tips?: { title: string; content: string };
  references?: { label: string; url: string }[];
}

export const healthCategories = [
  {
    name: '內科調理',
    subcategories: ['失眠問題', '自律神經失調', '癌症術後調理', '各類雜病調理'],
  },
  {
    name: '婦科保健',
    subcategories: ['不孕調理', '產後調理', '更年期症候群'],
  },
  {
    name: '兒科專區',
    subcategories: ['小兒科轉骨發育', '注意力不足過動症', '小兒近視輔助治療'],
  },
  {
    name: '皮膚科',
    subcategories: ['青春痘', '蕁麻疹', '濕疹與汗皰疹', '乾癬'],
  },
  {
    name: '針灸科',
    subcategories: ['中風後遺症', '帕金森氏症', '顏面神經麻痺', '手術後疤痕沾黏', '各類筋骨痠痛'],
  },
  {
    name: '特色針灸、雷射針灸',
    subcategories: ['美顏針', '漢方科學減重', '雷射針灸介紹', '框內針療法', '客製化水藥與珍貴藥材'],
  },
];

export const healthEducationData: HealthArticle[] = [
  // ── 特色針灸、雷射針灸 ──
  {
    id: 101,
    title: '美顏針：讓肌膚由內而外煥發光采',
    category: '特色針灸、雷射針灸',
    subcategory: '美顏針',
    tags: ['美顏針', '抗老', '緊緻', '美容中醫', '膠原蛋白'],
    author: '李俊廷醫師',
    date: '2025-01-15',
    updatedDate: '2025-05-20',
    views: 3842,
    readTime: '5 分鐘',
    summary: '美顏針灸結合傳統針灸與現代美容醫學，透過刺激臉部穴位與肌肉，促進膠原蛋白生成、改善氣血循環，達到自然緊緻、提亮膚色的效果，無恢復期、無副作用。',
    coverImage: 'https://readdy.ai/api/search-image?query=elegant%20woman%20receiving%20facial%20acupuncture%20treatment%20in%20serene%20clinic%20warm%20golden%20light%20soft%20bokeh%20background%20minimal%20clean%20aesthetic%20beauty%20wellness%20Chinese%20medicine&width=800&height=500&seq=facial-acupuncture-cover&orientation=landscape',
    content: [
      {
        heading: '美顏針灸的原理',
        text: '美顏針灸透過在臉部特定穴位施針，刺激局部微循環與膠原蛋白新生，同時搭配全身調理穴位，從根本改善氣血狀態，讓肌膚由內而外散發健康光采。針刺產生的微小創傷會啟動皮膚自我修復機制，促進纖維母細胞增生，進而生成更多膠原蛋白與彈力蛋白。',
        image: 'https://readdy.ai/api/search-image?query=close%20up%20acupuncture%20needles%20on%20face%20skin%20collagen%20stimulation%20beauty%20treatment%20warm%20studio%20lighting%20clean%20white%20background%20minimal%20elegant&width=700&height=420&seq=facial-acupuncture-1&orientation=landscape',
      },
      {
        heading: '適合哪些人？',
        text: '適合有細紋、鬆弛、膚色暗沉、毛孔粗大、黑眼圈等困擾的人。相較於醫美療程，美顏針灸更溫和自然，無恢復期，且同時改善整體健康狀態。特別適合對醫美注射有疑慮、希望以自然方式維持年輕外貌的族群。',
      },
      {
        heading: '療程規劃與頻率',
        text: '建議初期每週 1–2 次，連續 6–10 次為一療程，之後可改為每月維持 1–2 次。每次療程約 60–90 分鐘，包含全身調理與臉部針灸。通常在第 3–4 次後即可感受到明顯改善，膚色提亮、輪廓更緊緻。',
      },
      {
        heading: '中醫整體調理的重要性',
        text: '美顏針灸不只是局部美容，更是全身氣血調理的一環。中醫認為「有諸內必形諸外」，臉部的氣色與肌膚狀態反映了內在臟腑的健康。因此，醫師會同時評估您的體質，搭配中藥調理，讓美容效果更持久、更全面。',
      },
    ],
    tips: {
      title: '療程後注意事項',
      content: '針灸後 24 小時內避免劇烈運動、桑拿、飲酒；針孔處避免沾水；部分人可能有輕微紅腫，屬正常反應，通常數小時內消退。建議療程期間保持充足睡眠、均衡飲食，效果更佳。',
    },
    references: [
      { label: '美顏針灸臨床研究', url: 'https://drctlee.wordpress.com/' },
    ],
  },
  {
    id: 102,
    title: '雷射針灸介紹：無針感的現代中醫新選擇',
    category: '特色針灸、雷射針灸',
    subcategory: '雷射針灸介紹',
    tags: ['雷射針灸', '無痛', '現代中醫', '穴位刺激'],
    author: '李俊廷醫師',
    date: '2025-02-10',
    updatedDate: '2025-05-18',
    views: 2156,
    readTime: '4 分鐘',
    summary: '雷射針灸以低能量雷射光束取代傳統金屬針，精準刺激穴位，無痛、無創、無感染風險，特別適合懼針者、兒童及老年患者，是現代中醫的創新突破。',
    coverImage: 'https://readdy.ai/api/search-image?query=modern%20laser%20acupuncture%20device%20emitting%20soft%20red%20light%20on%20skin%20acupoint%20high%20tech%20medical%20equipment%20clean%20white%20clinic%20background%20minimal%20professional&width=800&height=500&seq=laser-acupuncture-cover&orientation=landscape',
    content: [
      {
        heading: '什麼是雷射針灸？',
        text: '雷射針灸（Laser Acupuncture）是以特定波長的低能量雷射光束，照射傳統針灸穴位，透過光能刺激穴位的生物效應，達到與傳統針灸相似的治療效果。整個過程無痛、無創，不需穿刺皮膚。',
      },
      {
        heading: '雷射針灸的作用機制',
        text: '低能量雷射能促進細胞粒線體的能量代謝（ATP 生成），增強局部血液循環，調節神經傳導物質的釋放，並具有抗炎、止痛的效果。研究顯示，雷射針灸在穴位上的生物效應與傳統針刺高度相似。',
        image: 'https://readdy.ai/api/search-image?query=laser%20light%20therapy%20acupoint%20stimulation%20scientific%20diagram%20soft%20blue%20red%20light%20beams%20on%20skin%20surface%20clean%20minimal%20medical%20illustration%20background&width=700&height=420&seq=laser-acupuncture-2&orientation=landscape',
      },
      {
        heading: '適用族群與適應症',
        text: '特別適合：懼針者、兒童（小兒科疾病調理）、皮膚敏感者、凝血功能異常者。適應症包括：過敏性鼻炎、失眠、疼痛管理、兒童生長發育調理、美容保健等。',
      },
      {
        heading: '與傳統針灸的比較',
        text: '傳統針灸透過金屬針的物理刺激，「得氣感」（酸麻脹重）是療效的重要指標；雷射針灸則以光能取代，無得氣感但療效相當。兩者各有優勢，醫師會依患者狀況選擇最適合的治療方式，或兩者搭配使用。',
      },
    ],
    tips: {
      title: '治療注意事項',
      content: '雷射針灸治療時需配戴護目鏡保護眼睛；治療部位避免直視雷射光；孕婦腹部及腰骶部禁用；光敏感體質者需告知醫師。整體而言安全性極高，副作用極少。',
    },
    references: [
      { label: '雷射針灸相關研究', url: 'https://drctlee.wordpress.com/' },
    ],
  },
  {
    id: 103,
    title: '漢方科學減重：中醫如何幫助健康瘦身',
    category: '特色針灸、雷射針灸',
    subcategory: '漢方科學減重',
    tags: ['減重', '中醫減肥', '針灸', '漢方', '代謝'],
    author: '李俊廷醫師',
    date: '2025-01-28',
    updatedDate: '2025-05-15',
    views: 4521,
    readTime: '6 分鐘',
    summary: '漢方科學減重結合針灸、中藥與飲食調理，針對個人體質量身訂製，不只追求體重數字，更著重改善代謝、調整體質，讓減重效果持久不復胖。',
    coverImage: 'https://readdy.ai/api/search-image?query=healthy%20lifestyle%20Chinese%20herbal%20medicine%20weight%20management%20fresh%20vegetables%20herbs%20on%20clean%20white%20marble%20surface%20warm%20natural%20light%20minimal%20elegant%20wellness&width=800&height=500&seq=tcm-weight-cover&orientation=landscape',
    content: [
      {
        heading: '中醫對肥胖的認識',
        text: '中醫認為肥胖多與「痰濕」、「氣虛」、「肝鬱」有關。痰濕體質者代謝較慢、容易水腫；氣虛者脾胃功能弱，食物轉化為脂肪的比例高；肝鬱者因情緒壓力導致內分泌失調，容易囤積腹部脂肪。',
      },
      {
        heading: '針灸減重的機制',
        text: '耳針（耳穴貼壓）是中醫減重的特色療法，透過刺激耳部特定穴位（如飢點、神門、內分泌等），調節食慾中樞、改善代謝。體針則選取足三里、天樞、中脘等穴位，促進腸胃蠕動、改善代謝功能。',
        image: 'https://readdy.ai/api/search-image?query=ear%20acupuncture%20auricular%20therapy%20small%20seeds%20taped%20on%20ear%20close%20up%20warm%20skin%20tone%20clean%20background%20minimal%20medical%20aesthetic&width=700&height=420&seq=tcm-weight-2&orientation=landscape',
      },
      {
        heading: '中藥調理方向',
        text: '依體質選用不同方劑：痰濕型用二陳湯、防風通聖散；氣虛型用補中益氣湯；肝鬱型用逍遙散加減。中藥不含西藥成分，不會造成心悸、失眠等副作用，安全性高。',
      },
      {
        heading: '飲食與生活配合',
        text: '中醫減重強調「調整體質」而非單純節食。建議規律三餐、細嚼慢嚥、避免宵夜；多攝取溫熱食物，少吃生冷甜膩；配合每週 3–4 次有氧運動。通常 1 個月可減少 2–4 公斤，且不易復胖。',
      },
    ],
    tips: {
      title: '減重小提醒',
      content: '中醫減重是循序漸進的過程，切勿追求快速減重。過度節食會損傷脾胃，反而影響代謝。建議在醫師指導下進行，定期回診調整處方，效果更安全持久。',
    },
    references: [
      { label: '中醫減重相關資訊', url: 'https://drctlee.wordpress.com/' },
    ],
  },

  // ── 兒科專區 ──
  {
    id: 201,
    title: '小兒轉骨的中醫觀點：從腎氣到骨骼健康',
    category: '兒科專區',
    subcategory: '小兒科轉骨發育',
    tags: ['小兒轉骨', '成長發育', '骨骼健康', '中醫調理', '氣血循環', '食補養骨', '睡眠與成長', '腎氣調理', '運動與發育', '體質改善'],
    author: '李俊廷醫師',
    date: '2025-11-02',
    updatedDate: '2025-11-21',
    views: 5234,
    readTime: '7 分鐘',
    summary: '青春期是孩子生長發育的黃金期，中醫「轉骨」調理從腎氣、脾胃、氣血三個面向切入，在骨骺板尚未閉合前給予最適當的支持，幫助孩子充分發揮生長潛能，達到理想身高。',
    coverImage: 'https://readdy.ai/api/search-image?query=healthy%20child%20growing%20tall%20stretching%20arms%20up%20in%20sunlit%20park%20green%20nature%20background%20warm%20golden%20afternoon%20light%20joyful%20vitality%20clean%20minimal%20style&width=800&height=500&seq=child-growth-cover&orientation=landscape',
    content: [
      {
        heading: '什麼是「轉骨」？',
        text: '「轉骨」是中醫對青春期生長發育調理的俗稱，意指在骨骼尚未完全閉合前，透過中藥調理幫助孩子充分發揮生長潛能。中醫認為，骨骼的生長與「腎」密切相關——腎主骨、生髓，腎氣充足則骨骼強健、生長旺盛。',
        image: 'https://readdy.ai/api/search-image?query=traditional%20Chinese%20medicine%20herbs%20for%20children%20growth%20development%20dried%20herbs%20in%20ceramic%20bowls%20warm%20natural%20light%20wooden%20table%20clean%20minimal%20background&width=700&height=420&seq=child-growth-1&orientation=landscape',
      },
      {
        heading: '中醫如何看待骨骼生長？',
        text: '中醫理論中，「腎藏精，精生髓，髓養骨」，腎精充足是骨骼健康生長的根本。脾胃為後天之本，負責將食物轉化為氣血精微，滋養全身包括骨骼。因此，轉骨調理的核心在於「補腎填精、健脾益氣」，讓孩子的生長潛能得以充分發揮。',
      },
      {
        heading: '最佳調理時機',
        text: '女孩約在初經來潮前 1–2 年（約 9–11 歲）、男孩約在變聲前 1–2 年（約 11–13 歲）開始調理效果最佳。此時骨骺板尚未閉合，生長空間最大。若已出現第二性徵，仍可調理，但效果相對有限。建議由醫師評估骨齡後再決定介入時機。',
        image: 'https://readdy.ai/api/search-image?query=children%20growth%20chart%20height%20measurement%20ruler%20on%20wall%20pediatric%20clinic%20warm%20light%20clean%20minimal%20background%20health%20check%20up&width=700&height=420&seq=child-growth-2&orientation=landscape',
      },
      {
        heading: '中醫調理方向與常用藥材',
        text: '以補腎填精、健脾益氣為主，常用藥材包括：杜仲（強筋骨）、續斷（補肝腎）、黃耆（益氣）、山藥（健脾）、龜板（滋陰補腎）、鹿茸（溫腎壯陽）等。醫師會依孩子的體質（陰虛、陽虛、氣虛等）調整處方，切勿自行購買坊間轉骨方。',
      },
      {
        heading: '睡眠、飲食與運動的重要性',
        text: '中醫調理需配合良好的生活習慣才能發揮最大效果：睡眠方面，生長激素在晚上 10 點至凌晨 2 點分泌最旺盛，建議晚上 10 點前入睡；飲食方面，均衡攝取蛋白質、鈣質、維生素 D，避免過多加工食品；運動方面，跳繩、籃球、游泳等縱向運動有助刺激骨骺板生長。',
      },
      {
        heading: '氣血循環與骨骼健康的關係',
        text: '充足的氣血循環是骨骼獲得充分營養的關鍵。中醫透過針灸（如足三里、腎俞、命門等穴位）促進氣血運行，配合中藥調理，讓骨骼細胞獲得更豐富的養分供應，進而促進生長。',
      },
    ],
    tips: {
      title: '家長注意事項',
      content: '轉骨調理並非越早越好，需由醫師評估孩子的發育狀況後再決定是否介入。過早或不當使用可能反而影響發育。坊間轉骨方成分不明，請務必諮詢專業中醫師，量身訂製安全有效的調理方案。',
    },
    references: [
      { label: '小兒轉骨中醫調理', url: 'https://drctlee.wordpress.com/' },
      { label: '兒童生長發育相關研究', url: 'https://www.notion.so/2b25cb7e37c8804199a1cc9b2db1345e' },
    ],
  },
  {
    id: 202,
    title: '注意力不足過動症（ADHD）的中醫輔助治療',
    category: '兒科專區',
    subcategory: '注意力不足過動症',
    tags: ['ADHD', '注意力不足', '過動症', '兒童', '中醫調理'],
    author: '李俊廷醫師',
    date: '2025-03-05',
    updatedDate: '2025-05-10',
    views: 1876,
    readTime: '6 分鐘',
    summary: '注意力不足過動症（ADHD）影響許多學齡兒童的學習與生活，中醫從「心腎不交」、「肝陽上亢」等角度切入，透過針藥並用，輔助改善專注力、減少衝動行為。',
    coverImage: 'https://readdy.ai/api/search-image?query=child%20studying%20at%20desk%20with%20books%20calm%20focused%20learning%20environment%20warm%20natural%20light%20clean%20minimal%20home%20study%20room%20peaceful%20atmosphere&width=800&height=500&seq=adhd-cover&orientation=landscape',
    content: [
      {
        heading: '中醫對 ADHD 的認識',
        text: '中醫將 ADHD 歸屬「臟躁」、「多動」範疇，認為主要與心腎不交（腎陰不足、心火偏亢）、肝陽上亢（情緒衝動、易怒）、脾虛痰濕（注意力渙散、記憶力差）有關。',
      },
      {
        heading: '中醫治療策略',
        text: '針對心腎不交型，以滋腎陰、清心火為主，常用天王補心丹、六味地黃丸加減；肝陽上亢型以平肝潛陽為主，用天麻鉤藤飲；脾虛痰濕型以健脾化痰為主，用歸脾湯加減。針灸取穴常用百會、四神聰、神門、內關等。',
      },
      {
        heading: '中西醫合療的優勢',
        text: '中醫輔助治療可幫助減少西藥（如利他能）的用量與副作用，改善睡眠品質、食慾不振等問題，同時從體質根本調整，讓孩子的情緒與專注力更穩定。建議在兒童精神科醫師與中醫師共同評估下進行合療。',
      },
    ],
    tips: {
      title: '給家長的建議',
      content: 'ADHD 的治療需要家庭、學校與醫療團隊的共同配合。中醫調理是輔助手段，不可取代行為治療與必要的西藥治療。請保持耐心，通常需要 3–6 個月才能看到明顯改善。',
    },
    references: [
      { label: 'ADHD 中醫治療研究', url: 'https://drctlee.wordpress.com/' },
    ],
  },

  // ── 內科調理 ──
  {
    id: 301,
    title: '失眠睡不好？中醫教你養心安神的方法',
    category: '內科調理',
    subcategory: '失眠問題',
    tags: ['失眠', '睡眠障礙', '養心安神', '針灸', '酸棗仁湯'],
    author: '李俊廷醫師',
    date: '2024-11-08',
    updatedDate: '2025-04-20',
    views: 6123,
    readTime: '5 分鐘',
    summary: '長期失眠不僅影響日常生活品質，更會損害免疫系統與心血管健康。中醫從心、肝、腎三臟切入，透過針藥並用，幫助恢復自然睡眠節律。',
    coverImage: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20moonlight%20through%20sheer%20curtains%20lavender%20sprigs%20on%20nightstand%20warm%20neutral%20tones%20minimal%20clean%20background%20wellness%20sleep%20atmosphere&width=800&height=500&seq=insomnia-cover&orientation=landscape',
    content: [
      {
        heading: '中醫如何分析失眠？',
        text: '中醫認為失眠（不寐）主要與心神不安有關，常見證型包括：心腎不交（入睡困難、心煩）、心脾兩虛（多夢易醒、疲倦）、肝鬱化火（煩躁易怒、難以入眠）、痰熱擾心（胸悶、多夢）等。',
      },
      {
        heading: '針灸治療失眠',
        text: '常用穴位包括神門、內關、三陰交、百會、安眠穴等，透過調節自律神經、降低皮質醇分泌，幫助放鬆入眠。研究顯示針灸對慢性失眠有顯著改善效果，且無藥物依賴性。',
        image: 'https://readdy.ai/api/search-image?query=acupuncture%20needles%20on%20wrist%20and%20hand%20calm%20relaxation%20treatment%20warm%20soft%20lighting%20clean%20minimal%20clinic%20background%20wellness%20healing&width=700&height=420&seq=insomnia-1&orientation=landscape',
      },
      {
        heading: '中藥調理方向',
        text: '依體質選用酸棗仁湯、天王補心丹、歸脾湯等方劑加減。酸棗仁、柏子仁、遠志、合歡皮等藥材均有養心安神之效。通常服藥 2–4 週後睡眠品質即有明顯改善。',
      },
    ],
    tips: {
      title: '睡眠衛生小提醒',
      content: '建議固定就寢與起床時間、睡前 1 小時避免使用 3C 產品、保持臥室涼爽黑暗安靜、避免睡前飲用咖啡因飲料。這些習慣配合中醫調理，效果加倍。',
    },
    references: [
      { label: '中醫失眠治療研究', url: 'http://kcm.tcm.tw/files/20181207204956371.PDF' },
    ],
  },
  {
    id: 302,
    title: '自律神經失調的中醫調理策略',
    category: '內科調理',
    subcategory: '自律神經失調',
    tags: ['自律神經', '壓力', '焦慮', '中醫調理', '針灸'],
    author: '李俊廷醫師',
    date: '2025-02-20',
    updatedDate: '2025-05-08',
    views: 3456,
    readTime: '6 分鐘',
    summary: '自律神經失調是現代人常見的文明病，症狀多樣且難以捉摸。中醫從「肝鬱氣滯」、「心腎不交」等角度切入，透過針藥並用，幫助恢復自律神經的平衡。',
    coverImage: 'https://readdy.ai/api/search-image?query=calm%20meditation%20person%20sitting%20peacefully%20in%20nature%20green%20garden%20soft%20morning%20light%20stress%20relief%20wellness%20minimal%20clean%20background%20serene%20atmosphere&width=800&height=500&seq=autonomic-cover&orientation=landscape',
    content: [
      {
        heading: '什麼是自律神經失調？',
        text: '自律神經系統控制心跳、呼吸、消化、體溫等不受意識控制的生理功能。當交感與副交感神經失去平衡，就會出現心悸、胸悶、頭暈、腸胃不適、失眠、焦慮等多樣化症狀，西醫檢查往往找不到器質性病變。',
      },
      {
        heading: '中醫的對應治療',
        text: '中醫將自律神經失調歸屬「鬱證」、「臟躁」、「心悸」等範疇。治療以疏肝解鬱、養心安神、調和陰陽為主。常用方劑包括柴胡疏肝散、甘麥大棗湯、酸棗仁湯等，依症狀加減。',
        image: 'https://readdy.ai/api/search-image?query=Chinese%20herbal%20medicine%20decoction%20in%20ceramic%20bowl%20steam%20rising%20warm%20golden%20light%20wooden%20table%20traditional%20healing%20atmosphere%20minimal%20clean%20background&width=700&height=420&seq=autonomic-1&orientation=landscape',
      },
      {
        heading: '針灸調節自律神經',
        text: '研究顯示，針灸能有效調節心率變異性（HRV），改善自律神經功能。常用穴位包括內關、神門、足三里、太衝、百會等。每週 1–2 次針灸，持續 4–8 週，多數患者症狀有顯著改善。',
      },
    ],
    tips: {
      title: '日常調養建議',
      content: '規律作息、適度運動（如太極拳、瑜伽）、腹式呼吸練習、減少咖啡因攝取，都有助於改善自律神經功能。中醫調理配合生活習慣的改變，效果更持久。',
    },
    references: [
      { label: '自律神經失調中醫治療', url: 'https://drctlee.wordpress.com/' },
    ],
  },

  // ── 婦科保健 ──
  {
    id: 401,
    title: '月經不規律怎麼辦？中醫調理週期的關鍵',
    category: '婦科保健',
    subcategory: '不孕調理',
    tags: ['月經不調', '中醫調理', '婦科', '不孕', '週期調理'],
    author: '李俊廷醫師',
    date: '2024-12-10',
    updatedDate: '2025-04-15',
    views: 7891,
    readTime: '5 分鐘',
    summary: '月經週期不規律是許多女性的困擾，中醫從「腎－天癸－衝任－胞宮」軸線切入，透過補腎調肝、活血化瘀等方法，幫助恢復正常週期，為備孕打好基礎。',
    coverImage: 'https://readdy.ai/api/search-image?query=delicate%20dried%20herbs%20flowers%20arranged%20on%20clean%20white%20linen%20surface%20warm%20golden%20light%20soft%20shadows%20traditional%20Chinese%20medicine%20aesthetic%20minimal%20elegant%20background&width=800&height=500&seq=menstrual-cover&orientation=landscape',
    content: [
      {
        heading: '什麼是月經不調？',
        text: '月經週期短於 21 天或長於 35 天、經量過多或過少、經期超過 7 天或不足 2 天，皆屬月經不調範疇。中醫認為此多與腎虛、肝鬱、脾虛或血瘀有關。',
      },
      {
        heading: '中醫如何看待月經週期？',
        text: '中醫將月經週期分為行經期、經後期、經間期、經前期四個階段，各階段陰陽消長不同，治療策略也有所差異。行經期以活血通經為主；經後期以滋陰養血為主；經間期以補腎促排卵為主；經前期以溫陽補腎為主。',
        image: 'https://readdy.ai/api/search-image?query=traditional%20Chinese%20medicine%20herbs%20for%20women%20health%20fertility%20rose%20petals%20dried%20herbs%20warm%20golden%20light%20clean%20white%20background%20minimal%20elegant%20feminine&width=700&height=420&seq=menstrual-1&orientation=landscape',
      },
      {
        heading: '常見調理方法',
        text: '針灸取穴常用三陰交、關元、子宮穴等；中藥方劑依體質選用四物湯、逍遙散、溫經湯等加減。建議配合規律作息、避免過度勞累及情緒壓力，效果更佳。',
      },
    ],
    tips: {
      title: '生活小提醒',
      content: '月經期間避免食用生冷食物、冰品，保持腹部溫暖，有助於氣血順暢。若月經不調合併嚴重腹痛或大量出血，請盡速就醫。',
    },
    references: [
      { label: '中醫不孕調理', url: 'https://drctlee.wordpress.com/2020/11/20/tcm-infertility/' },
    ],
  },

  // ── 皮膚科 ──
  {
    id: 501,
    title: '青春痘反覆長不停？中醫從體質根本調理',
    category: '皮膚科',
    subcategory: '青春痘',
    tags: ['青春痘', '痤瘡', '皮膚調理', '中醫', '體質'],
    author: '李俊廷醫師',
    date: '2025-01-05',
    updatedDate: '2025-05-01',
    views: 4312,
    readTime: '5 分鐘',
    summary: '青春痘（痤瘡）不只是皮膚問題，更反映了內在臟腑的失衡。中醫從肺熱、胃熱、肝鬱等角度切入，透過清熱解毒、調理體質，讓肌膚由內而外恢復健康。',
    coverImage: 'https://readdy.ai/api/search-image?query=clear%20healthy%20skin%20close%20up%20natural%20light%20minimal%20clean%20background%20skincare%20wellness%20Chinese%20medicine%20herbal%20treatment%20beauty%20health&width=800&height=500&seq=acne-cover&orientation=landscape',
    content: [
      {
        heading: '中醫對青春痘的認識',
        text: '中醫稱青春痘為「粉刺」、「肺風粉刺」，認為主要與肺熱（臉部油脂分泌旺盛）、胃腸濕熱（飲食不節、便秘）、肝鬱化火（情緒壓力）有關。不同部位的痘痘也反映不同臟腑的問題。',
      },
      {
        heading: '中醫治療策略',
        text: '肺熱型以清肺熱為主，用枇杷清肺飲；胃腸濕熱型以清熱利濕為主，用茵陳蒿湯加減；肝鬱化火型以疏肝清熱為主，用丹梔逍遙散。外治法可搭配中藥面膜、針灸（圍刺法）加速消炎。',
        image: 'https://readdy.ai/api/search-image?query=Chinese%20herbal%20medicine%20skincare%20ingredients%20fresh%20herbs%20botanical%20extracts%20clean%20white%20background%20minimal%20elegant%20beauty%20wellness%20natural%20treatment&width=700&height=420&seq=acne-1&orientation=landscape',
      },
      {
        heading: '飲食調整的重要性',
        text: '建議減少高升糖指數食物（白米、麵包、甜食）、乳製品、油炸食物的攝取；多吃蔬菜、水果、全穀類；保持規律排便。飲食調整配合中醫調理，通常 4–8 週後痘痘明顯減少。',
      },
    ],
    tips: {
      title: '日常護膚提醒',
      content: '避免用手擠壓痘痘，以免留下疤痕；選用溫和不含酒精的洗面乳；防曬是預防痘疤色素沉澱的關鍵。中醫調理期間請告知醫師正在使用的外用藥物。',
    },
    references: [
      { label: '中醫皮膚科治療', url: 'https://drctlee.wordpress.com/' },
    ],
  },

  // ── 針灸科 ──
  {
    id: 601,
    title: '中風後遺症的中醫復健：針灸如何幫助神經修復',
    category: '針灸科',
    subcategory: '中風後遺症',
    tags: ['中風', '腦中風', '針灸復健', '神經修復', '半身不遂'],
    author: '李俊廷醫師',
    date: '2025-02-01',
    updatedDate: '2025-05-12',
    views: 2987,
    readTime: '7 分鐘',
    summary: '中風後遺症包括半身不遂、語言障礙、吞嚥困難等，中醫針灸在中風復健中扮演重要角色，透過刺激神經再生、改善腦部血液循環，幫助患者恢復功能。',
    coverImage: 'https://readdy.ai/api/search-image?query=rehabilitation%20therapy%20gentle%20hand%20movement%20recovery%20healing%20warm%20clinic%20light%20supportive%20care%20minimal%20clean%20background%20medical%20wellness%20hope&width=800&height=500&seq=stroke-cover&orientation=landscape',
    content: [
      {
        heading: '中醫對中風的認識',
        text: '中醫稱中風為「卒中」，分為「中經絡」（症狀較輕）與「中臟腑」（症狀較重）。急性期以西醫治療為主，穩定後（通常 2–4 週）即可開始中醫針灸輔助復健，越早介入效果越好。',
      },
      {
        heading: '針灸促進神經修復的機制',
        text: '研究顯示，針灸能促進腦源性神經營養因子（BDNF）的分泌，刺激神經突觸重塑，改善腦部血液循環，並調節神經炎症反應。常用頭皮針（焦氏頭皮針）直接刺激大腦皮質對應區域，效果顯著。',
        image: 'https://readdy.ai/api/search-image?query=scalp%20acupuncture%20head%20needles%20neurological%20treatment%20warm%20clinic%20lighting%20professional%20medical%20setting%20clean%20minimal%20background%20healing%20recovery&width=700&height=420&seq=stroke-1&orientation=landscape',
      },
      {
        heading: '常用針灸方案',
        text: '頭皮針：運動區、感覺區、語言區（依症狀選擇）；體針：肩髃、曲池、合谷（上肢）、環跳、足三里、三陰交（下肢）；配合電針增強刺激效果。建議每週 3–5 次，持續 3–6 個月。',
      },
      {
        heading: '中藥輔助治療',
        text: '依中風類型（缺血性或出血性）及恢復階段選用不同方劑。缺血性中風恢復期常用補陽還五湯（益氣活血通絡）；出血性中風恢復期以滋陰潛陽、化痰通絡為主。',
      },
    ],
    tips: {
      title: '復健注意事項',
      content: '中醫針灸是中風復健的輔助療法，需配合西醫復健治療（物理治療、職能治療、語言治療）共同進行。家屬的支持與陪伴對患者的恢復至關重要，請保持積極樂觀的態度。',
    },
    references: [
      { label: '中風針灸復健研究', url: 'https://drctlee.wordpress.com/' },
    ],
  },
];
