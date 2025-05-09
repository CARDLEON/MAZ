import type { APIRoute } from "astro";
import { fetchProtected } from "@/src/utils/api/fetchProtected";

const url = `${import.meta.env.WP_GRAPHQL_ENDPOINT_ACF}/pages/10`;

export const GET: APIRoute = async () => {
  try {
    const data = await fetchProtected(url);

    return new Response(JSON.stringify(data, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error.message || "Error desconocido",
      }),
      { status: 500 }
    );
  }
};
