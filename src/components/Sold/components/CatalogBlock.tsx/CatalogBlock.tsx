import React from 'react';
import ProductCard from 'components/common/ProductCard/ProductCard';
import styles from './CatalogBlock.module.scss';

const CatalogBlock = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ProductCard
          key={item}
          title="1"
          subtitle="2"
          img="/images/Main/Head.png"
          isButtonsHidden
        />
      ))}
    </div>
  );
};

export default CatalogBlock;
