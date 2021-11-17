import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import HeadBlock from './HeadBlock/HeadBlock';
import CatalogBlock from './CatalogBlock/CatalogBlock';
import Layout from 'components/common/Layout/Layout';
import scrollTo from 'utils/scrollTo';

const Main = () => {
  const router = useRouter();
  const catalogRef = useRef<HTMLDivElement>(null);
  const scrollToCatalog = () => {
    scrollTo(catalogRef, {
      block: 'center',
    });
  };
  useEffect(() => {
    if (router.pathname === '/catalog') {
      scrollToCatalog();
    }
  }, [router.pathname]);
  return (
    <>
      <Head>
        <title>decor harmony</title>
      </Head>
      <>
        <Layout>
          <HeadBlock onButtonClick={scrollToCatalog} />
          <CatalogBlock ref={catalogRef} />
        </Layout>
      </>
    </>
  );
};

export default Main;
