import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const sharedCta = {
  ctaTitle: '艾苜中醫，您的健康護身符',
  ctaDescription: '讓我們一起守護您與家人的健康，在生活的縫隙中，築起最溫柔的防線。',
  ctaButtonText: '立即預約初診',
}

const section = (key, title, icon, layout, fields = {}) => ({
  _key: key,
  _type: 'featuredTreatmentSection',
  title,
  icon,
  layout,
  ...fields,
})

const item = (key, subtitle, text) => ({
  _key: key,
  _type: 'featuredTreatmentSectionItem',
  subtitle,
  text,
})

const processItems = (prefix) => [
  item(`${prefix}-process-1`, '評估剖析｜洞察根源', '醫師透過問診、把脈與生活型態評估，釐清目前困擾背後的體質脈絡。'),
  item(`${prefix}-process-2`, '精準策略｜量身訂製', '依據個人狀況規劃穴位、內服調理與生活建議，讓療程方向更貼近實際需求。'),
  item(`${prefix}-process-3`, '療程執行｜溫柔介入', '以低負擔方式完成療程，過程由醫師與團隊細緻把關，降低不必要的不適與焦慮。'),
  item(`${prefix}-process-4`, '追蹤鞏固｜穩定延續', '回診追蹤身體反應並滾動調整，讓調理成果能在日常中逐步累積。'),
]

const draftDocs = [
  {
    _id: 'drafts.featuredTreatmentDetail-body',
    _type: 'featuredTreatmentDetail',
    title: '輕盈・體雕',
    slug: {_type: 'slug', current: 'body'},
    subtitle: '外埋線體雕・內中藥調理，重塑代謝記憶',
    themeColor: '#b8956a',
    sections: [
      section('body-section-0', '適合對象', 'ri-user-heart-line', 'textOnly', {
        eyebrow: '專為對體態平衡有自我要求的都會女性、上班族與忙碌媽媽量身打造',
        content: '當身體代謝步調放慢、容易受水腫困擾，或是在意腹部、大腿、手臂等局部線條時，艾苜以中醫體質評估搭配外在穴位刺激，協助身體找回輕盈節奏。',
      }),
      section('body-section-1', '妳的困擾，我們懂', 'ri-heart-line', 'textImage', {
        content: '體態的起伏，往往是壓力、作息與代謝失衡共同累積的訊號。妳需要的不只是數字下降，而是能融入生活、低負擔且長期穩定的調理方式。',
      }),
      section('body-section-2', '艾苜的解方：內在調和與經絡啟動', 'ri-scales-3-line', 'imageText', {
        content: '透過客製化穴位刺激與漢方內服調理，從循環、濕氣與代謝狀態切入，溫和協助身體重啟原本的節奏。',
        additionalContent: '療程由醫師依據體質與階段目標調整，不追求速成，而是讓身體在可維持的步調中逐步穩定。',
      }),
      section('body-section-3', '療程體驗：每一次，都是專屬的精雕細琢', 'ri-map-pin-time-line', 'processCards', {
        content: '在艾苜，每一次的輕盈體驗，都有我們專業嚴謹的流程把關：',
        items: processItems('body'),
      }),
    ],
    disclaimer: '【艾苜中醫溫馨提醒】療程效能與恢復期會因個人體質、年齡與生活作息而有所差異，實際治療計畫需由專業中醫師親自診斷評估。',
    ...sharedCta,
  },
  {
    _id: 'drafts.featuredTreatmentDetail-eye',
    _type: 'featuredTreatmentDetail',
    title: '明眸・亮視',
    slug: {_type: 'slug', current: 'eye'},
    subtitle: '眼針調理・中藥滋養，重現晶亮神采',
    themeColor: '#b8956a',
    sections: [
      section('eye-section-0', '適合對象', 'ri-user-heart-line', 'textOnly', {
        eyebrow: '專為長時間專注於螢幕的上班族、設計師、工程師與重度 3C 使用者設計',
        content: '若你常感到乾澀、痠脹、視線模糊，或擔心孩子視力快速波動，艾苜以眼周穴位調節與中藥滋養，協助雙眼恢復舒適節奏。',
      }),
      section('eye-section-1', '妳的困擾，我們懂', 'ri-heart-line', 'textImage', {
        content: '數位時代讓雙眼長期承受負荷，短暫休息或點眼藥水往往只能暫時緩解。你需要的是更深層的放鬆與氣血滋養。',
      }),
      section('eye-section-2', '艾苜的解方：滋養與微調的視界美學', 'ri-eye-line', 'imageText', {
        content: '明眸・亮視療程結合眼周微針穴位調節與中醫體質分析，旨在舒緩疲憊肌群、促進眼周循環。',
        additionalContent: '同步搭配滋養肝腎、明目護眼的調理方向，讓照護從眼周延伸到整體體質。',
      }),
      section('eye-section-3', '療程體驗：每一次，都是專屬的精雕細琢', 'ri-map-pin-time-line', 'processCards', {
        content: '在艾苜，每一次的視覺亮化，都有我們嚴謹的流程把關：',
        items: processItems('eye'),
      }),
    ],
    disclaimer: '【艾苜中醫溫馨提醒】眼周血管豐富，體質敏感者可能有局部微小瘀青等反應，實際療程需由醫師評估後執行。',
    ...sharedCta,
  },
  {
    _id: 'drafts.featuredTreatmentDetail-laser',
    _type: 'featuredTreatmentDetail',
    title: '光能・修復',
    slug: {_type: 'slug', current: 'laser'},
    subtitle: '無痛雷射針灸・溫柔喚醒，讓每個年齡層都能安心調理',
    themeColor: '#5a7a6e',
    sections: [
      section('laser-section-0', '適合對象', 'ri-user-heart-line', 'textOnly', {
        eyebrow: '專為對痛感敏感、曾有暈針經驗，或渴望溫和長期調理的族群設計',
        content: '無論是孩子、長者，或對傳統針灸較排斥的患者，光能・修復以低能量雷射提供更放鬆的穴位介入選擇。',
      }),
      section('laser-section-1', '妳的困擾，我們懂', 'ri-heart-line', 'textImage', {
        content: '對針感的恐懼常讓調理難以持續。艾苜希望讓治療本身不再成為壓力，而是能被穩定接受的照護方式。',
      }),
      section('laser-section-2', '艾苜的解方：純淨光能的無痛導引', 'ri-flashlight-line', 'imageText', {
        content: '低能量雷射結合經絡穴位學，不需進針即可溫和照射穴位與肌筋膜壓痛點，協助身體進入修復狀態。',
        additionalContent: '搭配個人化中藥調理，讓光能介入與體質照護互相配合，降低療程負擔。',
      }),
      section('laser-section-3', '療程體驗：每一次，都是專屬的精雕細琢', 'ri-map-pin-time-line', 'processCards', {
        content: '在艾苜，每一次的光能修復，都有我們嚴謹的流程把關：',
        items: processItems('laser'),
      }),
    ],
    disclaimer: '【艾苜中醫溫馨提醒】任何醫療處置均需視個人情況調整，實際照射部位、頻率與搭配治療需由醫師評估後制定。',
    ctaTitle: '讓光能喚醒身體的自癒力',
    ctaDescription: '無痛、無傷口、不用怕針，現在就為自己或孩子預約第一次諮詢，感受光能・修復的溫柔療癒力。',
    ctaButtonText: '立即預約初診',
  },
  {
    _id: 'drafts.featuredTreatmentDetail-decoction',
    _type: 'featuredTreatmentDetail',
    title: '深癒・淬鍊',
    slug: {_type: 'slug', current: 'decoction'},
    subtitle: '全客製水煎藥・深層淬鍊，為每一個生命關鍵期精準守護',
    themeColor: '#5a7a6e',
    sections: [
      section('decoction-section-0', '適合對象', 'ri-user-heart-line', 'textOnly', {
        content: '專為體質複雜交錯、處於疾病急性期，或正尋求更深層高效調理的患者設計。當常規保養已不足以應付當下耗損，客製水藥能提供更高彈性的專屬處方。',
      }),
      section('decoction-section-1', '因時制宜，選擇最適合的劑型', 'ri-scales-line', 'textOnly', {
        content: '科學中藥適合多數日常保養；水煎藥則能在複雜體質、急性期或關鍵修復階段提供更高濃度與更細緻的調整彈性。',
      }),
      section('decoction-section-2', '艾苜的解方：全客製化水煎藥', 'ri-drop-fill', 'textOnly', {
        content: '醫師依據每次回診的症狀變化動態調整處方，透過高品質藥材與專業代煎流程，讓每一帖水藥都更貼近當下需求。',
      }),
      section('decoction-section-3', '治療流程：四步深度調理旅程', 'ri-map-pin-time-line', 'processCards', {
        content: '在艾苜，每一帖水藥的誕生，都有我們嚴謹的流程把關：',
        items: processItems('decoction'),
      }),
    ],
    disclaimer: '【艾苜中醫溫馨提醒】水煎藥處方組成、服用頻率與週期需由專業中醫師親自看診與評估後制定。',
    ctaTitle: '讓每一帖水藥，都成為您的深層修復',
    ctaDescription: '現在就預約初診諮詢，讓艾苜的醫師為您梳理體質，開立最精準的水煎藥調理計畫。',
    ctaButtonText: '立即預約初診',
  },
]

for (const doc of draftDocs) {
  await client.createOrReplace(doc)
  console.log(`Seeded draft ${doc._id} (${doc.slug.current})`)
}

console.log(`Done. Seeded ${draftDocs.length} featured treatment detail draft documents.`)
