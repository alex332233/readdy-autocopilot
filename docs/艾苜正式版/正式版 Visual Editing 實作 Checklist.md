# 艾苜正式版 Visual Editing 實作 Checklist

更新日期：2026-03-21

## 目的
本文件用於整理艾苜網站正式版導入 Sanity 與 Visual Editing 的實作項目，作為正式開發與驗收的執行清單。

## 1. Sanity 專案與內容模型
- 建立正式 Sanity project
- 建立正式 dataset
- 定義正式 schema
- 區分 singleton 與 array 類型內容
- 定義文字、圖片、連結、SEO、CTA 等欄位規則
- 建立首頁與各子頁對應的內容文件

## 2. 前端內容映射
- 將 hardcode / mocks 改為讀取 Sanity 資料
- 串接首頁各區塊
- 串接主要子頁各區塊
- 處理輪播、卡片、FAQ、文章列表等 array 類型內容
- 必要時保留 fallback 邏輯

## 3. Visual Editing 相容處理
- 調整 query 結構，讓欄位可對應回 Studio
- 調整元件 render 方式，避免破壞 mapping
- 盡量避免不必要的字串 split、重組與過度加工
- 調整 router / loader / refresh 行為
- 驗證 publish 後 preview 是否能正確刷新

## 4. Sanity Presentation / Preview 設定
- 設定 presentationTool
- 設定 preview URL
- 區分本地、preview、production 環境
- 驗證 draft / published 內容切換
- 驗證從畫面點擊可正確定位到對應欄位

## 5. 編輯流程設計
- 定義哪些欄位可編輯
- 定義哪些欄位只在 Studio 表單改
- 定義哪些區塊要支援完整 Visual Editing
- 定義文字長度、圖片比例、連結開關等限制
- 定義客戶實際使用流程與權限

## 6. 內容初始化
- 將正式版既有內容帶入 Sanity
- 建立首頁初始文件
- 建立子頁初始內容
- 建立部落格、FAQ、醫師、服務等初始資料
- 校正圖片、alt、slug、CTA 目標

## 7. 安全與環境控制
- 設定 `VITE_ENABLE_VISUAL_EDITING` 等環境變數
- 正式環境關閉 overlay
- Preview 環境開啟 overlay
- 設定 Studio 權限
- 設定 CORS / origin 白名單

## 8. 發布與部署流程
- 設定 Studio publish 流程
- 設定 Vercel preview / production 環境
- 設定 webhook / rebuild / revalidate
- 確認 build 與 preview 行為一致

## 9. 驗證與驗收
- 驗證每個區塊點擊定位是否正確
- 驗證 publish 後內容是否正確刷新
- 驗證文字、圖片、連結、array 是否皆可修改
- 驗證排序、新增、刪除是否正常
- 驗證正式站不顯示 Visual Editing overlay

## 10. 文件與交接
- 製作編輯操作說明
- 整理權限與環境說明
- 整理各欄位對應位置
- 製作常見問題與限制說明

## 補充說明
- 正式版可先完整實作 Visual Editing 能力
- 若正式環境不希望開放，僅需透過環境設定關閉 overlay
- 是否開放客戶進入 Studio，仍需透過 Sanity 權限控制
- `關於艾苜` 的 [FullscreenSlider](/Users/alex332233/Documents/projects/website/艾苜網站readdyCode/amu-readdy-code-v2/src/pages/about-v2/components/FullscreenSlider.tsx) 目前刻意維持靜態，不納入 CMS / Presentation；待設計定稿後再決定是否改為可編輪播區塊
- `健保項目` 頁目前已將頁面層內容（Hero、上方 overview cards、下方詳細分類）完整納入 `insurancePage`，避免後續獨立維護時仍受舊 mock 或 legacy 頁面影響
- `衛教資訊` 已完成第一版正式串接：
  - 列表頁 `/health-education`
  - 文章頁 `/health-education/:id`
  - `healthEducationPage` 與 `healthEducationArticle` schema / seed / query / Presentation 已完成
  - 文章底部 FAQ 仍刻意保留，待設計定稿後再加入
- `header / footer` 已收斂成單一 `siteSettings` 文件，並透過 router root loader 提供給全站共用元件
- `醫師團隊` 的 `專長科別` 已保留目前前端會顯示的層級；更細的 `專長項目` 先不在 Studio 顯示，避免客戶編輯到目前前端未使用的資料

## 目前已完成頁面
- 首頁：主要穩定區塊已串接 Sanity，`診所據點` 仍保留後續調整空間
- 特色療程：列表頁與通用子頁 `:slug` 已串接 Sanity，並可在 Presentation 編輯
- 關於艾苜：主敘事區塊已完成骨幹與 Presentation，`FullscreenSlider` 暫不納入 CMS
- 健保項目：整頁已串接 `insurancePage`
- 真實見證：列表頁與內頁已串接 `casesPage` / `caseArticle`
- 醫師團隊：`teamPage` / `doctorProfile` 已串接完成
- 衛教資訊：列表頁與文章頁已串接完成
- Header / Footer：已改由 `siteSettings` 控制

## 待設計或後續確認
- 衛教資訊文章底部 FAQ 區塊：待設計定稿
- 分院頁與分院專屬 Line@ 邏輯：目前未納入正式版範圍
- `treatments` 頁仍視為 legacy candidate，不納入正式版主線實作
