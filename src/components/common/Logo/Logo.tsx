import React from 'react';
import Link from 'next/link';
import Text from 'components/ui-kits/Text/Text';
import Image from 'next/image';
import styles from './Logo.module.scss';

interface ILogoProps {
  logo: string;
}

const Logo = ({ logo }: ILogoProps) => {
  console.log(logo);
  return (
    <Link href="/">
      <a>
        <div className={styles.logo}>
          <Image width={64} height={64} src={logo} alt="logo" />
          <Text variant="h3" className={styles.logoText}>
            decor harmony
          </Text>
        </div>
      </a>
    </Link>
  );
};

export default Logo;
