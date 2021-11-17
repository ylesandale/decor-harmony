import React, { forwardRef } from 'react';
import cn from 'classnames';
import cart from 'store/cartStore';
import ProductCard from 'components/common/ProductCard/ProductCard';
import Text from 'components/ui-kits/Text/Text';
import styles from './CatalogBlock.module.scss';

const CatalogBlock = (_: any, ref: React.Ref<HTMLDivElement>) => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h2" className={styles.title}>
        Каталог товаров
      </Text>
      <div ref={ref} className={styles.catalog}>
        {items.map((item) => (
          <ProductCard
            key={item}
            title="1"
            subtitle="2"
            img="/images/Main/Head.png"
            onClick={() => cart.addItemToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default forwardRef(CatalogBlock);
