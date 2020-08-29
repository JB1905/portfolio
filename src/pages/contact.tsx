import React from 'react';
import { useTranslation } from 'react-i18next';

import Page from '../components/page';
import { Contact as ContactCard } from '../components/cards';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page title={t('contact.title')} className="contact">
      <ContactCard
        icon="envelope"
        delay={520}
        title={t('contact.email.name')}
        permalink={t('contact.email.value')}
        method="mailto"
      />

      <ContactCard
        icon="phone"
        delay={760}
        title={t('contact.phone.name')}
        permalink={t('contact.phone.value')}
        method="tel"
      />
    </Page>
  );
};

export default Contact;
