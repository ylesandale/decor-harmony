import React from 'react';
import Head from 'next/head';
import Layout from 'components/common/Layout/Layout';
import Text from 'components/ui-kit/Text/Text';
import CatalogBlock from './components/CatalogBlock.tsx/CatalogBlock';
import styles from './Sold.module.scss';

const Sold = () => {
  return (
    <>
      <Head>
        <title>decor harmony | Проданные</title>
      </Head>
      <Layout className={styles.outerContainer}>
        <div className="container">
          <Text variant="h2" className={styles.title}>
            Возможно, что-то похожее скоро появится в нашем каталоге.
          </Text>
          <Text variant="subtitle1" className={styles.subtitle}>
            Следите за обновлениями!
          </Text>
          <CatalogBlock />
        </div>
      </Layout>
    </>
  );
};

export default Sold;
