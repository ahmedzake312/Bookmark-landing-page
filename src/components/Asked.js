import React, { Component } from "react";
import Qa from "./Qa";
class Asked extends Component {
  render() {
    return (
      <div className="asked">
        <div className="text-box">
          <h3>Frequently Asked Questions</h3>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <Qa q="What is Bookmark?" a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."/>
        <Qa q="How can I request a new browser?" a="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."/>
        <Qa q="Is there a mobile app?" a="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum."/>
        <Qa q="What about other Chromium browsers?" a="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."/>
        <button className="blue-btn animation">More Info</button>
      </div>
    );
  }
}

export default Asked;
