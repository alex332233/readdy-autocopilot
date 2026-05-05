import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const caseItem = (key, label, name, text, link = '/cases') => ({
  _key: key,
  _type: 'featuredTreatmentCase',
  label,
  name,
  text,
  link,
})

const casesByDraftId = {
  'drafts.featuredTreatmentDetail-body': [
    caseItem(
      'body-case-0',
      '案例 A',
      '產後下腹突出，8 次療程後腹圍少了 6 公分',
      '生完第二胎後，Iris 的下腹完全回不去，試過各種腹部訓練效果都有限。在艾苜接受輕盈・體雕療程後，搭配飲食建議，她說「鏡子裡的腰線又回來了」……',
    ),
    caseItem(
      'body-case-1',
      '案例 B',
      '久坐辦公族的代謝問題，中醫調理後整個人輕盈不少',
      '在科技業工作的 Mark 說自己每天坐超過 10 小時，雖然不算胖但整個人就是「重重的」，消化也不好。療程後他說最大的改變是「早上起床不再水腫，下午也不會想睡」……',
    ),
  ],
  'drafts.featuredTreatmentDetail-eye': [
    caseItem(
      'eye-case-0',
      '案例 A',
      '眼壓過高合併乾眼，3 個月調理後數值下降',
      '45 歲的設計師 Kevin 長期盯著螢幕，眼壓居高不下，眼科追蹤建議搭配中醫輔助。在艾苜接受眼針加中藥調理後，半年複診時眼科醫師也表示數值有明顯改善……',
    ),
    caseItem(
      'eye-case-1',
      '案例 B',
      '飛蚊症困擾多年，中藥調理後大幅改善',
      '林小姐因高度近視產生飛蚊症，嚴重影響工作時的專注力。嘗試多種西醫方案效果有限後，透過朋友介紹來到艾苜，在規律的中藥療程後，飛蚊的數量與頻率都明顯下降……',
    ),
  ],
  'drafts.featuredTreatmentDetail-laser': [
    caseItem(
      'laser-case-0',
      '案例 A',
      '多年濕疹不再反覆，皮膚終於找回平靜',
      '超過十年濕疹病史的 Wendy 幾乎試遍各種外用藥，症狀總在換季時復發。在艾苜搭配雷射針灸與排毒方劑的複合療程後，整個夏天都沒有再發作，她說這是她記憶中最舒服的夏天……',
    ),
    caseItem(
      'laser-case-1',
      '案例 B',
      '頑固性痘疤，療程後明顯淡化平整',
      '21歲的大學生小智因青春期嚴重痘痘留下大量凹疤，對自信心影響很大。透過艾苜的光電複合治療搭配中藥調理，四個月後臉部整體質感大幅提升，周圍朋友都主動問他是做了什麼……',
    ),
  ],
  'drafts.featuredTreatmentDetail-decoction': [
    caseItem(
      'decoction-case-0',
      '案例 A',
      '多囊性卵巢搭配水煎藥調理，終於自然受孕',
      '結婚三年一直求子未果的 Cindy，確診多囊後在婦產科治療的同時也到艾苜接受體質調理。歷經半年的水煎藥療程後，成功自然懷孕，她說這個消息讓全家人都哭了……',
    ),
    caseItem(
      'decoction-case-1',
      '案例 B',
      '長期失眠、焦慮，水藥調理一個月後睡眠改善',
      '從事金融業的 Alex 因工作壓力大導致嚴重失眠，每天睡眠不足四小時且情緒焦躁。在艾苜辨證後開立個人化水煎方，一個月後他回診說終於可以睡超過六小時，早上起床「頭腦清晰多了」……',
    ),
  ],
}

let count = 0

for (const [draftId, featuredCases] of Object.entries(casesByDraftId)) {
  const exists = await client.fetch(`defined(*[_id == $draftId][0]._id)`, {draftId})
  if (!exists) {
    console.warn(`Skip missing draft detail document: ${draftId}`)
    continue
  }

  await client.patch(draftId).set({featuredCases}).commit()
  count += 1
  console.log(`Seeded featured cases for ${draftId}`)
}

console.log(`Done. Seeded featured cases on ${count} draft detail document(s).`)
console.log('Published featured treatment detail documents were not patched.')
