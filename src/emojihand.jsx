import React, { Component } from "react";
import hand from "./hand.png";

class Hand extends Component {
  render() {
    var x = this.props.left
    if (x < this.props.limit) {
      x = this.props.limit;
      }
    if (x > 1.75*this.props.limit) {
      x = 1.75*this.props.limit;
    }
    return (
      <div >
        <img
          src={hand}
          style={{
            position: "absolute",
            top: (this.props.top),
            left: x
          }}

          alt="hand"
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default Hand;