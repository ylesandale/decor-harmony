import Card from 'components/ui-kits/Card/Card';
import Picture from 'components/ui-kits/Picture/Picture';
import Text from 'components/ui-kits/Text/Text';
import Button from 'components/ui-kits/Button/Button';
import React from 'react';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  title: string;
  subtitle: string;
  img: string;
  isButtonsHidden?: boolean;
}

const ProductCard = ({
  title,
  subtitle,
  img,
  isButtonsHidden,
}: IProductCardProps) => {
  return (
    <Card className={styles.container}>
      <Picture
        defaultSrc={img}
        alt="Фото товара"
        srcSets={{ xl: img }}
        className={styles.image}
      />
      <Text variant="subtitle2" className={styles.title}>
        {title}
      </Text>
      <Text variant="body-text1" className={styles.subtitle}>
        {subtitle}
      </Text>
      {!isButtonsHidden && (
        <>
          <Button
            color="red"
            onClick={() => console.log(1)}
            className={styles.button}
          >
            В избранное
          </Button>
          <Button variant="secondary" onClick={() => console.log(1)}>
            В корзину
          </Button>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
