# 艾苜網站 SEO 現狀與分階段執行規劃

## 一、現況總結

艾苜網站目前並不是沒有 SEO 基礎，而是屬於：

「內容模型有準備，但前端落地還不完整」

也就是說，網站已經具備一部分可持續做 SEO 的條件，但目前仍需要補齊技術輸出與頁面策略，才能真正穩定承接自然搜尋流量。

## 二、目前已具備的 SEO 基礎

### 1. 內容後台已有 SEO 欄位基礎

Sanity 內容模型中，多數主要頁型已經設有 `seo` 欄位，可供後續維運使用，例如：

- 首頁
- 關於頁
- 健保項目頁
- 特色療程頁
- 特色療程子頁
- 真實見證頁
- 衛教文章

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/objects/seo.ts](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/objects/seo.ts)
- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/homePage.ts](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/homePage.ts)
- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/featuredTreatmentDetail.ts](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/featuredTreatmentDetail.ts)
- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/healthEducationArticle.ts](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-website-formal-studio/schemaTypes/documents/healthEducationArticle.ts)

### 2. 前端已有可輸出 meta 的基礎元件

前端已有 `PageMeta` 元件，可輸出：

- `title`
- `description`
- `og:title`
- `og:description`
- `og:image`
- Twitter meta

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/components/PageMeta.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/components/PageMeta.tsx)

### 3. 網站頁面結構與正式路由已成形

網站已具備正式頁面結構與前端路由，可支撐後續頁面定位與內容布局，例如：

- 首頁
- 關於艾苜
- 健保項目
- 特色療程
- 真實見證
- 衛教資訊
- 醫師團隊

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/router/config.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/router/config.tsx)

## 三、目前缺少或仍需補強的 SEO 項目

### 1. 多數主要頁面尚未完整輸出獨立 meta

目前只有文章詳情頁與案例詳情頁有實際使用 `PageMeta`。首頁、關於、健保、特色療程等主要頁面，尚未完整輸出各自獨立的 `title`、`description`、OG。

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/detail/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/detail/page.tsx)
- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/cases/detail/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/cases/detail/page.tsx)

### 2. 後台雖有 SEO 欄位，但前端尚未全面接出

雖然後台已有 `seo` 欄位，但從查詢邏輯來看，並未全面套用到所有主要頁面。

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/sanity/queries.ts](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/sanity/queries.ts)

### 3. 尚未看到 sitemap 與 robots.txt

目前專案中未看到實際存在的：

- `robots.txt`
- `sitemap.xml`

這會影響搜尋引擎的抓取與收錄效率。

### 4. 尚未看到 canonical 輸出策略

目前未看到前端針對各頁輸出 canonical，後續若頁面結構擴充、或存在多路徑內容時，容易讓搜尋引擎不易判斷主版本。

### 5. 尚未看到 schema.org 結構化資料

目前尚未看到以下類型的結構化資料輸出：

- `MedicalClinic`
- `WebSite`
- `Article`
- `FAQPage`
- `BreadcrumbList`

這會影響搜尋引擎對診所網站、文章內容與 FAQ 區塊的理解。

### 6. 衛教與案例網址目前仍是數字 ID

目前衛教與案例詳情頁連結仍使用數字 ID，而非可讀型 slug。

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/components/ArticleCard.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/components/ArticleCard.tsx)
- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/cases/components/BlogCard.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/cases/components/BlogCard.tsx)

這會影響：

- 網址可讀性
- 關鍵字可見性
- 長期維護與分享體驗

### 7. 衛教分類目前較像前端篩選，不是獨立可收錄頁

目前衛教主頁是透過前端切換分類，不是每個分類都有自己的正式可收錄頁面。

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/page.tsx)

這會讓網站較難穩定承接：

- 症狀詞
- 主題詞
- 分類型長尾搜尋

### 8. 網站目前是 SPA 架構

目前站點採用 SPA 路由 rewrite 方式，SEO 不是不能做，但首頁與主要頁型的可抓取表現，通常不如 SSR / SSG 架構穩定。

可參考：

- [/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/vercel.json](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/vercel.json)

### 9. 可評估導入 prerender，降低 SPA 對 SEO 的限制

若維持目前 SPA 架構，搜尋引擎初始拿到的 HTML 會較薄，頁面主要內容與 meta 多半要等前端 JavaScript 執行後才補上。

因此可評估在現有架構上導入 `prerender` 機制，將重要 SEO 頁面在 build 階段先輸出為完整 HTML，讓搜尋引擎一開始就能讀到：

- 該頁完整內容
- title
- meta description
- canonical
- schema.org 結構化資料

對官網型網站而言，這種做法的 SEO 效果通常可接近 SSR，但技術成本會低於整站改為 SSR。

艾苜網站可依 SEO 優先順序，分兩層評估 prerender：

第一優先頁型：

- 首頁
- 關於艾苜
- 健保項目
- 特色療程列表頁
- 特色療程子頁
- 衛教文章頁
- 真實見證文章頁

這一層頁面最值得優先處理，因為直接承接：

- 品牌詞
- 地區詞
- 服務詞
- 症狀詞

第二優先頁型：

- 衛教列表頁
- 真實見證列表頁
- 醫師團隊頁

這一層頁面也可納入 prerender，但可視開發時程與資源安排，在第一優先頁型完成後再處理。

此作法的重點不只是預先輸出畫面，而是要連同每頁 SEO head 資訊一起預先輸出，才能真正改善搜尋引擎抓取與索引穩定性。

## 四、可承接 SEO 的頁面角色建議

### 首頁

適合承接：

- 品牌詞
- 地區詞
- 診所整體定位詞

例如：

- `艾苜中醫`
- `艾苜中醫診所`
- `台南北區中醫`

### 健保項目頁

適合承接：

- 健保可看範圍
- 常見診療項目
- 中醫可以看什麼

### 特色療程頁 / 療程子頁

適合承接：

- 高意圖服務詞
- 商業轉換型關鍵字

例如：

- `台南中醫減重`
- `台南美顏針`
- `台南針灸`

### 真實見證頁

適合承接：

- 案例型搜尋
- 信任建立
- 症狀與療程的輔助轉換

### 衛教資訊頁

適合承接：

- 症狀型關鍵字
- 知識型長尾關鍵字
- 主題分類型搜尋

## 五、分三階段執行的 SEO 規劃

### 第一階段：先補技術基礎

目標：

- 讓網站可被正確抓取、理解、收錄

建議執行項目：

- 首頁、關於、健保、特色療程、療程子頁、衛教列表、案例列表都補齊 title / description / OG
- 串接 Sanity 的 SEO 欄位到前端
- 建立 `robots.txt`
- 建立 `sitemap.xml`
- 補 canonical 規則
- 建立基礎 schema
- 評估並規劃 prerender 機制，優先套用在主要 SEO 頁面
- 檢查 H1 / H2 / alt / 內部連結
- 確認 404 與 redirect 策略

此階段重點：

- 先把網站從「可以看」變成「可以被搜尋引擎正確理解」
- 若可行，進一步讓主要頁面在初始 HTML 就具備完整 SEO 資訊，而不是等前端執行後才補上

### 第二階段：定義可排名頁面與頁面定位

目標：

- 讓每個頁面知道自己要承接什麼搜尋意圖

建議執行項目：

- 首頁承接品牌詞與地區詞
- 健保項目頁承接健保診療範圍與問題詞
- 特色療程頁與療程子頁承接高意圖服務詞
- 真實見證頁承接案例型與信任型搜尋
- 衛教頁重新設計分類策略，讓分類頁可收錄
- 案例與文章 URL 改成 slug 制
- 建立內部連結邏輯

此階段重點：

- 不是只有補 meta，而是決定每個頁面在 SEO 裡的任務分工

### 第三階段：內容與在地 SEO 成長

目標：

- 從品牌詞往服務詞、症狀詞與在地流量持續延伸

建議執行項目：

- 建立 3 個月衛教題庫
- 針對 `失眠中醫`、`青春痘中醫`、`自律神經失調 中醫` 等主題做內容
- 讓真實見證與衛教互相導流
- Google 商家與官網 NAP 一致化
- 地區詞布局，例如 `台南中醫`、`台南北區中醫`
- 每月追蹤曝光、點擊、收錄與查詢詞

此階段重點：

- 透過內容與在地 SEO，穩定放大自然搜尋流量

## 六、建議的優先順序

若以艾苜網站現況來看，建議優先順序如下：

- 先做品牌詞
- 再做地區詞
- 再做高意圖服務詞
- 最後持續擴張症狀詞長尾內容

原因是診所型官網通常應優先穩住：

- 可直接帶來預約的搜尋流量
- 具品牌辨識與地區需求的搜尋

再透過衛教內容逐步放大自然搜尋入口。

## 七、與方案的對應關係

若對應 SEO 服務方案，可整理為：

- 第一階段：對應 `方案 A｜SEO 基礎建設包`
- 第二階段：對應 `方案 B｜SEO 策略規劃包`
- 第三階段：對應 `方案 C～E｜SEO 維運方案`

標準執行路徑：

- `方案 A → 方案 B → 方案 C / D / E`

若預算較有限，也可採用：

- `方案 A → 方案 C`

並在前期維運中逐步補入部分策略規劃內容。
