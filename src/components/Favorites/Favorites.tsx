import React, { useEffect } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import favorites from 'store/favoritesStore';
import EmptyBlock from 'components/common/EmptyBlock/EmptyBlock';
import ColoredCard from 'components/common/ColoredCard/ColoredCard';
import ProductsBlock from './ProductsBlock/ProductsBlock';
import Layout from 'components/common/Layout/Layout';
import styles from './Favorites.module.scss';

const Favorites = () => {
  const isEmpty = favorites.items.length === 0;

  useEffect(() => {
    const stringArray = Cookies.get('favorites');

    if (stringArray) {
      favorites.initializeItems(
        stringArray
          .replaceAll('},', '} ')
          .split(' ')
          .map((item) => JSON.parse(item))
      );
    }
  }, []);
  return (
    <>
      <Head>
        <title>decor harmony | Избранное</title>
      </Head>
      <Layout className={isEmpty ? styles.emptyContainer : undefined}>
        {!isEmpty ? (
          <ProductsBlock items={toJS(favorites.items)} />
        ) : (
          <>
            <EmptyBlock
              title="Список с избранными товарами пуст."
              subtitle="Добавьте товар."
            />
            <ColoredCard
              imgSrc="/images/Favorites/FavoritesDoodle.png"
              color="orange"
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default observer(Favorites);
