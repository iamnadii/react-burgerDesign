import React from "react";

const DishCard = ({ img, title: thistitle, subtitle }) => {
  return (
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}${img}`} alt="" />
      <h1>{thistitle}</h1>
      <p>{subtitle}</p>
      <button type="button">ORDER NOW</button>
    </div>
  );
};

export default DishCard;
