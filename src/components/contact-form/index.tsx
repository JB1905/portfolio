import React, { useMemo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import axios from 'axios';

import './contact-form.scss';

const ContactForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      email: yup
        .string()
        .email(t('form.email.error.invalid'))
        .required(t('form.email.error.required')),
      subject: yup.string().required(t('form.subject.error.invalid')),
      message: yup.string().required(t('form.message.error.invalid')),
    });
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        axios({
          method: 'post',
          url: process.env.GATSBY_CONTACT_FORM_ACTION!,
          data: JSON.stringify(values),
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <input
        id="email"
        name="email"
        // type="email"
        placeholder={t('contact.form.email')}
        className="contact-form__input contact-form__input--email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      {formik.errors.email}

      <input
        id="subject"
        name="subject"
        type="text"
        placeholder={t('contact.form.subject')}
        className="contact-form__input contact-form__input--text"
        onChange={formik.handleChange}
        value={formik.values.subject}
      />

      {formik.errors.subject}

      <textarea
        id="message"
        name="message"
        placeholder={t('contact.form.message')}
        className="contact-form__input contact-form__input--textarea"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      {formik.errors.message}

      <button
        type="submit"
        className="contact-form__button contact-form__button--submit"
      >
        {t('contact.form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;
