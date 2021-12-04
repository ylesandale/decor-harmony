import React from 'react';
import cn from 'classnames';
import Button from 'components/ui-kit/Button/Button';
import Picture from 'components/ui-kit/Picture/Picture';
import Text from 'components/ui-kit/Text/Text';
import styles from './HeadBlock.module.scss';

interface IHeadBlockProps {
  onButtonClick: () => void;
}

const HeadBlock = ({ onButtonClick }: IHeadBlockProps) => {
  return (
    <div className={cn('container', styles.outerContainer)}>
      <Text variant="h1" className={styles.title}>
        Уникальные украшения для вашего дома!
      </Text>
      <Text variant="subtitle1" className={styles.subtitle}>
        Создаём уют для вас.
      </Text>
      <Button onClick={onButtonClick}>Каталог</Button>
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
