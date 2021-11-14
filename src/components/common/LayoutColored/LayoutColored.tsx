import React from 'react';
import ColoredCard from '../ColoredCard/ColoredCard';
import Layout from '../Layout/Layout';
import styles from './LayoutColored.module.scss';

interface ILayoutColoredProps {
  children: React.ReactNode;
  color: string;
  imgSrc: string;
}

const LayoutColored = ({ children, imgSrc, color }: ILayoutColoredProps) => {
  return (
    <Layout>
      <div className={styles.container}>
        {children}
        <ColoredCard imgSrc={imgSrc} color={color} />
      </div>
    </Layout>
  );
};

export default LayoutColored;
