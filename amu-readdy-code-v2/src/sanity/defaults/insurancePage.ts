import type { InsurancePageContent } from '../types';

export const defaultInsurancePageContent: InsurancePageContent = {
  title: '健保項目',
  heroTitle: '健保項目',
  heroSubtitle: '以千年中醫智慧，守護您的健康人生',
  overviewCards: [
    {
      title: '內科：本草・歸元',
      englishTitle: 'Holistic Restoration',
      subtitle: '失眠・自律神經・癌後調理・雜病・婦科保健',
      icon: 'ri-leaf-line',
      anchorId: 'category-0',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Soft%20warm%20herbal%20medicine%20flat%20lay%20dried%20chamomile%20lavender%20rose%20petals%20on%20linen%20cloth%20muted%20sage%20green%20cream%20ivory%20tones%20gentle%20morning%20light%20airy%20dreamy%20botanical%20wellness%20spa%20aesthetic%20minimal%20serene%20healing%20atmosphere&width=600&height=700&seq=ins_heal_01&orientation=portrait',
        alt: '內科：本草・歸元',
      },
    },
    {
      title: '婦科：月・悅・圓',
      englishTitle: 'Lunar Wellness',
      subtitle: '不孕調理・產後調理・更年期症候群',
      icon: 'ri-heart-pulse-line',
      anchorId: 'category-1',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Delicate%20pink%20blush%20rose%20petals%20scattered%20on%20soft%20white%20linen%20warm%20candlelight%20glow%20muted%20dusty%20rose%20cream%20tones%20feminine%20gentle%20wellness%20ritual%20serene%20tranquil%20healing%20spa%20mood%20dreamy%20soft%20focus%20bokeh&width=600&height=700&seq=ins_heal_02&orientation=portrait',
        alt: '婦科：月・悅・圓',
      },
    },
    {
      title: '兒少：小苗・茁壯',
      englishTitle: 'Sprouting Wellness',
      subtitle: '轉骨發育・注意力不足過動症・近視輔助治療',
      icon: 'ri-seedling-line',
      anchorId: 'category-2',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Tiny%20green%20seedling%20sprouting%20from%20soft%20soil%20warm%20sunlight%20streaming%20through%20muted%20sage%20mint%20cream%20tones%20gentle%20nature%20growth%20vitality%20pure%20clean%20minimal%20background%20peaceful%20healing%20botanical&width=600&height=700&seq=ins_heal_03&orientation=portrait',
        alt: '兒少：小苗・茁壯',
      },
    },
    {
      title: '皮膚科：肌膚・煥采',
      englishTitle: 'Skin Radiance',
      subtitle: '青春痘・蕁麻疹・濕疹・汗皰疹・乾癬',
      icon: 'ri-sparkling-line',
      anchorId: 'category-3',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Smooth%20glowing%20skin%20texture%20close%20up%20soft%20warm%20peach%20ivory%20tones%20botanical%20herbs%20jade%20roller%20rose%20quartz%20crystal%20on%20white%20linen%20gentle%20diffused%20light%20serene%20beauty%20ritual%20minimal%20elegant%20healing%20spa&width=600&height=700&seq=ins_heal_04&orientation=portrait',
        alt: '皮膚科：肌膚・煥采',
      },
    },
    {
      title: '針灸：經絡・導引',
      englishTitle: 'Meridian Guidance',
      subtitle: '中風後遺症・帕金森・顏面神經麻痺・疤痕沾黏・筋骨痠痛',
      icon: 'ri-pulse-line',
      anchorId: 'category-4',
      image: {
        url: 'https://readdy.ai/api/search-image?query=Zen%20acupuncture%20healing%20atmosphere%20warm%20amber%20honey%20tones%20smooth%20river%20stones%20incense%20smoke%20wisps%20soft%20candlelight%20wooden%20surface%20muted%20earth%20tones%20serene%20calm%20meditative%20wellness%20sanctuary%20minimal&width=600&height=700&seq=ins_heal_05&orientation=portrait',
        alt: '針灸：經絡・導引',
      },
    },
  ],
  detailedCategories: [
    {
      title: '內科：本草・歸元',
      subtitle: '',
      englishTitle: 'Holistic Restoration',
      icon: 'ri-leaf-line',
      color: '#8B7355',
      treatments: [
        {
          title: '呼吸・淨護',
          description: '每一次的呼吸，都該是身體的自由律動。針對季節交替常見的感冒、流感以及惱人的長新冠久咳，我們不只止咳，更重視『宣肺化痰』與修復受損的呼吸道黏膜。透過溫和的草本淨化，鞏固您的免疫防護網，讓您告別鼻塞與咽喉不適，重新大口呼吸清新的空氣。',
          tags: ['呼吸道疾病', '感冒', '長新冠久咳', '鼻塞', '過敏性鼻炎'],
          caseLink: true,
        },
        {
          title: '寧心・安神',
          description: '在快節奏的城市裡，暫停是為了走更長遠的路。當自律神經失調讓您失眠、焦慮或感到莫名的長期疲勞時，這是身體在發出求救訊號。我們透過『疏肝理氣』的漢方調理，解開鬱結的氣機，緩解緊繃引發的頭痛與胸悶，引導身心進入深層的休息模式，找回內在的平靜氣蘊。',
          tags: ['自律神經失調', '失眠', '長期疲勞', '慢性疲勞', '頭痛', '胸悶'],
          caseLink: true,
        },
        {
          title: '寬中・淨化',
          description: '脾胃是後天之本，也是情緒的第二個大腦。面對壓力引起的胃食道逆流、胃痛與腸躁症，我們以『寬中』之法舒緩胸腹壓力，調理脹氣與便秘。讓營養能被身體好好吸收，廢物能順暢排出，修復受損的消化機能，讓您吃得下、排得順，找回身體久違的輕盈舒適。',
          tags: ['消化不良', '胃食道逆流', '胃潰瘍', '胃痛', '腸躁症', '便祕', '腹瀉', '脹氣'],
          caseLink: true,
        },
        {
          title: '水道・安律',
          description: '生活的節奏，不該被頻繁的跑廁所打斷。針對反覆發作的膀胱炎、尿道炎與困擾日常的頻尿、夜尿問題，我們採用『清熱利濕』與『固攝腎氣』雙管齊下的策略。不僅緩解急性期的小便灼熱痛感，更從根本調理下焦濕熱體質，讓身體的水液代謝回歸安穩規律，重拾一夜好眠。',
          tags: ['泌尿系統疾病', '泌尿道感染', '頻尿', '夜尿'],
          caseLink: true,
        },
      ],
    },
    {
      title: '婦科：月・悅・圓',
      subtitle: '',
      englishTitle: 'Lunar Wellness',
      icon: 'ri-heart-pulse-line',
      color: '#C17B6F',
      treatments: [
        { title: '月信・調律', description: '月經，是女性身體每個月的更新儀式，不該是疼痛的代名詞。針對月經失調、劇烈經痛與多囊性卵巢等問題，我們順應荷爾蒙的潮汐變化進行調經。透過『溫通經絡』與『養血活血』，緩解經前症候群 (PMS) 的情緒波動，讓每個月的『好朋友』如期而至，帶來身心的圓滿與好氣色。', tags: ['月經調理', '月經失調', '經痛', '多囊性卵巢', '經前症候群'] },
        { title: '暖宮・溫養', description: '別讓寒冷，凍結了妳的內在生機。許多女性的經痛與月經不順，源於體內的『宮寒』。我們運用『溫補腎陽』的調理，改善手腳冰冷、子宮虛寒與白帶異常。提升子宮與骨盆腔的血液循環，不僅能緩解經期腹痛，更是備孕調理與改善不易受孕體質的基礎工程。', tags: ['經痛', '月經失調', '白帶異常', '私密處感染', '備孕', '不孕'] },
        { title: '好孕・生機', description: '生命的孕育，始於豐饒的土壤。在您的備孕旅程中，無論是自然受孕或搭配人工生殖(人工受孕或試管嬰兒)療程，艾苜都是您最溫柔的後盾。我們專注於調理不孕症體質，養卵與改善子宮環境。透過精準的週期療法，為新生命打造充滿生機的著床溫床，守護您與寶寶的珍貴緣分。', tags: ['備孕', '不孕', '養卵', '人工生殖', '人工受孕', '試管嬰兒'] },
        { title: '月子・復元', description: '產後，是女人第二次重生的機會。把握產後黃金修復期，我們提供分階段的坐月子調理。從第一週的排除惡露、子宮復舊，到後期的發奶、改善產後掉髮與腰痠背痛。針對剖腹產傷口修復與產後水腫，我們提供客製化的漢方藥膳，助您優雅回歸，預防產後憂鬱與體虛。', tags: ['產後調理', '坐月子調理', '排除惡露', '發奶', '產後掉髮', '腰酸背痛', '剖腹產傷口修復', '產後水腫', '產後憂鬱'] },
        { title: '熟齡・自在', description: '優雅轉身，擁抱生命的第二個春天。更年期不是枯萎，而是能量的轉化。針對熟齡女性常見的熱潮紅、夜間盜汗與情緒不穩，我們透過『滋陰潛陽』的漢方調理，撫平荷爾蒙波動帶來的燥熱與失眠。同時關注骨質疏鬆的預防與頻尿問題，協助您調節代謝機能，保有從容自在的平衡美。', tags: ['更年期調理', '熱潮紅', '夜間盜汗', '情緒不穩', '骨質疏鬆', '頻尿'] },
        { title: '底蘊・固氣', description: '別讓大笑或咳嗽成為妳的尷尬時刻。針對產後或熟齡常見的漏尿與應力性尿失禁，這並非老化的必然，而是骨盆底肌『氣虛下陷』的訊號。我們運用『升陽舉陷』的中醫智慧，強化骨盆底肌的承托力，改善子宮脫垂感，助妳找回自在控制的自信底氣。', tags: ['漏尿', '應力性尿失禁', '骨盆底肌', '子宮脫垂'] },
      ],
    },
    {
      title: '兒少：小苗・茁壯',
      subtitle: '',
      englishTitle: 'Sprouting Wellness',
      icon: 'ri-seedling-line',
      color: '#7A9D7E',
      treatments: [
        { title: '開胃・健脾', description: '脾胃是成長的引擎，讓營養真正轉化為動力。孩子食慾不振、挑食或長不胖，往往源於『脾胃虛弱』。我們運用溫和的『開脾』藥方或搭配無痛雷射針灸，改善消化不良、容易脹氣與便秘問題。增強腸胃的吸收效能，為孩子的生長發育打下最堅實的地基。', tags: ['開胃健脾'] },
        { title: '舒敏・抗戰', description: '不讓哈啾聲與搔癢感，打擾童年的探索樂趣。針對兒童常見的過敏性鼻炎、氣喘與異位性皮膚炎，我們致力於強化孩子體內的『衛氣』防護網。透過溫和藥方與無痛雷射針灸，從根本改善長期感冒與過敏體質，調節免疫系統的過度反應，讓小苗能無畏風雨，自在呼吸。', tags: ['過敏體質'] },
        { title: '安睡・固本', description: '乾爽的早晨，是孩子自信的開始。小兒尿床 (夜遺尿) 往往源於腎氣未固或深層睡眠覺醒障礙。我們不責備，而是透過『溫腎縮尿』的調理與無痛雷射針灸，改善夜驚與頻尿。幫助孩子建立大腦與膀胱的連結，穩固先天之本，讓親子雙方都能擁有一夜安睡。', tags: ['小兒尿床', '夜遺尿', '夜驚', '頻尿'] },
        { title: '聰明・開竅', description: '每個孩子都有獨特的光芒，有時只是心神暫時失序。針對專注力不足、過動或情緒焦慮的孩子，我們運用『寧心安神』與『開竅益智』的漢方智慧或搭配無痛雷射針灸，穩定神經系統的過度放電。幫助孩子在學習路上坐得住、聽得進，發揮原本就具備的聰明潛能。', tags: ['專注力不足', '過動', '情緒焦慮'] },
      ],
    },
    {
      title: '皮膚科：肌膚・煥采',
      subtitle: '',
      englishTitle: 'Skin Radiance',
      icon: 'ri-sparkling-line',
      color: '#D4A574',
      treatments: [
        { title: '淨顏・清肌', description: '真正的潔淨，來自體內的代謝平衡。面對反覆發作的青春痘、粉刺與毛囊炎，單靠外用藥往往治標不治本。我們著重於清除體內的『濕熱』毒素，調理脂漏性皮膚炎引起的泛紅出油。將治療轉化為肌膚的斷捨離儀式，由內而外淨化，還原平滑細緻的健康觸感。', tags: ['青春痘', '粉刺', '毛囊炎', '脂漏性皮膚炎'] },
        { title: '舒敏・修復', description: '安撫躁動的肌膚，修復受損的屏障。針對濕疹、蕁麻疹與乾癬等發炎問題，艾苜採用『養血祛風』的調理策略，緩解難耐的皮膚乾癢與紅腫。我們不僅治療皮膚表象，更調節免疫系統的過度反應，讓肌膚重拾自我修復的防禦能力，回歸穩定的健康狀態。', tags: ['濕疹', '蕁麻疹', '乾癬', '皮膚乾癢', '紅腫'] },
        { title: '潤白・光透', description: '褪去暗沈的濾鏡，由內而外點亮肌膚的光。真正的白，是氣血充盈的透亮。針對氣色暗沈、膚色蠟黃與臉部斑點（如肝斑、曬斑），我們著重於內在的『疏肝活血』。透過中藥調理代謝體內黑色素沉澱，改善因熬夜導致的膚色不均，結合美顏針促進微循環，重現如珍珠般的潤白光澤。', tags: ['氣色暗沈', '膚色蠟黃', '肝斑', '曬斑', '膚色不均'] },
      ],
    },
    {
      title: '針灸：經絡・導引',
      subtitle: '',
      englishTitle: 'Meridian Guidance',
      icon: 'ri-pulse-line',
      color: '#6B8E9D',
      treatments: [
        { title: '紓壓・安神', description: '在喧囂的世界裡，為靈魂築一座寧靜的避風港。長期的高壓生活，容易導致自律神經失調，引發胸悶、心悸與莫名的焦慮恐慌。我們運用『寧心安神』的頭皮放鬆針法，調節過度緊繃的神經系統。針對長期疲勞與淺眠困擾，幫助大腦切換至深層休息模式，釋放累積的壓力荷爾蒙。', tags: ['自律神經失調', '胸悶', '心悸', '焦慮恐慌', '長期疲勞', '淺眠'] },
        { title: '舒筋・解痛', description: '疼痛，是身體氣血受阻的呼救。無論是久坐造成的肩頸痠痛、腰痛，或是急性的落枕與運動傷害，我們不只是止痛，更是『釋放』深層筋膜的張力。透過精準的穴位導引，疏通經絡瘀滯，解開坐骨神經痛的糾結，讓身體重獲輕盈自由的流動感。', tags: ['肩頸痠痛', '腰痛', '落枕', '運動傷害', '坐骨神經痛'] },
        { title: '腦神・甦活', description: '把握黃金修復期，為神經迴路重新開機。針對中風後遺症、肢體無力與顏面神經麻痺，我們運用特殊的『醒腦開竅』頭皮針，直接刺激大腦皮質反射區。這是一場喚醒身體記憶的旅程，在針尖的導引下，逐步改善語言障礙與吞嚥困難，重建生活自理的尊嚴與希望。', tags: ['中風後遺症', '肢體無力', '顏面神經麻痺', '語言障礙', '吞嚥困難'] },
      ],
    },
  ],
};
