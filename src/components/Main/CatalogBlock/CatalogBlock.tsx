import React, { forwardRef } from 'react';
import Cookies from 'js-cookie';
import cn from 'classnames';
import cart, { IProduct } from 'store/cartStore';
import favorites from 'store/favoritesStore';
import ProductCard from 'components/common/ProductCard/ProductCard';
import Text from 'components/ui-kit/Text/Text';
import { items } from './data';
import { onAddItemToFavorites, onAddItemToCart } from 'utils/storeFuncs';
import styles from './CatalogBlock.module.scss';

const CatalogBlock = (_: any, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} className={cn('container', styles.outerContainer)}>
      <Text variant="h2" className={styles.title}>
        Каталог товаров
      </Text>
      <div className={styles.catalog}>
        {items.map((item, key) => (
          <ProductCard
            key={key}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            price={item.price}
            id={item.id}
            onAddItemToCart={() => onAddItemToCart(item)}
            onAddItemToFavorites={() => onAddItemToFavorites(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default forwardRef(CatalogBlock);
