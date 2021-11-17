import React from 'react';
import cn from 'classnames';
import Text from 'components/ui-kits/Text/Text';
import WideProductCard from 'components/WideProductCard/WideProductCard';
import styles from './ProductsBlock.module.scss';

const ProductsBlock = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h2" className={styles.title}>
        Избранное
      </Text>
      <div>
        {items.map((item) => (
          <WideProductCard key={item} isFavorites />
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;
