import React from "react";

export default function Intro_javascript() {
  const print = () => {
    console.log("hello ");
  };

  const string = () => {
    var name = "String";
    console.log(`Micra Data Type is ${typeof name}`);
  };

  const number = () => {
    let num = 200;
    console.log(`200 Data Type is ${typeof num}`);
  };

  const boolean = () => {
    let booleans = true;
    console.log(`True Data Type Is ${typeof booleans}`);
  };
  const value = () => {
    let value;
    // let value = undefined;
    console.log(`True Data Type Is ${typeof value}`);
  };

  const val = () => {
    let value = null;
    console.log(`True Data Type Is ${typeof value}`);
  };

  return (
    <>
      <h2>Check the console to see the message!</h2>

      <button onClick={print}>Print Hello</button>

      <h2>Check the console to see the Data types!</h2>

      <button onClick={string}>Micra</button>
      <button onClick={number}>200</button>
      <button onClick={boolean}>Boolean</button>
      <button onClick={value}>Undefined</button>
      <button onClick={val}>null</button>
    </>
  );
}
