import React, { Component } from "react";
import UpdateComp from "./CounterHOC";
class CountHover extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>I have hovered {count} times</h1>
      </div>
    );
  }
}
export default UpdateComp(CountHover);
