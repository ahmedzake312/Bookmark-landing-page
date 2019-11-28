import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <img
              src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-bookmark.svg?v=1574421272012"
              alt="logo"
              class="footer-logo"
            />
          </li>
          <li>
            <p>Features</p>
          </li>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </ul>
        <ul class="icons">
          <li>
          <img
            src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-facebook.svg?v=1574421168433"
            alt="icon"
            className="icon"
          />
          </li>
          <li>
          <img
            src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-twitter.svg?v=1574421192621"
            alt="icon"
            className="icon"
          />
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
