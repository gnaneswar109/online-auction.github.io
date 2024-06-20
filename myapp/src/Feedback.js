import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #007bff;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeedbackPopup = styled.div`
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // You can handle the feedback submission logic here (e.g., sending data to a server).
    // For this example, we're just logging the data.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');

    // Show the feedback submitted popup
    setShowPopup(true);

    // Hide the feedback submitted popup after a few seconds (you can adjust the delay)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <FeedbackContainer>
      <Title>Give Us Your Feedback</Title>
      <FeedbackForm onSubmit={handleFeedbackSubmit}>
        <FormLabel>Name:</FormLabel>
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <FormLabel>Email:</FormLabel>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormLabel>Message:</FormLabel>
        <FormTextArea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <SubmitButton type="submit">Submit</SubmitButton>
      </FeedbackForm>

      <FeedbackPopup show={showPopup}>Feedback submitted!</FeedbackPopup>
    </FeedbackContainer>
  );
}

export default Feedback;
