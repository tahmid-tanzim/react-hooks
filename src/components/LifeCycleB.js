import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tahmid",
    };

    console.log("LifeCycleB constructor - ", Date.now());
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps - ", Date.now());
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount - ", Date.now());
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate - ", Date.now());
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleB getSnapshotBeforeUpdate - ", Date.now());
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate - ", Date.now());
  }


  componentWillUnmount() {
    console.log("LifeCycleB componentWillUnmount - ", Date.now());
  }
  
  /* Error Boundary */
  // static getDerivedStateFromError(error) {}
  // componentDidCatch(error, info) {}

  render() {
    console.log("LifeCycleB render - ", Date.now());
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
