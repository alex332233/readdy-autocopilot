# 正式版疑似 Legacy 頁面盤點

這份文件整理目前 `amu-readdy-code-v2` 中，哪些頁面與元件高度像正式版正在使用的內容，哪些則較像舊版遺留。目的不是立刻刪除，而是避免後續 CMS 與自動化流程被舊 code 誤導。

## 判斷原則

目前先採用這個實務規則：

1. 能從網站任一地方連到的頁面，視為 `Active`
2. 不能從網站任一地方連到的頁面，視為 `Legacy candidate`
3. 如果未來有明確商業需求說明某頁是隱藏正式頁，再另外標記為 `Hidden active`

「能連到」的判斷範圍包含：

1. Navbar
2. Footer
3. 首頁卡片或 CTA
4. 頁內按鈕
5. 列表頁卡片點擊
6. 其他正式頁面的站內連結

## 目前高度像正式版在用的頁面

這些頁面在現行導覽或現行頁面流程中有明確入口，應視為正式版優先範圍：

1. [首頁 `/`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/home/page.tsx)
2. [關於艾苜 `/about`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/about-v2/page.tsx)
3. [健保項目 `/insurance`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/insurance/page.tsx)
4. [特色療程 `/featured-treatments`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/page.tsx)
5. [特色療程子頁 `/featured-treatments/:slug`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/DetailPage.tsx)
6. [醫師團隊 `/team`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/team/page.tsx)
7. [真實見證 `/cases`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/cases/page.tsx)
8. [衛教資訊 `/health-education`](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/health-education/page.tsx)

## 目前高度像舊版遺留的頁面

### 1. `/treatments`

- 檔案：[treatments/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/treatments/page.tsx)
- 原因：
  1. 不在現行 Navbar
  2. 現行 Footer 畫面也沒有獨立入口
  3. 內容結構像舊版整合頁：
     - 健保項目
     - 特色療程
     - 兩個 detail section
  4. 與目前已拆開的 `/insurance`、`/featured-treatments`、`/featured-treatments/:slug` 功能高度重疊

目前建議先把它視為 `Legacy candidate / 待確認頁`，不要因為它仍留在 router 中，就先替它建立正式版 CMS 規則。

## 目前高度像舊版遺留的相關頁面與元件

### 1. 舊版特色療程 detail page

這兩個檔案仍存在，但現行 router 已改走通用 detail page：

1. [featured-treatments/facial/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/facial/page.tsx)
2. [featured-treatments/growth/page.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/growth/page.tsx)

現行正式版入口應以：

- [featured-treatments/DetailPage.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/DetailPage.tsx)

為主。

### 2. 舊版特色療程／主治項目共用元件

以下元件仍被舊頁使用，但不屬於現行正式版新資料流主路徑：

1. [GrowthDetailSection.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/treatments/components/GrowthDetailSection.tsx)
2. [FacialDetailSection.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/treatments/components/FacialDetailSection.tsx)
3. [TreatmentDetailPanel.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/components/TreatmentDetailPanel.tsx)
4. [featured-treatments/facial/components/MoreTreatmentsSection.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/facial/components/MoreTreatmentsSection.tsx)
5. [featured-treatments/growth/components/MoreTreatmentsSection.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/featured-treatments/growth/components/MoreTreatmentsSection.tsx)

### 3. 醫師團隊的舊版本件

目前團隊頁實際使用的是：

- [DoctorCardV5.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/team/components/DoctorCardV5.tsx)

但資料夾中仍有先前版本：

1. [DoctorCardV2.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/team/components/DoctorCardV2.tsx)
2. [DoctorCardV3.tsx](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/team/components/DoctorCardV3.tsx)

這些應視為 `legacy component candidates`，後續不應納入正式版映射範圍。

## 這份盤點的實務用途

1. 正式版 CMS 與 Visual Editing 先跟著 `Active` 頁面走
2. `Legacy candidate` 先不要投入 schema、seed、Presentation 設計
3. 若某個疑似 legacy 頁之後被確認要保留，再重新升級為正式頁面

## 例外情況

雖然目前專案看起來沒有明確出現這類頁面，但自動化規則仍要保留例外註記：

有些頁面可能故意不放明顯入口，但仍是正式頁，例如：

1. SEO landing page
2. 廣告導流頁
3. 活動頁

因此 `不能從網站任何地方連到` 很適合當作 `Legacy candidate` 規則，但不應直接等同於「立刻刪除」。
