# Amu Website Formal Studio

This is the formal Sanity Studio scaffold for the Amu website.

Current scope:
- Home page stable sections
- Featured treatments list/detail skeleton
- About page skeleton
- Health education page/article skeleton

Not finalized yet:
- Home location section
- Final about page section details
- Final health education page section details

## Seed home page

After the formal Sanity project is created and you have a valid token:

```bash
export SANITY_STUDIO_PROJECT_ID=your_project_id
export SANITY_STUDIO_DATASET=production
export SANITY_AUTH_TOKEN=your_write_token
npm run seed:home
```

This will create or replace the singleton `homePage` document with the current stable homepage content.
