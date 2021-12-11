import React from 'react';
import Cookies from 'js-cookie';
import cn from 'classnames';
import favorites from 'store/favoritesStore';
import { IProduct } from 'store/cartStore';
import Text from 'components/ui-kit/Text/Text';
import WideProductCard from 'components/common/WideProductCard/WideProductCard';
import { onAddItemToCart } from 'utils/storeFuncs';
import styles from './ProductsBlock.module.scss';

interface IProductsBlock {
  items: IProduct[];
}

const ProductsBlock = ({ items }: IProductsBlock) => {
  const onRemoveItemFromFavorites = (id: number) => {
    const favoritesCookies = Cookies.get('favorites');
    favorites.removeItemFromFavorites(id);

    if (favoritesCookies) {
      const newCookies = favoritesCookies
        .replaceAll('},', '} ')
        .split(' ')
        .map((item) => JSON.parse(item))
        .filter((item) => item.id !== id);

      if (newCookies.length === 0) {
        Cookies.remove('favorites');
      } else {
        Cookies.set(
          'favorites',
          JSON.stringify(newCookies).replace('[', '').replace(']', ''),
          {
            expires: 7,
          }
        );
      }
    }
  };
  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h2" className={styles.title}>
        Избранное
      </Text>
      <div>
        {items.map((item) => (
          <WideProductCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            imgCounter={item.imgCounter}
            price={item.price}
            sizes={item.sizes}
            id={item.id}
            onRemove={() => onRemoveItemFromFavorites(item.id)}
            onAdd={() => onAddItemToCart(item)}
            isFavorites
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;
