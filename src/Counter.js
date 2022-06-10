import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    console.log("Contructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
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
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        counter: props.seed,
        seed: props.seed,
      };
    }
    return null;
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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot before Update");
    console.log("------------------------");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("------------------------");
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
