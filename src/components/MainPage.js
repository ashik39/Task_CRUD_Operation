import React, { useState } from 'react';
import Create from './Create';
import DetailsList from './DetailsList';
import Edit from './Edit';
function Main_Page() {
  const [details, setDetails] = useState([]);
  const [display, setDisplay] = useState('');
  const [defaultValue, setDefaultvalue] = useState({});
  const handleAdd = () => {
    setDisplay('create');
  };

  const createData = (data) => {
    // setDetails([data]);
    details.push(data);
    setDisplay('data');
    console.log('details', details);
  };

  const handleRemove = (i) => {
    console.log('Index :', i);
    details.splice(i, 1);
    setDetails(details);
    console.log('AFter Remove:', details);
  };

  const handleEdit = (edit, i) => {
    let data = details[i];
    console.log('edit Data', data);
    setDisplay(edit);
    setDefaultvalue(data);
  };

  const updateData = () => {};
  return (
    <div>
      <div className="Header">
        <h2>My Employees List</h2>
        <br />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Employee
        </button>
      </div>
      <div className="body-style">
        {display === 'create' && (
          <div>
            <Create getData={createData} />
          </div>
        )}
        {display === 'edit' && (
          <div>
            <Edit defaultValue={defaultValue} updateData={updateData} />
          </div>
        )}
        {display === 'data' && (
          <div className="data-list">
            <DetailsList
              details={details}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main_Page;
