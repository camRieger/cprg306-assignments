'use client'

import {useState, useEffect} from "react";

export function GetMealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {

    const loadMealIdeas = async () => {
      const mealData = await fetchMealIdeas({ingredient});
      setMeals(mealData);
    }

    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="flex flex-col w-full h-full shadow-lg/20 bg-gray-300/30 rounded-2xl items-center p-8 m-4">
      <h3 className="text-2xl mb-4 font-bold text-center flex-shrink-0">
        List of Meals Including: {ingredient?.toUpperCase()}
      </h3>

      <div className="flex-1 overflow-y-auto bg-indigo-950/30 rounded-lg w-9/10 max-h-40">
        <ul className="list-disc m-6 px-12">
          {meals && meals.length > 0 ? (
            meals.map(meal => (
              <li key={meal.idMeal} className="text-lg mb-3">
                {meal.strMeal}
              </li>
            ))
          ) : (
            <li className="text-lg">No Meals Available, Click a Grocery Item!</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export async function fetchMealIdeas({ ingredient }) {

  const response = await fetch(`/api/mealdb?ingredient=${ingredient}`);
  const data = await response.json();
  return data.meals;
  // // create endpoint
  // const endpoint = new URL(MEAL_DB_API_ENDPOINT);
  // endpoint.searchParams.set("i", ingredient);
  //
  // const response = await fetch(endpoint.toString(), {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // });
  //
  // if (!response.ok) {
  //   throw new Error("Failed to fetch meal ideas");
  // }
  //
  // return await response.json();
}