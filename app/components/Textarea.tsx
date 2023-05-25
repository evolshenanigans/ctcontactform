// Import the necessary objects from React
import React, { ChangeEvent } from 'react';

// Define the props that the Textarea component expects to receive
interface TextareaProps {
  name: string; // The name attribute for the textarea
  value: string; // The current value of the textarea
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void; // A function to handle changes in the textarea
  placeholder: string; // The placeholder text for the textarea
}

// Define the Textarea component
const Textarea: React.FC<TextareaProps> = ({ name, value, onChange, placeholder }) => (
  // Render a textarea element
  <textarea
    className="border-2 rounded p-2" // Apply some CSS classes for styling
    name={name} // Apply the name prop
    value={value} // Set the current value
    onChange={onChange} // Set the change handler to the onChange function passed in through props
    placeholder={placeholder} // Set the placeholder text
  />
);

// Export the Textarea component so it can be used in other files
export default Textarea;
