import React from 'react';
import Head from 'next/head';
import HeadBlock from './HeadBlock/HeadBlock';
import CatalogBlock from './CatalogBlock/CatalogBlock';
import Layout from 'components/common/Layout/Layout';

const Main = () => {
  return (
    <>
      <Head>
        <title>decor harmony</title>
      </Head>
      <>
        <Layout>
          <HeadBlock />
          <CatalogBlock />
        </Layout>
      </>
    </>
  );
};

export default Main;
