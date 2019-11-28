import React, { Component } from "react";

class Qa extends Component {
  constructor(props){
    super(props);
    
    this.state={
      isOpen:false
    }
    this.showAnswer=this.showAnswer.bind(this);
  }
  
  showAnswer(){
    this.setState({
      isOpen:!this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Qa">
        <div className="question" onClick={this.showAnswer}>
          <p>{this.props.q}</p>
          <img src="https://cdn.glitch.com/f674ddf8-438d-48c1-8fdd-37f06379a3d4%2Ficon-arrow.svg?v=1574421321418" alt="img" class="qa-img"/>
        </div>
        {
          this.state.isOpen?
        <div className="answer">
          <p className="">{this.props.a}</p>
        </div>:null
          }
        </div>
    );
  }
}

export default Qa;