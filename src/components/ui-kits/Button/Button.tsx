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
  color?: 'blue' | 'red' | 'green';
}

const Button = ({
  variant = 'primary',
  children,
  className,
  onClick,
  color = 'blue',
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        styles.button,
        styles[variant],
        variant === 'primary' && styles[color],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
