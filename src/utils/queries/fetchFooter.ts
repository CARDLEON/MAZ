import { fetchProtected } from "@/src/utils/api/fetchProtected";
import type { Footer } from "@/src/utils/types";

const url = `${import.meta.env.VITE_WP_REST_ENDPOINT_ACF}/pages/97`;

export async function fetchFooter(): Promise<Footer> {
  const { acf } = await fetchProtected(url);
  return acf;
}
