import { fetchACF } from "@/src/utils/api/fetchACF";
import type { Footer } from "@/src/utils/types";

export async function fetchFooter(): Promise<Footer> {
  return await fetchACF<Footer>("pages", 97);
}
