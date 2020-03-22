import React from 'react';
import { graphql } from 'gatsby';

import Title from '../components/title';
import Content from '../components/content';
import { Technology } from '../components/cards';

import { useLanguages } from '../hooks/useLanguages';

interface Props {
  data: {
    pl: {
      technologies: {
        title: string;
      };
    };
    en: {
      technologies: {
        title: string;
      };
    };
    graphCmsData: {
      technologies: [
        {
          id: number;
          name: string;
          image: {
            url: string;
          };
        }
      ];
    };
  };
}

const Technologies = ({ data }: Props) => {
  const { language } = useLanguages();

  const { title } = data[language].technologies;

  return (
    <article>
      <Title>{title}</Title>

      <Content className="technologies">
        {data.graphCmsData.technologies.map((item, index) => (
          <Technology
            key={item.id}
            index={index}
            name={item.name}
            image={item.image.url}
          />
        ))}
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    pl: languagesJson(lang: { eq: "pl" }) {
      technologies {
        title
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      technologies {
        title
      }
    }

    graphCmsData {
      technologies(where: { status: PUBLISHED }) {
        id
        name
        image {
          url
        }
      }
    }
  }
`;

export default Technologies;
