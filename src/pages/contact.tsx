import { useTranslation } from 'react-i18next';

import Page from '../components/page';
import { Contact as ContactCard } from '../components/cards';

const Contact = () => {
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
    </Page>
  );
};

export default Contact;
