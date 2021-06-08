import React, { useState } from 'react';
import Create from './Create';

function Main_Page() {
  const [details, setDetails] = useState([]);
  const [display, setDisplay] = useState('');
  const handleAdd = () => {
    setDisplay('create');
  };

  const createData = (data) => {
    // setDetails([data]);
    details.push(data);
    setDisplay('data');
    console.log('details', details);
  };

  // const handleRemove = (i) => {
  //   let data = [];
  //   data = details.splice(i, 1);
  //   setDetails(data);
  // };
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
            <h2>Edit</h2>
          </div>
        )}
        {display === 'data' && (
          <div className="data-list">
            {details &&
              details.map((detail, i) => (
                <div className="data-container-each">
                  <li key={i} className="myList">
                    {i + 1}. <b>NAME :</b> {detail.name.toUpperCase()},{' '}
                    <b>GENDER :</b> {detail.gender.toUpperCase()},{' '}
                    <b>LOCATION :</b> {detail.select.toUpperCase()}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-warning"
                      // onClick={() => handleRemove(i)}
                    >
                      Remove{' '}
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger">Edit </button>
                  </li>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main_Page;
