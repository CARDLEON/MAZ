import { getToken } from "@/src/utils/api/auth";

// Configuración TTL en ms
const CACHE_TTL_MS = 60 * 1000; // 1 minuto por defecto (puedes ajustar)

// Control interno de caché con vida útil
const cache = new Map<string, { data: any; timestamp: number }>();

// Detecta entorno actual (development, production)
const isDev = import.meta.env.MODE === "development";

export async function fetchProtected(url: string) {
  const now = Date.now();

  // Re-fetch if TTL is exceeded
  if (!isDev && cache.has(url)) {
    const cached = cache.get(url)!;
    if (now - cached.timestamp < CACHE_TTL_MS) {
      return cached.data;
    }
  }

  const token = await getToken();

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

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
