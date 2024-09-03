import { useState } from 'react';
import './App.css';

function App() {

  // Global Scope 

  var x = 'Global-1'
  const y = 'Global-2'
  let z = 'Global-3'

  console.log("Global - Print Outside Function " + x);
  console.log("Global - Print Outside Function " + y);
  console.log("Global - Print Outside Function " + z);

  function globalScope() {
    console.log("Global - Print Inside Function " + x);
    console.log("Global - Print Inside Function " + y);
    console.log("Global - Print Inside Function " + z);
  }

  // Block Scope 
  const blockScope = () => {
    if (true) {
      var y = "local 4"; //Local Scope- you can access where you need.
      const z = "3"; //Block Scope-only access inside that scope not from the outside.
      let x = "2"; //Block Scope-only access inside that scope not from the outside.
      x *= 2;

      console.log("Block " + x)
      console.log("Block " + y)
      console.log("Block " + z)
    }
    console.log(x)
    console.log(y)
    console.log(z)
  }
  // Function Scope 
  const functionScope = () => {
    if (true) {
      var y = "Function 4";
      const z = "Function 3";
      let x = "Function 2";

      console.log("Function " + x) // access only inside in Function.
      console.log("Function " + y) // access only inside in Function.
      console.log("Function " + z) // access only inside in Function.
    }
    console.log(x)
    console.log(z)
  }


  // calculator

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);
  const handleNum1change = (e) => setNum1(parseFloat(e.target.value))
  const handleNum2change = (e) => setNum2(parseFloat(e.target.value))

  const add = () => setResult(num1 + num2)
  const sub = () => setResult(num1 - num2)
  const multi = () => setResult(num1 * num2)
  const divide = () => {
    if (num2 !== 0) {
      setResult(num1 / num2)
    }
    else {
      setResult("number can't divide by zero")
    }
  }

  // const divide = () => {
  //   if (num2 !== 0) {
  //     setResult(num1 / num2);
  //   }
  //    else {
  //     setResult("Cannot divide by zero");
  //   }
  // };




  return (
    <>
      <h1 className='text-gray-900 text-2xl'>This is react Project using Yarn</h1>


      <button onClick={globalScope}>Check Global Scope</button> <br />
      <button onClick={blockScope} >Check Block Scope..!</button> <br />
      <button onClick={functionScope} >Check Function Scope..!</button>

      <h2>Calculator:</h2>

      <input onChange={handleNum1change} value={num1} type="number" placeholder="Enter No:1" style={{ border: "1px solid black", margin: "10px", padding: "0px 10px" }} />
      <input onChange={handleNum2change} value={num2} type="number" placeholder="Enter No:2" style={{ border: "1px solid black", margin: "10px", padding: "0px 10px" }} /> <br />
      <button onClick={add} style={{ padding: "2px 15px", margin: "0 10px", border: "1px solid black" }} >+</button>
      <button onClick={sub} style={{ padding: "2px 15px", margin: "0 10px", border: "1px solid black" }} >-</button>
      <button onClick={multi} style={{ padding: "2px 15px", margin: "0 10px", border: "1px solid black" }} >*</button>
      <button onClick={divide} style={{ padding: "2px 15px", margin: "0 10px", border: "1px solid black" }} >/</button>

      <p> Result : {result !== null ? result : "Not Result Yet..!"} </p>

    </>
  );
}

export default App;
