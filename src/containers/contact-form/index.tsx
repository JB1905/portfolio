import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import './contact-form.scss';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: '',
    },
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
        type="email"
        placeholder={t('contact.form.email')}
        className="contact-form__input contact-form__input--email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <input
        id="subject"
        name="subject"
        type="text"
        placeholder={t('contact.form.subject')}
        className="contact-form__input contact-form__input--text"
        onChange={formik.handleChange}
        value={formik.values.subject}
      />

      <textarea
        id="message"
        name="message"
        placeholder={t('contact.form.message')}
        className="contact-form__input contact-form__input--textarea"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

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
