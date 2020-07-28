import React from "react";
import "../components/browse.css";
import DP from "../assets/DP.png";

function browse() {
  return (
    <>
      <div className="post">
        <div className="row">
          <img src={DP} className="DP" />
          <h4 className="name">Toma Read</h4>
          <h6 className="followers">2k Followers</h6>
          <h6 className="following">2k Following</h6>
        </div>
        <div className="button">
          <a href="#post" className="textbutton">
            Create a Post
          </a>
        </div>
        <div className="profilebutton">
          <a href="#post" className="textbutton">
            View Profile
          </a>
        </div>
      </div>
    </>
  );
}
export default browse;
