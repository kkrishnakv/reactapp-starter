import React, { Component } from "react";
export default class PropertyComponent extends Component {
  prop = {
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
        <h1>{this.prop.title}</h1>
        <img src={this.prop.image} />
        <span style={this.styles}>Styles</span>
      </div>
    );
  }
}
