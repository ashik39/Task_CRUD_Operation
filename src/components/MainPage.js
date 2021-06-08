import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

function Main_Page() {
  const radioButtonData = ['Male', 'Female', 'Other'];
  return (
    <div>
      <h2>My Employees List</h2>
      <form>
        <div>
          <Input label="Name" placeholder="Enter your name" />
        </div>
        <div>
          <Select label="Location" placeholder="Select your location" />
        </div>
        <div>
          <Radio
            name="Gender"
            label="Choose your gender"
            options={radioButtonData}
          />
        </div>
      </form>
    </div>
  );
}

export default Main_Page;
