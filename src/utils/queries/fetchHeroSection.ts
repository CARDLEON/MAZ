import { fetchACF } from "@/src/utils/api/fetchACF";
import type { HeroSection } from "@/src/utils/types";

export async function fetchHeroSectionById(
  sectionId: number
): Promise<HeroSection> {
  try {
    const acf = await fetchACF<any>("hero_section", sectionId);

    const heroSection = acf.hero_section;

    if (!heroSection)
      throw new Error(`Hero section not found for ID ${sectionId}`);

    const {
      title_hero_section,
      subtitle_hero_section,
      bg_hero_section,
      breadcrumb_hero_section,
    } = heroSection;

    return {
      title_hero_section,
      subtitle_hero_section,
      bg_hero_section: bg_hero_section?.url || "",
      breadcrumb_hero_section,
    };
  } catch (error: any) {
    throw new Error(`Error fetching hero section ID ${sectionId}: ${error}`);
  }
}
