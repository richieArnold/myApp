import React from "react";
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((previous) => {
        return { count: previous.count + 1 };
      });
    };
    render() {
      // return <OriginalComponent name="Tom" />;
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
