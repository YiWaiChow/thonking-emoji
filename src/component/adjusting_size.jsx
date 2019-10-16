import React, {Component }from "react";
import hand from "./hand.png";

class Adjust extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }

    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 300);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
        var size =(this.state.seconds*10)
        if (size >200)
            size = 200;

      return (
        <div>
          <img
          src={hand}
          style={{
            position: "absolute",
            top: (Math.random()*400),
            left: (Math.random()*800)
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