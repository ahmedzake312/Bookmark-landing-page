import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import ShowCase from "./components/ShowCase";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Asked from "./components/Asked";
import Form from "./components/Form";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ShowCase/>
        <Features/>
        <Extension/>
        <Asked/>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
