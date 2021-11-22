import React from 'react';
import { observer } from 'mobx-react-lite';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cart, { IProduct } from 'store/cartStore';
import favorites from 'store/favoritesStore';
import FavoriteIcon from '../../../assets/icons/favorites-red.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import CartIcon from '../../../assets/icons/favorites-cart.svg';
import Text from 'components/ui-kits/Text/Text';
import Picture from 'components/ui-kits/Picture/Picture';
import Button from 'components/ui-kits/Button/Button';
import Card from 'components/ui-kits/Card/Card';
import styles from './WideProductCard.module.scss';

interface IWideProductCardProps extends IProduct {
  isFavorites?: boolean;
  onRemove: () => void;
  onAdd: () => void;
}

const WideProductCard = ({
  title,
  subtitle,
  img,
  price,
  isFavorites,
  id,
  onRemove,
  onAdd,
}: IWideProductCardProps) => {
  const isItemInCart = cart.items.filter((item) => item.id === id).length > 0;
  const isItemInFavorites =
    favorites.items.filter((item) => item.id === id).length > 0;

  const checkButtonDisabled = () => {
    if (isFavorites) {
      return isItemInCart;
    } else {
      return isItemInFavorites;
    }
  };
  return (
    <Card className={styles.container}>
      <Splide options={{ width: 290, rewind: true }}>
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
      <div className={styles.description}>
        <Text variant="subtitle2" className={styles.title}>
          {title}
        </Text>
        <Text variant="body-text1" className={styles.subtitle}>
          {subtitle}
        </Text>
      </div>
      <div className={styles.rightBlock}>
        <Text variant="subtitle1">{price} ₽</Text>
        <div className={styles.buttons}>
          <Button
            variant="text"
            color={isFavorites ? 'blue' : 'red'}
            onClick={onAdd}
            className={styles.button}
            disabled={checkButtonDisabled()}
          >
            {isFavorites ? (
              <>
                <CartIcon className={styles.buttonIcon} />{' '}
                {isItemInCart ? 'Добавлено в корзину' : 'Добавить в корзину'}
              </>
            ) : (
              <>
                <FavoriteIcon className={styles.buttonIcon} />{' '}
                {isItemInFavorites
                  ? 'Добавлено в избранное'
                  : 'Добавить в избранное'}
              </>
            )}
          </Button>
          <Button variant="text" color="black" onClick={onRemove}>
            <TrashIcon className={styles.buttonIcon} />
            Удалить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default observer(WideProductCard);
