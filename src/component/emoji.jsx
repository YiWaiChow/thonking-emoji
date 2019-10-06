import React, { Component } from "react";
import Face from "./thonking.jpg";

class Face extends Component {
  render() {
    return (
      <div
        className="face emoji"
        style={{
          position: "absolute",
          zindex: 0,
          positon: "relative",
          top: 200,
          left: 900
        }}
      >
        <img src={Face} alt="face" height={800} width={900} />
      </div>
    );
  }
}

export default Face;
