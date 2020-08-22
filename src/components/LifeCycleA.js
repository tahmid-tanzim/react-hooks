import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tanzim",
    };

    this.changeState = this.changeState.bind(this);
    console.log("LifeCycleA constructor - ", Date.now());
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps - ", Date.now());
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount - ", Date.now());
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate - ", Date.now());
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate - ", Date.now());
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate - ", Date.now());
  }

  componentWillUnmount() {
    console.log("LifeCycleA componentWillUnmount - ", Date.now());
  }

  /* Error Boundary */
  // static getDerivedStateFromError(error) {}
  // componentDidCatch(error, info) {}

  changeState() {
    this.setState({
      name: "Lupin",
    });
  }

  render() {
    console.log("LifeCycleA render - ", Date.now());
    return (
      <>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
