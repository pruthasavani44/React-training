import React, { useState } from "react";

export default function Webpage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [paragraphText, setParagraphText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleButtonClick = () => {
    setParagraphText("The button has been clicked!");
  };
  return (
    <>
      <h1>Webpage</h1>

      <h1>To-Do List</h1>

      <button onClick={handleButtonClick}>Click Me</button>
      <p>{paragraphText}</p>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
