import React from 'react';

import Title from '../components/Title';
import View from '../components/View';
import { ContactItem } from '../components/Items';

import { content } from '../content';

const Contact = () => (
  <article>
    <Title value={content.contact.title} />

    <View className="contact">
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
    </View>
  </article>
);

export default Contact;
