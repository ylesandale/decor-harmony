import React, { useState, useEffect, useRef } from 'react';
import { FormApi } from 'final-form';
import { useForm } from '@formspree/react';
import { Form, Field } from 'react-final-form';
import Checkbox from 'components/ui-kit/Checkbox/Checkbox';
import Input from 'components/ui-kit/Input/Input';
import Text from 'components/ui-kit/Text/Text';
import Button from 'components/ui-kit/Button/Button';
import styles from './CartForm.module.scss';
import { PhoneNumberInput } from 'components/common/PhoneNumberInput/PhoneNumberInput';
import { IProduct } from 'store/cartStore';
import { clearCart } from 'utils/storeFuncs';
import Modal from 'components/ui-kit/Modal/Modal';

interface ICartFormProps {
  orderPrice: number;
  items: IProduct[];
}

const CartForm = ({ orderPrice, items }: ICartFormProps) => {
  const [state, handleSubmit] = useForm('mjvlbgne');
  const [termsError, setTermsError] = useState(false);
  const [terms, setTerms] = useState<boolean | undefined>(undefined);
  const [visibleModal, setVisibleModal] = useState(false);

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
    }

    // } else if (!values.mobile.length < 15) {
    //   errors.mobile = 'Неверный формат номера телефона';
    // }

    return errors;
  };

  const resetForm = (form: FormApi) => {
    form.restart();
    clearCart();
    setTerms(undefined);
    setVisibleModal(false);
  };

  const onSubmitForm = (values: Record<string, string>) => {
    if (!terms) {
      setTermsError(true);

      return;
    }

    const order = {
      Имя: values.name,
      Телефон: values.mobile,
      'Общая Цена': `${orderPrice} ₽`,
      Товары: items.map((item) => ({
        id: item.id,
        'Название товара': item.title,
        Цена: `${item.price} ₽`,
      })),
    };

    handleSubmit(order);
    setTermsError(false);
    setVisibleModal(true);
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
        render={({ handleSubmit, form }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Text variant="h3" className={styles.title}>
                Оформление заказа
              </Text>
              <Text variant="subtitle2" className={styles.subtitle}>
                Заполните форму.
              </Text>
              <Text variant="subtitle1" className={styles.sum}>
                Итого: {orderPrice} ₽
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
            <Modal
              open={visibleModal}
              title="Спасибо за ваш заказ!"
              description="Мы свяжемся с вами в ближайшее время."
              onClose={() => resetForm(form as FormApi)}
            />
          </>
        )}
      />
    </div>
  );
};

export default CartForm;
