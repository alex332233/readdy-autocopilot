import type {CasesPageContent} from '../types';

export const defaultCasesPageContent: CasesPageContent = {
  title: '真實見證',
  heroTitle: '真實見證',
  heroSubtitle: '每一個康復的故事，都是我們持續前進的動力',
  ctaTitle: '您也想擁有健康的身體嗎？',
  ctaDescription: '每個人的體質不同，需要的調理方式也不同\n讓我們的專業醫師為您量身打造專屬的治療計畫',
  ctaButtonText: '立即預約諮詢',
  articles: [
    {
      caseId: 1,
      title: '中風後憂鬱失眠，艾苜中醫助妳眠',
      category: '內科',
      tags: ['中風', '憂鬱', '失眠', '針灸科'],
      doctor: '李俊廷醫師',
      fbLink: 'https://www.facebook.com/AmuletteCMC/photos/pb.100057559565100.-2207520000/169302091227601/?type=3',
      publishDate: 'January 4, 2023',
      coverImage: {
        url: 'https://readdy.ai/api/search-image?query=peaceful%20bedroom%20scene%20with%20soft%20warm%20lighting%20traditional%20Chinese%20medicine%20herbs%20on%20bedside%20table%20calm%20serene%20atmosphere%20minimal%20clean%20background%20neutral%20tones&width=1200&height=500&seq=blog1cover&orientation=landscape',
        alt: '中風後憂鬱失眠，艾苜中醫助妳眠',
      },
      description: '50歲女性五個月前中風，中風後開始失眠，服用安眠藥後狀況仍不佳...22點就寢→24點需起床再服藥→只能睡到2點半，晨起頭昏重，情緒不佳且厭食，因此來就診…',
      before: {
        title: '治療前症狀',
        items: ['22點就寢，24點需起床再服藥', '只能睡到凌晨2點半就醒', '晨起頭昏沉重', '情緒不佳', '厭食問題'],
      },
      after: {
        title: '治療後成果',
        phases: [
          {period: '一週後', improvements: ['早醒可以睡到4點', '頭昏減緩', '情緒不佳及厭食持平']},
          {period: '2個月後', improvements: ['早醒直接睡到6點', '頭昏痊癒且精神狀況較好', '情緒不佳及厭食明顯改善']},
        ],
      },
      conclusion: '腦中風除了西醫常規治療外，適當的中醫介入讓您的生活品質大大提升!!',
      references: ['http://kcm.tcm.tw/files/20181207204956371.PDF', 'https://drctlee.wordpress.com/acupuncture-on'],
    },
    {
      caseId: 2,
      title: '血糖不穩好煩惱，艾苜讓您免煩惱',
      category: '內科',
      tags: ['糖尿病'],
      doctor: '李俊廷醫師',
      fbLink: 'https://www.facebook.com/AmuletteCMC/photos/pb.100057559565100.-2207520000/178113027013174/?type=3',
      publishDate: 'January 4, 2023',
      coverImage: {
        url: 'https://readdy.ai/api/search-image?query=traditional%20Chinese%20medicine%20herbs%20and%20acupuncture%20needles%20arranged%20neatly%20on%20clean%20white%20surface%20warm%20natural%20lighting%20minimal%20aesthetic%20background&width=1200&height=500&seq=blog2cover&orientation=landscape',
        alt: '血糖不穩好煩惱，艾苜讓您免煩惱',
      },
      description: '20多歲男性，因為第一型糖尿病長期使用胰島素及血糖藥控制，但最近血糖控制不佳，晨起飯前血糖近200 mg/dl，且常有低血糖頭暈問題，因為不希望再增加胰島素或血糖藥物用量，故前來就診…',
      before: {
        title: '治療前症狀',
        items: ['晨起飯前血糖近 200 mg/dl', '常有低血糖頭暈問題', '長期軟便症狀', '不希望增加胰島素用量'],
      },
      after: {
        title: '治療後成果',
        phases: [
          {period: '第一週後', improvements: ['晨起血糖由 200 mg/dl → 150 mg/dl', '低血糖頭暈問題消失']},
          {period: '持續調養中', improvements: ['晨起血糖穩定在 130-150 mg/dl', '無低血糖頭暈問題', '長久以來的軟便症狀也獲得改善']},
        ],
      },
      conclusion: '第一型糖尿病患者透過中醫調理，不僅血糖控制更穩定，連帶其他症狀也一併改善！',
      references: ['https://drctlee.wordpress.com/2019/02/02/dm/', 'https://drctlee.wordpress.com/tcm-gut-microbiota-dm/'],
    },
    {
      caseId: 3,
      title: '艾苜送子鳥，祝您好孕到',
      category: '婦科',
      tags: ['不孕症'],
      doctor: '李俊廷醫師',
      fbLink: 'https://www.facebook.com/AmuletteCMC/photos/pb.100057559565100.-2207520000/211738156983994/?type=3',
      publishDate: 'January 4, 2023',
      coverImage: {
        url: 'https://readdy.ai/api/search-image?query=delicate%20pink%20cherry%20blossom%20flowers%20soft%20bokeh%20background%20warm%20pastel%20tones%20hopeful%20and%20gentle%20atmosphere%20minimal%20clean%20style&width=1200&height=500&seq=blog3cover&orientation=landscape',
        alt: '艾苜送子鳥，祝您好孕到',
      },
      description: '38歲女性，結婚兩年多無避孕但一直無法懷孕，經朋友介紹來找李醫師看診…考量患者年紀，李醫師先詢問是否曾做過基本的檢查以利排除輸卵管阻塞或子宮肌瘤等結構性問題。患者表示西醫檢查後夫妻雙方皆無特殊異常，並已在其他中醫機構調理許久但遲遲未果，若這幾個月仍無法順利懷孕，將考慮做試管嬰兒...',
      before: {
        title: '治療前狀況',
        items: ['38歲，結婚兩年多', '無避孕但一直無法懷孕', '西醫檢查夫妻雙方皆無異常', '已在其他中醫調理許久未果', '月經非常準時'],
      },
      after: {
        title: '治療後成果',
        phases: [{period: '調理後', improvements: ['原本準時的月經遲到', '約一週後自行驗孕發現已順利懷孕', '超音波檢查胎兒心跳正常']}],
      },
      conclusion: '患者來診時恰逢月經結束且自述月經非常準時，李醫師便根據患者當時的身體狀況給予合適的藥物處置並做適當的衛教，成功幫助患者自然受孕！',
      tips: {
        title: '貼心小提醒',
        content: '根據一般婦產科建議，想要懷孕的夫妻何時應積極求診？在沒有避孕的情況下：小於35歲嘗試懷孕時間：一年 / 35-38歲嘗試懷孕時間：半年 / 大於39歲嘗試懷孕時間：立即求診',
      },
      references: ['https://drctlee.wordpress.com/2020/11/20/tcm-infertility/'],
    },
    {
      caseId: 4,
      title: '轉『孕』的好幫手 艾苜中醫診所',
      category: '婦科',
      tags: ['不孕症', '子宮內膜息肉'],
      doctor: '李俊廷醫師',
      fbLink: 'https://www.facebook.com/AmuletteCMC/photos/pb.100057559565100.-2207520000/348339216657220/?type=3',
      publishDate: 'January 4, 2023',
      coverImage: {
        url: 'https://readdy.ai/api/search-image?query=soft%20morning%20light%20through%20window%20with%20green%20plant%20on%20windowsill%20calm%20hopeful%20atmosphere%20warm%20neutral%20tones%20minimal%20clean%20background&width=600&height=400&seq=blog4cover&orientation=landscape',
        alt: '轉「孕」的好幫手 艾苜中醫診所',
      },
      description: '37歲女性結婚2年，已積極備孕一年餘但仍無好消息。為此有先至西醫檢查發現可能為子宮內膜息肉影響，因此有先處理該狀況，其餘檢查無異常，因此西醫建議可以再嘗試自然受孕看看，但歷經三個月仍無好消息。為了上述的狀況患者希望搭配中醫治療助孕，因此前來求診。患者除了上述問題外還有睡眠狀況不佳的問題…',
      before: {
        title: '治療前狀況',
        items: ['37歲，結婚2年', '積極備孕一年餘無果', '曾有子宮內膜息肉（已處理）', '西醫檢查其餘無異常', '睡眠狀況不佳'],
      },
      after: {
        title: '治療後成果',
        phases: [{period: '調理後', improvements: ['睡眠不佳問題改善', '成功受孕', '目前已經進入第三孕期']}],
      },
      medicalInfo: {
        title: '醫學小知識',
        content: '子宮內膜息肉，是由子宮內膜的上皮黏膜細胞增生而生成的腺體腫瘤，數量可從單一個到多個，息肉不但會增生還可能變大。對於想要懷孕的女性而言，一般會依照息肉的「大小」和「位置」，來評估需採取的治療。',
      },
      conclusion: '中醫調理不僅改善了睡眠問題，更成功幫助患者自然受孕，目前已進入第三孕期！',
      references: ['https://drctlee.wordpress.com/2020/11/20/tcm-infertility/'],
    },
    {
      caseId: 5,
      title: '婦科問題好困擾 艾苜細心呵護您',
      category: '婦科',
      tags: ['陰道炎', '骨盆腔發炎'],
      doctor: '李俊廷醫師',
      fbLink: 'https://www.facebook.com/AmuletteCMC/photos/pb.100057559565100.-2207520000/406080627549745/?type=3',
      publishDate: 'January 4, 2023',
      coverImage: {
        url: 'https://readdy.ai/api/search-image?query=fresh%20herbal%20tea%20in%20ceramic%20cup%20with%20dried%20herbs%20scattered%20around%20warm%20natural%20light%20wooden%20table%20minimal%20clean%20background%20wellness%20theme&width=1200&height=500&seq=blog5cover&orientation=landscape',
        alt: '婦科問題好困擾 艾苜細心呵護您',
      },
      description: '19歲女性，近半年私密處反覆發炎，時常有黃綠色分泌物，甚則誘發右下腹痛，平均一個月要至婦產科或急診1-2次，時常在治療後1-2周又復發，症狀反覆不癒困擾不已。本次來就診是因為晨起又有綠色分泌物出現，且伴隨右下腹痛，但由於西醫治療一直反覆不癒想以中醫治療看看。',
      before: {
        title: '治療前症狀',
        items: ['近半年私密處反覆發炎', '時常有黃綠色分泌物', '右下腹痛', '平均一個月要至婦產科或急診1-2次', '治療後1-2週又復發'],
      },
      after: {
        title: '治療後成果',
        phases: [
          {period: '服藥5天後', improvements: ['綠色分泌物減少', '右下腹壓痛減少']},
          {period: '10日後回診', improvements: ['綠色分泌物已無', '右下腹壓痛已無', '生理期正常來潮']},
          {period: '一個月調理後', improvements: ['無分泌物異常', '無腹部壓痛情況', '狀況穩定順利畢業']},
          {period: '2個月後追蹤', improvements: ['私密處感染與腹部痛的情況已無發生']},
        ],
      },
      medicalInfo: {
        title: '衛教小天地',
        content: '在私密處感染時，西醫所使用的塞劑或抗生素確實是很好的治療手段，但是如果再治療後並沒有注意自己的生活習慣使得自身的免疫力下降很容易又再度復發。而中醫在預防復發上佔了很重要的角色，由於中醫在免疫調節上是很佔優勢的，如同此例，患者在將近1.5個月的治療就解決了困擾半年多私密處反覆感染的問題。',
      },
      conclusion: '困擾半年的反覆感染問題，透過1.5個月的中醫治療成功解決，且2個月後追蹤無復發！',
    },
  ],
};
