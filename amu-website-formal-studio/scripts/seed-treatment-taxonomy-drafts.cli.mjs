import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const taxonomyItems = [
  {
    key: 'herbal-internal',
    category: 'insurance',
    icon: 'ri-hearts-line',
    insuranceName: '本草・歸元',
    doctorTagName: '內科',
    homeCardSubtitle: '內科體質調理',
    homeCardDescription: '針對呼吸道修復(長新冠)、自律神經失調(失眠焦慮)、消化機能(胃食道逆流)與泌尿系統進行深層淨化與平衡。',
  },
  {
    key: 'women-health',
    category: 'insurance',
    icon: 'ri-women-line',
    insuranceName: '月・悅・圓',
    doctorTagName: '婦科',
    homeCardSubtitle: '全方位婦科',
    homeCardDescription: '涵蓋月經調律、暖宮溫養、備孕生機(結合人工生殖調理)、產後坐月子復元及熟齡更年期自在調理。',
  },
  {
    key: 'pediatric-growth',
    category: 'insurance',
    icon: 'ri-seedling-line',
    insuranceName: '小苗・茁壯',
    doctorTagName: '兒少科',
    homeCardSubtitle: '兒少生長發育',
    homeCardDescription: '專注於開胃健脾、舒敏抗戰(過敏體質)、改善夜尿與提升專注力的聰明開竅方案。',
  },
  {
    key: 'dermatology',
    category: 'insurance',
    icon: 'ri-bard-line',
    insuranceName: '肌膚・煥采',
    doctorTagName: '皮膚科',
    homeCardSubtitle: '中醫美學皮膚科',
    homeCardDescription: '透過內在疏肝活血與外在美顏針,解決青春痘、濕疹蕁麻疹及暗沉斑點,還原肌膚潤白光透。',
  },
  {
    key: 'acupuncture',
    category: 'insurance',
    icon: 'ri-crosshair-2-line',
    insuranceName: '經絡・導引',
    doctorTagName: '針灸科',
    homeCardSubtitle: '經絡針灸調理',
    homeCardDescription: '透過針灸、艾灸與經絡調理，協助舒緩痠痛、睡眠失衡與自律神經緊繃，讓身體重新找回循環與平衡。',
  },
  {
    key: 'facial',
    category: 'featured',
    icon: 'ri-magic-line',
    featuredName: '御顏・緊緻',
    doctorTagName: '美顏針',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '運用精微針法刺激面部經絡與筋膜層,促進膠原蛋白新生,改善法令紋與輪廓鬆弛,無需手術達到自然拉提效果。',
  },
  {
    key: 'growth',
    category: 'featured',
    icon: 'ri-rocket-2-line',
    featuredName: '登峰・轉骨',
    doctorTagName: '轉骨',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '把握青春期黃金生長期,結合雷射針灸刺激生長板活性,搭配個人化中藥方劑調理脾胃與腎氣,全方位促進骨骼發育與身高增長。',
  },
  {
    key: 'body',
    category: 'featured',
    icon: 'ri-bluesky-line',
    featuredName: '輕盈・體雕',
    doctorTagName: '體雕',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '透過穴位埋線技術持續刺激經絡,加速脂肪分解與代謝循環,針對局部頑固脂肪進行精準雕塑,打造健康勻稱身形。',
  },
  {
    key: 'eye',
    category: 'featured',
    icon: 'ri-eye-line',
    featuredName: '明眸・亮視',
    doctorTagName: '眼針',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '針對長時間使用3C產品造成的眼睛疲勞、乾澀與視力模糊,運用眼周特定穴位針灸改善眼部血液循環,有效延緩近視加深。',
  },
  {
    key: 'laser',
    category: 'featured',
    icon: 'ri-flashlight-line',
    featuredName: '光能・修復',
    doctorTagName: '雷射針灸',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '以低能量雷射照射穴位，提供溫和、無創的經絡刺激，適合怕針或需要細緻調理的族群。',
  },
  {
    key: 'decoction',
    category: 'featured',
    icon: 'ri-flask-line',
    featuredName: '深癒・淬鍊',
    doctorTagName: '客製水煎藥',
    homeCardSubtitle: '艾苜特色療程',
    homeCardDescription: '依照體質與階段需求客製水煎藥方，讓藥材比例與煎煮方式更貼近個人狀態，提供深層調理支持。',
  },
  {
    key: 'fertility-reserved',
    category: 'reserved',
    icon: 'ri-flower-line',
    featuredName: '預留',
    doctorTagName: '備孕',
  },
]

const featuredCardKeyToTreatmentKey = {
  'card-facial': 'facial',
  'card-growth': 'growth',
  'card-pain': 'body',
  'card-fertility': 'eye',
  'card-weight': 'laser',
  'card-allergy': 'decoction',
}

const detailDraftIdToTreatmentKey = {
  'drafts.featuredTreatmentDetail-body': 'body',
  'drafts.featuredTreatmentDetail-eye': 'eye',
  'drafts.featuredTreatmentDetail-laser': 'laser',
  'drafts.featuredTreatmentDetail-decoction': 'decoction',
}

const draftTaxonomyId = (key) => `drafts.treatmentTaxonomyItem-${key}`
const taxonomyId = (key) => `treatmentTaxonomyItem-${key}`
const draftReference = (key) => ({_type: 'reference', _ref: taxonomyId(key), _weak: true})

for (const item of taxonomyItems) {
  await client.createOrReplace({
    _id: draftTaxonomyId(item.key),
    _type: 'treatmentTaxonomyItem',
    ...item,
  })
  console.log(`Seeded draft taxonomy item ${item.key}`)
}

const featuredPage = await client.fetch(`
  *[_id == "featuredTreatmentsPage"][0]{
    title,
    heroTitle,
    heroDescription,
    seo,
    cards[]{
      _key,
      _type,
      title,
      englishTitle,
      icon,
      color,
      image,
      treatmentTitle,
      description,
      tags,
      detailSlug
    }
  }
`)

if (!featuredPage) {
  throw new Error('Missing published featuredTreatmentsPage. Draft seed needs the current published page as a base.')
}

const cards = (featuredPage.cards || []).map((card) => {
  const treatmentKey = featuredCardKeyToTreatmentKey[card._key]
  const nextCard = {...card}
  if (!nextCard.image) {
    delete nextCard.image
  }

  if (!treatmentKey) {
    console.warn(`No treatment taxonomy mapping for card ${card._key || 'missing-key'}`)
    return nextCard
  }

  return {
    ...nextCard,
    treatmentRef: draftReference(treatmentKey),
  }
})

await client.createOrReplace({
  _id: 'drafts.featuredTreatmentsPage',
  _type: 'featuredTreatmentsPage',
  title: featuredPage.title,
  heroTitle: featuredPage.heroTitle,
  heroDescription: featuredPage.heroDescription,
  seo: featuredPage.seo,
  cards,
})

console.log(`Seeded draft featuredTreatmentsPage with ${cards.length} treatment references`)

for (const [draftId, treatmentKey] of Object.entries(detailDraftIdToTreatmentKey)) {
  const exists = await client.fetch(`defined(*[_id == $draftId][0]._id)`, {draftId})

  if (!exists) {
    console.warn(`Skip ${draftId}: draft detail document does not exist yet`)
    continue
  }

  await client.patch(draftId).set({treatmentRef: draftReference(treatmentKey)}).commit()
  console.log(`Linked ${draftId} -> ${treatmentKey}`)
}

console.log('Done. Draft-only taxonomy seed complete. Published documents were not patched.')
