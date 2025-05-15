import { getToken } from "@/src/utils/api/auth";

// Control interno de caché con vida útil
const cache = new Map<string, { data: any; timestamp: number }>();

// Detecta entorno actual (development, production)
const isDev = import.meta.env.MODE === "development";

export async function fetchProtected(url: string) {
  const now = Date.now();

  const token = await getToken();

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);

    const data = await response.json();

    if (!isDev) {
      cache.set(url, { data, timestamp: now });
    }

    return data;
  } catch (error: any) {
    console.error(`[fetchProtected] Error al hacer fetch: ${error.message}`);
    throw error;
  }
}
