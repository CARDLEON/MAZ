import { fetchProtected } from "@/src/utils/api/fetchProtected";
import type { Product, ProductPost } from "@/src/utils/types";

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const posts = await fetchProtected<ProductPost[]>(
      `${import.meta.env.VITE_WP_REST_ENDPOINT}/product?per_page=100`
    );

    const products: Product[] = await Promise.all(
      posts.map(async ({ id, slug }) => {
        const { acf } = await fetchProtected<{
          acf: { chiller_product: any };
        }>(`${import.meta.env.VITE_WP_REST_ENDPOINT_ACF}/product/${id}`);

        const {
          product_category = "",
          product_title = "",
          product_description = "",
          product_highlight = "",
          product_image = { url: "" },
          product_featured = false,
          product_featured_text = "",
          product_link = "",
        } = acf?.chiller_product || {};

        return {
          id,
          slug,
          acf: {
            product_category,
            product_title,
            product_description,
            product_highlight,
            product_image: {
              url: product_image?.url || "",
            },
            product_featured,
            product_featured_text,
            product_link,
          },
        };
      })
    );

    return products;
  } catch (error: any) {
    throw new Error(`Error fetching products with ACF: ${error.message}`);
  }
}
