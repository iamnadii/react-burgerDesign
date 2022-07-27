import React from "react";

const Header = ({ showMenu, setShowMenu }) => {
  /**
   * const [getState, setState] = useState()
   *
   * function thisFunction() {
   * return {
   *  name: 'bhatti',
   *  age: 97,
   *  gender: 'not comfortabe to tell',
   * }
   * }
   *
   * const {ag]e} = thisFunction();
   *
   *
   *
   */

  return (
    <div className="header">
      <div className="upper-content">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/imgs/logo.png`} alt="" />
        </div>
        <a className="toggle-btn" onClick={() => setShowMenu((prev) => !prev)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="nav">
          <div className="info">
            <img src={`${process.env.PUBLIC_URL}/imgs/delivery.png`} alt="" />
            <p>Express Delivery +1 234 567 890</p>
          </div>
          <div className={`menu ${showMenu ? "menu-hidden" : ""}`}>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">MENU</a>
              </li>
              <li>
                <a href="/">OUR STORY</a>
              </li>
              <li>
                <a href="/">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="left">
          <p>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
          <h1>BURGER</h1>
          <h3>WEEK</h3>
          <div className="front-text">
            <h2>
              $5<small>.49</small>
              <br />
              <span>ONLY</span>
            </h2>
          </div>
        </div>
        <div className="right">
          <img src={`${process.env.PUBLIC_URL}/imgs/main-content.png`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
