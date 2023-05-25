// Import necessary objects from React
import React, { ChangeEvent } from 'react';

// Define the props for the Checkbox component
interface CheckboxProps {
  name: string; // The name of the checkbox
  checked: boolean; // Whether the checkbox is checked
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // The function to call when the checkbox is changed
  label: string; // The label for the checkbox
}

// Define the Checkbox component
const Checkbox: React.FC<CheckboxProps> = ({ name, checked, onChange, label }) => (
  <div className="flex items-center text-white">
    // Render the checkbox input element
    <input
      className="mr-2" // Add a margin to the right of the checkbox
      type="checkbox" // Set the input type to checkbox
      name={name} // Set the name of the checkbox
      checked={checked} // Set whether the checkbox is checked
      onChange={onChange} // Set the function to call when the checkbox is changed
    />
    // Render the label for the checkbox
    <label>{label}</label>
  </div>
);

// Export the Checkbox component so it can be used in other files
export default Checkbox;
