// Import necessary objects from React and types from 'react'
import React, { ChangeEvent } from 'react';

// Define the props that the Input component expects to receive
interface InputProps {
  name: string; // The name of the input
  value: string; // The current value of the input
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // The function to call when the value of the input changes
  type?: string; // The type of the input (e.g., 'text', 'email', 'password'), defaults to 'text' if not provided
  placeholder: string; // The placeholder text for the input
}

// Define the Input component
const Input: React.FC<InputProps> = ({ name, value, onChange, type = 'text', placeholder }) => (
  // Render the input
  <input
    className="border-2 rounded p-2" // Apply some styles to the input
    type={type} // Set the type of the input
    name={name} // Set the name of the input
    value={value} // Set the current value of the input
    onChange={onChange} // Set the function to call when the value of the input changes
    placeholder={placeholder} // Set the placeholder text for the input
  />
);

// Export the Input component so it can be used in other files
export default Input;
