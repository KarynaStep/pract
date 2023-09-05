import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CounterParameters.module.css";

class CounterParameters extends Component {
  /**
   * @param {number} props.step
   * @param {boolean} props.subtraction
   * @param {function} props.setSelectStep
   * @param {function} props.setSelectSubtraction
   */
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
    const { step } = this.props;

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
CounterParameters.propTypes = {
  step: PropTypes.number.isRequired,
  subtraction: PropTypes.bool.isRequired,
  setSelectStep: PropTypes.func.isRequired,
  setSelectSubtraction: PropTypes.func.isRequired,
};

CounterParameters.defaultProps = {
  step: 0,
  subtraction: true,
  setSelectStep: () => {},
  setSelectSubtraction: () => {},
};

export default CounterParameters;
