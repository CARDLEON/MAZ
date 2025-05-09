import { getToken } from "@/src/utils/api/auth";

export async function fetchProtected(url: string) {
  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Error en el fetching de datos");

  return response.json();
}
