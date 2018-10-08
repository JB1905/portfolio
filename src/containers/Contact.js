import React from 'react';

import Title from '../components/Title';
import ContactItem from '../components/ContactItem';

import { content } from '../content';

const Contact = () => (
  <>
    <Title value={content.contact.title} />

    <div className="contact">
      <ContactItem
        icon="envelope"
        permalink={content.contact.items.email.value}
        delay={520}
        title={content.contact.items.email.method}
        method="mailto"
      />

      <ContactItem
        icon="phone"
        permalink={content.contact.items.phone.value}
        delay={760}
        title={content.contact.items.phone.method}
        method="tel"
      />
    </div>
  </>
);

export default Contact;
