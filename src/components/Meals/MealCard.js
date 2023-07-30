import React, { useEffect } from "react";
import "./MealCard.css";
import { useNavigate } from "react-router-dom";

const MealCard = ({ meal }) => {
  const { strMeal, strMealThumb, strTags } = meal;
  const navigate = useNavigate();

  const handleCardClick = (strMeal) => {
    navigate(`/meals/${strMeal}`);
  };

  return (
    <div
      onClick={() => handleCardClick(strMeal)}
      className="meal-card card card-compact w-3/4 shadow-xl"
    >
      <figure>
        <img className="mealThumb" src={strMealThumb} alt="meal" />
      </figure>
      <div className="card-body rounded-lg bg-primary text-white">
        <h2 className="card-title">{strMeal}</h2>
        <p>{strTags}</p>
      </div>
    </div>
  );
};

export default MealCard;
