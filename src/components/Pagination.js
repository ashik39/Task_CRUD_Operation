import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Pagination = () => {
  const { users, postsPerPage, paginate } = useContext(GlobalContext);
  const pageNumbers = [];
  const totalPosts = users.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="position-relative">
      <nav className="position-absolute top-50 start-50">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
