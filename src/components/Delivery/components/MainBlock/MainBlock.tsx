import React from 'react';
import Text from 'components/ui-kit/Text/Text';
import styles from './MainBlock.module.scss';

const MainBlock = () => {
  return (
    <div className={styles.container}>
      <Text variant="h2" className={styles.title}>
        Варианты и сроки доставки
      </Text>
      <div className={styles.list}>
        <Text variant="subtitle1" className={styles.listItem}>
          Самовывоз: ........
        </Text>
        <Text variant="subtitle1" className={styles.listItem}>
          Доставка по Москве и Зеленограду: ........
        </Text>
        <Text variant="subtitle1" className={styles.listItem}>
          Доставка по России: ........
        </Text>
      </div>
    </div>
  );
};

export default MainBlock;
