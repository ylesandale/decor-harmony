import React from 'react';
import { observer } from 'mobx-react-lite';
import cart from 'store/cartStore';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';
import ProductsBlock from './components/ProductsBlock/ProductsBlock';
import Layout from 'components/common/Layout/Layout';
import ColoredCard from 'components/common/ColoredCard/ColoredCard';
import CartForm from './components/CartForm/CartForm';

const Cart = () => {
  const isEmpty = false;
  return (
    <Layout>
      {!isEmpty ? (
        <div className="container">
          <CartForm />
          <ProductsBlock />
        </div>
      ) : (
        <EmptyBlock title="Ваша корзина пуста." subtitle="Добавьте товар." />
      )}
      {isEmpty && (
        <ColoredCard imgSrc="/images/Cart/CartDoodle.png" color="blue" />
      )}
    </Layout>
  );
};

export default observer(Cart);
