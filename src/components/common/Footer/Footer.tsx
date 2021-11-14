import React from 'react';
import cn from 'classnames';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import styles from './Footer.module.scss';

interface IFooterProps {
  logo: string;
}

const Footer = ({ logo }: IFooterProps) => {
  return (
    <div className={cn('container', styles.container)}>
      <Logo logo={logo} />
      <Nav />
    </div>
  );
};

export default Footer;
