import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { observer } from 'mobx-react-lite';
import cart from 'store/cartStore';
import favorites from 'store/favoritesStore';
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
  useEffect(() => {
    const stringArrayCart = Cookies.get('cart');
    const stringArrayFavorites = Cookies.get('favorites');

    if (stringArrayCart) {
      cart.initializeItems(
        stringArrayCart
          .replaceAll('},', '} ')
          .split(' ')
          .map((item) => JSON.parse(item))
      );
    }

    if (stringArrayFavorites) {
      favorites.initializeItems(
        stringArrayFavorites
          .replaceAll('},', '} ')
          .split(' ')
          .map((item) => JSON.parse(item))
      );
    }
  }, []);

  return (
    <header className={styles.outerContainer}>
      <div className={cn('container', styles.innerContainer)}>
        <Logo logo={logo} />
        <Nav />
        <div className={styles.rightMenu}>
          <Link href="/favorites">
            <a>
              <Favorites className={styles.rightMenuItem} />
              {favorites.items.length !== 0 && (
                <div className={styles.counter}>{favorites.items.length}</div>
              )}
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <Cart className={styles.rightMenuItem} />
              {cart.items.length !== 0 && (
                <div className={cn(styles.counter, styles.cartCounter)}>
                  {cart.items.length}
                </div>
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
