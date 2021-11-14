import React from 'react';
import Text from 'components/ui-kits/Text/Text';
import Card from 'components/ui-kits/Card/Card';
import Picture from 'components/ui-kits/Picture/Picture';
import Button from 'components/ui-kits/Button/Button';
import styles from './CatalogBlock.module.scss';
import ProductCard from 'components/common/ProductCard/ProductCard';

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
