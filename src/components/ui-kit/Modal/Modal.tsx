import React from 'react';
import cn from 'classnames';
import Text from 'components/ui-kit/Text/Text';
import styles from './Modal.module.scss';

interface IModalProps {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

const Modal = ({ open, title, description, onClose }: IModalProps) => {
  return (
    <div className={cn(styles.modal, { [styles.open]: open })}>
      <div className={styles.content}>
        <Text className={styles.title} variant="h3">
          {title}
        </Text>
        <Text variant="body-text1">{description}</Text>
        <div onClick={onClose} className={styles.close} />
      </div>
    </div>
  );
};

export default Modal;
