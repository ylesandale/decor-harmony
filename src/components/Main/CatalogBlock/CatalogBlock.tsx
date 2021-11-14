import cn from 'classnames';
import ProductCard from 'components/common/ProductCard/ProductCard';
import Button from 'components/ui-kits/Button/Button';
import Card from 'components/ui-kits/Card/Card';
import Picture from 'components/ui-kits/Picture/Picture';
import Text from 'components/ui-kits/Text/Text';
import React from 'react';
import styles from './CatalogBlock.module.scss';

const CatalogBlock = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h2" className={styles.title}>
        Каталог товаров
      </Text>
      <div className={styles.catalog}>
        {items.map((item) => (
          <ProductCard
            key={item}
            title="1"
            subtitle="2"
            img="/images/Main/Head.png"
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogBlock;
