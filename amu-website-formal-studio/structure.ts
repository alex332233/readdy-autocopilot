import type {StructureBuilder} from 'sanity/structure'

const singletonItem = (
  S: StructureBuilder,
  id: string,
  schemaType: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(schemaType).documentId(id))

const documentListItem = (
  S: StructureBuilder,
  schemaType: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.documentTypeList(schemaType).title(title))

export const studioStructure = (S: StructureBuilder) =>
  S.list()
    .id('content-root')
    .title('Content')
    .items([
      singletonItem(S, 'homePage', 'homePage', '首頁'),
      singletonItem(S, 'siteSettings', 'siteSettings', '全站設定'),
      singletonItem(S, 'insurancePage', 'insurancePage', '健保項目頁'),
      singletonItem(S, 'aboutPage', 'aboutPage', '關於頁'),
      singletonItem(S, 'teamPage', 'teamPage', '醫師團隊頁'),
      documentListItem(S, 'doctorProfile', '醫師資料'),
      singletonItem(S, 'casesPage', 'casesPage', '真實見證頁'),
      documentListItem(S, 'caseArticle', '真實見證文章'),
      S.listItem()
        .title('衛教資訊')
        .id('health-education-group')
        .child(
          S.list()
            .id('health-education-items')
            .title('衛教資訊')
            .items([
              singletonItem(S, 'healthEducationPage', 'healthEducationPage', '頁面設定'),
              documentListItem(S, 'healthEducationCategory', '主分類'),
              documentListItem(S, 'healthEducationSubcategory', '次分類'),
              documentListItem(S, 'healthEducationArticle', '衛教文章'),
            ]),
        ),
      singletonItem(S, 'featuredTreatmentsPage', 'featuredTreatmentsPage', '特色療程頁'),
      documentListItem(S, 'featuredTreatmentDetail', '特色療程子頁'),
    ])
