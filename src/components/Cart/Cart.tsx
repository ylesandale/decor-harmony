import React, { useEffect } from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import cart from 'store/cartStore';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';
import ProductsBlock from './components/ProductsBlock/ProductsBlock';
import Layout from 'components/common/Layout/Layout';
import ColoredCard from 'components/common/ColoredCard/ColoredCard';
import CartForm from './components/CartForm/CartForm';
import styles from './Cart.module.scss';
import { items } from 'components/Main/CatalogBlock/data';

const Cart = () => {
  const isEmpty = cart.items.length === 0;
  const orderPrice = cart.items.reduce(function (accumulator, item) {
    return accumulator + Number(item.price);
  }, 0);

  return (
    <>
      <Head>
        <title>decor harmony | Корзина </title>
      </Head>
      <Layout className={isEmpty ? styles.emptyContainer : undefined}>
        {!isEmpty ? (
          <div className="container">
            <CartForm orderPrice={orderPrice} items={toJS(cart.items)} />
            <ProductsBlock items={toJS(cart.items)} />
          </div>
        ) : (
          <>
            <EmptyBlock
              title="Ваша корзина пуста."
              subtitle="Добавьте товар."
            />
            <ColoredCard imgSrc="/images/Cart/CartDoodle.png" color="blue" />
          </>
        )}
      </Layout>
    </>
  );
};

export default observer(Cart);
