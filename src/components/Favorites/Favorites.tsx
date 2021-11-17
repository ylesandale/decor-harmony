import React from 'react';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';
import ProductsBlock from './ProductsBlock/ProductsBlock';
import Layout from 'components/common/Layout/Layout';

const Favorites = () => {
  const isEmpty = false;
  return (
    <Layout>
      {isEmpty ? (
        <EmptyBlock
          title="Список с избранными товарами пуст."
          subtitle="Добавьте товар."
        />
      ) : (
        <ProductsBlock />
      )}
    </Layout>
  );
};

export default Favorites;
