import React, { useState, useEffect } from 'react';
import { FormApi } from 'final-form';
import { Form, Field } from 'react-final-form';
import { useForm } from '@formspree/react';
import Input from 'components/ui-kit/Input/Input';
import Button from 'components/ui-kit/Button/Button';
import Text from 'components/ui-kit/Text/Text';
import Checkbox from 'components/ui-kit/Checkbox/Checkbox';
import styles from './FeedbackForm.module.scss';
import Modal from 'components/ui-kit/Modal/Modal';

const FeedbackForm = () => {
  const [state, handleSubmit] = useForm('mjvlbgne');
  const [termsError, setTermsError] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [terms, setTerms] = useState<boolean | undefined>(undefined);

  const handleTermsChange = () => {
    setTermsError(false);
    setTerms(!terms);
  };

  console.log(terms);

  const validateForm = (values: Record<string, string | undefined>) => {
    const errors: Record<string, string> = {};

    if (!values.name) {
      errors.name = 'Обязательное поле';
    }

    if (!values.appeal) {
      errors.appeal = 'Обязательное поле';
    }

    return errors;
  };

  const resetForm = (form: FormApi) => {
    form.restart();
    setTerms(undefined);
    setVisibleModal(false);
  };

  const onSubmitForm = (values: Record<string, string>) => {
    // if (!terms) {
    //   setTermsError(true);

    //   return;
    // }

    const review = {
      Имя: values.name,
      Отзыв: values.appeal,
    };

    handleSubmit(review);
    setTermsError(false);
    setVisibleModal(true);
  };

  useEffect(() => {
    if (typeof terms !== 'undefined') {
      setTermsError(!terms);
    }
  }, [terms]);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Form
          onSubmit={onSubmitForm}
          validate={validateForm}
          render={({ handleSubmit, form }) => (
            <>
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
                    id="2"
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
              <Modal
                open={visibleModal}
                title="Спасибо за отзыв!"
                description="Мы постараемся улучшить наш сайт благодаря вашей обратной связи."
                onClose={() => resetForm(form as FormApi)}
              />
            </>
          )}
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
