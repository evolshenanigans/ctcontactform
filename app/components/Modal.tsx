// Import the necessary objects from React
import React from 'react';

// Define the props that the Modal component expects to receive
interface ModalProps {
  show: boolean; // A boolean indicating whether the modal should be shown
  children: React.ReactNode; // The contents of the modal
}

// Define the Modal component
const Modal: React.FC<ModalProps> = ({ show, children }) => {
  // If the "show" prop is false, don't render anything
  if (!show) {
    return null;
  }

  // Render the modal
  return (
    // This div is a semi-transparent overlay that covers the entire screen
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      // This div is a white box that contains the modal's contents
      <div className="bg-white rounded p-8">
        {children} // Render the contents of the modal
      </div>
    </div>
  );
};

// Export the Modal component so it can be used in other files
export default Modal;
