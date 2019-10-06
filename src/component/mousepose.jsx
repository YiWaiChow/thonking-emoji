import React, { Component } from "react";

class MousePos extends Component {
  render() {
    return <div onMouseMove={this.props.onMove}></div>;
  }
}
export default MousePos;
