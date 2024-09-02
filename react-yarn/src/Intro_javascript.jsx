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

      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={print}>
        Print Hello
      </button>

      <h2>Check the console to see the Data types!</h2>

      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={string}>
        Micra
      </button>
      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={number}>
        200
      </button>
      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={boolean}>
        True
      </button>
      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={value}>
        Undefined
      </button>
      <button style={{ padding: "2px 10px", margin: "5px" }} onClick={val}>
        null
      </button>
    </>
  );
}
