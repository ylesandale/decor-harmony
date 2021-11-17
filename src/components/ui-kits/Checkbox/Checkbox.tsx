import React from 'react';
import cn from 'classnames';
import CheckboxIcon from '../../../assets/icons/Checkbox2.svg';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label?: React.ReactNode;
  className?: string;
  error?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  className,
  error,
}) => {
  return (
    <label
      htmlFor={id}
      className={cn(styles.label, className, {
        [styles.checked]: checked,
        [styles.error]: error,
      })}
    >
      <input id={id} checked={checked} type="checkbox" onChange={onChange} />

      <div className={styles.checkbox}>
        <CheckboxIcon className={styles.checkboxIcon} />
      </div>
      {label}
    </label>
  );
};

export default Checkbox;
