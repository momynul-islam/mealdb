import React, { useEffect, useState } from "react";
import "./MealDetails.css";
import { useParams } from "react-router-dom";
import Ingredient from "./Ingredient";
import ReactPlayer from "react-player/youtube";

const MealDetails = () => {
  const [meal, setMeal] = useState({});
  const { mealName } = useParams();

  let numIngredients = [];
  {
    for (let i = 1; i <= 20; i++) {
      numIngredients.push(i);
    }
  }

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);

  return (
    <div className="p-5 min-h-screen">
      <h1 className="text-4xl font-bold text-center my-5">{meal.strMeal}</h1>

      {/* Instructions part */}
      <div className="flex flex-wrap gap-10 md:justify-center p-5 sm:justify-start">
        <figure className="my-5">
          <img className="w-96 h-96" src={meal.strMealThumb} alt="meal image" />
          <p className="text-xl">
            <strong className="text-error">Tags:</strong> {meal.strTags}
          </p>
        </figure>
        <div className="md:w-1/2 sm:w-full">
          <h3 className="text-2xl font-bold text-error">Instructions</h3>
          <p className="text-justify">{meal.strInstructions}</p>
        </div>
      </div>

      {/* Ingredients part */}
      <div className="my-5">
        <h3 className="text-2xl text-center font-bold text-error my-5">
          Ingredients
        </h3>
        <div className="grid gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {numIngredients.map(
            (num) =>
              meal["strIngredient" + num] && (
                <Ingredient key={num} num={num} meal={meal}></Ingredient>
              )
          )}
        </div>

        {/* youtube video link */}
        {meal.strYoutube && (
          <div className="my-5 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-error my-5">
              Youtube Video
            </h3>
            <ReactPlayer url={meal.strYoutube}></ReactPlayer>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetails;
