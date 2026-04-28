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

const readonlyDocumentListItem = (
  S: StructureBuilder,
  schemaType: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.documentTypeList(schemaType).title(title).initialValueTemplates([]))

const canonicalFeaturedTreatmentDetailListItem = (
  S: StructureBuilder,
) =>
  S.listItem()
    .title('特色療程子頁')
    .id('featuredTreatmentDetail')
    .child(
      S.documentTypeList('featuredTreatmentDetail')
        .title('特色療程子頁')
        .filter('_type == "featuredTreatmentDetail" && slug.current in $slugs')
        .params({slugs: ['facial', 'growth', 'body', 'eye', 'laser', 'decoction']})
        .initialValueTemplates([]),
    )

export const studioStructure = (S: StructureBuilder) =>
  S.list()
    .id('content-root')
    .title('Content')
    .items([
      S.listItem()
        .title('全站設定')
        .id('site-settings-group')
        .child(
          S.list()
            .id('site-settings-items')
            .title('全站設定')
            .items([
              singletonItem(S, 'siteSettings', 'siteSettings', '基本設定'),
              readonlyDocumentListItem(S, 'treatmentTaxonomyItem', '全站療程項目'),
            ]),
        ),
      singletonItem(S, 'homePage', 'homePage', '首頁'),
      singletonItem(S, 'aboutPage', 'aboutPage', '關於艾苜'),
      singletonItem(S, 'insurancePage', 'insurancePage', '健保項目'),
      singletonItem(S, 'featuredTreatmentsPage', 'featuredTreatmentsPage', '特色療程'),
      canonicalFeaturedTreatmentDetailListItem(S),
      singletonItem(S, 'teamPage', 'teamPage', '醫師團隊'),
      documentListItem(S, 'doctorProfile', '醫師子頁'),
      S.listItem()
        .title('真實見證')
        .id('cases-group')
        .child(
          S.list()
            .id('cases-items')
            .title('真實見證')
            .items([
              singletonItem(S, 'casesPage', 'casesPage', '頁面設定'),
              documentListItem(S, 'caseCategory', '分類'),
              documentListItem(S, 'caseArticle', '真實見證文章'),
            ]),
        ),
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
    ])
