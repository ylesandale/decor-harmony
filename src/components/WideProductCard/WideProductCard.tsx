import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import FavoriteIcon from '../../assets/icons/favorites-red.svg';
import TrashIcon from '../../assets/icons/trash.svg';
import CartIcon from '../../assets/icons/favorites-cart.svg';
import Text from 'components/ui-kits/Text/Text';
import Picture from 'components/ui-kits/Picture/Picture';
import Button from 'components/ui-kits/Button/Button';
import Card from 'components/ui-kits/Card/Card';
import styles from './WideProductCard.module.scss';

interface IWideProductCardProps {
  isFavorites?: boolean;
}

const WideProductCard = ({ isFavorites }: IWideProductCardProps) => {
  return (
    <Card className={styles.container}>
      <Splide options={{ width: 290, rewind: true }}>
        <SplideSlide>
          <Picture
            defaultSrc="/images/Main/Head.png"
            alt="Фото товара"
            srcSets={{ xl: '/images/Main/Head.png' }}
            className={styles.image}
          />
        </SplideSlide>
        <SplideSlide>
          <Picture
            defaultSrc="/images/Main/Head.png"
            alt="Фото товара"
            srcSets={{ xl: '/images/Main/Head.png' }}
            className={styles.image}
          />
        </SplideSlide>
        <SplideSlide>
          <Picture
            defaultSrc="/images/Main/Head.png"
            alt="Фото товара"
            srcSets={{ xl: '/images/Main/Head.png' }}
            className={styles.image}
          />
        </SplideSlide>
      </Splide>
      <div className={styles.description}>
        <Text variant="subtitle2" className={styles.title}>
          123
        </Text>
        <Text variant="body-text1" className={styles.subtitle}>
          123
        </Text>
      </div>
      <div className={styles.rightBlock}>
        <Text variant="subtitle1">1000 ₽</Text>
        <div className={styles.buttons}>
          <Button
            variant="text"
            color={isFavorites ? 'blue' : 'red'}
            onClick={() => console.log(1)}
            className={styles.button}
          >
            {isFavorites ? (
              <>
                <CartIcon className={styles.buttonIcon} /> Добавить в корзину
              </>
            ) : (
              <>
                <FavoriteIcon className={styles.buttonIcon} /> Добавить в
                избранное
              </>
            )}
          </Button>
          <Button variant="text" color="black" onClick={() => console.log(1)}>
            <TrashIcon className={styles.buttonIcon} />
            Удалить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WideProductCard;
