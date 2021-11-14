import React from 'react';
import cn from 'classnames';
import Button from 'components/ui-kits/Button/Button';
import Picture from 'components/ui-kits/Picture/Picture';
import Text from 'components/ui-kits/Text/Text';
import styles from './HeadBlock.module.scss';

const HeadBlock = () => {
  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h1" className={styles.title}>
        Уникальные украшения для вашего дома!
      </Text>
      <Text variant="subtitle1" className={styles.subtitle}>
        Создаём уют для вас.
      </Text>
      <Button onClick={() => console.log(1)}>Каталог</Button>
      <Picture
        defaultSrc="/images/Main/Head.png"
        alt="Девушка с телефоном"
        srcSets={{ xl: '/images/Main/Head.png' }}
        className={styles.image}
      />
    </div>
  );
};

export default HeadBlock;
