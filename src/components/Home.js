import React from 'react';
import MainPage from './Header';
import DetailsList from './DetailsList';
import Pagination from './Pagination';

function Home() {
  return (
    <>
      <MainPage />
      <div className="body-style">
        <DetailsList />
        <br />
        <Pagination />
      </div>
    </>
  );
}

export default Home;
