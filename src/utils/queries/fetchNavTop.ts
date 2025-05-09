import { fetchProtected } from "@/src/utils/api/fetchProtected";
import type { TopBar } from "@/src/utils/types";

const url = `${import.meta.env.VITE_WP_REST_ENDPOINT_ACF}/pages/97`;

export async function fetchNavTop(): Promise<TopBar> {
  const { acf } = await fetchProtected(url);
  return acf;
}
