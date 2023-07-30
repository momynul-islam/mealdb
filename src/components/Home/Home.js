import React, { useContext, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchClick = () => {
    navigate(`/search-meals/${search}`);
  };

  return (
    <div className="Home min-h-screen">
      <input
        onChange={handleInput}
        type="text"
        placeholder="Search Meal Here..."
        className="search-input input input-bordered input-info w-full max-w-xs"
      />
      <button
        onClick={handleSearchClick}
        className="ml-2 btn btn-active bg-blue-900 text-white-200"
      >
        Search
      </button>
    </div>
  );
};

export default Home;
