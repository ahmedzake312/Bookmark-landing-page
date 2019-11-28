import React, { Component } from "react";

class Extension extends Component {
  render() {
    return (
      <div className="extension">
        <div className="text-box">
          <h3> Download the extension</h3>

          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="cards-grid">
          <div className="card">
            <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-chrome.svg?v=1574421285452" alt="img" class="card-img"/>
            <h4> Add to Chrome</h4>
            <p> Minimum version 62</p>
                 <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fbg-dots.svg?v=1574421084484" alt="dot" className="dot"/>
            <button className="blue-btn animation">Add & Install Extension</button>
          </div>

          <div className="card">
            <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-firefox.svg?v=1574421298530" alt="img" class="card-img"/>
            <h4> Add to Firefox</h4>
            <p> Minimum version 55</p>
            <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fbg-dots.svg?v=1574421084484" alt="dot" className="dot"/>
            <button className="blue-btn animation"> Add & Install Extension</button>
          </div>

          <div className="card">
            <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Flogo-opera.svg?v=1574421312664" alt="img" class="card-img"/>
            <h4>Add to Opera</h4>
            <p> Minimum version 46</p>
                 <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fbg-dots.svg?v=1574421084484" alt="dot" className="dot"/>
            <button className="blue-btn animation"> Add & Install Extension</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Extension;
