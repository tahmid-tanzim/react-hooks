import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tanzim",
    };

    console.log("LifeCycleA constructor - ", Date.now());
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps - ", Date.now());
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount - ", Date.now());
  }

  render() {
    console.log("LifeCycleA render - ", Date.now());
    return (
      <>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </>
    );
  }
}

export default LifeCycleA;
