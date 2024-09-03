import React, { useState } from "react";
import './App.css';

function App() {


  const [number, setNumber] = useState("")
  const [result, setResult] = useState("")

  const checkNumber = () => {
    const num = Number(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number.");
    } else if (num > 0) {
      setResult(` The number ${num} is positive.`);
    } else if (num < 0) {
      setResult(`The number ${num} is negative.`);
    } else {
      setResult(`Please Enter number.`);
    }

  }


  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  const handleFibonacci = () => {
    let a = 0;
    let b = 1;
    const fibArray = [a, b];
    // for Loop 
    for (let i = 0; i < 10; i++) {
      let c = a + b;
      fibArray.push(c);
      a = b;
      b = c;
    }

    // While Loop 
    // let i = 0
    // while (i < 12) {
    //   let c = a + b
    //   fibArray.push(c);
    //   a = b;
    //   b = c;
    //   i++
    // }


    // do..while 
    // let i = 0;
    // do {
    //   let c = a + b;
    //   fibArray.push(c);
    //   a = b;
    //   b = c;
    //   i++;
    // } while (i < 5)

    setFibonacciNumbers(fibArray);
  }

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [divide, setDivide] = useState("");
  const [error, setError] = useState("");

  const divideNumbers = () => {
    try {
      // Resetting the previous error message
      setError("");


      if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        throw new Error("Please enter valid numbers.");
      }

      if (parseFloat(num2) === 0) {
        throw new Error("Division by zero is not allowed.");
      }

      const divisionResult = (parseFloat(num1)) / parseFloat(num2);
      setDivide(`Result: ${divisionResult}`);
    } catch (err) {
      setError(err.message);
      setResult("");
    } finally {
      console.log("Division attempt completed.");
    }
  };


  return (
    <>
      <h1 className='text-gray-900 text-2xl'>This is react Project using Yarn</h1>

      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ border: "1px solid black" }}
      />
      <button onClick={checkNumber} style={{ border: "1px solid black", marginLeft: "10px", padding: "0 10px" }} > Check Button</button>
      <p>{result}</p>

      <button onClick={handleFibonacci}>
        Generate Fibonacci Sequence
      </button>

      {fibonacciNumbers.map((num, index) => (
        <p key={index}>{num}</p>
      ))}




      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter num1"
        style={{ border: "1px solid black", marginRight: "10px" }}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter denominator"
        style={{ border: "1px solid black", marginRight: "10px" }}
      />
      <button onClick={divideNumbers} style={{ border: "1px solid black", padding: "5px 10px" }}>
        Divide
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {divide && <p>{divide}</p>}




    </>
  );
}

export default App;
