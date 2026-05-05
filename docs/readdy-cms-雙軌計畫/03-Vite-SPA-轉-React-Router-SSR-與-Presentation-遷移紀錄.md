# Vite SPA 轉 React Router SSR 與 Presentation 遷移紀錄

這份文件記錄 `amu-readdy-code-v2` 從 Readdy 匯出的 Vite SPA，遷移到 React Router framework / SSR / Sanity Presentation 的實作經驗。

目的有兩個：

1. 讓這次專案的處理過程可回放、可交接。
2. 幫下一次做成模板或自動化流程時，直接知道哪些步驟可以提早做、哪些坑要先避開。

## 1. 這次實際完成了什麼

本次不是單純修一頁，而是把整個網站的底層執行方式換掉。

核心改動包含：

- 專案從 Vite SPA 改為 React Router framework / SSR
- Vercel 部署模型從靜態 SPA 改成 server/client build
- Sanity preview mode 改成 session-driven，而不是只靠 query string
- Sanity server-side drafts query 打通
- Sanity Presentation / Visual Editing / Live Mode 打通
- staging / preview 環境能成功用 Presentation 驗證多頁面內容

## 2. 為什麼不是每一頁都重做

這次最大的轉換發生在三層：

1. 路由與資料生命週期
2. server-side preview / drafts 狀態
3. browser 端 visual editing / live mode 橋接

因此多數頁面不是「全部重刻」，而是：

- 接入新的 route module
- 把資料抓取改掛在 route loader / `loadQuery`
- 補上可被 Presentation 辨識的 Sanity 資料來源

只要底層橋接打通，原本已經有接 Sanity 資料的頁面，通常會一起獲得：

- SSR 初始資料
- draft preview 能力
- Presentation 可點擊編輯能力

這也是為什麼後來不只首頁，`about` / `team` / `cases` / `health-education` 等頁面也能在 Presentation 中點選編輯。

## 3. 這次做過的關鍵技術改動

### 3.1 React Router framework 化

新增或重構了以下核心入口：

- `amu-readdy-code-v2/src/root.tsx`
- `amu-readdy-code-v2/src/routes.ts`
- `amu-readdy-code-v2/src/routes/*`
- `amu-readdy-code-v2/react-router.config.ts`

這一層負責：

- 定義整個 app 的 framework root
- 讓每個頁面用 route module 的方式運作
- 支援 SSR loader 與 hydration

### 3.2 Vercel 從 SPA 轉為 SSR 站

重點在：

- `amu-readdy-code-v2/vercel.json`

處理內容：

- 不再把專案當成舊的 `vite` 靜態站
- 不再使用 rewrite 到 `/index.html` 的 SPA 模型
- 改由 React Router framework 產生的 server/client 輸出交給 Vercel

### 3.3 Sanity preview session 化

新增：

- `amu-readdy-code-v2/src/sanity/session.server.ts`
- `amu-readdy-code-v2/src/sanity/previewState.server.ts`
- `amu-readdy-code-v2/api/preview-mode/enable.ts`
- `amu-readdy-code-v2/api/preview-mode/disable.ts`
- `amu-readdy-code-v2/api/preview-mode/shared.ts`
- `amu-readdy-code-v2/src/routes/api.preview-mode.enable.ts`
- `amu-readdy-code-v2/src/routes/api.preview-mode.disable.ts`

這一層負責：

- 由 Sanity Presentation 進站時寫入 preview cookies / session
- 讓 server render 時知道目前是 `published` 還是 `drafts`
- 不再把 preview 主流程建立在 query string 上

### 3.4 Sanity server-side client 與 react-loader

新增：

- `amu-readdy-code-v2/src/sanity/serverEnv.ts`
- `amu-readdy-code-v2/src/sanity/serverClient.ts`
- `amu-readdy-code-v2/src/sanity/reactLoader.ts`

目的：

- SSR loader 可用有 token 的 Sanity client 查 drafts
- browser 端與 server 端資料流統一用 `@sanity/react-loader`

### 3.5 Root preview state 注入

在：

- `amu-readdy-code-v2/src/root.tsx`

我們做了：

- `<html data-sanity-preview="...">`
- `<html data-sanity-perspective="...">`
- `window.__SANITY_PREVIEW_STATE__`

用途：

- 讓 browser 端知道目前是不是 preview / drafts
- 讓 Sanity browser client 與 visual editing 走同一份 preview state

### 3.6 Browser Visual Editing / Live Mode

重點檔案：

- `amu-readdy-code-v2/src/sanity/client.ts`
- `amu-readdy-code-v2/src/sanity/SanityVisualEditing.tsx`

處理內容：

- 只在 preview / drafts 模式下啟用 visual editing
- 避免 `enableLiveMode` 在沒有 client 條件下直接炸站
- preview 狀態下 browser client 改用：
  - `useCdn: false`
  - `withCredentials: true`

這是為了滿足 Sanity live events 對 drafts 的要求。

## 4. 首頁先前額外做了什麼

首頁不只是「能被 SSR」，還提早整理成新的資料流。

主要調整：

- `amu-readdy-code-v2/src/routes/home.tsx`
- `amu-readdy-code-v2/src/pages/home/HomePageContentContext.tsx`
- `amu-readdy-code-v2/src/pages/home/useHomePageContent.ts`

首頁做了：

- route loader 先抓首頁 Sanity query
- `useQuery` 對接 `@sanity/react-loader`
- 內容透過 context 傳給首頁元件
- 多個首頁區塊已接上 Sanity 可編輯來源

因此首頁是最早完成「SSR + query + Presentation」完整鏈路的頁面之一。

## 5. 這次踩到的主要坑

### 5.1 舊的 `vercel.json` 會讓驗證全部失真

如果還保留舊的 Vite SPA 設定：

- `framework: "vite"`
- `outputDirectory: "out"`
- rewrite 到 `/index.html`

那正式部署行為會和本地 React Router build 不一致。

### 5.2 server drafts query 沒 token 直接失敗

Sanity server client 只要要查 `drafts`，就需要 read token。

這次實際補的是：

- `SANITY_API_READ_TOKEN`
- `SANITY_SESSION_SECRET`

### 5.3 `enableLiveMode` 不能在未滿足條件時亂跑

曾經發生：

- `SanityVisualEditing` 一 render 就先跑 `useLiveMode`
- 非 preview 情況也進入 live mode
- 直接導致正式網站 `Application Error`

解法是改成：

- 外層先判斷 `visualEditingEnabled + isDraftPreview + sanityClient`
- 條件成立才 render 內層 visual editing component

### 5.4 draft live mode 在 browser 端需要授權條件

Sanity live events for drafts 需要：

- token，或
- `withCredentials: true`

這次在 preview 模式下採用的是 `withCredentials: true`。

### 5.5 Vercel preview 可能被 Deployment Protection 擋住

這次 preview 一開始被擋住：

- `401 Authentication Required`
- `x-frame-options: DENY`

原因是 project 開著 SSO deployment protection。

解法：

- 用 `vercel project protection disable <project> --sso`
  或在 dashboard 關掉該保護

### 5.6 Preview 環境常常只補了一半 env

這次 Preview 一開始只有：

- `SANITY_API_READ_TOKEN`
- `SANITY_SESSION_SECRET`

但缺少：

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_SANITY_USE_CDN`
- `VITE_ENABLE_VISUAL_EDITING`
- `VITE_SANITY_STUDIO_URL`
- `VITE_SITE_NOINDEX`

結果 SSR 首頁直接 500。

### 5.7 Sanity API CORS 必須包含當次 Vercel preview URL

就算網站能開，若 preview domain 沒在 Sanity CORS allowlist：

- `/about`
- `/team`
- `/cases`

這些走 browser-side query 的頁面還是會炸。

而且這次因為用了 `withCredentials`，對該 preview origin 還必須：

- 勾選 `Allow credentials`

### 5.8 Studio `allowOrigins` 也要包含 preview URL

就算 CORS 已正確，若：

- `amu-website-formal-studio/sanity.config.ts`

裡的 `presentationTool({ allowOrigins })` 沒加這次的 preview domain，
Presentation 的 preview location input 仍會報：

- `preview-location-input.error`

### 5.9 Visual Editing 一開始就要使用真實 document `_id`

這次在 `team` 頁曾發生：

- 點醫師圖片，進到新的 untitled 文件
- 或 draft / published 對錯 document

後來確認 Visual Editing 最穩的做法是：

- 一開始就用真實 document `_id`
- 不要用 `doctorId`、slug、業務欄位去猜文件 id

這條規則後續也適用於文章型內容、卡片型內容與其他可 reorder 區塊。

### 5.10 會 reorder 的內容，前端順序必須以 Sanity 陣列為真相來源

這次在 `特色療程首頁卡片` 發生過：

- 前端畫面順序固定
- CMS 順序可 reorder
- Presentation 點擊卻對錯 editor block

根因是：

- 前端使用了 fallback / default 順序當主順序
- Sanity 卡片資料只被當成補值來源

修正後的穩定策略是：

- 由 Sanity `cards[]` 順序作為唯一真相來源
- fallback 只補欄位，不決定排序與身份

這條經驗非常適合寫進未來自動化規則：

- 如果 schema 是可 reorder array
- 前端 render 順序就不應再由 default data 主導

### 5.11 CMS 可選清單不等於 Visual Editing 可精準點選

這次 `icon` 清單化後，雖然後台已改成下拉可選，
但前台一開始仍然只能點整張卡，不能精準命中 `icon` 欄位。

後來補的做法是：

- 在 icon 節點本身掛上 `data-sanity`

這個經驗代表未來自動化工具若要處理：

- icon 欄位
- badge 欄位
- 小型獨立文案

就不能只改 schema，還要同步掃描前端元件補上節點級的 Visual Editing target。

### 5.12 文章編輯器升級適合做成通用模板，而不是專案內一次性改造

這次 `衛教資訊` 與 `真實見證` 的 block editor 升級，已驗證出一個可重用模式：

- 共用 block schema
- 單一共用 renderer
- 先 schema、再第一個內容模組、再第二個內容模組
- 前端 `body` 優先 render，舊欄位 fallback

這很適合之後產品化成：

- schema 生成模板
- renderer 腳手架
- migration checklist

### 5.13 Presentation 側欄看起來重複，不一定是資料真的重複

這次在文章頁排查時，曾經誤以為 `衛教資訊` / `真實見證` 出現新舊文章重複。

後來用 Sanity Vision 與 Structure 交叉確認：

- document `_id` 沒有重複
- `articleId` / `caseId` 沒有重複
- Structure 清單也沒有重複文件

真正原因是 Presentation 側欄會把目前畫面可編輯的多個欄位、標籤或區塊列出來，視覺上容易被誤認為多篇文章。

未來自動化或排查流程應先用 Vision 查：

- 是否同一個 `articleId` / `caseId` 有多筆 published 文件
- 是否只是 `drafts.` 與 published 並存
- 是否 Structure 清單真的重複

不要只看 Presentation 側欄就判定資料重複，更不要直接寫清理 script 刪資料。

### 5.14 slug 是 SEO URL 地基，但 seed slug 只能當過渡值

這次為 `衛教資訊` 與 `真實見證` 補上 slug 後，採用了：

- 前端列表優先連到 slug
- detail loader 同時支援 slug 與舊數字 id
- 舊網址可繼續打開，避免立即斷鏈

但也確認一件事：

- `health-education-1`
- `case-1`

這類 seed 出來的 slug 只能作為過渡值，不能視為正式 SEO slug。

未來自動化可以幫忙補「穩定可用」的臨時 slug，但正式上線前仍應由內容維護者或 SEO 規劃者改成可讀的英文、拼音或策略性 URL。

建議規則：

- schema 先加 `slug`
- 前端先支援 slug + 舊 id 雙軌
- seed script 只補缺漏，不覆蓋人工填寫
- slug 欄位先用 warning，不要一開始就阻擋 publish
- 正式上線前再檢查是否全部換成可讀 slug

### 5.15 新增 CMS 欄位時，先用 warning 比直接 required 更安全

這次補 `slug` 時，如果一開始就把既有文章全部設成 blocking required，會造成：

- 舊文章突然不能 publish
- 客戶以為內容壞掉
- 改版中途被 schema validation 卡住

因此對既有資料新增重要欄位時，建議先採：

- `Rule.required().warning(...)`
- 或先 optional + description

等資料補齊、流程穩定後，再決定是否升級成 blocking required。

這條規則適合未來所有 CMS 漸進式改造，不只文章 slug。

### 5.16 日期欄位不要用 string，應一開始就用 Sanity date

這次文章日期原本是 `string`，導致：

- 可以輸入沒有 `-` 的日期
- `January 4, 2023` 與 `2025-05-20` 混用
- 後續做 structured data / SEO metadata 時會不乾淨

修正後改成 Sanity `date` 型別，讓 Studio 自動提供日期選擇器並統一輸出 `YYYY-MM-DD`。

未來自動化若偵測到欄位名稱為：

- `publishDate`
- `updatedDate`
- `date`

應優先建成 `date`，不要用 `string`。

### 5.17 新增文件 UX 要和新版內容模型同步處理

這次文章升級為新版 `body` block editor 後，若舊欄位仍 required，新增文章會出現矛盾：

- 新版文章應該填 `body`
- 但 Sanity 還要求舊 `content` 必填

修正策略：

- 新版 `body` 優先
- 舊 `content` 改 optional
- 新增文章用 `initialValue` 預先帶入日期、空陣列

未來自動化在導入新版文章編輯器時，不能只新增 `body`，還要同步檢查：

- 舊欄位是否仍 blocking required
- 新文件是否有合理 initial value
- 新增流程是否能不靠舊欄位完成 publish

這次在 `team` 頁另外踩到一個很重要的坑：

- 前台 `data-sanity` 一開始用 `doctorId` 去推測文件 id
- 但 Sanity Presentation 真正需要的是文件本身的 `_id`
- 在 draft / published 並存、手動新增文件、或 seed 規則不完全一致時，就會出現：
  - 點圖片跳到新的 `Untitled` 文件
  - 點到錯的文件
  - draft 與 published 映射混亂

這次後來修正成：

- query 直接把 Sanity 真實 `_id` 帶回前端
- `doctorId` 只保留給排序與業務顯示
- 所有 `data-sanity` 綁定優先使用真實 document `_id`

結論：

- **Visual Editing / Presentation 對應文件時，應一開始就吃真實 `_id`**
- **不要用 `doctorId` / `articleId` / slug 等業務欄位去猜文件 id**

這一條應該列入未來模板與自動化腳手架的預設規則。

### 5.10 Mutation refresh 不要直接整頁 reload

這次一開始為了保證 preview 看得到更新，採用了 mutation 後：

- `window.location.reload()`

雖然表面上可行，但實際在 Presentation 中連續輸入時會造成：

- 整頁白閃
- 編輯時持續跳動
- 使用者誤以為頁面壞掉或卡住

後來改成：

- 優先走 route revalidate / Sanity 內建 refresh 流程

結論：

- **Preview mutation 後不要預設整頁 reload**
- **優先使用 route revalidate 或 Sanity 內建 refresh**
- 若要有回饋感，也應是局部、低干擾，不應是整頁白屏

### 5.18 特色療程 detail 頁也要用真實 `_id` 做 Visual Editing identity

這次 PM 回饋指出四個新特色療程頁在 Presentation 中不能同步編輯。

排查後確認兩個重點：

- 前端如果只用 slug 推測 `featuredTreatmentDetail-${slug}`，在舊資料、draft、手動新增文件或設計稿 slug 遷移後容易指錯 document。
- production dataset 可能存在舊設計稿 detail documents，例如 `pain`、`fertility`、`weight`、`allergy`，但新前端路由是 `body`、`eye`、`laser`、`decoction`。

修正規則：

- GROQ detail query 要回傳真實 `_id`。
- 前端 `data-sanity` 要優先用真實 `_id` 建立 target，只在沒有 document 時 fallback slug。
- specialized detail component 不能只 render hardcoded content；若 CMS document 有完整 `sections[]`，應優先吃 CMS sections 並掛正確 field path。
- 若頁面仍在吃 fallback content，Presentation 只能部分編輯，需先補 canonical published documents 或 migration，再做完整驗收。

未來自動化可檢查：

- detail query 是否投影 `_id`
- `data-sanity` 是否用真實 `_id`
- route slug 是否和 dataset document slug 對齊
- specialized component 是否仍有大量未掛 field path 的硬寫內容

## 6. 哪些可以在 Readdy 匯出 code 的第一天就先做，避免這次的坑

這次不是完全無法提前避開，其實有幾件很值得在一開始就做。

### 6.1 一開始就不要把它當長期 SPA

如果目標本來就是：

- CMS
- drafts preview
- Sanity Presentation

那從 Readdy 匯出後，應該盡快做的不是美化 component，而是先把 app 升到能支援 SSR/loader 的結構。

也就是說：

- 不要先把大量資料流綁死在純 client-side SPA 模式
- 先處理 routing / loader / server entry

### 6.2 一開始就建立統一的 Sanity env 契約

至少先規範好：

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`
- `VITE_SANITY_USE_CDN`
- `VITE_ENABLE_VISUAL_EDITING`
- `VITE_SANITY_STUDIO_URL`
- `SANITY_API_READ_TOKEN`
- `SANITY_SESSION_SECRET`

並且在：

- local
- Preview
- Production

都明確有 checklist。

### 6.3 一開始就把 Studio public URL 與網站 public URL 定下來

例如：

- Studio 網址
- production 網址
- staging 固定網址

若 staging URL 是固定的，就不用每次為 Vercel preview 網址去補：

- Sanity CORS
- Studio `allowOrigins`

### 6.4 一開始就有 staging domain，會比臨時 preview URL 穩很多

這次 Vercel preview URL 每次都變，導致：

- CORS 要補
- `allowOrigins` 要補
- Presentation URL 每次要改

如果之後有固定 staging domain，這整串會簡化很多。

### 6.5 一開始就把頁面資料讀取收斂到 route loader / query hook

如果每個頁面都各自零散地：

- `useEffect fetch`
- local mock data
- 雜湊的 client state fallback

那之後要接 SSR / preview / Presentation 會更痛。

越早把資料流往：

- route loader
- `loadQuery`
- `useQuery`

收斂，越容易後續擴充。

### 6.6 一開始就把可編輯 document 的 `_id` 納入 query 與 component props

若內容類型是可重複 document，例如：

- 醫師
- 案例文章
- 衛教文章
- 特色療程子頁

那 query 應該預設就回傳：

- `_id`

component props 也應保留：

- 真實 document id

避免後續到了 Presentation 階段，才回頭從 `doctorId` / `articleId` 等業務欄位推測文件 id。

## 7. 哪些步驟未來很適合自動化

### 7.1 專案結構檢查

可自動檢查：

- 是否還是舊的 SPA `vercel.json`
- 是否缺 `root.tsx`
- 是否缺 `routes.ts`
- 是否還沒有 React Router framework config

### 7.2 Preview / Presentation 基礎樣板

可半自動生成：

- `session.server.ts`
- `previewState.server.ts`
- `serverClient.ts`
- `reactLoader.ts`
- preview enable/disable API routes
- `SanityVisualEditing.tsx`

### 7.3 Vercel env checklist

可自動檢查三個環境是否缺：

- local
- Preview
- Production

並列出缺漏項。

### 7.4 Sanity CORS 與 Studio allowOrigins 提示

可自動比對：

- production domain
- staging domain
- studio domain

然後提示：

- 哪些 origin 應該加入 CORS
- 哪些應該加入 `allowOrigins`

### 7.5 Presentation 故障排查腳本

可自動依序檢查：

1. preview deployment 是否被 protection 擋住
2. preview URL 是否可公開嵌入
3. env 是否齊全
4. SSR 首頁是否正常
5. preview endpoint 是否有寫 cookies
6. preview 首頁是否輸出 `data-sanity-preview`
7. browser bundle 是否包含 preview client 條件
8. CORS / allowOrigins 是否匹配

### 7.6 Visual Editing 綁定規則檢查

可自動檢查：

- 可編輯 document query 是否有回傳真實 `_id`
- `data-sanity` 是否誤用 `doctorId` / `articleId` / slug 等業務欄位推測文件 id
- mutation refresh 是否仍使用 `window.location.reload()`
- 前端是否直接拿 Sanity 字串做 dedupe、filter、相等比較或 route/key mapping；若字串可能帶 stega metadata，應先用 `stegaClean()` 清理，避免畫面同字串被程式視為不同值
- singleton query 是否在 draft preview 明確優先 draft document，例如 `coalesce(*[_id == "drafts.insurancePage"][0], *[_id == "insurancePage"][0])`；不要只用 `*[_type == "..."][0]`，因為 `drafts` perspective 可能同時看見 draft 與 published，導致 preview 還是拿到 published 資料
- draft-only reference seed 是否把 `_ref` 存成 canonical id，而不是 `drafts.*` id；Sanity 會在 `drafts` perspective 將 draft overlay 成 canonical document，若 reference 指向 `drafts.*`，`treatmentRef->icon` 這類 dereference 可能解析不到
- specialized page component 是否只吃 fallback / hardcoded display，而沒有把 CMS 欄位掛上 `data-sanity`；這會造成畫面看得到內容，但 Presentation 點不到或點到錯誤欄位
- 圖片 Presentation 可點不代表 CMS 欄位已有 asset；若畫面使用前端 fallback URL，點進 Studio 仍會看到空白 image 欄位。驗收期可用 draft-only image seed 將 fallback 圖上傳成 Sanity asset，正式上線前再換成正式圖片

### 7.7 Taxonomy Reference 與 Presentation 的關係

療程 taxonomy 採 `treatmentTaxonomyItem` reference document，而不是 string key 或自由 icon class。

原因：

- Sanity 的資料關聯應由 `_id` / `_ref` 負責，前端或 migration 不需要用中文名稱猜身份。
- `key` 只作為 readOnly 的 seed、migration、debug、fallback 輔助，不給 PM 修改。
- 中文名稱、醫師 tag 名稱是可維護內容，不是資料 identity；名稱日後可調整，但 reference 不會因此斷掉。
- reference selector 可依 `category` 限制可選項，例如健保欄位只選 `category == "insurance"`、特色療程欄位只選 `category == "featured"`，`reserved` 預設不進一般選單。
- Presentation / Visual Editing 仍要保留真實 `_id` 與正確 field path；前端 projection 不能把 reference 展開後就丟失原 document 的可編輯路徑。

未來可抽成 Readdy / Sanity scaffold：

1. 產生 taxonomy document schema，固定 `key`、`category`、`icon` 為 readOnly。
2. 產生 reference selector helper，內建 `filter`、`disableNew` 與 category 限制。
3. 產生 audit-only migration script，先列出舊欄位到 taxonomy 的 mapping，再由 `--apply` 或環境變數明確 patch。
4. 產生 draft-only seed script，讓 PM 可先在 Presentation 驗收，不立即改 published production。
5. 產生前端 projection pattern：優先讀 `treatmentRef->...`，保留舊欄位 fallback，並保留真實 `_id` / `_key` 供 `data-sanity` 使用。

## 8. 這次遷移的建議結論

未來如果從 Readdy 匯出 code，而最終目標仍然是：

- CMS 驅動
- drafts preview
- Sanity Presentation

那比較好的路線不是：

- 先把 SPA 做很多頁，再回頭改 SSR

而是：

1. 先搭好 React Router framework / SSR 骨架
2. 先定義 Sanity env / preview / staging 契約
3. 先打通一頁完整的 query + Presentation 流程
4. 再逐頁接資料與元件

這樣能少掉很多「做完又回拆」的成本。
