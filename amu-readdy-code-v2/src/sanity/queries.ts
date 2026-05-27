import groq from 'groq';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    "headerLogo": {
      "asset": headerLogo.asset,
      "crop": headerLogo.crop,
      "hotspot": headerLogo.hotspot,
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
      "asset": footerLogo.asset,
      "crop": footerLogo.crop,
      "hotspot": footerLogo.hotspot,
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
        "asset": locationSection.image.asset,
        "crop": locationSection.image.crop,
        "hotspot": locationSection.image.hotspot,
        "url": locationSection.image.asset->url,
        "alt": locationSection.image.alt
      }
    },
    copyright,
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
            "asset": primaryImage.asset,
            "crop": primaryImage.crop,
            "hotspot": primaryImage.hotspot,
            "url": primaryImage.asset->url,
            "alt": primaryImage.alt
          }
        ),
        "secondaryImage": select(
          defined(secondaryImage.asset) => {
            "asset": secondaryImage.asset,
            "crop": secondaryImage.crop,
            "hotspot": secondaryImage.hotspot,
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
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
    "articles": *[_type == "caseArticle"]{
      "_priorityRank": select(defined(priorityOrder) => 0, 1),
      "documentId": _id,
      caseId,
      priorityOrder,
      "slug": slug.current,
      title,
      "category": coalesce(categoryRef->name, category),
      tags,
      doctor,
      fbLink,
      publishDate,
      summary,
      "coverImage": {
        "asset": coverImage.asset,
        "crop": coverImage.crop,
        "hotspot": coverImage.hotspot,
        "url": coverImage.asset->url,
        "alt": coverImage.alt
      },
      description,
      beforeAfter,
      before,
      after,
      conclusion,
      tips,
      medicalInfo,
      "references": references[]{
        "text": select(_type == "link" => coalesce(text, healthEducationArticleRef->title, caseArticleRef->title, href, internalPath, target), @),
        "href": select(
          _type == "link" => select(
            kind == "healthEducationArticle" => "/health-education/" + healthEducationArticleRef->slug.current,
            kind == "caseArticle" => "/cases/" + caseArticleRef->slug.current,
            kind == "external" => href,
            coalesce(internalPath, href, target)
          ),
          @
        ),
        "kind": select(
          _type == "link" => coalesce(kind, select(defined(internalPath) => "internal", "external")),
          "external"
        )
      },
      "seo": {
        "title": seo.title,
        "description": seo.description
      }
    } | order(_priorityRank asc, priorityOrder asc, publishDate desc, _createdAt desc)
  }
`;

export const teamPageQuery = groq`
  {
    "page": coalesce(*[_id == "drafts.teamPage"][0], *[_id == "teamPage"][0]){
      title,
      heroTitle,
      heroSubtitle
    },
    "doctors": *[_type == "doctorProfile"]{
      "_displayOrderRank": select(defined(displayOrder) => 0, 1),
      "_id": _id,
      doctorId,
      displayOrder,
      name,
      title,
      bio,
      "image": {
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
    } | order(_displayOrderRank asc, displayOrder asc, doctorId asc, _createdAt asc)
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
      "id": _id,
      name,
      "subcategories": subcategories[]->{
        "id": _id,
        name
      }
    },
    "articles": *[_type == "healthEducationArticle"]{
      "_priorityRank": select(defined(priorityOrder) => 0, 1),
      "documentId": _id,
      articleId,
      priorityOrder,
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
        "asset": coverImage.asset,
        "crop": coverImage.crop,
        "hotspot": coverImage.hotspot,
        "url": coverImage.asset->url,
        "alt": coverImage.alt
      },
      "content": content[]{
        ...,
        "image": {
          "asset": image.asset,
          "crop": image.crop,
          "hotspot": image.hotspot,
          "url": image.asset->url,
          "alt": image.alt
        }
      },
      "faq": faq[]{
        question,
        answer
      },
      faqTitle,
      tips,
      "references": references[]{
        "text": coalesce(text, healthEducationArticleRef->title, caseArticleRef->title, href, internalPath, target),
        "href": select(
          kind == "healthEducationArticle" => "/health-education/" + healthEducationArticleRef->slug.current,
          kind == "caseArticle" => "/cases/" + caseArticleRef->slug.current,
          kind == "external" => href,
          coalesce(internalPath, href, target)
        ),
        "kind": coalesce(kind, select(defined(internalPath) => "internal", "external"))
      },
      "seo": {
        "title": seo.title,
        "description": seo.description
      }
    } | order(_priorityRank asc, priorityOrder asc, publishDate desc, _createdAt desc)
  }
`;

export const healthEducationArticleQuery = groq`
  *[
    _type == "healthEducationArticle" &&
    (
      (defined($articleId) && articleId == $articleId) ||
      slug.current == $slug ||
      _id == $documentId ||
      _id == $draftDocumentId
    )
  ]{
    "_draftRank": select(_id in path("drafts.**") => 1, 0),
    "documentId": _id,
    articleId,
    priorityOrder,
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
      "asset": coverImage.asset,
      "crop": coverImage.crop,
      "hotspot": coverImage.hotspot,
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
    "content": content[]{
      ...,
      "image": {
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
        "url": image.asset->url,
        "alt": image.alt
      }
    },
    "faq": faq[]{
      question,
      answer
    },
    faqTitle,
    tips,
    "references": references[]{
      "text": coalesce(text, healthEducationArticleRef->title, caseArticleRef->title, href, internalPath, target),
      "href": select(
        kind == "healthEducationArticle" => "/health-education/" + healthEducationArticleRef->slug.current,
        kind == "caseArticle" => "/cases/" + caseArticleRef->slug.current,
        kind == "external" => href,
        coalesce(internalPath, href, target)
      ),
      "kind": coalesce(kind, select(defined(internalPath) => "internal", "external"))
    },
    "seo": {
      "title": seo.title,
      "description": seo.description
    }
  } | order(_draftRank desc)[0]
`;

export const caseArticleQuery = groq`
  *[
    _type == "caseArticle" &&
    (
      (defined($caseId) && caseId == $caseId) ||
      slug.current == $slug ||
      _id == $documentId ||
      _id == $draftDocumentId
    )
  ][0]{
    "documentId": _id,
    caseId,
    priorityOrder,
    "slug": slug.current,
    title,
    "category": coalesce(categoryRef->name, category),
    tags,
    doctor,
    fbLink,
    publishDate,
    summary,
    "coverImage": {
      "asset": coverImage.asset,
      "crop": coverImage.crop,
      "hotspot": coverImage.hotspot,
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
    beforeAfter,
    before,
    after,
    conclusion,
    tips,
    medicalInfo,
    "references": references[]{
      "text": select(_type == "link" => coalesce(text, healthEducationArticleRef->title, caseArticleRef->title, href, internalPath, target), @),
      "href": select(
        _type == "link" => select(
          kind == "healthEducationArticle" => "/health-education/" + healthEducationArticleRef->slug.current,
          kind == "caseArticle" => "/cases/" + caseArticleRef->slug.current,
          kind == "external" => href,
          coalesce(internalPath, href, target)
        ),
        @
      ),
      "kind": select(
        _type == "link" => coalesce(kind, select(defined(internalPath) => "internal", "external")),
        "external"
      )
    },
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
        "asset": hero.image.asset,
        "crop": hero.image.crop,
        "hotspot": hero.image.hotspot,
        "url": hero.image.asset->url,
        "alt": hero.image.alt
      }
    },
    "about": {
      ...about,
      "image": {
        "asset": about.image.asset,
        "crop": about.image.crop,
        "hotspot": about.image.hotspot,
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
        "asset": whyChoose.image.asset,
        "crop": whyChoose.image.crop,
        "hotspot": whyChoose.image.hotspot,
        "url": whyChoose.image.asset->url,
        "alt": whyChoose.image.alt
      }
    },
    "team": {
      ...team,
      "image": {
        "asset": team.image.asset,
        "crop": team.image.crop,
        "hotspot": team.image.hotspot,
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
          "asset": image.asset,
          "crop": image.crop,
          "hotspot": image.hotspot,
          "url": image.asset->url,
          "alt": image.alt
        }
      }
    },
    booking,
    faq,
    "gallery": {
      "images": gallery.images[]{
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
      "asset": primaryImage.asset,
      "crop": primaryImage.crop,
      "hotspot": primaryImage.hotspot,
      "url": primaryImage.asset->url,
      "alt": primaryImage.alt
    },
    "secondaryImage": {
      "asset": secondaryImage.asset,
      "crop": secondaryImage.crop,
      "hotspot": secondaryImage.hotspot,
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
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
          "asset": image.asset,
          "crop": image.crop,
          "hotspot": image.hotspot,
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
        "asset": image.asset,
        "crop": image.crop,
        "hotspot": image.hotspot,
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
