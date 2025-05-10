import { getToken } from "@/src/utils/api/auth";

const cache = new Map<string, any>();

export async function fetchProtected(url: string) {
  if (cache.has(url)) return cache.get(url);

  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Error al obtener datos protegidos");

  const data = await response.json();
  cache.set(url, data);
  return data;
}
