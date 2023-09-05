//parent component
import React, { Component } from "react";
import Counter from "./Counter";
import styles from "./BlockCounter..module.css";


class BlockCounter extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      subtraction: false,
    };
  }

  setSelectStep = (step) => {
    this.setState({ step: step });
  };
  setSelectSubtraction = (subtraction) => {
    this.setState({ subtraction: !subtraction });
  };

  render() {
    return (
      <>
        <Counter
          step={this.state.step}
          subtraction={this.state.subtraction}
          setSelectStep={this.setSelectStep}
          setSelectSubtraction={this.setSelectSubtraction}
        />
      </>
    );
  }
}

export default BlockCounter;
