import React, { Component } from "react";
import Face from "./component/emoji";
import hand from "./component/hand.png";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    console.log("hi");
  }
  render() {
    var { x, y } = this.state;
    if (x < -1224) {
      x = -1224;
    }
    if (x > -800) {
      x = -800;
    }

    return (
      <main onMouseMove={this._onMouseMove.bind(this)}>
        <Face />

        <h1>
          Mouse coordinates: {x} {y}
        </h1>
        <img
          src={hand}
          style={{
            position: "absolute",
            display: "flex",
            top: 550,
            left: 1224 + x + 800
          }}
          alt="hand"
          height={500}
          width={500}
        />
      </main>
    );
  }
}

export default App;
