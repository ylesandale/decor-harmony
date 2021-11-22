import React from 'react';
import ProductCard from 'components/common/ProductCard/ProductCard';
import styles from './CatalogBlock.module.scss';
import { items } from 'components/Main/CatalogBlock/data';

const CatalogBlock = () => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          img={item.img}
          price={item.price}
          id={item.id}
          isButtonsHidden
        />
      ))}
    </div>
  );
};

export default CatalogBlock;
