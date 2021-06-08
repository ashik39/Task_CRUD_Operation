import { useForm } from 'react-hook-form';
import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

function Create({ getData }) {
  const radioButtonOptions = ['Male', 'Female', 'Other'];
  const selectDataOptions = [
    {
      value: 'Chennai',
      name: 'Chennai',
    },
    {
      value: 'Delhi',
      name: 'Delhi',
    },
    {
      value: 'Mumbai',
      name: 'Mumbai',
    },
    {
      value: 'Others',
      name: 'Others',
    },
  ];
  const { register, handleSubmit, errors } = useForm();
  const submitButton = (data) => {
    console.log('data:', data);
    getData(data);
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit(submitButton)}>
        <div>
          <Input
            type="text"
            label="Name"
            placeholder="Enter name"
            name="name"
            register={register({
              required: 'The name field is required.',
            })}
            errors={errors}
          />
        </div>
        <div>
          <Select
            options={selectDataOptions}
            name="select"
            label="Location"
            placeholder="Select location"
            register={register({
              required: 'The name field is required.',
            })}
            errors={errors}
          />
        </div>
        <div>
          <Radio
            name="gender"
            label="Gender"
            options={radioButtonOptions}
            register={register({
              required: 'The name field is required.',
            })}
            errors={errors}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        &nbsp;&nbsp;
        <button type="submit" className="btn btn-danger">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Create;
