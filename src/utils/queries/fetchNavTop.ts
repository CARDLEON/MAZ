import { fetchACF } from "@/src/utils/api/fetchACF";
import type { TopBar } from "@/src/utils/types";

export async function fetchTopSection(): Promise<TopBar> {
  try {
    const acf = await fetchACF<any>("pages", 97);
    return acf;
  } catch (error: any) {
    throw new Error(`Error fetching ACF data: ${error}`);
  }
}
