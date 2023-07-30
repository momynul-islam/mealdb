import React, { useEffect, useState } from "react";
import "./Meals.css";
import MealCard from "./MealCard";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [letter, setLetter] = useState("a");
  const handleClick = (letter) => {
    setLetter(letter);
  };

  useEffect(() => {
    if (!letter) {
      return null;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [letter]);

  let letters = [];
  for (let i = 97; i <= 122; i++) {
    letters.push(String.fromCharCode(i));
  }

  return (
    <div className="meals min-h-screen">
      <div className="letters">
        {letters.map((letter) => (
          <button
            onClick={() => handleClick(letter)}
            className="btn btn-sm btn-primary"
            key={letter}
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="gap-10 grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {meals ? (
          meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal}></MealCard>
          ))
        ) : (
          <p className="text-4xl">No meals available on this letter</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
