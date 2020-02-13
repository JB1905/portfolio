import React from "react";
import { graphql } from "gatsby";

import Title from "../components/title";
import Content from "../components/content";
import { Contact as ContactCard } from "../components/cards";

import { useLanguages } from "../hooks/useLanguages";

interface Props {
  data: {
    pl: {
      contact: {
        title: string;
        email: {
          name: string;
          value: string;
        };
        phone: {
          name: string;
          value: string;
        };
      };
    };
    en: {
      contact: {
        title: string;
        email: {
          name: string;
          value: string;
        };
        phone: {
          name: string;
          value: string;
        };
      };
    };
  };
}

const Contact = ({ data }: Props) => {
  const { language } = useLanguages();

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
