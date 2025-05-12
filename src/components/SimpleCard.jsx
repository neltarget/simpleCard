import React, { Component } from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";

class SimpleCard extends Component {
  render() {
    return (
      <div className="simpleCard">
          <Image imageUrl="../src/assets/images/nike.png" />
          <div>
          <Title text="Nike Air Zoom Pegasus 38" />
          <Description text="Lightweight, cushioned running shoe with breathable mesh and responsive Zoom Air comfort." />
          </div>
      </div>
    );
  }
}

export default SimpleCard;
