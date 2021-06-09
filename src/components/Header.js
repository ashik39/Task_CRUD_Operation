import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <div className="Header">
        <h2>My Employees List</h2>
        <br />
        <Link className="btn btn-primary" to="/add">
          Add User
        </Link>
      </div>
    </div>
  );
}

export default Header;
