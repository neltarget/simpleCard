import React from "react";

const Image = (props) => {
  return (
      <img className="image"
        src={props.imageUrl}
        width={"150px"}
        height={"150px"}
        alt="image-description"
      />
  );
};

export default Image;
