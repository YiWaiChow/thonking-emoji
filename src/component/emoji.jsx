import React, { Component } from "react";
import face from "./thonking.png";

class Face extends Component {
  render() {
    return (
      <div
        className="face emoji"
        style={{
          position: "absolute",
          top: this.props.height*0.2,
          left: this.props.width*0.3
        }}
      >
        <img src={face} alt="face" height={this.props.height*0.6} width={this.props.width*0.4} />
      </div>
    );
  }
}

export default Face;
