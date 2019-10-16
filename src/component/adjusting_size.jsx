import React, { Component } from "react";
import hand from "./hand.png";

class Adjust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      x: this.props.posx,
      y: this.props.posy,
      x_increment: 1,
      y_increment: 1
    };
  }

  tick() {
    if (this.state.x > this.props.x - this.props.x / 8)
      this.setState({ x_increment: -1 });
    if (this.state.x <= 50) this.setState({ x_increment: 1 });
    if (this.state.y > this.props.y - this.props.x / 8)
      this.setState({ y_increment: -1 });
    if (this.state.y <= 100) this.setState({ y_increment: 1 });
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
      x: (prevState.x += this.state.x_increment * 10),
      y: (prevState.y += this.state.y_increment * 10)
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var size = this.state.seconds * 10;
    if (size > this.props.x / 10) size = this.props.x / 10;
    return (
      <div>
        <img
          src={hand}
          style={{
            position: "absolute",
            top: this.state.y,
            left: this.state.x
          }}
          alt="hand"
          height={size}
          width={size}
        />
      </div>
    );
  }
}
export default Adjust;
