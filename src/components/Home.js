import React from 'react';
import MainPage from './Header';
import DetailsList from './DetailsList';

function Home() {
  return (
    <>
      <MainPage />
      <div className="body-style">
        <DetailsList />
      </div>
    </>
  );
}

export default Home;
