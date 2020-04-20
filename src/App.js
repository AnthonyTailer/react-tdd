import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: null,
    };
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Hello Fucking Jest!</h1>
        <h1 data-test="counter-display">
          The counter is currently: {this.state.counter}
        </h1>
        {this.state.error && (
          <h6 className="counterError" data-test="counter-display-error">
            {this.state.error}
          </h6>
        )}
        <button
          data-test="increment-button"
          onClick={() => {
            this.setState((prev) => ({ counter: prev.counter + 1 }));
          }}
        >
          Increment
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            this.setState((prev) => {
              if (prev.counter > 0) return { counter: prev.counter - 1 };
              return {
                counter: prev.counter,
                error: "Couldn't set counter to values bellow zero",
              };
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
