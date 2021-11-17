import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export interface IInputProps {
  placeholder: string;
  id: string;
  label?: string;
  error?: string | null;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: string;
  textarea?: boolean;
}

const Input: React.FC<IInputProps> = ({
  id,
  placeholder,
  label,
  error,
  value,
  onChange,
  type = 'text',
  textarea,
  ...props
}) => {
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLInputElement>
  ) => {
    let inputValue = event.currentTarget.value;

    onChange(inputValue);
  };

  if (textarea) {
    return (
      <div
        className={cn(styles.container, {
          [styles.error]: error,
        })}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          name={id}
          id={id}
          cols={30}
          rows={10}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.textarea}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  } else {
    return (
      <div
        className={cn(styles.container, {
          [styles.error]: error,
        })}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.input}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </div>
    );
  }
};

export default Input;
