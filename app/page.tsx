"use client"

// Import necessary packages and components
import Image from 'next/image';
import ContactForm from '../app/components/contactform';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggleButton from '../app/components/ThemeToggleButton';

// Define the Home component
export default function Home() {
  // Use the useTheme hook to get the current theme and functions to change it
  const { theme, setTheme, systemTheme } = useTheme();

  // Use the useState hook to create a state variable for whether the component is mounted
  const [mounted, setMounted] = useState(false);

  // Use the useEffect hook to set the mounted state to true after the first render
  useEffect(() => setMounted(true), []);

  // If the component hasn't mounted yet, return null to prevent server-side rendering
  if (!mounted) return null;

  // Determine the current theme. If the theme is 'system', use the system theme; otherwise, use the theme directly
  const currentTheme = theme === 'system' ? systemTheme ?? 'light' : theme;

  // Define a function to toggle the theme between 'dark' and 'light'
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // Render the component
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div>
          {/* Display the current theme */}
          <h1 className="text-7xl font-bold text-center">
            {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
            <span className="text-purple-600">Mode</span>
          </h1>

          {/* Prompt the user to click the button to change the theme */}
          <p className="dark:text-purple-600 my-8 text-center">
            Click the button below to switch mode
          </p>

          {/* Render the ThemeToggleButton component, passing the current theme and the toggleTheme function as props */}
          <div className="flex justify-center">
            <ThemeToggleButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
          </div>
      {/* Render the ContactForm component */}
      <ContactForm />
        </div>
      </div>

    </>
  );
}