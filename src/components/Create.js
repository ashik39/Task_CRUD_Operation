import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuid } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  const history = useHistory();
  const { addUser } = useContext(GlobalContext);
  const { register, handleSubmit, errors } = useForm();

  const submitButton = (data) => {
    const newUser = {
      id: uuid(),
      name: data.name,
      phone: data.phone,
      select: data.select,
      gender: data.gender,
    };
    addUser(newUser);
    history.push('/');
  };

  return (
    <div className="create">
      <h2>Create</h2>
      <hr />
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
          <Input
            type="number"
            label="Phone Number"
            placeholder="Enter Phone Number"
            name="phone"
            register={register({
              required: 'The Phone Number field is required.',
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
              required: 'The gender field is required.',
            })}
            errors={errors}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        &nbsp;&nbsp;
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default Create;
