import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <div>
          <p> 35,000+ already joined</p>

          <h3> Stay up-to-date with what we’re doing</h3>
          <form>
          <input type="email" required  placeholder="Enter your email"/>
          <button type="submit" className="red-btn animation"> Contact Us </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
