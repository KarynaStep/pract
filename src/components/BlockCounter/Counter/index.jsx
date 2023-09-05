import React, { Component } from "react";
import PropTypes from "prop-types";
import CounterParameters from "./CounterParameters";
import styles from "./Counter.module.css";

class Counter extends Component {
  /**
   * @param {number} props.step
   * @param {boolean} props.subtraction
   * @param {function} props.setSelectStep
   * @param {function} props.setSelectSubtraction
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      autoClickValue: 1000,
      countStep: 10,
    };
    this.idTimeout = null;
    this.timeAutoClickWork = 0;
  }
  handlerClick = () => {
    if (this.props.subtraction) {
      this.setState((state, props) => {
        return { count: state.count - props.step };
      });
    } else {
      this.setState((state, props) => {
        return { count: state.count + props.step };
      });
    }
  };
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: Number(value) });
  };

  start = () => {
    setTimeout(this.handlerClick, this.state.autoClickValue);
    if (this.start.subtraction) {
      this.idTimeout = --this.idTimeout;
    } else {
      this.idTimeout = ++this.idTimeout;
    }
    this.timeAutoClickWork = this.timeAutoClickWork + this.state.autoClickValue;
  };

  autoClick = () => {
    this.idTimeout = 0;
    this.start();
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {
    // побічні ефекти!!!
    // recursion
    // start
    if (
      this.idTimeout !== null &&
      (this.idTimeout < this.state.countStep ||
        this.idTimeout === -this.state.countStep)
    ) {
      this.start();
    }
  }

  render() {
    const { count } = this.state;
    const { step, subtraction } = this.props;

    return (
      <>
        <div className={styles.calculator}>
          <section className={styles.countSection}>
            <h1>count: {count}</h1>
            <h1>step: {step}</h1>
            <button onClick={this.handlerClick}>
              {subtraction ? "subtraction" : "Add"}
            </button>
          </section>
          <CounterParameters
            step={this.props.step}
            subtraction={this.props.subtraction}
            setSelectStep={this.props.setSelectStep}
            setSelectSubtraction={this.props.setSelectSubtraction}
          />
          <section className={styles.autoClick}>
            <button onClick={this.autoClick}>autoClick</button>
            <p>Time for auto click</p>
            <input
              value={this.state.autoClickValue}
              type="text"
              name="autoClickValue"
              onChange={this.handlerInput}
            ></input>
            <p>Number of steps</p>
            <input
              value={this.state.countStep}
              name="countStep"
              type="text"
              onChange={this.handlerInput}
            ></input>
            <p>Autoclick works {this.timeAutoClickWork} millisecond</p>
          </section>
        </div>
      </>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
  subtraction: PropTypes.bool.isRequired,
  setSelectStep: PropTypes.func.isRequired,
  setSelectSubtraction: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  step: 0,
  subtraction: true,
  setSelectStep: () => {},
  setSelectSubtraction: () => {},
};

export default Counter;
