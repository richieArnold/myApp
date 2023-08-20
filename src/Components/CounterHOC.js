import React from "react";

const UpdateComp = (OrgComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    increment = () => {
      this.setState((previous) => {
        return { count: previous.count + 1 };
      });
    };

    render() {
      return <OrgComp count={this.state.count} increment={this.increment} />;
    }
  }
  return NewComp;
};
export default UpdateComp;
