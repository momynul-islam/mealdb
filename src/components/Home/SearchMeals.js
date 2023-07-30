import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../Meals/MealCard";

const SearchMeals = () => {
  const { searchName } = useParams();
  const [searchMeals, setSearchMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
      .then((res) => res.json())
      .then((data) => setSearchMeals(data.meals));
  }, []);

  return (
    <div className="meals">
      <div className="gap-10 grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {searchMeals ? (
          searchMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal}></MealCard>
          ))
        ) : (
          <p className="text-4xl">No meals available on this category</p>
        )}
      </div>
    </div>
  );
};

export default SearchMeals;
