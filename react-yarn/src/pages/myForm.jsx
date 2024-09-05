import React from "react";
import useForm from "../hooks/useForm";

// Define validation functions
const validations = {
  email: (value) => {
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email address is invalid";
    
    return "";
  },
  password: (value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters long";
    return "";
  },
};

const MyForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    validations
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
