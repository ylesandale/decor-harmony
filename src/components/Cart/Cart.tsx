import React from 'react';
import LayoutColored from 'components/common/LayoutColored/LayoutColored';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';

const Cart = () => {
  return (
    <LayoutColored imgSrc="/images/Cart/CartDoodle.png" color="blue">
      <EmptyBlock title="Корзина пустая." subtitle="Добавьте товар." />
    </LayoutColored>
  );
};

export default Cart;
