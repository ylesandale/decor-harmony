import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Text from 'components/ui-kits/Text/Text';
import Cart from '../../../assets/icons/cart.svg';
import Favorites from '../../../assets/icons/favorites.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Image
              width={64}
              height={64}
              src="/images/HeaderLogo.png"
              alt="logo"
            />
            <Text variant="h3" className={styles.logoText}>
              decor harmony
            </Text>
          </div>
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Text variant="body-text1" className={styles.navItem}>
              Каталог
            </Text>
          </a>
        </Link>
        <Link href="/delivery">
          <a>
            <Text variant="body-text1" className={styles.navItem}>
              Доставка
            </Text>
          </a>
        </Link>
        <Link href="/sold">
          <a>
            <Text variant="body-text1" className={styles.navItem}>
              Проданные
            </Text>
          </a>
        </Link>
      </nav>
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
    </header>
  );
};

export default Header;
