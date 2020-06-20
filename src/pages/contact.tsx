import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../components/seo';
import Title from '../components/title';
import Content from '../components/content';
import { Contact as ContactCard } from '../components/cards';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <article>
      <SEO title={t('contact.title')} />

      <Title>{t('contact.title')}</Title>

      <Content className="contact">
        <ContactCard
          icon="envelope"
          delay={520}
          // permalink={t('contact.email.value')}
          title={t('contact.email.name')}
          permalink="biesiadajakub@icloud.com"
          method="mailto"
        />

        <ContactCard
          icon="phone"
          delay={760}
          // permalink={t('contact.phone.value')}
          title={t('contact.phone.name')}
          permalink="+48 661 176 806"
          method="tel"
        />
      </Content>
    </article>
  );
};

export default Contact;
