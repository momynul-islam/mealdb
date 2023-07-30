import React, { useEffect, useState } from "react";
import MealCard from "../Meals/MealCard";
import { useParams } from "react-router-dom";

const CategoryMeals = () => {
  const [categoryMeals, setCategoryMeals] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryMeals(data.meals));
  }, []);
  return (
    <div className="meals">
      <div className="gap-10 grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {categoryMeals ? (
          categoryMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal}></MealCard>
          ))
        ) : (
          <p className="text-4xl">No meals available on this category</p>
        )}
      </div>
    </div>
  );
};

export default CategoryMeals;
