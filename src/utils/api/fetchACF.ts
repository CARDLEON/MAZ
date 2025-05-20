import { api } from "@/src/utils/api/axios.config";

interface ACFResponse<T> {
  acf: T;
}

export async function fetchACF<T>(slug: string, id: number): Promise<T> {
  try {
    const url = `/${slug}/${id}`;
    const data = await api.get<ACFResponse<T>>(url);

    return (data as unknown as ACFResponse<T>).acf;
  } catch (error: any) {
    console.error("Error fetching ACF data:", error);
    throw new Error(`Error fetching ACF data: ${error.message}`);
  }
}
