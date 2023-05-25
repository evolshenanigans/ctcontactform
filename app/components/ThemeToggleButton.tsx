import Image from 'next/image';
import React from 'react';
import sun from '../components/Images/sunicons.png'
import moon from '../components/Images/nosunicon.png'

// Define the props that the ThemeToggleButton component expects to receive
interface ThemeToggleButtonProps {
    currentTheme: string | undefined; // The current theme, either 'dark' or 'light'
    toggleTheme: () => void; // A function to toggle the theme
  }
  
  // Define the ThemeToggleButton component
  const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ currentTheme, toggleTheme }) => {
    // If the current theme is 'dark', render a button with the sun icon to switch to light mode
    return currentTheme === 'dark' ? (
      <button
        className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4 flex justify-center items-center" // Set the button style
        onClick={toggleTheme} // Set the click handler to the toggleTheme function passed in through props
      >
        <Image src={sun} alt="logo" width={50} height={50} /> 
        {/* Display the sun icon */}
      </button>
    ) : (
    // If the current theme is not 'dark' (i.e., it's 'light'), render a button with the moon icon to switch to dark mode
      <button
        className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300 flex justify-center items-center" // Set the button style
        onClick={toggleTheme} // Set the click handler to the toggleTheme function passed in through props
      >
        <Image src={moon} alt="logo" width={50} height={50} /> 
        {/* Display the moon icon */}
      </button>
    );
  };
  
  // Export the ThemeToggleButton component so it can be used in other files
  export default ThemeToggleButton;