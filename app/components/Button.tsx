// Import necessary objects from React
import React, { MouseEventHandler, ReactNode } from 'react';

// Define the props for the Button component
interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>; // The function to call when the button is clicked
  children: ReactNode; // The children elements to be rendered inside the button
}

// Define the Button component
const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    className="bg-blue-500 text-white rounded p-2" // Apply CSS classes for styling
    type="submit" // Set the button type as submit
    onClick={onClick} // Set the function to call when the button is clicked
  >
    {children} 
    {/* render the children inside the component */}
  </button>
);

// Export the Button component so it can be used in other files
export default Button;
