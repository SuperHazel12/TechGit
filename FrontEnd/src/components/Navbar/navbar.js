import React, { Component } from "react";
import { menuitems } from "./menuitems";
import { button } from "./button";
import "./navbar.css";
import SearchBox from "react-responsive-searchbox/lib/SearchBox";

class navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  state = { searchBoxVal: "" };
  handleSearchBoxValChange = (e) => {
    this.setState({
      searchBoxVale: e.target.value,
    });
  };

  handleSearchBoxSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchBoxVal);
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h2 className="navbar-logo">TechOpps</h2>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="search">
          <SearchBox
            className="search-text"
            placeholder="Search"
            value={this.state.searchBoxVal}
            onchange={this.handleSearchBoxValChange}
            searchBoxStyles={{
              border: "none",
              borderTopLeftRadius: "7px",
              borderBottomLeftRadius: "7px",
        
            }}
            searchButtonStyles={{
              background: "#00a037",
              border: "1px solid white",
              borderTopRightRadius: "7px",
              borderBottomRightRadius: "7px",
            }}
            searchIconStyles={{ color: "white" }}
          />
        </div>
        <button className="profile">Profile</button>
      </nav>
    );
  }
}

export default navbar;
