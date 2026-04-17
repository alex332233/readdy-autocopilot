import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("api/preview-mode/enable", "routes/api.preview-mode.enable.ts"),
  route("api/preview-mode/disable", "routes/api.preview-mode.disable.ts"),
  index("routes/home.tsx", { id: "home" }),
  route("treatments", "routes/treatments.tsx"),
  route("insurance", "routes/insurance.tsx", { id: "insurance" }),
  route("featured-treatments", "routes/featuredTreatments.tsx", { id: "featuredTreatments" }),
  route("featured-treatments/:slug", "routes/featuredTreatmentDetail.tsx"),
  route("about", "routes/about.tsx", { id: "about" }),
  route("cases", "routes/cases.tsx", { id: "cases" }),
  route("cases/:id", "routes/caseDetail.tsx"),
  route("team", "routes/team.tsx", { id: "team" }),
  route("health-education", "routes/healthEducation.tsx", { id: "healthEducation" }),
  route("health-education/:id", "routes/healthEducationDetail.tsx"),
  route("*", "routes/notFound.tsx"),
] satisfies RouteConfig;
