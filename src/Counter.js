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
    console.log("------------------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - No new render");
      console.log("------------------------");
      return false;
    }
    console.log("Should Component Update - New Render");
    console.log("------------------------");
    return true;
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
