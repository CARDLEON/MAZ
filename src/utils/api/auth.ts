const user = import.meta.env.WP_USERNAME;
const pass = import.meta.env.WP_PASSWORD;

export async function getToken() {
  const response = await fetch(
    "https://cms.sandboxcardleon.com/wp-json/jwt-auth/v1/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${user}`,
        password: `${pass}`,
      }),
    }
  );

  if (!response.ok) throw new Error("Token could not be fetched");

  const data: { token: string } = await response.json();
  return data.token;
}