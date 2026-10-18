
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Enter your course"
        />
      </form>

      <div className="output">
        <h3>Entered Data</h3>
        <p><strong>Name:</strong> {formData.name || "Not entered"}</p>
        <p><strong>Email:</strong> {formData.email || "Not entered"}</p>
        <p><strong>Course:</strong> {formData.course || "Not entered"}</p>
      </div>
    </div>
  );
}

export default App;
