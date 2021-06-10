import React, { createContext, useReducer } from 'react';
import { useState } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        currentPage,
        postsPerPage,
        paginate,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
