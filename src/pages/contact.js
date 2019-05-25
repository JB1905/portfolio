import React, { useContext } from 'react';

import Title from 'components/title';
import Content from 'components/content';
import { Contact } from 'components/cards';

import { Store } from 'layouts';

export default () => {
  const { language } = useContext(Store);

  return (
    <article>
      <Title>{language === 'pl' ? 'Kontakt' : 'Contact'}</Title>

      <Content className="contact">
        <Contact
          icon="envelope"
          delay={520}
          permalink="biesiadajakub@icloud.com"
          title={language === 'pl' ? 'E-mail' : 'Email'}
          method="mailto"
        />

        <Contact
          icon="phone"
          delay={760}
          permalink="+48 661 176 806"
          title={language === 'pl' ? 'Telefon' : 'Phone'}
          method="tel"
        />
      </Content>
    </article>
  );
};
