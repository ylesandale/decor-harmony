import React from 'react';
import ColoredCard from '../ColoredCard/ColoredCard';
import Layout from '../Layout/Layout';
import styles from './LayoutColored.module.scss';

interface ILayoutColoredProps {
  children: React.ReactNode;
  color: string;
  imgSrc: string;
  isCardHidden?: boolean;
}

const LayoutColored = ({
  children,
  imgSrc,
  color,
  isCardHidden,
}: ILayoutColoredProps) => {
  return (
    <Layout className={styles.container}>
      {children}
      {!isCardHidden && <ColoredCard imgSrc={imgSrc} color={color} />}
    </Layout>
  );
};

export default LayoutColored;
