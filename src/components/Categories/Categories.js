import React from "react";
import "./Categories.css";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const categories = useLoaderData().categories;

  return (
    <div className="min-h-screen my-5">
      <h2 className="text-3xl font-bold text-center my-5">Meal Categories</h2>
      <div className="my-5 grid justify-items-center gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {categories.map((category, idx) => (
          <Category key={idx} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
