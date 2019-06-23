import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Title from 'components/title';
import Content from 'components/content';
import { Technology } from 'components/cards';

import { LanguageContext } from 'context';

const Technologies = ({ data }) => {
  const { language } = useContext(LanguageContext);

  return (
    <article>
      <Title>{language === 'pl' ? 'Technologie' : 'Technologies'}</Title>

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

Technologies.propTypes = {
  data: PropTypes.object.isRequired
};

export default Technologies;
