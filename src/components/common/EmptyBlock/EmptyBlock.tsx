import React from 'react';
import Text from 'components/ui-kits/Text/Text';
import Button from 'components/ui-kits/Button/Button';
import styles from './EmptyBlock.module.scss';

interface IEmptyBlockProps {
  title: string;
  subtitle: string;
}

const EmptyBlock = ({ title, subtitle }: IEmptyBlockProps) => {
  return (
    <div className={styles.container}>
      <Text variant="h2" className={styles.title}>
        {title}
      </Text>
      <Text variant="subtitle1" className={styles.subtitle}>
        {subtitle}
      </Text>
      <Button onClick={() => console.log(1)}>Каталог</Button>
    </div>
  );
};

export default EmptyBlock;
