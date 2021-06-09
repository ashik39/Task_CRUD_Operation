import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';

function DetailsList() {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div>
      <div>
        {users.length > 0 ? (
          <>
            {users.map((detail, i) => (
              <div className="data-container-each">
                <li key={detail.id} className="myList">
                  {i + 1}. <b>NAME :</b> {detail.name.toUpperCase()},
                  <b>LOCATION :</b>
                  {detail.select.toUpperCase()}, <b>GENDER :</b>{' '}
                  {detail.gender.toUpperCase()}, <b>PHONE NUMBER :</b>{' '}
                  {detail.phone}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link
                    to={`/edit/${detail.id}`}
                    color="warning"
                    className="btn btn-warning mr-1"
                  >
                    Edit
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={() => removeUser(detail.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </li>
              </div>
            ))}
          </>
        ) : (
          <h4>No Employees</h4>
        )}
      </div>
    </div>
  );
}

export default DetailsList;
