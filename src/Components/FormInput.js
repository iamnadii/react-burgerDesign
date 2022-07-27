import React from "react";

const FormInput = () => {
  return (
    <div className="form-input">
      <h3>RESERVATION</h3>
      <h1>BOOK YOUR TABLE</h1>
      <div className="inputs">
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL" />
      </div>
      <div className="inputs">
        <input type="text" placeholder="DATE" />
        <input type="text" placeholder="TIME" />
      </div>
      <div className="inputs">
        <input type="text" placeholder="PEOPLE" />
        <button type="button">FIND A TABLE</button>
      </div>
      <div className="img-1">
        <img src={`${process.env.PUBLIC_URL}/imgs/form-img-1.png`} alt="" />
      </div>
      <div className="img-2">
        <img src={`${process.env.PUBLIC_URL}/imgs/form-img-2.png`} alt="" />
      </div>
      <div className="img-3">
        <img src={`${process.env.PUBLIC_URL}/imgs/form-img-3.png`} alt="" />
      </div>
    </div>
  );
};

export default FormInput;
