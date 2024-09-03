import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => setNum1(parseFloat(e.target.value));
  const handleNum2Change = (e) => setNum2(parseFloat(e.target.value));

  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult("Cannot divide by zero");
    }
  };

  return (
    <>
      <h1>Calculator :</h1>
      <p>
        Create an array of numbers and use array methods to manipulate the data
        (e.g., filter even numbers, map to double the values):
      </p>

      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />

      <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
      </div>

      <h2>Result: {result !== null ? result : "No result yet"}</h2>
    </>
  );
}