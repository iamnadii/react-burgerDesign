import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer-logo"
        src={`${process.env.PUBLIC_URL}/imgs/footer-logo.png`}
        alt=""
      />
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
          mollitia ipsum a sapiente perferendis tempore deleniti illo libero!
          Ullam harum et ipsa provident nulla nihil delectus vel dolore unde?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          itaque.
        </p>
        <div className="right-text">
          <div className="up">
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/imgs/location.png`} alt="" />
            </a>
            <p>BUILDING NAME, COUNTRY</p>
          </div>
          <div className="down">
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/imgs/email.png`} alt="" />
            </a>{" "}
            <p>INFO@COMPANYNAME.COM</p>
          </div>
        </div>
      </div>
      <div className="foot-end">
        <p>&copy; COMPANY NAME 2020, ALL RIGHT RESERVED.</p>
        <div className="icons">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/imgs/Instagram.png`} alt="" />
          </a>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/imgs/Facebook.png`} alt="" />
          </a>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/imgs/Twitter.png`} alt="" />
          </a>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/imgs/WhatsApp.png`} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
