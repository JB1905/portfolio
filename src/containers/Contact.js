import React from 'react';

import Title from '../components/Title';
import ContactItem from '../components/ContactItem';

import { CONTACT } from '../content/contact';

const Contact = () => (
  <>
    <Title value="Kontakt" />

    <div className="contact">
      <ContactItem
        icon="envelope"
        permalink={CONTACT.email}
        delay={520}
        title="E-mail"
        method="mailto"
      />

      <ContactItem
        icon="phone"
        permalink={CONTACT.phone}
        delay={760}
        title="Telefon"
        method="tel"
      />
    </div>
  </>
);

export default Contact;
