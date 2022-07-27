import React from "react";
import DishCard from "./DishCard";

const Main3 = () => {
  return (
    <div className="main-3">
      <DishCard
        img="/imgs/img-1.png"
        title="cheese burger"
        subtitle="this is the subtitle"
      />
      <DishCard
        img="/imgs/img-2.png"
        title="cheese burger 2"
        subtitle="this is the subtitle"
      />
      <DishCard
        img="/imgs/img-1.png"
        title="cheese burger 3"
        subtitle="this is the subtitle"
      />
      {/* <div className="img">
        <img src={`${process.env.PUBLIC_URL}/imgs/img-2.png`} alt="" />
        <h1>LOREM IPSUM COLOR</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, aut.
        </p>
        <button type="button">ORDER NOW</button>
      </div>
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/imgs/img-1.png`} alt="" />
        <h1>LOREM IPSUM COLOR</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, aut.
        </p>
        <button type="button">ORDER NOW</button>
      </div> */}
    </div>
  );
};

export default Main3;
