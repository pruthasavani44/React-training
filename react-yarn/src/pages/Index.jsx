import React, { useContext } from "react";
import NoteContext from "../hooks/contextAPI/noteContext";
import ThemeContext from "../hooks/contextAPI/ThemeContext";

export default function Index() {
  const { state, detail } = useContext(NoteContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`app-container ${theme}`}>
        <h1>Data Passed By Context</h1>
        <h2>
          Company Name: {state.fname} {state.lname}
        </h2>
        <p> City: {state.city}</p>
        <p>Employee Range: {detail.emp}</p>
        <button onClick={toggleTheme} className="toggle-button">
          Toggle Theme
        </button>
      </div>
    </>
  );
}
