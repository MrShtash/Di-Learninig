import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child is unmounted!");
  }

  render() {
    return (
      <div>
        <h3>Hello World!</h3>
      </div>
    );
  }
}

export default Child;
