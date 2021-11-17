import React from 'react';
import Text from 'components/ui-kits/Text/Text';
import styles from './ProductsBlock.module.scss';
import WideProductCard from 'components/WideProductCard/WideProductCard';

const ProductsBlock = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className={styles.outerContainer}>
      <Text variant="subtitle2" className={styles.title}>
        Список товаров
      </Text>
      <div>
        {items.map((item) => (
          <WideProductCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsBlock;
