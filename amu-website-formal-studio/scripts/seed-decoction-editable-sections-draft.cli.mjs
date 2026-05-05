import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

const item = (key, subtitle, text) => ({
  _key: key,
  _type: 'featuredTreatmentSectionItem',
  subtitle,
  text,
})

const section = (key, title, icon, layout, values = {}) => ({
  _key: key,
  _type: 'featuredTreatmentSection',
  title,
  icon,
  layout,
  ...values,
})

const sections = [
  section('decoction-section-0', '適合對象', 'ri-user-heart-line', 'textOnly', {
    content:
      '專為體質複雜交錯、處於疾病急性期，或正尋求更深層、高效調理的患者設計。科學中藥（藥粉）是日常保養與輕症緩解的得力助手；然而，當您面對症狀較久、多重症狀並存，或是急欲在關鍵時期（如備孕、產後、術後）調養身體時，您會需要一帖更高濃度、量身打造的專屬處方。在艾苜，我們針對不同的健康階段提供最適切的武器，與您一起溫柔且精準地找回身體的平衡。',
  }),
  section('decoction-section-1', '因時制宜，為不同的健康階段選擇最適合的劑型', 'ri-scales-line', 'textOnly', {
    items: [
      item('decoction-comparison-0', '客製彈性', '科學中藥擁有標準化的便利性，適合多數常規狀況；但當面對錯綜複雜的體質（如婦科問題伴隨長期失眠與腸胃不適），水煎藥能讓醫師不受固定比例限制，精準加減每一味藥材的使用量。'),
      item('decoction-comparison-1', '濃度需求', '藥粉受限於單次服用的物理體積，能乘載的藥量有其上限。當身體處於急性期或長年的深層虛損時，水藥能提供更高濃度的有效成分，給予身體推動改變的動能。'),
      item('decoction-comparison-2', '純粹吸收', '科學中藥在製程中必須加入安全的賦形劑（如玉米澱粉）以利乾燥成粉；而水煎藥則是傳統純粹的藥液萃取，對於腸胃極度敏感的患者而言，液態劑型不僅好吸收，也更為溫和。'),
    ],
  }),
  section('decoction-section-2', '艾苜的解方：精準醫療的「全客製化水煎藥」', 'ri-drop-fill', 'textOnly', {
    content: '我們針對您當下的真實需求，提供「靈活配伍，精準萃取」的進階選擇：',
    items: [
      item('decoction-solution-0', '靈活微調', '根據您每次回診最細微的症狀變化，醫師能宛如調音師般，細緻微調您的專屬處方，實現真正的「量身打造」。'),
      item('decoction-solution-1', '高濃萃取', '透過傳統水煎煮法，將藥材的有效成分完整釋放至湯液中，給予受損元氣最直接、深層的滋養。'),
      item('decoction-solution-2', '直達病灶', '水劑形態順口且易於腸胃吸收，能更順利地發揮調理作用，協助身體突破停滯的修復期。'),
      item('decoction-solution-3', '安心代煎', '採用高品質藥材，由專業設備高溫代煎並真空包裝。您不需費時熬煮，帶回家溫熱即飲，讓健康投資變得優雅且從容。'),
    ],
  }),
  section('decoction-section-3', '五大關鍵時期的專屬守護', 'ri-shield-star-line', 'textOnly', {
    eyebrow: '為什麼這個階段，您更需要水藥？',
    content:
      '在生命的不同階段，身體面對的挑戰截然不同。當常規的保養已不足以應付當下的耗損，客製化水藥便能以高濃度與高彈性，成為您突破健康關卡的最佳助力：',
    items: [
      item('decoction-stage-0', '備孕調理｜孕育生機的溫潤沃土', '準備懷孕的過程，就像為種子準備肥沃的土壤。面對難孕、高齡備孕或反覆流產的體質，水藥能不受限於固定比例，順應女性「經期、排卵、黃體期」的細微變化，高濃度滋養子宮與卵巢環境，為迎接新生命打下最穩健的底蘊。'),
      item('decoction-stage-1', '產後修復｜重塑體質的深層滋養', '產後經歷氣血大耗，百脈空虛，正是女人重塑體質的黃金期。客製水藥能根據媽咪每週的惡露排除狀況、哺乳需求與體力恢復程度，進行「階段性」的精準補養。讓您在最疲憊脆弱的時期，獲得最有效率的氣血重建。'),
      item('decoction-stage-2', '疲勞重置｜擺脫透支的深度充電', '長期高壓導致的慢性疲勞、腦霧、睡眠障礙或自律神經失衡，往往是身體深層透支的警訊。當常規藥粉的調理遇到停滯，水藥的高效能釋放，能協助身體打破「慢性發炎與能量耗損」的惡性循環，從根源為您真正充飽電。'),
      item('decoction-stage-3', '大病修護｜術後與病後的溫和重建', '經歷重大疾病（如重感冒後遺症、確診後遺症）或手術後，身體宛如百廢待舉，且此時腸胃吸收力往往最為脆弱。水煎藥無添加賦形劑（澱粉）的純淨液態優勢，能在不增加脾胃負擔的前提下，溫和且高效率地固本培元，加速元氣歸位。'),
      item('decoction-stage-4', '兒少成長｜把握不可逆的黃金衝刺', '孩子的生長板一旦閉合便無法重來。針對發育落後、過敏干擾或急需衝刺身高的孩童，我們捨棄坊間一成不變的傳統轉骨方，透過水藥量身調配「健脾胃、輔生長」的專屬比例。在給予最強大成長動能的同時，精準把關並避開性早熟風險。'),
    ],
  }),
  section('decoction-section-4', '不只於此：每一份獨特的「不舒服」，都值得被精準接住', 'ri-heart-add-line', 'textOnly', {
    content:
      '除了上述的人生關鍵期，客製化水煎藥的精髓，更在於中醫「辨證論治」的無限彈性。我們深知，許多困擾是難以被單一標籤定義的。無論您面對的是：',
    items: [
      item('decoction-beyond-0', '反覆發作的複雜皮膚狀況（如：嚴重濕疹、異位性皮膚炎）', '反覆發作的複雜皮膚狀況（如：嚴重濕疹、異位性皮膚炎）'),
      item('decoction-beyond-1', '長年難解的消化道失衡（如：慢性腸胃發炎、長期胃食道逆流）', '長年難解的消化道失衡（如：慢性腸胃發炎、長期胃食道逆流）'),
      item('decoction-beyond-2', '檢查數值正常，卻始終渾身不對勁的「亞健康」狀態', '檢查數值正常，卻始終渾身不對勁的「亞健康」狀態'),
      item('decoction-beyond-3', '多種慢性病交織，需要全盤考量的輔助調理', '多種慢性病交織，需要全盤考量的輔助調理'),
    ],
    additionalContent:
      '只要常規的藥粉保養已無法滿足您對健康的期待，或是病況錯綜複雜需要多管齊下，水煎藥都能為您量身打造專屬的解方。在艾苜，我們治療的從來不只是「疾病的名稱」，而是全心全意照顧「正在生病的您」。',
  }),
  section('decoction-section-5', '治療流程：四步深度調理旅程，溫柔承接您的健康', 'ri-map-pin-time-line', 'processCards', {
    content: '在艾苜，每一帖水藥的誕生，都有我們嚴謹的流程把關：',
    items: [
      item('decoction-flow-0', '溯源｜深度評估與共識', '初診時，我們透過詳細的望聞問切，為您梳理錯綜複雜的體質脈絡，精準找出最核心的失衡點，並與您凝聚「深度調理」的共識。'),
      item('decoction-flow-1', '裁製｜專屬處方開立', '確立調理方向後，醫師將宛如高階訂製般，針對您的獨特病程，精準拿捏每一味水藥藥材的比例，為您量身擬定階段性的「健康修復地圖」。'),
      item('decoction-flow-2', '淬鍊｜高溫代煎與封存', '全面採用高品質藥材，透過專業設備進行無菌高溫代煎與真空包裝。將繁瑣的熬藥過程交給我們，您只需帶回純粹的精華，溫熱即飲，讓調養生活從容優雅。'),
      item('decoction-flow-3', '守護｜動態追蹤與微調', '隨著身體逐漸恢復，體質也會跟著轉變。我們會在每次回診時，根據您的真實反饋動態微調處方，確保每一包水藥的濃度與方向，都能精準契合您當下的需求，陪伴您穩步走向健康。'),
    ],
  }),
]

await client.patch('drafts.featuredTreatmentDetail-decoction').set({sections}).commit()

console.log(`Seeded ${sections.length} editable decoction sections on drafts.featuredTreatmentDetail-decoction.`)
console.log('Published featuredTreatmentDetail-decoction was not patched.')
