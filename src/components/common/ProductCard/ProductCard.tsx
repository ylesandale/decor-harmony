import React from 'react';
import { observer } from 'mobx-react-lite';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cart, { IProduct } from 'store/cartStore';
import favorites from 'store/favoritesStore';
import Card from 'components/ui-kits/Card/Card';
import Picture from 'components/ui-kits/Picture/Picture';
import Text from 'components/ui-kits/Text/Text';
import Button from 'components/ui-kits/Button/Button';
import styles from './ProductCard.module.scss';

interface IProductCardProps extends IProduct {
  isButtonsHidden?: boolean;
  onAddItemToCart?: () => void;
  onAddItemToFavorites?: () => void;
}

const ProductCard = ({
  title,
  subtitle,
  img,
  price,
  isButtonsHidden,
  id,
  onAddItemToCart,
  onAddItemToFavorites,
}: IProductCardProps) => {
  const isItemInCart = cart.items.filter((item) => item.id === id).length > 0;
  const isItemInFavorites =
    favorites.items.filter((item) => item.id === id).length > 0;
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
      <Text variant="button-text1">{price} ₽</Text>
      {!isButtonsHidden && (
        <>
          <Button
            color="red"
            onClick={onAddItemToFavorites}
            className={styles.button}
            disabled={isItemInFavorites}
          >
            {isItemInFavorites ? 'В избранном' : 'В избранное'}
          </Button>
          <Button
            variant="secondary"
            onClick={onAddItemToCart}
            disabled={isItemInCart}
          >
            {isItemInCart ? 'В корзине' : 'В корзину'}
          </Button>
        </>
      )}
    </Card>
  );
};

export default observer(ProductCard);
