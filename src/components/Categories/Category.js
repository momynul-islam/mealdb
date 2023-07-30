import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();
  console.log(category.strCategory);
  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <div
      onClick={() => handleCategoryClick(category.strCategory)}
      className="card w-56 h-28 shadow-xl image-full cursor-pointer"
    >
      <figure>
        <img src={category.strCategoryThumb} alt="category image"></img>
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-white">{category.strCategory}</h2>
      </div>
    </div>
  );
};

export default Category;
