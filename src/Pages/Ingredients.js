import React, { useContext } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FcClock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FoodContext } from "../Context/DataContext";
import { AiFillStar } from "react-icons/ai";
import ingImg from "../imgs/ing.png";

const Ingredients = () => {
  const FoodInfo = useContext(FoodContext);

  return (
    <>
      <div className="ing-container">
        <Link to="/">
          <span>
            <IoChevronBack />
          </span>
        </Link>
        <div className="left-cont">
          <h1>
            {FoodInfo.foodN.name}
            <span>
              {FoodInfo.foodN.rating}
              <h6>{<AiFillStar />}</h6>
            </span>
          </h1>
          <p>{FoodInfo.foodN.description}</p>
          <h5>
            <span>
              <FcClock />
            </span>
            {FoodInfo.foodN.timeToPrepare}
          </h5>
        </div>
        <div className="right-cont">
          <img src={ingImg} />
        </div>
      </div>
      <div className="ing-main-container">
        <div className="ing-data">
          <h2>Ingredients</h2>
          <h4>For 2 People</h4>
        </div>
        <div className="vegetables">
          <h3>Vegetables(5)</h3>
          {FoodInfo.ingri.vegetables.map((veg) => {
            return (
              <>
                <div className="veg-details">
                  <h4>{veg.name}</h4>
                  <h4>{veg.quantity}</h4>
                </div>
              </>
            );
          })}
        </div>
        <div className="spices">
          <h3>Spices (10)</h3>
          {FoodInfo.ingri.spices.map((spice) => {
            return (
              <>
                <div className="spic-details">
                  <h4>{spice.name}</h4>
                  <h4>{spice.quantity}</h4>
                </div>
              </>
            );
          })}
        </div>
        <div className="appliance">
          <h2>Appliances</h2>
          <div className="appliance-content">
            {FoodInfo.ingri.appliances.map((appliance) => {
              return (
                <>
                  <div className="app-details">
                    <img src={appliance.image} alt="Image" />
                    <h6>{appliance.name}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
