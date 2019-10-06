import React, { Component } from "react";
import hand from "./hand.png";

class Hand extends Component {
  state = {};
  render() {
    return (
      <img
        src={hand}
        style={{
          position: "absolute",
          display: "flex",
          top: 550,
          left: this.props.xpos
        }}
        alt="hand"
        height={500}
        width={500}
      />
    );
  }
}

export default Hand;
