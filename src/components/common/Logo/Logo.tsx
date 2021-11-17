import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Text from 'components/ui-kits/Text/Text';
import styles from './Logo.module.scss';

interface ILogoProps {
  logo: string;
}

const Logo = ({ logo }: ILogoProps) => {
  return (
    <Link href="/">
      <a>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <Text variant="h3" className={styles.logoText}>
            decor harmony
          </Text>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
