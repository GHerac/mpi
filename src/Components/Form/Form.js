/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable use-isnan */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import "./Form.css";
import { useState, useEffect } from "react";

const Form = () => {
  const [height, setHeight] = useState("Height");
  const [weight, setWeight] = useState("Weight");
  const [bmi, setBmi] = useState(
    "Enter your height and weight and you'll see your BMI results!"
  );

  const calculate = () => {
    if (
      !isNaN(Number(height)) &&
      !isNaN(Number(weight)) &&
      height > 0 &&
      weight > 0
    ) {
      setBmi(weight / (height * height));
    } else {
      setBmi("Please enter a valid number!");
    }
  };
  useEffect(() => {
    calculate();
  }, [height, weight]);

  return (
    <div className="form">
      <div className="title">
        <h2>Enter your details below</h2>
      </div>

      <div className="input-form">
        <div className="input">
          <label>Height(cm)</label>
          <input
            onChange={(e) => setHeight(e.target.value / 100)}
            type="text"
          />
        </div>
        <div className="input">
          <label>Weight(kg)</label>
          <input onChange={(e) => setWeight(e.target.value)} type="text" />
        </div>
      </div>
      <div className="result">
        <h3>Welcome!</h3>
        <span>{bmi}</span>
      </div>
    </div>
  );
};

export default Form;
