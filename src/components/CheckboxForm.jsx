// components/CheckboxForm.js
import React, { useState } from 'react';

const CheckboxForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkbox value:', isChecked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Accept Terms and Conditions
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckboxForm;
