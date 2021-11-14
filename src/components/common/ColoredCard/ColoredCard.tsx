import React from 'react';
import cn from 'classnames';
import Picture from 'components/ui-kits/Picture/Picture';
import styles from './ColoredCard.module.scss';

interface IColoredCardProps {
  imgSrc: string;
  color: string;
}

const ColoredCard = ({ imgSrc, color }: IColoredCardProps) => {
  return (
    <div className={cn(styles.outerContainer, styles[color])}>
      <div className={styles.innerContainer}>
        <Picture
          defaultSrc={imgSrc}
          alt="Doodle box"
          srcSets={{ xl: imgSrc }}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ColoredCard;
