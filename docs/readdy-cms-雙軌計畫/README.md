# Readdy CMS 雙軌計畫

這個目錄用來保存本次針對艾苜專案與後續 readdy 產品化的雙軌規劃。

目前包含：

- `01-專案交付軌.md`
  以現有 `amu-readdy-code-v2` 為基礎，遷移到 React Router framework/SSR，並保持前端呈現一致。
- `02-模板產品化軌.md`
  從原始 readdy 輸出整理可重複套用的 CMS-ready starter 與後續自動化方向。
- `03-Vite-SPA-轉-React-Router-SSR-與-Presentation-遷移紀錄.md`
  記錄本次從 Readdy 匯出 SPA 遷移到 SSR、preview、Presentation 的技術細節、踩坑與未來可自動化步驟。
- `04-艾苜網站執行清單與優先順序.md`
  將本次 bug、CMS 能力、頁面調整、SEO 與上線事項整理成可直接執行的 checklist。
- `05-通用文章編輯器升級規格與艾苜落地方案.md`
  定義可重用的文章編輯器功能範圍、內容模型、雙軌遷移策略，以及本次套用到衛教資訊與真實見證的落地方式。

建議使用方式：

1. 先依 `01-專案交付軌.md` 確認當前專案的實作順序與驗收點。
2. 在專案穩定後，依 `02-模板產品化軌.md` 抽出通用模板與生成規則。
3. 後續如果有實作細節、風險補充或驗收結果，可直接追加到這個目錄下。
