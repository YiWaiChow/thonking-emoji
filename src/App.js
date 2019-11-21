import React, { Component } from "react";
import Face from "./emoji";
import Hand from "./emojihand";
import BackgroundImage from "./background";
import { Helmet } from "react-helmet";
import Adjust from "./adjusting_size";

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
    this.setState({ x: e.clientX });
  }
  render() {
    var { x } = this.state;

    return (
      <main onMouseMove={this._onMouseMove.bind(this)}>
        <Helmet>
          <title>{"Thonking-Emoji"}</title>
        </Helmet>
        <BackgroundImage />
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
        <Face height={this.state.browsery} width={this.state.browserx} />

        <Hand
          height={this.state.browserx * 0.2}
          width={this.state.browsery * 0.4}
          top={this.state.y}
          left={x}
          limit={this.state.limitx}
        />
      </main>
    );
  }
}

export default App;
