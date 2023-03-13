import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Clock(props) {
  return (
    <div>
      <h1>Hello</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}
class Clocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1> Hello , world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function tick() {
  const elements = (
    <div>
      <h1>Hello, world111</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>

      <Clock date={new Date()} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Clocks />
      <Clocks />
      <Clocks />
    </div>
  );
}
root.render(<App />);
setInterval(tick, 1000);
