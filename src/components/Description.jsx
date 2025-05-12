import React, { Component } from "react";

class Description extends Component {
  render() {
    return <p className="description">{this.props.text}</p>;
  }
}

export default Description;
