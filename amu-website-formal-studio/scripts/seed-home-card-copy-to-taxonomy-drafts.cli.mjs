import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const treatmentKeyByServiceTitle = {
  '本草・歸元': 'herbal-internal',
  '月・悅・圓': 'women-health',
  '小苗・茁壯': 'pediatric-growth',
  '肌膚・煥采': 'dermatology',
  '經絡・導引': 'acupuncture',
  '御顏・緊緻': 'facial',
  '輕盈・體雕': 'body',
  '登峰・轉骨': 'growth',
  '明眸・亮視': 'eye',
  '光能・修復': 'laser',
  '深癒・淬鍊': 'decoction',
}

const defaultHomeCopyByTreatmentKey = {
  'herbal-internal': {
    homeCardSubtitle: '內科體質調理',
    homeCardDescription: '針對呼吸道修復(長新冠)、自律神經失調(失眠焦慮)、消化機能(胃食道逆流)與泌尿系統進行深層淨化與平衡。',
  },
  'women-health': {
    homeCardSubtitle: '全方位婦科',
    homeCardDescription: '涵蓋月經調律、暖宮溫養、備孕生機(結合人工生殖調理)、產後坐月子復元及熟齡更年期自在調理。',
  },
  'pediatric-growth': {
    homeCardSubtitle: '兒少生長發育',
    homeCardDescription: '專注於開胃健脾、舒敏抗戰(過敏體質)、改善夜尿與提升專注力的聰明開竅方案。',
  },
  dermatology: {
    homeCardSubtitle: '中醫美學皮膚科',
    homeCardDescription: '透過內在疏肝活血與外在美顏針,解決青春痘、濕疹蕁麻疹及暗沉斑點,還原肌膚潤白光透。',
  },
  acupuncture: {
    homeCardSubtitle: '經絡針灸調理',
    homeCardDescription: '透過針灸、艾灸與經絡調理，協助舒緩痠痛、睡眠失衡與自律神經緊繃，讓身體重新找回循環與平衡。',
  },
  facial: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '運用精微針法刺激面部經絡與筋膜層,促進膠原蛋白新生,改善法令紋與輪廓鬆弛,無需手術達到自然拉提效果。',
  },
  body: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '透過穴位埋線技術持續刺激經絡,加速脂肪分解與代謝循環,針對局部頑固脂肪進行精準雕塑,打造健康勻稱身形。',
  },
  growth: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '把握青春期黃金生長期,結合雷射針灸刺激生長板活性,搭配個人化中藥方劑調理脾胃與腎氣,全方位促進骨骼發育與身高增長。',
  },
  eye: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '針對長時間使用3C產品造成的眼睛疲勞、乾澀與視力模糊,運用眼周特定穴位針灸改善眼部血液循環,有效延緩近視加深。',
  },
  laser: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '以低能量雷射照射穴位，提供溫和、無創的經絡刺激，適合怕針或需要細緻調理的族群。',
  },
  decoction: {
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '依照體質與階段需求客製水煎藥方，讓藥材比例與煎煮方式更貼近個人狀態，提供深層調理支持。',
  },
}

const keyFromRef = (ref) =>
  typeof ref === 'string' ? ref.replace(/^drafts\./, '').replace(/^treatmentTaxonomyItem-/, '') : undefined

const serviceItems = await client.fetch(`
  coalesce(*[_id == "drafts.homePage"][0], *[_id == "homePage"][0]){
    services{
      items[]{
        title,
        subtitle,
        description,
        "treatmentRefId": treatmentRef._ref,
        "treatmentKey": treatmentRef->key
      }
    }
  }.services.items
`)

let count = 0
const copyByTreatmentKey = {...defaultHomeCopyByTreatmentKey}

for (const item of serviceItems || []) {
  const treatmentKey = item?.treatmentKey || keyFromRef(item?.treatmentRefId) || treatmentKeyByServiceTitle[item?.title]

  if (!treatmentKey) {
    console.warn(`Skip service item without treatmentRef: ${item?.title || 'unknown'}`)
    continue
  }

  copyByTreatmentKey[treatmentKey] = {
    ...copyByTreatmentKey[treatmentKey],
    ...(item.subtitle ? {homeCardSubtitle: item.subtitle} : {}),
    ...(item.description ? {homeCardDescription: item.description} : {}),
  }
}

for (const [treatmentKey, patchValues] of Object.entries(copyByTreatmentKey)) {
  if (!patchValues?.homeCardSubtitle && !patchValues?.homeCardDescription) continue

  if (Object.keys(patchValues).length === 0) continue

  await client
    .patch(`drafts.treatmentTaxonomyItem-${treatmentKey}`)
    .set(patchValues)
    .commit()

  count += 1
  console.log(`Seeded home card copy for ${treatmentKey}`)
}

console.log(`Done. Seeded ${count} draft taxonomy home card copy item(s).`)
console.log('Published taxonomy documents were not patched.')
