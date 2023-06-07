import React, { useContext } from "react";
import appliance from "../imgs/app.png";
import veg from "../imgs/veg.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { TbMathGreater } from "react-icons/tb";
import { FoodContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

const Home = () => {
  const FoodData = useContext(FoodContext);
  function formatDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return day + " " + month + " " + year;
  }
  return (
    <>
      <div className="container">
        <header>
          <div className="head-fixed">
            <div className="top-black"></div>
            <div className="calender-data">
              <h4>
                {<FaCalendarAlt style={{ color: "#ffc078 " }} />} {formatDate()}
              </h4>
              <h4>10:30Pm-12:30Pm </h4>
            </div>
            <div className="category">
              <button className="current">Indian</button>
              <button className="button">Indian</button>
              <button className="button">Indian</button>
              <button className="button">Indian</button>
            </div>
            <div className="dish-heading">
              <h2>Popular Dishes</h2>
            </div>
            <div className="dishes">
              {FoodData.popDish.map((item) => {
                return (
                  <>
                    <h4
                      style={{
                        background: `linear-gradient(#00000096, #00000085), url(${item.image})`,
                      }}
                    >
                      {item.name}
                    </h4>
                  </>
                );
              })}
            </div>
          </div>
        </header>
        <div className="recommended">
          <div className="top-content">
            <h4>Recommended</h4>
            <button>Menu</button>
          </div>
          {FoodData.dish.map((item) => {
            return (
              <>
                <div
                  className="right-img"
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <button>Add +</button>
                </div>

                <div className="food-data">
                  <div className="food-dish">
                    <div className="food-head">
                      <h4>{item.name}</h4>
                      <h4>
                        <img src={veg} />
                      </h4>
                      <h4>
                        <span>
                          {item.rating}
                          <h6>{<AiFillStar />}</h6>
                        </span>
                      </h4>
                    </div>
                    <div className="food-head">
                      <div className="ref-content">
                        {item.equipments.map((data) => {
                          return (
                            <>
                              <div className="data-app">
                                <img src={appliance} /> <h6>{data}</h6>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      <div className="ing-list">
                        <h4>Ingredients</h4>
                        <button>
                          <Link to="ingredients">View List</Link>
                          <TbMathGreater />
                        </button>
                      </div>
                    </div>
                    <div className="description">
                      <h5>{item.description}</h5>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="selected-items">
          <button>
            <Link to="ingredients">2 Food Item Selected</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
