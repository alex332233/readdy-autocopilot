export const teamMembers = [
  {
    id: 1,
    name: '李俊廷',
    title: '醫師',
    bio: '有微生物免疫學的底子，看診時特別喜歡追根究柢找出真正的原因。擅長失眠、自律神經失調和針灸，尤其對中風後遺症和顏面神經麻痺很有心得。喜歡把中醫和現代醫學結合在一起，幫每個人找到最適合自己的調理方式。',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20medicine%20doctor%20portrait%20male%20in%20white%20medical%20coat%20standing%20confidently%20in%20modern%20clinic%20setting%20with%20soft%20natural%20lighting%20clean%20minimalist%20background%20warm%20professional%20atmosphere%20high%20quality%20medical%20photography%20style&width=400&height=500&seq=doctor-lee-portrait&orientation=portrait',
    education: [
      '陽明大學 微生物免疫學研究所',
      '義守大學 學士後中醫學系'
    ],
    experience: [
      '高雄長庚中醫科系 醫師',
      '仁醫堂中醫診所 醫師'
    ],
    specialties: {
      internal: {
        name: '內科',
        items: ['失眠', '自律神經失調', '癌症術後調理', '各類雜病調理']
      },
      gynecology: {
        name: '婦科',
        items: ['不孕症調理', '產後調理', '更年期症候群']
      },
      pediatrics: {
        name: '兒科',
        items: ['注意力不足過動症輔助治療', '小兒近視輔助治療', '小兒轉骨']
      },
      dermatology: {
        name: '皮膚科',
        items: ['青春痘', '蕁麻疹', '濕疹', '汗皰疹', '乾癬']
      },
      acupuncture: {
        name: '針灸科',
        items: ['中風後遺症', '帕金森氏症', '顏面神經麻痺', '手術後疤痕沾黏後遺症', '筋骨痠痛']
      }
    },
    specialTreatments: ['美顏針', '漢方減重', '雷射針灸', '框內針', '珍貴藥材與客製化水藥體質調理'],
    schedule: {
      morning: { label: '早診', time: '09–12', mon: true,  tue: false, wed: false, thu: true,  fri: false, sat: true,  sun: false },
      afternoon: { label: '午診', time: '14–17', mon: false, tue: true,  wed: false, thu: false, fri: true,  sat: true,  sun: false },
      evening: { label: '晚診', time: '18–21', mon: true,  tue: true,  wed: false, thu: true,  fri: false, sat: false, sun: false },
    },
    scheduleNote: '※ 週三、週日及國定假日休診，時間如有異動請依診所公告為主。'
  },
  {
    id: 2,
    name: '歐陽汝亭',
    title: '醫師',
    bio: '在奇美和台南市立醫院都待過，臨床經驗很豐富。最喜歡處理皮膚問題和婦科調理，覺得身體要從內調好，外在才會真的變好。不管是反覆長痘、月經不順還是更年期不舒服，都很樂意一起想辦法。',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20medicine%20doctor%20portrait%20female%20in%20white%20medical%20coat%20standing%20confidently%20in%20modern%20clinic%20setting%20with%20soft%20natural%20lighting%20clean%20minimalist%20background%20warm%20professional%20atmosphere%20high%20quality%20medical%20photography%20style&width=400&height=500&seq=doctor-ouyang-portrait&orientation=portrait',
    education: [
      '義守大學 學士後中醫學系'
    ],
    experience: [
      '奇美醫學中心中醫部',
      '台南市立醫院中醫部'
    ],
    specialties: {
      dermatology: {
        name: '皮膚科',
        items: ['青春痘', '蕁麻疹', '汗皰疹', '濕疹']
      },
      gynecology: {
        name: '婦科',
        items: ['月經調理', '白帶', '更年期', '不孕']
      },
      internal: {
        name: '內科',
        items: ['失眠', '便秘', '鼻過敏', '小兒轉骨']
      },
      acupuncture: {
        name: '針灸科',
        items: ['顏面神經麻痺', '中風後遺症', '痠痛']
      },
      beauty: {
        name: '中醫美容',
        items: ['美顏針', '中藥減重', '針灸雕塑']
      }
    },
    specialTreatments: [],
    schedule: {
      morning: { label: '早診', time: '09–12', mon: false, tue: true,  wed: false, thu: false, fri: true,  sat: false, sun: false },
      afternoon: { label: '午診', time: '14–17', mon: true,  tue: false, wed: false, thu: true,  fri: false, sat: true,  sun: false },
      evening: { label: '晚診', time: '18–21', mon: false, tue: true,  wed: false, thu: false, fri: true,  sat: false, sun: false },
    },
    scheduleNote: '※ 週三、週日及國定假日休診，時間如有異動請依診所公告為主。'
  },
  {
    id: 3,
    name: '吳雅筠',
    title: '醫師',
    bio: '同時有物理治療和中醫的背景，看診時會從動作和體質兩個角度一起評估，感覺特別不一樣。擅長婦科、兒童過敏和皮膚調理，相信身體本來就有自癒的能力，只要找對方向慢慢調，就能越來越好。',
    image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20medicine%20doctor%20portrait%20female%20in%20white%20medical%20coat%20standing%20confidently%20in%20modern%20clinic%20setting%20with%20soft%20natural%20lighting%20clean%20minimalist%20background%20warm%20professional%20atmosphere%20high%20quality%20medical%20photography%20style&width=400&height=500&seq=doctor-wu-portrait&orientation=portrait',
    education: [
      '義守大學 學士後中醫學系',
      '中山醫學大學 物理治療學系'
    ],
    experience: [
      '義大醫院中醫部'
    ],
    specialties: {
      gynecology: {
        name: '婦科',
        items: ['月經疾患', '不孕症', '產後調理', '更年期症候群']
      },
      pediatrics: {
        name: '兒科',
        items: ['過敏性鼻炎', '兒少成長']
      },
      dermatology: {
        name: '皮膚科',
        items: ['濕疹', '痤瘡', '落髮']
      },
      internal: {
        name: '內科',
        items: ['腸胃功能障礙', '感冒']
      },
      beauty: {
        name: '中醫美容',
        items: ['減重', '膚況膚質調理']
      }
    },
    specialTreatments: [],
    schedule: {
      morning: { label: '早診', time: '09–12', mon: true,  tue: false, wed: false, thu: true,  fri: false, sat: true,  sun: false },
      afternoon: { label: '午診', time: '14–17', mon: false, tue: false, wed: false, thu: false, fri: true,  sat: true,  sun: false },
      evening: { label: '晚診', time: '18–21', mon: true,  tue: false, wed: false, thu: true,  fri: false, sat: false, sun: false },
    },
    scheduleNote: '※ 週三、週日及國定假日休診，時間如有異動請依診所公告為主。'
  }
];
