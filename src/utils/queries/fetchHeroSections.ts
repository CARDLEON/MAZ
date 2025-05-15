import { fetchACF } from "@/src/utils/api/fetchACF";
import type { HeroSection } from "@/src/utils/types";

export async function fetchHeroSections(
  fieldKey: string
): Promise<HeroSection> {
  try {
    const acf = await fetchACF<any>("hero_section", 162);

    if (!acf[fieldKey]) throw new Error(`Field ${fieldKey} not found in ACF`);

    const {
      title_hero_section,
      subtitle_hero_section,
      bg_hero_section,
      breadcrumb_hero_section,
      sectionlabel_hero_section,
    } = acf[fieldKey];

    return {
      title_hero_section,
      subtitle_hero_section,
      bg_hero_section: bg_hero_section?.url || "",
      breadcrumb_hero_section,
      sectionlabel_hero_section,
    };
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
