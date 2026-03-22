# Sanity建置自動化經驗清單

這份文件整理艾苜正式版在建立 Sanity 專案、接上 Studio、seed 內容、設定本地預覽時遇到的實際問題，目的是讓之後自動化流程有明確的避坑清單與固定順序。

## 1. Sanity CLI 在某些執行環境會被判成 unattended mode

- 現象：
  - `npm create sanity@latest` 沒進互動流程
  - 直接報：
    - `--dataset must be specified`
    - `--output-path must be specified`
    - `checkbox prompt cannot run in non-interactive environment`
- 原因：
  - CLI 執行環境被判成非互動模式
- 處理：
  1. 先用 `npx sanity@latest login --provider google` 完成登入
  2. 再用帶參數方式建立專案
  3. 若只是要拿 project，不要期待 CLI 一定能像本機手動一樣進互動選單
- 後續自動化建議：
  - 流程一開始就假設要走「參數化建立」
  - 不依賴互動 prompt

## 2. 用 unattended mode 建新 project 時，需要明確給完整參數

- 現象：
  - 缺少 `dataset`
  - 缺少 `output-path`
  - 缺少 `organization`
- 原因：
  - `create-sanity` 在 unattended mode 不會幫你補問
- 處理：
  - 至少準備這些參數：
    - `--organization <id>`
    - `--create-project <name>`
    - `--dataset production`
    - `--visibility public`
    - `--output-path <path>`
    - `--template clean`
    - `--typescript`
    - `--package-manager npm`
- 後續自動化建議：
  - 先取得 organization id，再建立 project
  - 不要等錯誤訊息一個一個補

## 3. organization id 需要事先知道

- 現象：
  - `--create-project is not supported in unattended mode without an organization`
- 原因：
  - CLI 建立新 project 時需要知道要掛在哪個 organization 下
- 這次處理：
  - 先查登入帳號可用的 organizations
  - 最後確認正式專案使用：
    - organization name: `StarBoAi`
    - organization id: `otlj8qKBI`
- 後續自動化建議：
  - 把 organization id 作為固定設定保存
  - 不要每次重新查

## 4. 正式版 Studio codebase 可以先建，再接 project

- 現象：
  - 這次不是先用 CLI 建完整 Studio，再改檔
  - 而是先手工建立 `amu-website-formal-studio` 骨架，再接 `projectId`
- 原因：
  - 已有明確 schema / content model
  - 不想讓 CLI 產生的預設內容覆蓋既有正式版骨架
- 處理：
  - 先建立 Studio 專案檔案
  - 再把 `.env.local` / `sanity.config.ts` 指向正式 `projectId`
- 後續自動化建議：
  - 把「Studio scaffold」和「Sanity project creation」視為兩步
  - 不要強耦合成同一個 CLI 流程

## 5. CORS 必須對每個新 project 重新設定

- 現象：
  - 前端 `localhost:3000` 請求被擋
  - Presentation / Visual Editing 無法連線
- 原因：
  - 新正式專案不會繼承 POC 專案的 CORS 設定
- 這次處理：
  - 新增並確認：
    - `http://localhost:3000`
    - `http://localhost:3333`
- 後續自動化建議：
  - 建完 project 後立刻執行：
    - `cors add http://localhost:3000 --credentials`
    - `cors add http://localhost:3333 --credentials`
  - 把這一步列為必跑，不要靠人工記憶

## 6. Visual Editing 本地測試時，env 開關必須開

- 現象：
  - Studio Presentation 會顯示：
    - `Unable to connect to visual editing`
- 可能原因：
  - `VITE_ENABLE_VISUAL_EDITING=false`
- 這次處理：
  - 本地測試改回 `true`
- 後續自動化建議：
  - `.env.local` 區分：
    - local preview: `true`
    - production: `false`
  - 明確寫進啟動 checklist

## 7. 先 seed 初始內容，比手填穩定

- 現象：
  - 如果每次從空白 Studio 開始，容易花時間手填，也容易漏欄位
- 這次處理：
  - 建 `homePageSeed`
  - 用 script 一次寫入 `homePage`
- 後續自動化建議：
  - 每個正式站都保留 seed 流程
  - 至少首頁與核心列表頁要可 seed
  - 內容來源最好來自前端 defaults / mock 的結構化轉換

## 8. 建完正式 project 後，要立刻驗證三件事

- 必驗：
  1. Studio build 是否成功
  2. seed 是否能寫入
  3. 前端 query 是否能讀回資料
- 這次驗證：
  - Studio build成功
  - `Seeded homePage: homePage`
  - query 回傳 `title: 首頁`、`heroTitle: 以艾醫身`
- 後續自動化建議：
  - 建 project 完成後自動跑一輪 smoke test

## 9. POC 與正式版 project 必須明確分離

- 現象：
  - 容易把 POC 設定和正式設定混在一起
- 這次正式專案：
  - POC: `ddxhhkaw`
  - Formal: `pnfq5r7n`
- 後續自動化建議：
  - 文件與 env 都明確標 `poc` / `formal`
  - 避免錯把 seed、CORS、token 打到錯專案

## 10. 正式版目前適合的實作順序

- 建議固定順序：
  1. 建 Studio scaffold
  2. Sanity login
  3. 建 formal project + dataset
  4. 接 `.env.local` / `sanity.config.ts`
  5. 安裝 Studio 依賴
  6. build schema
  7. 設定 CORS
  8. seed homepage
  9. 啟動前端 + Studio
  10. 驗證 Presentation / Visual Editing

## 11. smoke test 要檢查什麼

- 定義：
  - `smoke test` 是建完專案後跑的最小必要驗證，用來確認整條建置鏈路是通的，不是完整測試。
- 這類 Sanity 自動化流程建議至少檢查：
  1. project / dataset 是否存在
  2. Studio schema 是否可 build
  3. seed 是否可寫入
  4. query 是否能讀回核心文件
  5. CORS 是否已包含本地前端與 Studio origin
  6. 前端首頁是否能成功拿到 Sanity 內容
- 這次可作為基準的 smoke test 項目：
  - `project created` ✅
  - `studio build` ✅
  - `seed success` ✅
  - `query success` ✅
  - `cors ok` ✅
- 後續自動化建議：
  - 在 project 建立後自動執行
  - 最後輸出一份簡單結果清單，讓人一眼判斷這次建置是否可交接到前端串接階段

## 12. 圖片欄位在 Presentation 中可能會出現「右側欄位可編，但畫面點不到」

- 現象：
  - 在 Studio 的欄位面板中可以看到圖片 URL 欄位
  - 點選右側欄位後，畫面上會出現對應 overlay
  - 但直接在 Presentation 畫面上 hover / click 圖片本體時，無法選到該圖片
- 這次實際遇到的區塊：
  - Hero 主視覺圖片
  - 診所空間 gallery 三張圖
- 原因：
  1. 只有 schema 和 query 正確還不夠，圖片這種非文字欄位需要更明確的 DOM 標記
  2. 覆蓋在圖片上方的漸層、hover mask、透明前景層，常常會把滑鼠事件吃掉
  3. 某些區塊雖然看起來能選到，但只是靠 stega / alt / 結構剛好命中，不夠穩定
- 這次有效的處理方式：
  1. 在圖片容器加上：
     - `data-sanity-edit-group`
     - `data-sanity-edit-target`
  2. 在 `<img>` 本體加上：
     - `data-sanity={對應圖片欄位路徑}`
     - 例如：`hero.image.url`、`gallery.images[0].url`
  3. 所有蓋在圖片上的視覺遮罩都改成：
     - `pointer-events-none`
  4. 如果有透明但滿版的前景內容層擋住圖片：
     - 父層改成 `pointer-events-none`
     - 真正要互動的文字/按鈕子層改成 `pointer-events-auto`
- 後續自動化建議：
  - 不要只依賴 stega 或 alt 讓圖片「碰巧可點」
  - 所有進入 Visual Editing 的主圖、卡片圖、gallery 圖，都統一套用同一套顯式標記模式
  - 在 smoke test 之外，再加一個人工驗證項目：
    - 至少抽查 1 張 Hero 圖、1 張 gallery 圖、1 張內容圖，確認能直接從畫面 hover / click 選到

## 13. Readdy 的 preview、page code、mock data 可能彼此不一致，正式串接時要先定主來源

- 現象：
  - 同一個功能區塊，preview 畫面、page code、mock data 內容可能不完全一致
  - 這次在 `特色療程` 就同時出現：
    - `特色療程主頁（列表頁）` 的 page code
    - `mocks/treatments.ts` 裡的 `featuredTreatmentsData`
    - `facialDetailData / growthDetailData`
- 可能原因：
  - 這比較像 Readdy 輸出流程的問題，不一定是設計師整理錯
- 這次處理：
  - 先以實際 `page code` 為主來源
  - mock 資料作為補充參考
  - 不直接用 preview 去覆蓋 code-based seed
- 後續自動化建議：
  - 建立 seed 前，先指定 `source of truth`
  - 若 preview 與 code 不一致，先記錄差異，不要直接混用
  - 正式接 CMS 時，預設優先相信 repo 裡正在運行的 page code

## 14. 特色療程主頁（列表頁）與特色療程子頁（detail 頁）的 seed 規則要分開定

- 現象：
  - `特色療程主頁（列表頁）` 顯示的是 6 張療程卡片
  - `特色療程子頁（detail 頁）` 顯示的是單一療程的完整長內容
  - 這兩塊在目前 codebase 中，本來就不是從同一份資料長出來的
- 這次處理：
  - `特色療程主頁（列表頁）` 的 6 張卡片：以目前 page code 為準
  - `facial / growth` 兩個 `特色療程子頁（detail 頁）`：以 detail mock 為準
  - 其餘 4 個 detail 頁：先 seed placeholder 骨幹，等設計與文案定稿後再補完整內容
- 後續自動化建議：
  - 不要假設有列表卡片，就一定有對應的完整 detail 內容
  - 自動化流程要允許同時建立：
    - 完整 seed 文件
    - placeholder 骨幹文件
  - 這樣可以先把 schema、路由、Studio 編輯流程打通，不必等所有內容定稿才開始

## 15. 特色療程子頁（detail 頁）即使已經讀到 Sanity 資料，畫面仍可能完全點不到

- 現象：
  - 這次 `facial` / `growth` 子頁已經成功從 Sanity query 讀到資料
  - 但一開始在 Presentation 畫面上，沒有任何區塊可以直接 hover / click 編輯
- 原因：
  - detail 頁的 DOM 沒有顯式 `data-sanity` 標記
  - 過度依賴 stega 或自動判定，對長內容頁不夠穩定
- 這次處理：
  - 在 detail 頁主要可見內容上，直接加上對應欄位的 `data-sanity`
  - 至少補到：
    - 頁面 title / subtitle
    - section title
    - eyebrow / content / additionalContent
    - item subtitle / text
    - case label / text

## 16. 用 seed / API 寫入 Sanity 的 array object 時，必須主動補 `_key`

- 現象：
  - `醫師團隊 /team` 的 `專長科別` 在 Presentation 右側面板顯示：
    - `Missing keys`
  - 畫面上的標籤雖然看得到，但無法正常編輯
- 原因：
  - `specialtyGroups[]` 是 object array
  - 這類欄位如果是用 seed / API 建立，Sanity 不會幫你補齊 `_key`
  - 沒有 `_key` 的 array object 在 Studio / Presentation 會進入不可編狀態
- 這次處理：
  - 在 seed 階段為每個 `specialtyGroups[]` 項目補上穩定 `_key`
  - 重新 `seed:team` 後，Presentation 就能正常編輯
- 後續自動化建議：
  - 所有 object array 在 seed 時都視為必須補 `_key`
  - 不要只對最外層文件補 `_id`，也要檢查內層 array item
  - 自動化流程可加一個檢查：
    - 掃描 seed 產物中的 object array，若缺 `_key` 則自動生成

## 17. 像分類按鈕這種從內容自動長出的 UI，不要再額外建一份可編模型

- 現象：
  - `真實見證 /cases` 頁面有一排分類按鈕：
    - `全部`
    - `內科`
    - `婦科`
  - 看起來像可以做成 page-level 可編欄位，但實際上它是從 `caseArticle.category` 自動推導出來的
- 原因：
  - 這種 UI 元素本質上是「資料衍生結果」
  - 如果另外再做一份 `filterCategories[]`，很容易和文章真實分類不同步
- 這次處理：
  - 保留 `全部` 為固定 UI 行為
  - 其他分類按鈕直接由文章內容自動生成
  - 不再額外建一份可編的 category button schema
- 後續自動化建議：
  - 先判斷某個 UI 元素是「原始內容」還是「衍生 UI」
  - 若是衍生 UI，優先讓它從原始資料自動生成
  - 只有在確定需要獨立排序、獨立命名、獨立顯隱時，才另外建模

## 18. 全站共用的 header / footer，應該收斂成單一 `siteSettings` + root loader

- 現象：
  - Navbar / Footer 會被多個頁面重複引用
  - 如果每個頁面各自帶一份 header / footer 資料，後續會變成多處重複維護
- 這次處理：
  - 在 Studio 建立單一 `siteSettings` document
  - 將 header logo / 導覽 / CTA、footer logo / 連結群組 / 診所資訊 / 社群都集中在同一份文件
  - 在前端 router 的 root route 加 loader，讓 Navbar / Footer 用 `useRouteLoaderData('root')` 直接取資料
- 後續自動化建議：
  - 對全站共用 UI，優先考慮 singleton document，而不是散在各頁 page document
  - 這類 singleton 適合搭配：
    - 固定 `_id`
    - 固定 seed 腳本
    - root loader
  - 這樣後續自動化佈站時，只要 seed 一次，就能讓所有頁面共用同一份設定

## 19. Studio schema 的名稱或 hidden 規則改了之後，開發中的 Studio 不一定會立刻反映

- 現象：
  - schema 檔已經把 `專長群組` 改成 `專長科別`
  - `專長項目` 也已經設成 `hidden: true`
  - 但 Studio 畫面仍可能暫時顯示舊名稱或舊欄位
- 原因：
  - 開發中的 Studio 可能還在吃舊的 schema 快取
- 這次處理：
  - 先確認 schema 原始碼無誤
  - 再透過重新整理或重開 `sanity dev` 讓 Studio 重新載入 schema
- 後續自動化建議：
  - 自動化流程中，schema 異動後至少跑一次 `sanity build`
  - 若是人工驗證階段看到 Studio 與原始碼不一致，先懷疑快取，而不是直接回頭改 schema

## 16. 自動化在掃描 legacy 頁面時，不要只看 router，要看「網站是否真的能連到」

- 現象：
  - 某些頁面雖然還留在 route config 或 page 檔案中，但實際上已不在網站導覽與頁面流程裡
  - 這次最明顯的例子是：
    - `/treatments`
    - 舊版 `featured-treatments/facial/page.tsx`
    - 舊版 `featured-treatments/growth/page.tsx`
- 問題：
  - 如果自動化只看 `router` 或只看 `src/pages/**/page.tsx`
  - 很容易把舊頁誤判成正式版頁面，進而錯做 schema、seed、Visual Editing
- 這次得到的較佳規則：
  1. 能從網站任一地方連到的頁面，優先視為 `Active`
  2. 不能從網站任何地方連到的頁面，先視為 `Legacy candidate`
  3. 不是 `Active` 的頁面，先排除出正式 CMS / 自動化範圍
- 這裡的「任一地方」包含：
  - Navbar
  - Footer
  - 首頁卡片與 CTA
  - 頁內按鈕
  - 列表卡片點擊
  - 其他正式頁的站內連結
- 後續自動化建議：
  - 先掃 route
  - 再掃實際站內導航目標
  - 用兩者差異找出 `legacy candidates`
  - 產出的應該是「疑似 legacy 報告」，不是自動刪除名單

## 17. Legacy 頁面辨識要保留例外，不要直接假設無入口頁一定無效

- 雖然目前專案沒有明確看到這類頁面，但之後自動化仍應保留例外規則。
- 可能的例外：
  1. SEO landing page
  2. 廣告導流頁
  3. 活動頁
- 這類頁面可能故意不放在 Navbar 或一般導覽中，但仍是有效正式頁。
- 後續自動化建議：
  - 無入口頁先標記成 `Legacy candidate`
  - 但仍保留人工確認欄位，例如：
    - `Hidden active?`
    - `Campaign page?`
    - `SEO landing page?`
  - 原則是先排除出正式 CMS 實作範圍，不直接刪檔。
    - section image
    - disclaimer
    - CTA title / description / buttonText
  - 圖片區塊同樣搭配：
    - `data-sanity-edit-group`
    - `data-sanity-edit-target`
    - `<img data-sanity=...>`
- 後續自動化建議：
  - 對結構較複雜的 detail 頁，不要只靠隱式 stega
  - 將 `data-sanity` 標記策略視為內容映射的一部分，而不是最後才補的細節

## 16. 多筆 document 的 `_id` 命名不要用 `.`，否則可能造成 published/public query 與 Studio 結構混淆

- 現象：
  - `team` 頁面的 `doctorProfile` 在 Structure 裡出現 6 筆，看起來像重複醫師資料
  - 在 Presentation 編輯其中一筆醫師資料並 publish 後，前端沒有變化
  - 但在 Structure 編輯另一筆同名醫師，前端就會更新
  - 類似狀況也影響到：
    - `caseArticle`
    - `healthEducationArticle`
    - `featuredTreatmentDetail`
- 根因：
  - 多筆文件在 seed 時使用了帶 `.` 的 `_id`，例如：
    - `doctorProfile.1`
    - `caseArticle.1`
    - `healthEducationArticle.101`
    - `featuredTreatmentDetail.facial`
  - 後續改成新的 `_id` 命名規則後，又保留了舊文件，造成同一份內容同時存在兩批 document
  - 前端公開 query 實際吃的是新的 published 文件，但 Studio/Presentation 仍可能讓人編到舊的重複文件
- 這次處理：
  1. 將多筆 document 的 `_id` 統一改成穩定、非 dotted 的命名，例如：
     - `doctorProfile-1`
     - `caseArticle-1`
     - `healthEducationArticle-101`
     - `featuredTreatmentDetail-facial`
  2. 重跑 seed，確保前端公開 query 能讀到正確文件
  3. 查出 Structure 中舊的 dotted `_id` 重複文件後，刪除舊文件，只保留前端實際讀取的那一批
- 後續自動化建議：
  - 多筆 document 的 `_id` 一律使用：
    - `type-slug`
    - `type-index`
    - 或其他穩定、非 dotted 的規則
  - 不要對 multi-document 使用 `type.1`、`type.slug` 這種 dotted `_id`
  - 若有重新命名 `_id` 的 migration，必須包含「舊文件清理」步驟，避免同時留下新舊兩批 document
  - 建議在 seed 後自動檢查：
    - 同一 `_type` 是否出現看似成對的新舊 `_id`
    - 同一業務主鍵（例如 `doctorId`、`slug`、`postId`）是否對應多筆文件

## 17. Visual Editing 的 refresh 不要對 draft mutation 過度敏感

- 現象：
  - 在 Studio / Presentation 中編輯內容時，使用者只是打字、尚未 publish，前端就頻繁白屏或整頁刷新
  - publish 後又再刷新一次，體驗不佳
- 根因：
  - 若對所有 mutation 都直接觸發整頁 reload，draft 變更也會被當成正式更新處理
  - 在 React Router loader 架構下，這會讓使用者在編輯過程中頻繁失去上下文
- 這次處理：
  - `drafts.` 開頭的 mutation 不觸發 refresh
  - 只有 published document mutation 才觸發 refresh
  - 手動 refresh 仍保留預設行為
- 後續自動化建議：
  - 如果前端採用 `React Router loader + Sanity Presentation`：
    - 預設不要對所有 mutation 都 reload
    - refresh 策略至少要區分：
      1. draft mutation
      2. published mutation
      3. manual refresh
  - 若尚未接即時資料訂閱，published mutation 可接受使用 `window.location.reload()` 作為保守方案
  - 但 draft mutation 一律應避免整頁刷新

## 18. 當 Presentation 與前端顯示不一致時，要先確認「前端實際讀的是哪一批 document」

- 現象：
  - Structure 裡看得到文件，也能編輯、publish
  - 但前端完全沒變，容易誤以為是 query、VE、cache 或前端渲染問題
- 這次實際情況：
  - 問題不在前端欄位映射，而在於前端公開 query 實際讀的是另一批 `_id`
  - 使用者在 Presentation 改到的是舊的重複文件，因此 publish 後前端不會反映
- 這次處理：
  - 直接查公開 API / 前端 query 回傳內容，確認：
    - 前端實際讀到的 `_id`
    - 當前公開資料的名稱、文案、圖片 URL
  - 再與 Structure 中的文件比對，找出重複文件來源
- 後續自動化建議：
  - 當遇到「Studio 有變、前端沒變」時，檢查順序應為：
    1. 前端 query 是否成功
    2. 公開 API 實際回傳哪一筆 `_id`
    3. Structure 中是否存在同內容的新舊重複文件
  - 不要一開始就假設是 cache 或前端渲染 bug
  - 若有 seed / migration 流程，建議自動輸出：
    - 每個核心 `_type` 的公開文件 `_id` 清單
    - 是否存在同業務主鍵的重複文件

## 19. 資料已換新 `_id` 後，`data-sanity` 也要同步更新，不然點畫面會連到已刪除文件

- 現象：
  - `team` 頁醫師資料已只剩 3 筆，前端顯示內容也是新的文件
  - 但在 Presentation 直接點醫師照片時，右側卻打開一筆已刪除的舊文件，顯示 `This document has been deleted`
- 根因：
  - 雖然實際資料層已從 `doctorProfile.2` 改成 `doctorProfile-2`
  - 但前端 `data-sanity` 生成規則仍沿用舊的 dotted `_id`
  - 結果變成：
    - 畫面顯示的是新文件內容
    - overlay / click target 指向的是舊文件
- 這次處理：
  - 將所有多筆 document 的 `data-sanity` id 規則同步改成新的 hyphen `_id`：
    - `doctorProfile-{id}`
    - `caseArticle-{id}`
    - `healthEducationArticle-{id}`
    - `featuredTreatmentDetail-{slug}`
- 後續自動化建議：
  - 任何 `_id` 命名 migration，不只要改 seed 與 query，也要一起掃描：
    - `dataAttributes`
    - `createDataAttribute`
    - 各頁手寫 `data-sanity` helper
  - 可以在 migration 後增加一個檢查：
    - 搜尋是否仍存在舊 `_id` 命名樣式
    - 確認畫面上 click 進去的文件 `_id` 與前端 query 實際讀到的 `_id` 一致
