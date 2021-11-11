import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  variant = 'primary',
  children,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={cn(styles.button, styles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
