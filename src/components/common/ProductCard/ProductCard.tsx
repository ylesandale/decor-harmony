import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Card from 'components/ui-kits/Card/Card';
import Picture from 'components/ui-kits/Picture/Picture';
import Text from 'components/ui-kits/Text/Text';
import Button from 'components/ui-kits/Button/Button';
import styles from './ProductCard.module.scss';

interface IProductCardProps {
  title: string;
  subtitle: string;
  img: string;
  isButtonsHidden?: boolean;
  onClick?: () => void;
}

const ProductCard = ({
  title,
  subtitle,
  img,
  isButtonsHidden,
  onClick,
}: IProductCardProps) => {
  return (
    <Card className={styles.container}>
      <Splide options={{ rewind: true }}>
        <SplideSlide>
          <Picture
            defaultSrc={img}
            alt="Фото товара"
            srcSets={{ xl: img }}
            className={styles.image}
          />
        </SplideSlide>
        <SplideSlide>
          <Picture
            defaultSrc={img}
            alt="Фото товара"
            srcSets={{ xl: img }}
            className={styles.image}
          />
        </SplideSlide>
        <SplideSlide>
          <Picture
            defaultSrc={img}
            alt="Фото товара"
            srcSets={{ xl: img }}
            className={styles.image}
          />
        </SplideSlide>
      </Splide>
      <Text variant="subtitle2" className={styles.title}>
        {title}
      </Text>
      <Text variant="body-text1" className={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="button-text1">1000 ₽</Text>
      {!isButtonsHidden && (
        <>
          <Button
            color="red"
            onClick={() => console.log(1)}
            className={styles.button}
          >
            В избранное
          </Button>
          <Button variant="secondary" onClick={onClick}>
            В корзину
          </Button>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
