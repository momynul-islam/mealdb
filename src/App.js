import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import MealDetails from "./components/MealDetails/MealDetails";
import Categories from "./components/Categories/Categories";
import CategoryMeals from "./components/Categories/CategoryMeals";
import SearchMeals from "./components/Home/SearchMeals";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/search-meals/:searchName",
        element: <SearchMeals></SearchMeals>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
      {
        path: "/meals/:mealName",
        element: (
          <PrivateRoutes>
            <MealDetails></MealDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
        },
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryMeals></CategoryMeals>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
