import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import Checkbox from 'components/ui-kits/Checkbox/Checkbox';
import Input from 'components/ui-kits/Input/Input';
import Text from 'components/ui-kits/Text/Text';
import Button from 'components/ui-kits/Button/Button';
import styles from './CartForm.module.scss';
import { PhoneNumberInput } from 'components/common/PhoneNumberInput/PhoneNumberInput';

const CartForm = () => {
  const [termsError, setTermsError] = useState(false);
  const [terms, setTerms] = useState<boolean | undefined>(undefined);

  const handleTermsChange = () => {
    setTermsError(false);
    setTerms(!terms);
  };

  const validateForm = (values: Record<string, string>) => {
    const errors: Record<string, string> = {};

    if (!values.name) {
      errors.name = 'Обязательное поле';
    }

    if (!values.mobile) {
      errors.mobile = 'Обязательное поле';
    } else if (!values.mobile.length < 15) {
      errors.mobile = 'Неверный формат номера телефона';
    }

    return errors;
  };

  const onSubmitForm = (values: Record<string, string>) => {
    if (!terms) {
      setTermsError(true);

      return;
    }
    console.log(values);

    setTermsError(false);
  };

  useEffect(() => {
    if (typeof terms !== 'undefined') {
      setTermsError(!terms);
    }
  }, [terms]);
  return (
    <div className={styles.container}>
      <Form
        onSubmit={onSubmitForm}
        validate={validateForm}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Text variant="h3" className={styles.title}>
              Оформление заказа
            </Text>
            <Text variant="subtitle2" className={styles.subtitle}>
              Заполните форму.
            </Text>
            <Text variant="subtitle1" className={styles.sum}>
              Итого: 1000₽
            </Text>
            <div className={styles.fields}>
              <div className={styles.input}>
                <Field name="name">
                  {({ input, meta }) => (
                    <Input
                      id="name"
                      placeholder="Введите своё имя"
                      label="Имя"
                      error={meta.touched && meta.error}
                      {...input}
                    />
                  )}
                </Field>
              </div>
              <div className={styles.input}>
                <Field name="mobile">
                  {({ input, meta }) => (
                    <PhoneNumberInput
                      {...input}
                      error={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </div>
            </div>

            <div className={styles.bottomBlock}>
              <Checkbox
                label="Я соглашаюсь с условиями и даю свое согласие на обработку и использование моих персональных данных"
                id="1"
                checked={!!terms}
                onChange={handleTermsChange}
                className={styles.checkbox}
                error={termsError}
              />
              <Button
                onClick={handleSubmit}
                color="green"
                className={styles.button}
              >
                Отправить заказ
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default CartForm;
