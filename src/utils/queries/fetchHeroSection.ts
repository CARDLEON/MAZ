import { fetchProtected } from "@/src/utils/api/fetchProtected";
import type { HeroSection } from "@/src/utils/types";

const url = `${import.meta.env.VITE_WP_REST_ENDPOINT_ACF}/pages/19`;

export async function fetchHeroSection(): Promise<HeroSection> {
  const { acf } = await fetchProtected(url);

  const {
    title_hero_section,
    subtitle_hero_section,
    background_hero_section,
    breadcrumb_hero_section,
    sectionLabel_hero_section,
  } = acf;

  return {
    title_hero_section,
    subtitle_hero_section,
    background_hero_section: background_hero_section?.url || "",
    breadcrumb_hero_section,
    sectionLabel_hero_section,
  };
}
