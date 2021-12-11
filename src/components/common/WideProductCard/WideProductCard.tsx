import React from 'react';
import { observer } from 'mobx-react-lite';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import cart, { IProduct } from 'store/cartStore';
import favorites from 'store/favoritesStore';
import FavoriteIcon from '../../../assets/icons/favorites-red.svg';
import TrashIcon from '../../../assets/icons/trash.svg';
import CartIcon from '../../../assets/icons/favorites-cart.svg';
import Text from 'components/ui-kit/Text/Text';
import Picture from 'components/ui-kit/Picture/Picture';
import Button from 'components/ui-kit/Button/Button';
import Card from 'components/ui-kit/Card/Card';
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
  imgCounter,
  price,
  isFavorites,
  id,
  sizes,
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
        {Array(imgCounter)
          .fill(img)
          .map((item, key) => (
            <SplideSlide key={key}>
              <Picture
                defaultSrc={`/images/products/${item}${key + 1}.jpeg`}
                alt="Фото товара"
                srcSets={{ xl: `/images/products/${item}${key + 1}.jpeg` }}
                className={styles.image}
              />
            </SplideSlide>
          ))}
      </Splide>
      <div className={styles.description}>
        <Text variant="subtitle2" className={styles.title}>
          {title.replaceAll('_', ' ')}
        </Text>
        <Text variant="body-text1" className={styles.subtitle}>
          {subtitle.replaceAll('_', ' ')}
        </Text>
        <Text variant="body-text1" className={styles.sizes}>
          <span>Размеры:</span>
          <br />
          {sizes.replaceAll('_', ' ')}
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
