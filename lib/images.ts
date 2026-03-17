// All existing project images
const IMG = (name: string) => `/images/${name}`;

export const images = {
  logo: IMG("ChatGPT_Image_Feb_11__2026__04_20_32_PM-63ebe642-6faa-4377-a818-1d4be356d848.png"),
  heroBg: IMG("702-cc725481-7b78-4f62-bdc9-c4e5624d21a0.png"),
  closeBg: IMG("ChatGPT_Image_Feb_11__2026__04_38_08_PM-07bc1809-2e0d-47a0-a0c7-e47fb89d3752.png"),
  sitePlan: IMG("ChatGPT_Image_Feb_23__2026__06_28_14_AM-1319a581-2f83-40f0-9bd0-14a35879d4c0.png"),
  hero: IMG("ChatGPT_Image_Mar_14__2026__10_16_05_PM-65339f7a-f20e-4205-836e-a4a2d8f9eaf6.png"),
  concept: IMG("ChatGPT_Image_Mar_14__2026__10_07_08_PM-122efc08-02b5-45fd-867e-01880c0e7917.png"),
  streetView: IMG("ChatGPT_Image_Mar_14__2026__10_09_27_PM-7ebdaaef-164c-43a6-afab-aa590056016c.png"),
  streetLife: IMG("ChatGPT_Image_Mar_14__2026__10_24_44_PM-4984e4b0-bc6f-4ccd-9431-eef07e3a7baf.png"),
  lifestyle: IMG("ChatGPT_Image_Mar_14__2026__10_15_28_PM-61d1b6b4-5759-4670-bdf4-c7aea3fd3067.png"),
  pathway: IMG("ChatGPT_Image_Mar_14__2026__10_05_32_PM-8f4fa460-e1fb-4f70-936e-cf9a65917862.png"),
  pool: IMG("ChatGPT_Image_Mar_14__2026__09_57_06_PM-afa63451-afca-4f91-afae-772c5e1839e7.png"),
  kidsArea: IMG("ChatGPT_Image_Mar_14__2026__09_55_05_PM-6f17d36b-8500-43f3-b1f0-1994d6325851.png"),
  cottage: IMG("ChatGPT_Image_Mar_14__2026__10_16_55_PM-c0b48e96-0ea0-4f4f-aabf-d6523c285822.png"),
  weekendStays: IMG("ChatGPT_Image_Mar_14__2026__10_11_40_PM-167cbcae-c59d-41b9-a5a6-24caebdc5fca.png"),
  corporate: IMG("ChatGPT_Image_Mar_14__2026__10_21_04_PM-ab020512-234e-488e-b757-ce1d1eae4b3d.png"),
  wedding: IMG("ChatGPT_Image_Mar_14__2026__10_00_18_PM-7c22dcce-f508-4fec-a01e-b3ceb26955ec.png"),
  film: IMG("ChatGPT_Image_Mar_14__2026__10_22_59_PM-46b03fac-5eab-41c8-aa1d-efe772c7bce0.png"),
  audience: IMG("ChatGPT_Image_Mar_14__2026__10_19_26_PM-826cbda5-18f3-477a-bbde-a8bffe3706b6.png"),
  weddingEvent: IMG("ChatGPT_Image_Mar_14__2026__10_20_01_PM-eb669f17-96e5-42f7-8119-bcb15ad6b4a5.png"),
} as const;

/** All images for gallery (no logo, no watermarked heroBg) */
export const galleryImages: { src: string; label: string }[] = [
  { src: images.closeBg, label: "Decade Street" },
  { src: images.sitePlan, label: "Site plan" },
  { src: images.hero, label: "Lifestyle" },
  { src: images.concept, label: "Concept" },
  { src: images.streetView, label: "Street view" },
  { src: images.streetLife, label: "Street life" },
  { src: images.lifestyle, label: "Resort living" },
  { src: images.pathway, label: "Pathway" },
  { src: images.pool, label: "Pool" },
  { src: images.kidsArea, label: "Kids area" },
  { src: images.cottage, label: "Cottage" },
  { src: images.weekendStays, label: "Weekend stays" },
  { src: images.corporate, label: "Corporate" },
  { src: images.wedding, label: "Events" },
  { src: images.film, label: "Film & shoots" },
  { src: images.audience, label: "Experience" },
  { src: images.weddingEvent, label: "Celebrations" },
];
