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
        "url": coalesce(image.asset->url, imageUrl),
        "alt": image.alt
      }
    }
  }
`;

export const insurancePageQuery = groq`
  coalesce(*[_id == "drafts.insurancePage"][0], *[_id == "insurancePage"][0]){
    title,
    heroTitle,
    heroSubtitle,
    "overviewCards": overviewCards[]{
      _key,
      title,
      englishTitle,
      subtitle,
      "treatmentKey": treatmentRef->key,
      "treatmentIcon": treatmentRef->icon,
      "icon": coalesce(treatmentRef->icon, icon),
      anchorId,
      "image": {
        "url": coalesce(image.asset->url, imageUrl),
        "alt": image.alt
      }
    },
    "detailedCategories": detailedCategories[]{
      _key,
      title,
      subtitle,
      englishTitle,
      "treatmentKey": treatmentRef->key,
      "treatmentIcon": treatmentRef->icon,
      "icon": coalesce(treatmentRef->icon, icon),
      color,
      treatments
    }
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
      "category": coalesce(categoryRef->name, category),
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
    "page": coalesce(*[_id == "drafts.teamPage"][0], *[_id == "teamPage"][0]){
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
      "insuranceSpecialtyGroups": insuranceSpecialtyRefs[]{
        _key,
        "slug": @->key,
        "name": @->doctorTagName,
        "icon": @->icon,
        "items": [],
        "sourceField": "insuranceSpecialtyRefs"
      },
      specialtyGroups,
      "featuredTreatmentItems": featuredTreatmentRefs[]{
        _key,
        "key": @->key,
        "name": @->doctorTagName,
        "icon": @->icon,
        "sourceField": "featuredTreatmentRefs"
      },
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
  coalesce(*[_id == "drafts.homePage"][0], *[_id == "homePage"][0]){
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
    "services": {
      "title": services.title,
      "description": services.description,
      "items": select(
        count(services.serviceTreatmentRefs[]) > 0 => services.serviceTreatmentRefs[0...8]{
          _key,
          "treatmentKey": @->key,
          "treatmentCategory": @->category,
          "treatmentIcon": @->icon,
          "treatmentName": coalesce(@->insuranceName, @->featuredName, @->doctorTagName),
          "treatmentHomeSubtitle": @->homeCardSubtitle,
          "treatmentHomeDescription": @->homeCardDescription,
          "icon": @->icon
        },
        services.items[0...8]{
          _key,
          number,
          "treatmentKey": treatmentRef->key,
          "treatmentCategory": treatmentRef->category,
          "treatmentIcon": treatmentRef->icon,
          "treatmentName": coalesce(treatmentRef->insuranceName, treatmentRef->featuredName, treatmentRef->doctorTagName),
          "treatmentHomeSubtitle": treatmentRef->homeCardSubtitle,
          "treatmentHomeDescription": treatmentRef->homeCardDescription,
          "icon": coalesce(treatmentRef->icon, icon),
          title,
          subtitle,
          description
        }
      )
    },
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
  coalesce(*[_id == "drafts.featuredTreatmentsPage"][0], *[_id == "featuredTreatmentsPage"][0]){
    title,
    heroTitle,
    heroDescription,
    cards[]{
      _key,
      "treatmentKey": treatmentRef->key,
      "treatmentIcon": treatmentRef->icon,
      "treatmentFeaturedName": treatmentRef->featuredName,
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
    _id,
    "treatmentKey": treatmentRef->key,
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
