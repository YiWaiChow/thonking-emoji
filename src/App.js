import React, { Component } from "react";
import Face from "./component/emoji";
import Hand from "./component/emojihand";
import BackgroundImage from "./component/background";
import Adjust from "./component/adjusting_size";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limitx: window.innerWidth * 0.3,
      x: window.innerWidth * 0.2,
      y: window.innerHeight * 0.45,
      browserx: window.innerWidth,
      browsery: window.innerHeight
    };
  }
  _onMouseMove(e) {
    this.setState({ x: e.screenX });
  }
  render() {
    var { x } = this.state;

    return (
      <div onMouseMove={this._onMouseMove.bind(this)}>
        <BackgroundImage />
        <Face height={this.state.browsery} width={this.state.browserx} />
        <Hand
          height={this.state.browserx * 0.2}
          width={this.state.browsery * 0.4}
          top={this.state.y}
          left={x}
          limit={this.state.limitx}
        />
        <Adjust
          x={this.state.browserx}
          y={this.state.browsery}
          posx={Math.random() * this.state.browserx}
          posy={Math.random() * this.state.browsery}
        />

        <Adjust
          x={this.state.browserx}
          y={this.state.browsery}
          posx={Math.random() * this.state.browserx}
          posy={Math.random() * this.state.browsery}
        />

        <Adjust
          x={this.state.browserx}
          y={this.state.browsery}
          posx={Math.random() * this.state.browserx}
          posy={Math.random() * this.state.browsery}
        />
      </div>
    );
  }
}

export default App;
