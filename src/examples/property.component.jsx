import React, { Component } from "react";
export default class PropertyComponent extends Component {
  state = {
    title: "Hello World",
    image: "./img/react.jpg",
  };
  styles = {
    fontSize: 30,
    color: "red",
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={this.state.image} />
        <span style={this.styles}>Styles</span>
      </div>
    );
  }
}
