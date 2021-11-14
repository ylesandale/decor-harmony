import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Nav from 'components/common/Nav/Nav';
import Cart from '../../../assets/icons/cart.svg';
import Favorites from '../../../assets/icons/favorites.svg';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

interface IHeaderProps {
  logo: string;
}

const Header = ({ logo }: IHeaderProps) => {
  return (
    <header className={styles.outerContainer}>
      <div className={cn('container', styles.innerContainer)}>
        <Logo logo={logo} />
        <Nav />
        <div className={styles.rightMenu}>
          <Link href="/favorites">
            <a>
              <Favorites className={styles.rightMenuItem} />
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <Cart className={styles.rightMenuItem} />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
