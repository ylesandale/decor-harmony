import React from 'react';
import Link from 'next/link';
import Text from 'components/ui-kits/Text/Text';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/catalog">
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
  );
};

export default Nav;
