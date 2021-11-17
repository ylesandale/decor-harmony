import React from 'react';
import Input, { IInputProps } from 'components/ui-kits/Input/Input';

const MAX_LENGTH = 15;

export const PhoneNumberInput = ({
  onChange,
  label = 'Номер телефона',
  variant = 'secondary',
  ...props
}: any) => {
  const handleChange = (inputValue: string) => {
    const formattedValue = `+7 ${inputValue
      .replace(/\+7/g, '')
      .replace(/\D/g, '')
      .replace(/\d{3}/, '$& ')
      .replace(/\d{3}\s\d{3}/, '$& ')
      .trim()}`;

    onChange(formattedValue.slice(0, MAX_LENGTH));
  };

  return (
    <Input
      id="phoneNumberInput"
      placeholder="+7"
      maxLength={MAX_LENGTH}
      variant={variant}
      label={label}
      onChange={handleChange}
      {...props}
    />
  );
};
