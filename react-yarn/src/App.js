import './App.css';
<<<<<<< Updated upstream
import React, { useState } from 'react';

function App() {

  const [paragraph, setParagraph] = useState("")
  const [inputText, setInputText] = useState("")


  const update = (e) => {
    setParagraph(inputText)
  }
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };



  const [task, setTask] = useState([])
  const [addTask, setAddTask] = useState("")

  const handleAddTask = (e) => {
    if (addTask.trim()) {
      setTask([...task, addTask]);
      setAddTask("")
    }

  }
  const handleRemoveTask = (index) => {
    const UpdatedTask = task.filter((_, i) => i !== index);
    setTask(UpdatedTask);
  }

=======
import React, { useState } from "react"

function App() {

  const [para, setPara] = useState("")

  const update = () => {

  }
>>>>>>> Stashed changes

  return (
    <>
      <h1 className='text-gray-900 text-2xl'>This is react Project using Yarn</h1>


<<<<<<< Updated upstream
      <textarea onChange={handleInputChange} value={inputText} rows="3" cols="30" placeholder="Enter Your Message Here..." style={{ border: "1px solid black", padding: "5px" }} />
      <br />
      <button onClick={update} style={{ border: "1px solid black", padding: "2px 10px", marginBottom: "10px" }} >Update Paragraph</button>
      <br /> <span>Updated Paragraph :</span>
      <span dangerouslySetInnerHTML={{ __html: paragraph }} ></span>


      <h2>To do List:</h2>

      <input
        type="text"
        onChange={(e) => setAddTask(e.target.value)}
        value={addTask}
        style={{ border: "1px solid black", padding: "2px 10px", }}
        placeholder='Add a new Task' />

      <button
        onClick={handleAddTask}
        style={{ border: "1px solid black", padding: "2px 10px", background: "gray", marginLeft: "10px", color: "white" }}  >
        Add List
      </button>

      <ul>
        {task.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              style={{ border: "1px solid black", padding: "2px 10px", background: "gray", margin: "5px 0 0 10px", color: "white" }}  >

              Remove
            </button>
          </li>
        ))}
      </ul>

=======
      <textarea placeholder="Enter Your Message" rows="5" cols="30" style={{ border: "1px solid black", padding: "5px" }} ></textarea>

      <br />
      <button onChange={setPara(e.target.value)} onClick={update} style={{ border: "1px solid black", padding: "5px" }} >Update Paragraph</button>

      <p>Updated Paragraph : hello</p>


>>>>>>> Stashed changes
    </>
  );
}

export default App;
