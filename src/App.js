import React, { Component } from "react";
import Face from "./component/emoji";
import hand from "./component/hand.png";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { limitx:window.innerWidth*0.2,
                    x: window.innerWidth*0.2, 
                    y: window.innerHeight*0.45 ,
                    browserx:window.innerWidth,
                    browsery: window.innerHeight};
  }
  _onMouseMove(e) {
    this.setState({ x: e.screenX});
    console.log("hi");
    console.log((this.state.browserx), (this.state.browsery));
  }
  render() {
    var { x, y } = this.state;
    console.log(x,y)
    console.log((this.state.browserx), (this.state.browsery))
    if (x < this.state.limitx) {
         x = this.state.limitx;
     }
    if (x > 2.5*this.state.limitx) {
      x = 2.5*this.state.limitx;
    }

    return (
      <body style={{height: "100%", width: "100%"}} onMouseMove={this._onMouseMove.bind(this)} >
        <Face height={this.state.browsery} width={this.state.browserx}/>
        <img
          src={hand}
          style={{
            position: "absolute",
            top: (this.state.y),
            left: x
          }}

          alt="hand"
          height={this.state.browserx*0.2}
          width={this.state.browsery*0.4}
        />
      </body>
    );
  }
}

export default App;
