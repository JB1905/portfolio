import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { LanguageSwitch } from '../switch';
import Item from './item';

import { IconsQuery } from '../../../graphql-types';

const Icons: React.FC = () => {
  const data = useStaticQuery<IconsQuery>(query);

  return (
    <section className="icons">
      <LanguageSwitch />

      {data.graphCmsData.icons.map((icon, index: number) => (
        <Item key={icon.id} item={icon} index={index} />
      ))}
    </section>
  );
};

export const query = graphql`
  query Icons {
    graphCmsData {
      icons {
        id
        url
        image {
          url
        }
      }
    }
  }
`;

export default Icons;
