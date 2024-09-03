import './App.css';
import React from 'react';

function App() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // Filter
  const evenNumber = number.filter(num => num % 2 === 0);

  // Map 
  const doubleNumber = number.map(num => num * 2);

  //  last element removed
  const newNumbersPop = number.slice(0, -1);

  // added number
  const newNumberArray = [...newNumbersPop, 10];

  // Function to print key-value pairs of an object
  const printObjectEntries = (obj) => {
    return (
      <ul>
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    );
  };

  // Example object

  

  const exampleObject = {
    name: "Micra",
    Employee: 30,
    city: "Surat"
  };

  return (
    <>
      <h1 className='text-gray-900 text-2xl'>This is a React Project using Yarn</h1>

      <p>Original Numbers: {number.join(" , ")}</p>
      <p>Even Numbers: {evenNumber.join(" , ")}</p>
      <p>Double Numbers: {doubleNumber.join(" , ")}</p>
      <p>Numbers with Last Element Removed: {newNumbersPop.join(" , ")}</p>
      <p>Numbers with 10 Added: {newNumberArray.join(" , ")}</p>

      <h2>Object Entries:</h2>
      {printObjectEntries(exampleObject)}
    </>
  );
}

export default App;
