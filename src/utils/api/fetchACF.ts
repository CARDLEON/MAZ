import { fetchProtected } from "./fetchProtected";

export async function fetchACF<T>(
  slug: string = "pages", // fetches 'pages' by default
  id: number = 97 // Points to global page id by default
): Promise<T> {
  // Fetch via page ID -> ACF
  try {
    const url = `${import.meta.env.VITE_WP_REST_ENDPOINT_ACF}/${slug}/${id}`;
    const { acf } = await fetchProtected(url);
    return acf as T;
  } catch (error: any) {
    throw new Error(`Error fetching ACF data: ${error}`);
  }
}
