import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHamOpen: false
    };

    this.openHam = this.openHam.bind(this);
  }

  openHam() {
    this.setState({
      isHamOpen: !this.state.isHamOpen
    });
  }
  render() {
    return (
      <nav>
        <img
          src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-bookmark.svg?v=1574421272012"
          alt="Logo"
          className="logo"
        />
        <ul className="nav-list">
          <li className="animation"> Features</li>
          <li className="animation"> Pricing</li>
          <li className="animation"> Contact</li>
          <li>
            <button className="red-btn animation">Login</button>
          </li>
        </ul>
        <img
          onClick={this.openHam}
          src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-hamburger.svg?v=1574421179137"
          alt="hambar"
          className="hambar"
        />
        {this.state.isHamOpen ? (
          <div className="ham-menu">
            <div className="ham-flex">
              <img
                src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-bookmark.svg?v=1574421272012"
                alt="icon"
                className="ham-logo"
              />
              <img
                onClick={this.openHam}
                src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-close.svg?v=1574421152569"
                alt="icon"
                className="ham-icon"
              />
            </div>

            <ul className="ham-list">
              <li className="animation"> Features</li>
              <li className="animation"> Pricing</li>
              <li className="animation"> Contact</li>
            </ul>
            
            <button className="white-btn animation">Login</button>

            <div className="ham-icons">
              <img
                src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-facebook.svg?v=1574421168433"
                alt=""
                className="ham-icon"
              />
              <img
                src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-twitter.svg?v=1574421192621"
                alt=""
                className="ham-icon"
              />
            </div>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default NavBar;
