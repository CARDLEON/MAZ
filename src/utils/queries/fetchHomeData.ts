import { fetchACF } from "@/src/utils/api/fetchACF";

export async function fetchHomeData() {
  try {
    const acf = await fetchACF<any>("pages", 10);
    return { acf };
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
