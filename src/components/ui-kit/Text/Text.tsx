import React from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';

type TextComponent = 'span' | 'p' | 'div' | 'h1' | 'label' | 'h2' | 'h3';
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body-text1'
  | 'body-text2'
  | 'body-text3'
  | 'button-text1'
  | 'button-text2'
  | 'button-text3';

interface ITextProps {
  children: React.ReactNode;
  component?: TextComponent;
  variant: TextVariant;
  className?: string;
}

const Text: React.FC<ITextProps> = ({
  children,
  component,
  variant,
  className,
}) => {
  const Component = component || 'p';
  return (
    <Component className={cn(styles[variant], className)}>{children}</Component>
  );
};

export default Text;
