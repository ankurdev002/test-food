import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();

const DataContext = (props) => {
  const dishes = "http://localhost:3004/dishes";
  const popularDishes = "http://localhost:3004/popularDishes";
  const foodName = "http://localhost:3005/foodname";
  const ingredients = "http://localhost:3005/ingredients";

  const [dish, setDish] = useState([]);
  const [popDish, setPopDish] = useState([]);
  const [foodN, setFoodN] = useState([]);
  const [ingri, setIngri] = useState([]);

  useEffect(() => {
    axios.get(dishes).then((res) => {
      setDish(res.data);
    });
    axios.get(popularDishes).then((res) => {
      setPopDish(res.data);
    });
    axios.get(foodName).then((res) => {
      setFoodN(res.data);
    });
    axios.get(ingredients).then((res) => {
      setIngri(res.data);
    });
  }, []);
  console.log("dishes", dish);
  console.log("popular", popDish);
  console.log("foodname", foodN);
  console.log("ingridents", ingri);

  return (
    <>
      <FoodContext.Provider
        value={{
          dish,
          popDish,
          foodN,
          ingri,
        }}
      >
        {props.children}
      </FoodContext.Provider>
    </>
  );
};

export default DataContext;
