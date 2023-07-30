import React from "react";

const Ingredient = ({ num, meal }) => {
  return (
    <div className="card bg-orange-400 shadow-xl">
      <figure>
        <img
          className="w-96 h-96"
          src={`https://www.themealdb.com/images/ingredients/${
            meal["strIngredient" + num]
          }.png`}
          alt="ingredient image"
        />
      </figure>
      <div className="card-body bg-red-500">
        <h2 className="card-title text-white font-bold capitalize">
          {meal["strIngredient" + num]}
          <div className="badge badge-primary">{meal["strMeasure" + num]}</div>
        </h2>
      </div>
    </div>
  );
};

export default Ingredient;
