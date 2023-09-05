import React, { Component } from "react";
import styles from "./CounterParameters.module.css";

class CounterParameters extends Component {
  constructor(props) {
    super(props);
  }
  handlerInput = ({ target: { value } }) => {
    if (0 < value && value < 1000000) {
      this.props.setSelectStep(Number(value));
    } else {
      this.props.setSelectStep(1);
    }
  };
  handleCheckbox = ({ target: { checked } }) => {
    this.props.setSelectSubtraction(!checked);
  };

  render() {
    const {step} = this.props;

    return (
      <section className={styles.stepSection}>
        <p>Step value</p>
        <input value={step} type="text" onChange={this.handlerInput}></input>
        <div>
          <p>Віднімання</p>
          <input
            type="checkbox"
            name="subtraction"
            onChange={this.handleCheckbox}
          ></input>
        </div>
      </section>
    );
  }
}

export default CounterParameters;
