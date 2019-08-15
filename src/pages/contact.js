import React, { useContext } from 'react';

import Title from 'components/title';
import Content from 'components/content';
import { Contact } from 'components/cards';

import { LanguageContext } from 'context';

export default ({ data }) => {
  const { language } = useContext(LanguageContext);

  const { title, email, phone } = data[language].contact;

  return (
    <article>
      <Title>{title}</Title>

      <Content className="contact">
        <Contact
          icon="envelope"
          delay={520}
          permalink={email.value}
          title={email.name}
          method="mailto"
        />

        <Contact
          icon="phone"
          delay={760}
          permalink={phone.value}
          title={phone.name}
          method="tel"
        />
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    pl: languagesJson(lang: { eq: "pl" }) {
      contact {
        title
        email {
          name
          value
        }
        phone {
          name
          value
        }
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      contact {
        title
        email {
          name
          value
        }
        phone {
          name
          value
        }
      }
    }
  }
`;
