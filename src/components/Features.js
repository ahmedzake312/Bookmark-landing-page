import React, { Component } from "react";

class Features extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tapNumber: 1
    };
  }

  renderTap() {
    switch (this.state.tapNumber) {
      case 1:
        return (
          <div className="features-grid">
            <img
              src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fillustration-features-tab-1.svg?v=1574421207575"
              alt="img"
              className="ft-img"
            />
            <div>
              <h3> Bookmark in one click</h3>

              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>

              <button className="blue-btn animation"> More Info</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="features-grid">
            <img
              src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fillustration-features-tab-2.svg?v=1574421222926"
              alt="img"
              className="ft-img"
            />
            <div>
              <h3> Intelligent search</h3>

              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button className="blue-btn animation"> More Info</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="features-grid">
            <img
              src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Fillustration-features-tab-3.svg?v=1574421237762"
              alt="img"
              className="ft-img"
            />
            <div>
              <h3>Share your bookmarks</h3>

              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button className="blue-btn animation"> More Info</button>
            </div>
          </div>
        );
    }
  }

  changeTapNumber(number) {
    this.setState({
      tapNumber: number
    });

    const taps = document.querySelectorAll(".taps");
    taps.forEach(tap => {
      tap.classList.remove("active");
    });
    taps[number - 1].classList.add("active");
  }
  render() {
    return (
      <div className="features">
        <div className="text-box">
          <h3> Features</h3>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>

        <ul className="features-list">
          <li
            onClick={() => this.changeTapNumber(1)}
            className="active taps animation"
          >
            <p>Simple Bookmarking</p>
          </li>
          <li
            onClick={() => this.changeTapNumber(2)}
            className="taps animation"
          >
            <p>Speedy Searching</p>
          </li>
          <li
            onClick={() => this.changeTapNumber(3)}
            className="taps animation"
          >
            <p> Easy Sharing</p>
          </li>
        </ul>
        {this.renderTap()}
      </div>
    );
  }
}

export default Features;
