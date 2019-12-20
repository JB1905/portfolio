import React, { useContext } from "react";
import { graphql } from "gatsby";

import Title from "../components/title";
import Content from "../components/content";
import { Contact as ContactCard } from "../components/cards";

import { LanguageContext } from "../context";

interface Props {}

const Contact = ({ data }: Props) => {
  const { language } = useContext(LanguageContext);

  const { title, email, phone } = data[language].contact;

  return (
    <article>
      <Title>{title}</Title>

      <Content className="contact">
        <ContactCard
          icon="envelope"
          delay={520}
          permalink={email.value}
          title={email.name}
          method="mailto"
        />

        <ContactCard
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

export default Contact;
