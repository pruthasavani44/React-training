import { useState } from 'react';
import './App.css';

function App() {

  // Simple Function 
  function click() {
    alert("Button Clicked..!")
  }

  // Arrow Function 
  const arrowFunction = () => {
    alert("Button Clicked By Arrow Function..!")
  }

  // Function with Return Value 

  function Sum(no1, no2) {
    return no1 + no2
  }



  const addResult = Sum(10, 20,)



  // const handleNum1
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)
  const [multi, setMulti] = useState(null)

  const handleNum1 = (e) => setNum1(parseFloat((e.target.value)))
  const handleNum2 = (e) => setNum2(parseFloat((e.target.value)))


  // higher order function 

  function operateOnNumber(num1, num2, operations) {
    return operations(num1, num2);
  }

  // operation Function 

  const add = (a, b) => a + b;
  const Multiple = (a, b) => a * b;

  const handleSum = () => setResult(operateOnNumber(num1, num2, add))
  const handleMultiply = () => setMulti(operateOnNumber(num1, num2, Multiple))


  return (
    <>
      <h1 className='text-gray-900 text-2xl'>This is react Project using Yarn</h1>

      <h2> Functions</h2>

      <button onClick={click} style={{ border: "1px solid black", padding: "2px 10px", margin: "10px 10px" }} >Click</button>
      <button onClick={arrowFunction} style={{ border: "1px solid black", padding: "2px 10px", margin: "10px 10px" }} >Click</button> <br />

      <h1>{addResult}</h1>

      <input type="number" onChange={handleNum1} value={num1} placeholder='enter number' style={{ border: "1px solid black", padding: "4px 10px", marginRight: "20px" }} />
      <input type="number" onChange={handleNum2} value={num2} placeholder='enter number' style={{ border: "1px solid black", padding: "4px 10px" }} />

      {/* <button onClick={sum} style={{ border: "1px solid black", margin: "0 20px", padding: "4px 10px" }}>Sum</button>
      <button onClick={Multiply} style={{ border: "1px solid black", padding: "4px 10px" }}>Multiply</button> <br />
      <span style={{ margin: "5px" }} >number 1 : {num1}</span>
      <span style={{ margin: "5px" }} >number 2 : {num2}</span> */}
      <button onClick={handleSum} style={{ border: "1px solid black", margin: "0 20px", padding: "4px 10px" }}>Sum</button>
      <button onClick={handleMultiply} style={{ border: "1px solid black", padding: "4px 10px" }}>Multiply</button> <br />
      <p>Sum is: {result} </p>
      <p>Multiply is : {multi} </p>



    </>

  );
}

export default App;
