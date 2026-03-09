const MEAL_DB_API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/filter.php"

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const ingredient = searchParams.get("ingredient");
  const res = await fetch(`${MEAL_DB_API_ENDPOINT}?i=${ingredient}`);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}