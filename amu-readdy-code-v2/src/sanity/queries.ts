import groq from 'groq';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    "headerLogo": {
      "url": headerLogo.asset->url,
      "alt": headerLogo.alt
    },
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
    "footerLogo": {
      "url": footerLogo.asset->url,
      "alt": footerLogo.alt
    },
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
    "locationSection": {
      "title": locationSection.title,
      "subtitle": locationSection.subtitle,
      "clinicName": locationSection.clinicName,
      "clinicDescription": locationSection.clinicDescription,
      "hours": locationSection.hours,
      "mapLink": locationSection.mapLink,
      "mapEmbedUrl": locationSection.mapEmbedUrl,
      "image": {
        "url": locationSection.image.asset->url,
        "alt": locationSection.image.alt
      }
    },
    copyright,
    builderLink{
      label,
      kind,
      target
    },
    floatingLineButton{
      enabled,
      ariaLabel,
      link{
        label,
        kind,
        target
      }
    }
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    title,
    summary,
    "originStory": {
      "introQuote": originStory.introQuote,
      "scrollLabel": originStory.scrollLabel,
      "blocks": originStory.blocks[]{
        _key,
        layout,
        introText,
        heading,
        subheading,
        paragraphs,
        "primaryImage": select(
          defined(primaryImage.asset) => {
            "url": primaryImage.asset->url,
            "alt": primaryImage.alt
          }
        ),
        "secondaryImage": select(
          defined(secondaryImage.asset) => {
            "url": secondaryImage.asset->url,
            "alt": secondaryImage.alt
          }
        )
      }
    },
    philosophyTitle,
    philosophyCards,
    "coreValues": coreValues[]{
      _key,
      number,
      title,
      description,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    }
  }
`;

export const insurancePageQuery = groq`
  *[_type == "insurancePage"][0]{
    title,
    heroTitle,
    heroSubtitle,
    "overviewCards": overviewCards[]{
      title,
      englishTitle,
      subtitle,
      icon,
      anchorId,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    },
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
      "slug": slug.current,
      title,
      category,
      tags,
      doctor,
      fbLink,
      publishDate,
      "coverImage": {
        "url": coverImage.asset->url,
        "alt": coverImage.alt
      },
      description,
      before,
      after,
      conclusion,
      tips,
      medicalInfo,
      references,
      "seo": {
        "title": seo.title,
        "description": seo.description
      }
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
      "_id": _id,
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
      ctaTitle,
      ctaDescription,
      ctaButtonText
    },
    "categories": *[_type == "healthEducationCategory"] | order(_id asc){
      _id,
      name,
      "subcategories": subcategories[]->{
        _id,
        name
      }
    },
    "articles": *[_type == "healthEducationArticle"] | order(articleId asc){
      articleId,
      "slug": slug.current,
      title,
      "category": category->name,
      "subcategory": subcategory->name,
      tags,
      author,
      publishDate,
      updatedDate,
      readTime,
      summary,
      "coverImage": {
        "url": coverImage.asset->url,
        "alt": coverImage.alt
      },
      content,
      "faq": faq[]{
        question,
        answer
      },
      tips,
      references,
      "seo": {
        "title": seo.title,
        "description": seo.description
      }
    }
  }
`;

export const healthEducationArticleQuery = groq`
  *[_type == "healthEducationArticle" && (articleId == $articleId || slug.current == $slug)][0]{
    articleId,
    "slug": slug.current,
    title,
    "category": category->name,
    "subcategory": subcategory->name,
    tags,
    author,
    publishDate,
    updatedDate,
    readTime,
    summary,
    "coverImage": {
      "url": coverImage.asset->url,
      "alt": coverImage.alt
    },
    "body": body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    },
    content,
    "faq": faq[]{
      question,
      answer
    },
    tips,
    references,
    "seo": {
      "title": seo.title,
      "description": seo.description
    }
  }
`;

export const caseArticleQuery = groq`
  *[_type == "caseArticle" && (caseId == $caseId || slug.current == $slug)][0]{
    caseId,
    "slug": slug.current,
    title,
    category,
    tags,
    doctor,
    fbLink,
    publishDate,
    "coverImage": {
      "url": coverImage.asset->url,
      "alt": coverImage.alt
    },
    "body": body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    },
    description,
    before,
    after,
    conclusion,
    tips,
    medicalInfo,
    references,
    "seo": {
      "title": seo.title,
      "description": seo.description
    }
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    "hero": {
      ...hero,
      "image": {
        "url": hero.image.asset->url,
        "alt": hero.image.alt
      }
    },
    "about": {
      ...about,
      "image": {
        "url": about.image.asset->url,
        "alt": about.image.alt
      }
    },
    services,
    "whyChoose": {
      ...whyChoose,
      "image": {
        "url": whyChoose.image.asset->url,
        "alt": whyChoose.image.alt
      }
    },
    "team": {
      ...team,
      "image": {
        "url": team.image.asset->url,
        "alt": team.image.alt
      }
    },
    "process": {
      ...process,
      "steps": process.steps[]{
        step,
        title,
        description,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        }
      }
    },
    booking,
    faq,
    "gallery": {
      "images": gallery.images[]{
        "url": image.asset->url,
        "alt": image.alt,
        label,
        labelZh
      }
    },
    testimonials
  }
`;

export const featuredTreatmentsPageQuery = groq`
  *[_type == "featuredTreatmentsPage"][0]{
    title,
    heroTitle,
    heroDescription,
    cards[]{
      _key,
      title,
      englishTitle,
      icon,
      color,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      treatmentTitle,
      description,
      "tags": tags[].label,
      detailSlug
    },
    relatedExtraCard{
      _key,
      title,
      englishTitle,
      icon,
      color,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
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
    "primaryImage": {
      "url": primaryImage.asset->url,
      "alt": primaryImage.alt
    },
    "secondaryImage": {
      "url": secondaryImage.asset->url,
      "alt": secondaryImage.alt
    },
    sections[]{
      title,
      icon,
      layout,
      eyebrow,
      content,
      additionalContent,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      items[]{subtitle, text},
      cases[]{
        label,
        name,
        "text": coalesce(content, text),
        link,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        }
      }
    },
    "featuredCases": featuredCases[]{
      label,
      name,
      "text": coalesce(content, text),
      link,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    },
    disclaimer,
    "cta": {
      "title": ctaTitle,
      "description": ctaDescription,
      "buttonText": ctaButtonText
    }
  }
`;
