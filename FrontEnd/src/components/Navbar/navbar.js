import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import "./navbar.css";

class navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h2 className="navbar-logo">TechOpps</h2>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
<<<<<<< Updated upstream
        <Button>Profile</Button>
=======
        <button className="profile">Profile</button>
>>>>>>> Stashed changes
      </nav>
    )
  }
}

export default navbar;
