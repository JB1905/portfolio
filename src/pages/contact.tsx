import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../components/seo';
import Title from '../components/title';
import Content from '../components/content';
import { Contact as ContactCard } from '../components/cards';

const Contact: React.FC = () => {
  const { t } = useTranslation('Contact');

  return (
    <article>
      <SEO title={t('title')} />

      <Title>{t('title')}</Title>

      <Content className="contact">
        <ContactCard
          icon="envelope"
          delay={520}
          permalink={t('email.value')}
          title={t('email.name')}
          method="mailto"
        />

        <ContactCard
          icon="phone"
          delay={760}
          permalink={t('phone.value')}
          title={t('phone.name')}
          method="tel"
        />
      </Content>
    </article>
  );
};

export default Contact;
