import React from 'react';
import Cookies from 'js-cookie';
import cart from 'store/cartStore';
import Text from 'components/ui-kit/Text/Text';
import styles from './ProductsBlock.module.scss';
import WideProductCard from 'components/common/WideProductCard/WideProductCard';
import { onAddItemToFavorites } from 'utils/storeFuncs';
import { IProduct } from 'store/cartStore';

interface IProductsBlock {
  items: IProduct[];
}

const ProductsBlock = ({ items }: IProductsBlock) => {
  const onRemoveItemFromCart = (id: number) => {
    const cartCookies = Cookies.get('cart');
    cart.removeItemFromCart(id);

    if (cartCookies) {
      const newCookies = cartCookies
        .replaceAll('},', '} ')
        .split(' ')
        .map((item) => JSON.parse(item))
        .filter((item) => item.id !== id);

      if (newCookies.length === 0) {
        Cookies.remove('cart');
      } else {
        Cookies.set(
          'cart',
          JSON.stringify(newCookies).replace('[', '').replace(']', ''),
          {
            expires: 7,
          }
        );
      }
    }
  };

  return (
    <div className={styles.outerContainer}>
      <Text variant="subtitle2" className={styles.title}>
        Список товаров
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
            onRemove={() => onRemoveItemFromCart(item.id)}
            onAdd={() => onAddItemToFavorites(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;
