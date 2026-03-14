# Sanity Visual Editing 啟動清單

## 目標
以目前 `readdy-code`（React + Vite + React Router）為基礎，完成：
- 建好 Sanity 專案與 dataset
- 建 `home/section/blog` 基礎 schema
- 首頁 Hero 接 Sanity 做 Visual Editing POC
- 建 preview URL 與 Vercel preview branch 流程
- production 不啟用 Visual Editing overlay

## A. 建立 Sanity 專案與 dataset
1. 在根目錄建立 studio 專案（建議獨立資料夾）：
```bash
cd /Users/alex332233/Documents/projects/website/艾苜網站readdyCode
npm create sanity@latest
```
2. 建議設定：
- Project：`amu-website-cms`
- Dataset：`production`
- Studio 部署網域：例如 `https://amu-cms.sanity.studio`
3. 額外建立 preview dataset（可選但建議）：
```bash
cd <your-sanity-studio-folder>
npx sanity dataset create preview
```

## B. 建立基礎 schema（home / section / blog）
以下為可直接使用的最小結構示例（放在 `schemaTypes`）：

```ts
// section.ts
import {defineType, defineField} from "sanity";

export default defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({name: "title", type: "string"}),
    defineField({name: "subtitle", type: "text", rows: 3}),
    defineField({name: "image", type: "image"}),
    defineField({name: "linkUrl", type: "url"}),
    defineField({name: "linkText", type: "string"}),
    defineField({name: "enabled", type: "boolean", initialValue: true}),
  ],
});
```

```ts
// homePage.ts
import {defineType, defineField} from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({name: "titleLine1", type: "string"}),
        defineField({name: "titleLine2", type: "string"}),
        defineField({name: "subtitle", type: "text", rows: 3}),
        defineField({name: "ctaText", type: "string"}),
        defineField({
          name: "ctaTarget",
          type: "string",
          options: {list: ["booking", "about"]},
          initialValue: "booking",
        }),
        defineField({name: "heroImage", type: "image"}),
        defineField({name: "heroImageAlt", type: "string"}),
      ],
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [{type: "section"}],
    }),
  ],
});
```

```ts
// blogPost.ts
import {defineType, defineField} from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({name: "title", type: "string", validation: (r) => r.required()}),
    defineField({name: "slug", type: "slug", options: {source: "title"}, validation: (r) => r.required()}),
    defineField({name: "summary", type: "text", rows: 3}),
    defineField({name: "coverImage", type: "image"}),
    defineField({name: "publishedAt", type: "datetime"}),
    defineField({
      name: "status",
      type: "string",
      options: {list: ["draft", "published", "archived"]},
      initialValue: "draft",
    }),
    defineField({name: "body", type: "array", of: [{type: "block"}]}),
  ],
});
```

## C. 首頁 Hero POC（目前已在 `readdy-code` 完成骨架）
已完成檔案：
- `src/sanity/env.ts`
- `src/sanity/client.ts`
- `src/sanity/queries.ts`
- `src/sanity/types.ts`
- `src/sanity/fetchHomeHero.ts`
- `src/sanity/SanityVisualEditing.tsx`
- `src/pages/home/components/HeroSection.tsx`（改為 Sanity + fallback）
- `src/App.tsx`（加入 VisualEditing 組件）
- `.env.example`（加入 Sanity 變數）

啟用方式：
1. 複製 `.env.example` 為 `.env.local`
2. 填入：
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_STUDIO_URL`
3. 本地先測：
```bash
cd /Users/alex332233/Documents/projects/website/艾苜網站readdyCode/readdy-code
npm install
npm run dev
```

## D. Vercel Preview Branch 流程
1. 將 `readdy-code` 接到 Vercel（GitHub repo）
2. 啟用 Preview Deployments（預設每個 branch 都會有 preview URL）
3. 在 Vercel 設定環境變數：
- Preview：`VITE_ENABLE_VISUAL_EDITING=true`
- Production：`VITE_ENABLE_VISUAL_EDITING=false`
- 共用：`VITE_SANITY_PROJECT_ID`, `VITE_SANITY_DATASET`, `VITE_SANITY_STUDIO_URL`
4. Sanity Studio 的 Presentation 設 preview URL（指向 Vercel preview domain）

## E. Production 安全條件
1. Overlay 僅在 `VITE_ENABLE_VISUAL_EDITING=true` 時載入（已在程式內實作）
2. Production 環境強制 `VITE_ENABLE_VISUAL_EDITING=false`
3. 不在前端暴露可寫 token（目前 POC 只讀 public content）
4. 後續如需 draft/private 預覽，改走 BFF/Serverless function 代理 token

## F. 下一步建議
1. 先把首頁 Hero 內容寫進 Sanity，驗證可視化編輯流程
2. 再擴展到 2-3 個高頻 section（About/Services/FAQ）
3. 最後導入 blog listing + detail 路由與 prerender
