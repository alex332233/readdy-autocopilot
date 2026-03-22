import groq from 'groq';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    headerLogo,
    headerNavItems[]{
      label,
      kind,
      target,
      children[]{
        label,
        kind,
        target
      }
    },
    headerCta{
      label,
      kind,
      target
    },
    footerLogo,
    footerTagline,
    footerLinkGroups[]{
      title,
      links[]{
        label,
        kind,
        target
      }
    },
    clinicInfoTitle,
    address,
    phone,
    email,
    socialLinks[]{
      platform,
      icon,
      url
    },
    copyright,
    builderLink{
      label,
      kind,
      target
    }
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    title,
    summary,
    originStory,
    philosophyTitle,
    philosophyCards,
    coreValues,
    branchesTitle,
    branchesSubtitle,
    branches
  }
`;

export const insurancePageQuery = groq`
  *[_type == "insurancePage"][0]{
    title,
    heroTitle,
    heroSubtitle,
    overviewCards,
    detailedCategories
  }
`;

export const casesPageQuery = groq`
  {
    "page": *[_type == "casesPage"][0]{
      title,
      heroTitle,
      heroSubtitle,
      ctaTitle,
      ctaDescription,
      ctaButtonText
    },
    "articles": *[_type == "caseArticle"] | order(caseId asc){
      caseId,
      title,
      category,
      tags,
      doctor,
      fbLink,
      publishDate,
      coverImage,
      description,
      before,
      after,
      conclusion,
      tips,
      medicalInfo,
      references
    }
  }
`;

export const teamPageQuery = groq`
  {
    "page": *[_type == "teamPage"][0]{
      title,
      heroTitle,
      heroSubtitle
    },
    "doctors": *[_type == "doctorProfile"] | order(doctorId asc){
      doctorId,
      name,
      title,
      bio,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      education,
      experience,
      specialtyGroups,
      specialTreatments,
      schedule,
      scheduleNote
    }
  }
`;

export const healthEducationPageQuery = groq`
  {
    "page": *[_type == "healthEducationPage"][0]{
      title,
      heroTitle,
      heroSubtitle,
      categories,
      ctaTitle,
      ctaDescription,
      ctaButtonText
    },
    "articles": *[_type == "healthEducationArticle"] | order(articleId asc){
      articleId,
      title,
      category,
      subcategory,
      tags,
      author,
      publishDate,
      updatedDate,
      readTime,
      views,
      summary,
      coverImage,
      content,
      tips,
      references
    }
  }
`;

export const healthEducationArticleQuery = groq`
  *[_type == "healthEducationArticle" && articleId == $articleId][0]{
    articleId,
    title,
    category,
    subcategory,
    tags,
    author,
    publishDate,
    updatedDate,
    readTime,
    views,
    summary,
    coverImage,
    content,
    tips,
    references
  }
`;

export const caseArticleQuery = groq`
  *[_type == "caseArticle" && caseId == $caseId][0]{
    caseId,
    title,
    category,
    tags,
    doctor,
    fbLink,
    publishDate,
    coverImage,
    description,
    before,
    after,
    conclusion,
    tips,
    medicalInfo,
    references
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    hero,
    about,
    services,
    whyChoose,
    team,
    process,
    booking,
    faq,
    gallery,
    testimonials
  }
`;

export const featuredTreatmentsPageQuery = groq`
  *[_type == "featuredTreatmentsPage"][0]{
    title,
    heroTitle,
    heroDescription,
    cards[]{
      title,
      englishTitle,
      icon,
      color,
      treatmentTitle,
      description,
      "tags": tags[].label,
      detailSlug
    }
  }
`;

export const featuredTreatmentDetailQuery = groq`
  *[_type == "featuredTreatmentDetail" && slug.current == $slug][0]{
    title,
    subtitle,
    themeColor,
    "slug": slug.current,
    sections[]{
      title,
      icon,
      layout,
      eyebrow,
      content,
      additionalContent,
      image,
      items[]{subtitle, text},
      cases[]{label, text}
    },
    disclaimer,
    "cta": {
      "title": ctaTitle,
      "description": ctaDescription,
      "buttonText": ctaButtonText
    }
  }
`;
