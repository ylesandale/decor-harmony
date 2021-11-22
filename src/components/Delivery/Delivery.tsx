import React from 'react';
import Head from 'next/head';
import Layout from 'components/common/Layout/Layout';
import ColoredCard from 'components/common/ColoredCard/ColoredCard';
import MainBlock from './components/MainBlock/MainBlock';
import styles from './Delivery.module.scss';

const Delivery = () => {
  return (
    <>
      <Head>
        <title>decor harmony | Доставка</title>
      </Head>
      <Layout className={styles.container}>
        <MainBlock />
        <ColoredCard
          imgSrc="/images/Delivery/DeliveryDoodle.png"
          color="yellow"
        />
      </Layout>
    </>
  );
};

export default Delivery;
