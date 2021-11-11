import React from 'react';
import Head from 'next/head';
import Header from 'components/common/Header/Header';
import HeadBlock from './HeadBlock/HeadBlock';

const Main = () => {
  return (
    <>
      <Head>
        <title>decor harmony</title>
      </Head>
      <div className="container">
        <Header />
        <HeadBlock />
      </div>
    </>
  );
};

export default Main;
