import { useForm } from 'react-hook-form';
import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

function Create(props) {
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

  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const handleNameChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const handleLocationChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const handleGenderChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const submitButton = (data, e) => {
    editUser(selectedUser);
    history.push('/');
  };

  return (
    <div className="create">
      <h2>Edit</h2>
      <hr />
      {users.length > 0 ? (
        <div>
          <form onSubmit={handleSubmit(submitButton)}>
            <div>
              <Input
                type="text"
                label="Name"
                setvalue={handleNameChange}
                value={selectedUser.name}
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
                setvalue={handlePhoneChange}
                value={selectedUser.phone}
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
                value={selectedUser.select}
                setvalue={handleLocationChange}
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
                value={selectedUser.gender}
                setvalue={handleGenderChange}
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
      ) : (
        <div>
          <h3>No Data To Edit</h3>
          <Link to="/" className="btn btn-danger">
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Create;
