// Import necessary objects from React and components from '../components'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Modal from '../components/Modal';

// Define the state for the form
interface IFormState {
  name: string; // The user's name
  email: string; // The user's email
  comment: string; // The user's comment
  acceptMarketing: boolean; // Whether the user accepts marketing
}

// Define the Contact component
const Contact: React.FC = () => {
  // Define the form state using React's useState hook
  const [formState, setFormState] = useState<IFormState>({ 
    name: '', 
    email: '', 
    comment: '', 
    acceptMarketing: true 
  });
  // Define the state for whether the modal is visible
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // Define the function to handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Define the function to handle checkbox changes
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.checked
    });
  };

  // Define the function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formState.name || !formState.email || !formState.comment) {
      alert('Please fill in all required fields.');
      return;
    }

    // TODO: Send the form data to an API...

    // Show the thank you modal
    setIsModalVisible(true);
  };

  // Render the component
  return (
    <div className="text-black flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-96 space-y-3">
        <Input
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <Input
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
        />
        <Textarea
          name="comment"
          value={formState.comment}
          onChange={handleInputChange}
          placeholder="Your Comment"
        />
        <Checkbox
          name="acceptMarketing"
          checked={formState.acceptMarketing}
          onChange={handleCheckboxChange}
          label="I accept to receive marketing and offer emails"
        />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
        <Modal show={isModalVisible}>
          <h2 className="text-2xl mb-4">Thank you, {formState.name}!</h2>
          <p>Your form has been submitted successfully.</p>
          <button className="mt-4" onClick={() => setIsModalVisible(false)}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

// Export the Contact component so it can be used in other files
export default Contact;
