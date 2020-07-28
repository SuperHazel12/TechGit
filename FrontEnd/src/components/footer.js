import React from "react";
import "./footer.css";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <img src={Facebook} className="socmed" />
        <img src={Instagram} className="socmed" />
        <img src={LinkedIn} className="socmed" />
        <img src={Twitter} className="socmed" />
        <p className="footertext">All Rights Reserved 2020</p>
      </div>
    </div>
  );
};

export default footer;
