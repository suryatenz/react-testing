// components/SimpleForm.js
import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text:
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
