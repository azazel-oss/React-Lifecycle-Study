import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log("Contructor");
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  decrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("------------------------");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter : {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
