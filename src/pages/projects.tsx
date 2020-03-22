import React from 'react';
import { graphql } from 'gatsby';

import Title from '../components/title';
import Content from '../components/content';
import { Project } from '../components/cards';

import { useLanguages } from '../hooks/useLanguages';

interface Item {
  date: string;
  descriptionEn: string;
  descriptionPl: string;
  id: string;
  image: {
    handle: string;
    height: number;
    width: number;
  };
  liveLink: string;
  srcLink: string;
  technologies: [
    {
      id: string;
      image: {
        url: string;
      };
      name: string;
    }
  ];
  title: string;
}

interface Props {
  data: {
    pl: {
      projects: {
        title: string;
      };
    };
    en: {
      projects: {
        title: string;
      };
    };
    graphCmsData: {
      projects: Item[];
    };
  };
}

const Projects = ({ data }: Props) => {
  const { language } = useLanguages();

  const { title } = data[language].projects;

  return (
    <article>
      <Title>{title}</Title>

      <Content className="projects">
        {data.graphCmsData.projects.map((item, index) => (
          <Project
            key={item.id}
            index={index}
            item={item}
            language={language}
          />
        ))}
      </Content>
    </article>
  );
};

export const query = graphql`
  {
    pl: languagesJson(lang: { eq: "pl" }) {
      projects {
        title
      }
    }

    en: languagesJson(lang: { eq: "en" }) {
      projects {
        title
      }
    }

    graphCmsData {
      projects(where: { status: PUBLISHED }) {
        id
        title
        liveLink
        srcLink
        descriptionPl
        descriptionEn
        date
        image {
          handle
          width
          height
        }
        technologies {
          id
          name
          image {
            url
          }
        }
      }
    }
  }
`;

export default Projects;
