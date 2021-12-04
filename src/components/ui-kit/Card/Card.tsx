import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

export default Card;
