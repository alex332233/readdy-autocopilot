export interface TreatmentCase {
  label: string;
  name: string;
  content: string;
  link: string;
  image: string;
}

export const bodyDetailData = {
  sections: [
    {
      title: '適合對象',
      icon: 'ri-user-heart-line',
      subtitle: '專為對體態平衡有自我要求的都會女性、上班族與忙碌媽媽量身打造',
      content:
        '專為對於「體態平衡」有自我要求的都會女性、上班族與忙碌媽媽量身打造。當妳感覺到身體代謝步調放慢、容易受水腫困擾，或是在意局部（如腹部、大腿、手臂）的線條柔軟度，且伴隨氣血循環不暢、壓力大（肝鬱）或容易疲憊（氣虛）等體質狀況。本療程特別推薦給偏好自然律動感、渴望透過中醫內在調和與外在穴位啟動，以溫和且具規律性的方式，找回輕盈身心的妳。',
    },
    {
      title: '妳的困擾，我們懂',
      icon: 'ri-heart-line',
      content:
        '體態的起伏，往往是身體在壓力與忙碌下，代謝機能失去平衡的訊號。妳或許正試圖在繁忙的日程中，尋找一種能融入生活、不必大幅改變現有步調的保養方式。對於局部難以消解的沉重感，妳希望能有更深層的引導，而非僅是表面的改變。妳渴望的是一種專業且細緻的陪伴，能在無壓力的狀態下，陪著妳一步步跨越停滯期，讓身體重拾應有的活力與自信。',
    },
    {
      title: '艾苜的解方：內在調和與經絡啟動',
      icon: 'ri-scales-3-line',
      content:
        '「輕盈・體雕療程」結合了傳統經絡智慧與現代生理數據管理。我們運用客製化穴位微針刺激，針對局部滯礙進行循環引導，如同為身體找回原有的律動節奏，溫柔地優化線條美感。',
      additionalContent:
        '療程同步搭配數據監測，由醫師依據個人體質（如脾虛濕阻、肝鬱氣滯等）開立漢方內服調理，旨在由內而外排除多餘負擔、提升代謝機能。我們不追求數字的速成，而是專注於深層的體質重塑與局部線條的流暢度。療程全程由醫師親自把關，無須漫長修復期，讓妳在日常生活中優雅地轉變，展現天生般的自在體態。',
    },
    {
      title: '療程體驗：每一次，都是專屬的精雕細琢',
      icon: 'ri-map-pin-time-line',
      items: [
        { subtitle: '評估剖析｜洞察根源', text: '醫師結合把脈問診，細緻拆解體質成因，與妳共同設定科學、健康且符合生活型態的階段目標。' },
        { subtitle: '精準策略｜量身訂製', text: '依據個人當下狀況規劃客製化穴位刺激點位，結合漢方調理與飲食建議，以最符合自然生理規律的方式，幫助身體找回代謝的平衡點。' },
        { subtitle: '療程執行｜優雅煥新', text: '運用極細微針技術搭配專業經絡引導，在 30 分鐘內啟動循環、緩解沉重水腫感。療程具備極短修復期的優勢，結束後即可亮麗回歸日常。' },
        { subtitle: '追蹤鞏固｜美麗延續', text: '艾苜不僅在乎當下，更在乎長期的氣色調理。我們將提供專屬的生活引導計畫，透過完整週期調理，讓身體記憶這份輕盈狀態，讓健康的美麗細水長流。' },
      ],
    },
  ],
  disclaimer:
    '【艾苜中醫溫馨提醒】本網站所提及之療程效能、預期結果及恢復期，將因個人體質、年齡與生活作息而有所差異。任何醫療處置均有其潛在風險（如體質敏感者可能產生局部微小瘀青或短暫痠脹感等），實際治療計畫需由本診所專業中醫師親自診斷、評估後方可執行。',
};

export const eyeDetailData = {
  sections: [
    {
      title: '適合對象',
      icon: 'ri-user-heart-line',
      subtitle: '專為長時間專注於螢幕的都會上班族、設計師、工程師與重度3C使用者量身打造',
      content:
        '專為長時間專注於螢幕的都會上班族、設計師、工程師，以及重度 3C 使用者量身打造。當妳感覺雙眼頻繁乾澀、痠脹、視線偶爾模糊，或是即使休息後仍感到「眼壓偏高、眼睛好累」，且伴隨肝血不足、容易疲憊或焦慮（肝鬱）等體質狀況。本療程亦推薦給面臨課業壓力、正處於視力發展關鍵期的青少年，與渴望透過溫和穴位調節，找回晶亮有神雙眼的妳。',
    },
    {
      title: '妳的困擾，我們懂',
      icon: 'ri-heart-line',
      content:
        '數位時代的日常，讓雙眼承載了過度的負荷。長時間與螢幕對視，換來的是收工後揮之不去的霧感與疲累，即使點了眼藥水，也往往只能獲得短暫的舒緩，隔天依舊循環往復。妳或許擔心過度用眼會影響長期健康，或正為孩子視力的快速波動感到焦慮。妳渴望的是一種能讓緊繃肌群深層放鬆、讓乾涸氣血重新潤澤的照護，讓視覺重回清新與從容。',
    },
    {
      title: '艾苜的解方：滋養與微調的視界美學',
      icon: 'ri-eye-line',
      content:
        '「明眸・亮視療程」融合了傳統中醫「久視傷血」的病理分析與精準的眼周解剖知識。我們運用特製微針穴位調節，在眼眶周圍的安全位點溫和進針，旨在舒緩疲憊的睫狀肌，幫助眼周微循環順暢，從物理層面減輕酸澀與壓力感。',
      additionalContent:
        '療程同步搭配滋養肝腎、明目護眼的中藥內服調理，從體質根源補足水分與養分，改善因氣血虧虛引起的視物吃力。這是一場由內而外的視覺 SPA，不影響日常作息，幫助妳在繁忙的工作與學習中，守護那一抹清澈明亮的眼神。',
    },
    {
      title: '療程體驗：每一次，都是專屬的精雕細琢',
      icon: 'ri-map-pin-time-line',
      items: [
        { subtitle: '評估剖析｜洞察壓力', text: '醫師詳細了解妳的用眼習慣與疲勞程度，結合中醫望聞問切，分析是否存在肝血不足或經絡滯礙，精準鎖定視覺疲態的根源。' },
        { subtitle: '精準策略｜量身訂製', text: '依據個人狀況規劃客製化眼周穴位組合（如睛明、攢竹等），並開立專屬的護眼漢方。強調與日常用眼環境結合，為妳制定最平衡的舒緩方案。' },
        { subtitle: '療程執行｜溫柔放鬆', text: '運用極細微針技術在眼周溫和引導氣血，過程伴隨舒適的酸脹感而非刺痛。配合肩頸放鬆與經絡引導，約 20–30 分鐘，讓新鮮氧氣與養分順利送達雙眼。' },
        { subtitle: '追蹤鞏固｜清晰延續', text: '艾苜在乎的是長久的視覺品質。教導妳居家適用的護眼按摩與用眼節奏，定期追蹤視覺舒適度的改善狀況，讓清澈有神的雙眼不再是「撐過今天」，而是長久的生活狀態。' },
      ],
    },
  ],
  disclaimer:
    '【艾苜中醫溫馨提醒】本網站所提及之療程效能、預期結果及恢復期，將因個人體質、年齡與生活作息而有所差異。任何醫療處置均有其潛在風險（如眼周血管豐富，體質敏感者可能產生局部微小瘀青等），實際治療計畫需由本診所專業中醫師親自診斷、評估後方可執行。',
};

export const laserDetailData = {
  sections: [
    {
      title: '適合對象',
      icon: 'ri-user-heart-line',
      subtitle: '專為對痛感較敏感、渴望以更溫和方式進行長期調理的族群設計',
      content:
        '專為對於「痛感較敏感」、曾有暈針經驗，或是渴望以更溫和方式進行長期調理的族群量身打造。無論是正處於成長黃金期的孩童與青少年、體質較虛弱的長者，或是對侵入性處置較為排斥的焦慮型患者。本療程特別推薦給在乎「舒適體驗」的家庭，特別是在面對小兒成長發育、過敏體質調整，或是希望在放鬆狀態下改善慢性負擔（如睡眠、情緒與專注力）的妳。',
    },
    {
      title: '妳的困擾，我們懂',
      icon: 'ri-heart-line',
      content:
        '在尋求健康的路上，恐懼往往是最大的阻礙。看著孩子因為害怕而對調理產生抗拒，或是妳自己因長期肩頸壓力想尋求幫助、卻又對傳統處置感到猶豫，這些焦慮我們都能感同身受。特別是對於需要長期耐心陪伴的兒少發展或過敏問題，如果療程本身帶有負擔，往往難以持續。妳渴望的是一種更先進、更純淨的引導方式，能跳過不適感，直接與身體的自癒力對話，讓照護過程充滿溫暖與安心。',
    },
    {
      title: '艾苜的解方：純淨光能的無痛導引',
      icon: 'ri-flashlight-line',
      content:
        '「光能・修復療程」運用現代低能量雷射技術，結合精準的經絡穴位學，為您開啟療癒的新選擇。我們不需進針，而是透過特定波長的光能，溫柔滲透穴位與肌筋膜壓痛點，達到與傳統針灸相近的調氣行血、舒筋止痛作用。',
      additionalContent:
        '這項技術不僅活化粒線體能量代謝，更能平衡自律神經系統。對於需要穩定情緒與提升專注力的孩童，光能介入能以安靜、非侵入性的方式，陪伴大腦與身體同步成長。搭配艾苜客製化的中藥調理，讓修復過程不再有壓力，只有光能帶來的微溫與全然的放鬆。',
    },
    {
      title: '療程體驗：每一次，都是專屬的精雕細琢',
      icon: 'ri-map-pin-time-line',
      items: [
        { subtitle: '全面評估｜看見身體需求', text: '醫師先以望聞問切深入了解症狀與體質，針對成長發育、過敏或疼痛成因進行細緻分析，評估最適合的光能介入頻率，並視需求與現有的生活照護計畫共同協作。' },
        { subtitle: '精準策略｜規劃專屬地圖', text: '依照個人狀況（如頭皮穴位、耳穴或體穴）設計專屬的「光能座標」。結合漢方藥理與物理調節，為每位孩童或成人量身訂製最溫和的整合處方。' },
        { subtitle: '療程執行｜光能溫柔介入', text: '使用精密低能量雷射設備依序照射規劃位點。單次療程精簡高效，過程僅有微溫感、無傷口且無須恢復期。孩童能在輕鬆的陪伴氛圍下完成，讓治療成為一種期待。' },
        { subtitle: '追蹤調整｜讓進步被看見', text: '艾苜重視長期的正向累積。定期追蹤睡眠品質、專注力表現或身體各項成長曲線，滾動式微調穴位組合與用藥方針，穩定喚醒身體自癒力，讓蛻變細水長流。' },
      ],
    },
  ],
  disclaimer:
    '【艾苜中醫溫馨提醒】本網站所提及之療程效能、預期結果及恢復期，將因個人體質、年齡與生活作息而有所差異。任何醫療處置均有其潛在風險，實際治療計畫需由本診所專業中醫師親自診斷、評估（如避開特定部位照射等安全規範）後方可執行。',
};

export const decoctionDetailData = {
  audience: {
    title: '適合對象',
    content:
      '專為體質複雜交錯、處於疾病急性期，或正尋求更深層、高效調理的患者設計。科學中藥（藥粉）是日常保養與輕症緩解的得力助手；然而，當您面對症狀較久、多重症狀並存，或是急欲在關鍵時期（如備孕、產後、術後）調養身體時，您會需要一帖更高濃度、量身打造的專屬處方。在艾苜，我們針對不同的健康階段提供最適切的武器，與您一起溫柔且精準地找回身體的平衡。',
  },
  comparison: {
    title: '因時制宜，為不同的健康階段選擇最適合的劑型',
    items: [
      { icon: 'ri-settings-3-line', title: '客製彈性', text: '科學中藥擁有標準化的便利性，適合多數常規狀況；但當面對錯綜複雜的體質（如婦科問題伴隨長期失眠與腸胃不適），水煎藥能讓醫師不受固定比例限制，精準加減每一味藥材的使用量。' },
      { icon: 'ri-test-tube-line', title: '濃度需求', text: '藥粉受限於單次服用的物理體積，能乘載的藥量有其上限。當身體處於急性期或長年的深層虛損時，水藥能提供更高濃度的有效成分，給予身體推動改變的動能。' },
      { icon: 'ri-drop-line', title: '純粹吸收', text: '科學中藥在製程中必須加入安全的賦形劑（如玉米澱粉）以利乾燥成粉；而水煎藥則是傳統純粹的藥液萃取，對於腸胃極度敏感的患者而言，液態劑型不僅好吸收，也更為溫和。' },
    ],
  },
  solution: {
    title: '艾苜的解方：精準醫療的「全客製化水煎藥」',
    intro: '我們針對您當下的真實需求，提供「靈活配伍，精準萃取」的進階選擇：',
    items: [
      { icon: 'ri-equalizer-2-line', title: '靈活微調', text: '根據您每次回診最細微的症狀變化，醫師能宛如調音師般，細緻微調您的專屬處方，實現真正的「量身打造」。' },
      { icon: 'ri-fire-line', title: '高濃萃取', text: '透過傳統水煎煮法，將藥材的有效成分完整釋放至湯液中，給予受損元氣最直接、深層的滋養。' },
      { icon: 'ri-focus-3-line', title: '直達病灶', text: '水劑形態順口且易於腸胃吸收，能更順利地發揮調理作用，協助身體突破停滯的修復期。' },
      { icon: 'ri-shield-check-line', title: '安心代煎', text: '採用高品質藥材，由專業設備高溫代煎並真空包裝。您不需費時熬煮，帶回家溫熱即飲，讓健康投資變得優雅且從容。' },
    ],
  },
  keyStages: {
    title: '五大關鍵時期的專屬守護',
    subtitle: '為什麼這個階段，您更需要水藥？',
    intro:
      '在生命的不同階段，身體面對的挑戰截然不同。當常規的保養已不足以應付當下的耗損，客製化水藥便能以高濃度與高彈性，成為您突破健康關卡的最佳助力：',
    items: [
      { title: '備孕調理｜孕育生機的溫潤沃土', text: '準備懷孕的過程，就像為種子準備肥沃的土壤。面對難孕、高齡備孕或反覆流產的體質，水藥能不受限於固定比例，順應女性「經期、排卵、黃體期」的細微變化，高濃度滋養子宮與卵巢環境，為迎接新生命打下最穩健的底蘊。' },
      { title: '產後修復｜重塑體質的深層滋養', text: '產後經歷氣血大耗，百脈空虛，正是女人重塑體質的黃金期。客製水藥能根據媽咪每週的惡露排除狀況、哺乳需求與體力恢復程度，進行「階段性」的精準補養。讓您在最疲憊脆弱的時期，獲得最有效率的氣血重建。' },
      { title: '疲勞重置｜擺脫透支的深度充電', text: '長期高壓導致的慢性疲勞、腦霧、睡眠障礙或自律神經失衡，往往是身體深層透支的警訊。當常規藥粉的調理遇到停滯，水藥的高效能釋放，能協助身體打破「慢性發炎與能量耗損」的惡性循環，從根源為您真正充飽電。' },
      { title: '大病修護｜術後與病後的溫和重建', text: '經歷重大疾病（如重感冒後遺症、確診後遺症）或手術後，身體宛如百廢待舉，且此時腸胃吸收力往往最為脆弱。水煎藥無添加賦形劑（澱粉）的純淨液態優勢，能在不增加脾胃負擔的前提下，溫和且高效率地固本培元，加速元氣歸位。' },
      { title: '兒少成長｜把握不可逆的黃金衝刺', text: '孩子的生長板一旦閉合便無法重來。針對發育落後、過敏干擾或急需衝刺身高的孩童，我們捨棄坊間一成不變的傳統轉骨方，透過水藥量身調配「健脾胃、輔生長」的專屬比例。在給予最強大成長動能的同時，精準把關並避開性早熟風險。' },
    ],
  },
  beyond: {
    title: '不只於此：每一份獨特的「不舒服」，都值得被精準接住',
    intro:
      '除了上述的人生關鍵期，客製化水煎藥的精髓，更在於中醫「辨證論治」的無限彈性。我們深知，許多困擾是難以被單一標籤定義的。無論您面對的是：',
    conditions: [
      '反覆發作的複雜皮膚狀況（如：嚴重濕疹、異位性皮膚炎）',
      '長年難解的消化道失衡（如：慢性腸胃發炎、長期胃食道逆流）',
      '檢查數值正常，卻始終渾身不對勁的「亞健康」狀態',
      '多種慢性病交織，需要全盤考量的輔助調理',
    ],
    closing:
      '只要常規的藥粉保養已無法滿足您對健康的期待，或是病況錯綜複雜需要多管齊下，水煎藥都能為您量身打造專屬的解方。在艾苜，我們治療的從來不只是「疾病的名稱」，而是全心全意照顧「正在生病的您」。',
  },
  flow: {
    title: '治療流程：四步深度調理旅程，溫柔承接您的健康',
    items: [
      { title: '溯源｜深度評估與共識', text: '初診時，我們透過詳細的望聞問切，為您梳理錯綜複雜的體質脈絡，精準找出最核心的失衡點，並與您凝聚「深度調理」的共識。' },
      { title: '裁製｜專屬處方開立', text: '確立調理方向後，醫師將宛如高階訂製般，針對您的獨特病程，精準拿捏每一味水藥藥材的比例，為您量身擬定階段性的「健康修復地圖」。' },
      { title: '淬鍊｜高溫代煎與封存', text: '全面採用高品質藥材，透過專業設備進行無菌高溫代煎與真空包裝。將繁瑣的熬藥過程交給我們，您只需帶回純粹的精華，溫熱即飲，讓調養生活從容優雅。' },
      { title: '守護｜動態追蹤與微調', text: '隨著身體逐漸恢復，體質也會跟著轉變。我們會在每次回診時，根據您的真實反饋動態微調處方，確保每一包水藥的濃度與方向，都能精準契合您當下的需求，陪伴您穩步走向健康。' },
    ],
  },
  disclaimer:
    '【艾苜中醫溫馨提醒】本網站所提及之體質調理、水煎藥療程效能與進度，將因每位患者的個人體質、年齡、病程發展及日常作息而有所差異。任何醫療處置均需視個人情況調整，實際的治療計畫（含水藥之處方組成、服用頻率與週期），必須由本診所專業中醫師親自看診、評估後方可制定並執行。',
};

export const bodyCases: TreatmentCase[] = [
  { label: '案例 A', name: '產後下腹突出，8 次療程後腹圍少了 6 公分', content: '生完第二胎後，Iris 的下腹完全回不去，試過各種腹部訓練效果都有限。在艾苜接受輕盈・體雕療程後，搭配飲食建議，她說「鏡子裡的腰線又回來了」……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20slim%20confident%20Asian%20woman%20in%20her%20early%20thirties%20wearing%20fitted%20athleisure%20wear%20standing%20in%20a%20bright%20minimal%20studio%20space%2C%20healthy%20body%20posture%20and%20toned%20silhouette%2C%20soft%20natural%20side%20lighting%2C%20warm%20ivory%20cream%20background%2C%20body%20wellness%20concept%2C%20lifestyle%20photography&width=700&height=460&seq=body-slim-confident-2025a&orientation=landscape' },
  { label: '案例 B', name: '久坐辦公族的代謝問題，中醫調理後整個人輕盈不少', content: '在科技業工作的 Mark 說自己每天坐超過 10 小時，雖然不算胖但整個人就是「重重的」，消化也不好。療程後他說最大的改變是「早上起床不再水腫，下午也不會想睡」……', link: '#', image: 'https://readdy.ai/api/search-image?query=An%20energetic%20healthy%20Asian%20man%20in%20his%20thirties%20doing%20a%20light%20morning%20stretch%20outdoors%20in%20a%20park%2C%20bright%20warm%20sunrise%20light%2C%20wearing%20casual%20comfortable%20clothes%2C%20fresh%20and%20light%20feeling%2C%20vitality%20and%20wellness%20concept%2C%20lifestyle%20photography%2C%20green%20and%20cream%20natural%20tones%2C%20active%20healthy%20lifestyle&width=700&height=460&seq=body-energy-2025b&orientation=landscape' },
];

export const eyeCases: TreatmentCase[] = [
  { label: '案例 A', name: '眼壓過高合併乾眼，3 個月調理後數值下降', content: '45 歲的設計師 Kevin 長期盯著螢幕，眼壓居高不下，眼科追蹤建議搭配中醫輔助。在艾苜接受眼針加中藥調理後，半年複診時眼科醫師也表示數值有明顯改善……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20relaxed%20professional%20Asian%20man%20in%20his%20mid%20forties%20with%20clear%20bright%20eyes%20looking%20peacefully%20toward%20natural%20light%2C%20stepping%20away%20from%20computer%20in%20a%20modern%20bright%20office%20with%20plants%2C%20calm%20and%20refreshed%20expression%2C%20soft%20natural%20window%20light%2C%20sage%20green%20and%20cream%20tones%2C%20wellness%20lifestyle%20photography&width=700&height=460&seq=eye-case-relax-2025a&orientation=landscape' },
  { label: '案例 B', name: '飛蚊症困擾多年，中藥調理後大幅改善', content: '林小姐因高度近視產生飛蚊症，嚴重影響工作時的專注力。嘗試多種西醫方案效果有限後，透過朋友介紹來到艾苜，在規律的中藥療程後，飛蚊的數量與頻率都明顯下降……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20young%20Asian%20woman%20with%20clear%20sparkling%20eyes%20looking%20upward%20with%20a%20hopeful%20relieved%20expression%2C%20standing%20outdoors%20in%20soft%20natural%20light%2C%20blurred%20green%20park%20bokeh%20background%2C%20eye%20health%20concept%2C%20lifestyle%20photography%2C%20warm%20cream%20and%20soft%20green%20tones%2C%20fresh%20and%20clear%20vision%20feeling&width=700&height=460&seq=eye-clear-vision-2025b&orientation=landscape' },
];

export const laserCases: TreatmentCase[] = [
  { label: '案例 A', name: '多年濕疹不再反覆，皮膚終於找回平靜', content: '超過十年濕疹病史的 Wendy 幾乎試遍各種外用藥，症狀總在換季時復發。在艾苜搭配雷射針灸與排毒方劑的複合療程後，整個夏天都沒有再發作，她說這是她記憶中最舒服的夏天……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20serene%20Asian%20woman%20in%20her%20thirties%20with%20smooth%20clear%20healthy%20skin%20touching%20her%20forearm%20gently%20with%20a%20calm%20relieved%20smile%2C%20soft%20warm%20indoor%20natural%20light%2C%20clean%20cream%20and%20ivory%20tones%2C%20skin%20health%20and%20recovery%20concept%2C%20wellness%20lifestyle%20photography%2C%20peaceful%20and%20comfortable%20expression&width=700&height=460&seq=laser-skin-calm-2025a&orientation=landscape' },
  { label: '案例 B', name: '頑固性痘疤，療程後明顯淡化平整', content: '21歲的大學生小智因青春期嚴重痘痘留下大量凹疤，對自信心影響很大。透過艾苜的光電複合治療搭配中藥調理，四個月後臉部整體質感大幅提升，周圍朋友都主動問他是做了什麼……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20confident%20young%20Asian%20man%20around%2021%20with%20noticeably%20clear%20smooth%20skin%20and%20bright%20confident%20smile%20standing%20in%20soft%20natural%20light%2C%20casual%20modern%20clothing%2C%20warm%20cream%20and%20ivory%20minimal%20background%2C%20skin%20health%20transformation%20concept%2C%20lifestyle%20portrait%20photography%2C%20energetic%20positive%20expression&width=700&height=460&seq=laser-clear-skin-2025b&orientation=landscape' },
];

export const decoctionCases: TreatmentCase[] = [
  { label: '案例 A', name: '多囊性卵巢搭配水煎藥調理，終於自然受孕', content: '結婚三年一直求子未果的 Cindy，確診多囊後在婦產科治療的同時也到艾苜接受體質調理。歷經半年的水煎藥療程後，成功自然懷孕，她說這個消息讓全家人都哭了……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20joyful%20tearful%20Asian%20woman%20in%20her%20thirties%20cradling%20a%20small%20positive%20pregnancy%20test%20gently%20in%20both%20hands%20with%20an%20overwhelmed%20happy%20expression%2C%20soft%20warm%20window%20light%2C%20cozy%20cream%20interior%20setting%2C%20emotional%20and%20hopeful%20wellness%20concept%2C%20lifestyle%20photography%2C%20warm%20golden%20and%20ivory%20tones&width=700&height=460&seq=decoction-pregnant-joy-2025a&orientation=landscape' },
  { label: '案例 B', name: '長期失眠、焦慮，水藥調理一個月後睡眠改善', content: '從事金融業的 Alex 因工作壓力大導致嚴重失眠，每天睡眠不足四小時且情緒焦躁。在艾苜辨證後開立個人化水煎方，一個月後他回診說終於可以睡超過六小時，早上起床「頭腦清晰多了」……', link: '#', image: 'https://readdy.ai/api/search-image?query=A%20peaceful%20Asian%20man%20sleeping%20deeply%20and%20soundly%20in%20soft%20clean%20white%20bedding%2C%20early%20morning%20light%20gently%20filtering%20through%20sheer%20white%20curtains%20casting%20a%20warm%20glow%2C%20deeply%20restful%20expression%2C%20sleep%20wellness%20concept%2C%20serene%20bedroom%20lifestyle%20photography%2C%20warm%20cream%20and%20white%20tones&width=700&height=460&seq=decoction-sleep-peace-2025b&orientation=landscape' },
];
