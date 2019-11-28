import React, { Component } from "react";

class ShowCase extends Component {
  render() {
    return (
      <div className="hero">
        <div>  
          <h1> A Simple Bookmark Manager</h1>

 <p> A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.
          </p>
          <button className="blue-btn animation"> Get it on Chrome</button>
          <button className="white-btn animation"> Get it on Firefox</button>
        </div>
        <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fillustration-hero.svg?v=1574421256385" alt="hero img" className="hero-img"/>
      </div>
    );
  }
}

export default ShowCase;
