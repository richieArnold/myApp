import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }
  // incrementCount = () => {
  //   this.setState((previous) => {
  //     return { count: previous.count + 1 };
  //   });
  // };
  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        {/* <button onClick={this.incrementCount}>Clicked {count} times</button> */}
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}
export default UpdatedComponent(ClickCounter);
