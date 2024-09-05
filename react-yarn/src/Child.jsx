import React from "react";

function Child(props) {
  const { increment } = props;
  return (
    <>
      {console.log("Render From Child")}
      <h4>Child Component With No Props</h4>

      <button className="border p-1" onClick={increment}>
        Increase Number
      </button>
    </>
  );
}
export default React.memo(Child);
