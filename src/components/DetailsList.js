import React from 'react';

function DetailsList({ details, handleRemove, handleEdit }) {
  return (
    <div>
      <div>
        {details &&
          details.map((detail, i) => (
            <div className="data-container-each">
              <li key={i} className="myList">
                {i + 1}. <b>NAME :</b> {detail.name.toUpperCase()},
                <b>LOCATION :</b>
                {detail.select.toUpperCase()},<b>GENDER :</b>{' '}
                {detail.gender.toUpperCase()},<b>ID :</b> {detail.ID},
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => handleRemove(i)}
                >
                  Remove{' '}
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleEdit('edit', i)}
                >
                  Edit{' '}
                </button>
              </li>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DetailsList;
