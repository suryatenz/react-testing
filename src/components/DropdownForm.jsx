// components/DropdownForm.js
import React, { useState } from 'react';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose an option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DropdownForm;
