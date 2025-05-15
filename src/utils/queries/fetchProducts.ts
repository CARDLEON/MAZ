import { fetchACF } from "@/src/utils/api/fetchACF";
import type { Product } from "@/src/utils/types";

export async function fetchProductById(productId: number): Promise<Product> {
  try {
    const acf = await fetchACF<any>("product", productId);

    const product = acf.chiller_product;

    if (!product)
      throw new Error(`Product info not found in product ID ${productId}`);

    const {
      product_image,
      product_title,
      product_description,
      product_category,
      product_highlights,
      product_capacities,
    } = product;

    return {
      product_image: product_image?.url || "",
      product_title,
      product_description,
      product_category,
      product_highlights,
      product_capacities,
    };
  } catch (error: any) {
    throw new Error(`Error fetching product ID ${productId}: ${error}`);
  }
}
