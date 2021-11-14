import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { Formik } from 'formik';
import Input from 'components/ui-kits/Input/Input';
import Button from 'components/ui-kits/Button/Button';
import Text from 'components/ui-kits/Text/Text';
import Checkbox from 'components/ui-kits/Checkbox/Checkbox';
import styles from './FeedbackForm.module.scss';

const FeedbackForm = () => {
  const [termsError, setTermsError] = useState(false);
  const [terms, setTerms] = useState<boolean | undefined>(undefined);
  const [state, setState] = useState(false);

  const handleTermsChange = () => {
    setTermsError(false);
    setTerms(!terms);
  };

  const validateForm = (values: Record<string, string>) => {
    const errors: Record<string, string> = {};

    if (!values.name) {
      errors.name = 'Обязательное поле';
    }

    if (!values.appeal) {
      errors.appeal = 'Обязательное поле';
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
    setState(true);
  };
  console.log(state);

  useEffect(() => {
    if (typeof terms !== 'undefined') {
      setTermsError(!terms);
    }
  }, [terms]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Form
          onSubmit={onSubmitForm}
          validate={validateForm}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Text variant="h3" className={styles.title}>
                Помогите нам стать лучше!
              </Text>
              <Text variant="subtitle2" className={styles.subtitle}>
                Заполните форму обратной связи.
              </Text>
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
              <Field name="appeal">
                {({ input, meta }) => (
                  <Input
                    id="appeal"
                    placeholder="Напишите с какой проблемой вы столкнулись / чего на сайте не хватает"
                    label="Опишите свою проблему"
                    error={meta.touched && meta.error}
                    textarea
                    {...input}
                  />
                )}
              </Field>
              <div className={styles.bottomContent}>
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
                  Отправить
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
