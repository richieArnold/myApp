import React, { Component } from "react";
import UpdateComp from "./CounterHOC";
class CountClick extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>I have clicked {count} times</button>;
  }
}
export default UpdateComp(CountClick);
