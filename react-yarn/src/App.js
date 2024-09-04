import './App.css';
import React, { useState, useEffect } from "react"

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    message: '',
  });
  // State to manage the list of submissions
  const [submissions, setSubmissions] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.number && formData.message) {
      setSubmissions([...submissions, formData]);
      setFormData({
        firstName: '',
        lastName: '',
        number: '',
        message: '',
      }); // Clear the form
    }
  };

  // useEffect 
  useEffect(() => {
    console.log('Component mounted or items updated');
  }, [formData]);




  return (
    <>
      <h1 className='text-gray-900 text-2xl'>React Basics</h1>


      <div>
        <h1>Contact Form :</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          /> <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          /> <br />
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Phone Number"
          /> <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={4}
          /> <br />
          <button type="submit">Submit</button>
        </form>
        <h2>Form Data :</h2>
        <ul>
          {submissions.map((submission, index) => (
            <li key={index}>
              <strong>Name:</strong> {submission.firstName} {submission.lastName} <br />
              <strong>Number:</strong> {submission.number} <br />
              <strong>Message:</strong> {submission.message}
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
