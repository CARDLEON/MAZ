import { api } from "@/src/utils/api/axios.config";

// Control interno de caché con vida útil
const cache = new Map<string, { data: any; timestamp: number }>();

// Detecta entorno actual (development, production)
const isDev = import.meta.env.MODE === "development";

export async function fetchProtected<T = any>(url: string): Promise<T> {
  const now = Date.now();

  try {
    // La autenticación ya está manejada por el interceptor
    const response = await api.get<T>(url);
    const data = response as T;

    if (!isDev) {
      cache.set(url, { data, timestamp: now });
    }

    return data;
  } catch (error: any) {
    console.error(`[fetchProtected] Error al hacer fetch: ${error.message}`);
    throw error;
  }
}
