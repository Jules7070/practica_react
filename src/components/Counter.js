import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Counter mounted with initial count:", this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Counter updated, new count:", this.state.count);
    }
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>Contador actual: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Incremento</button>
        <button onClick={this.handleDecrement}>Decremento</button>
      </div>
    );
  }
}

export default Counter;
