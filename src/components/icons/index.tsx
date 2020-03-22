import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { LanguageSwitch } from '../switch';
import Item from './item';

import './icons.scss';

interface Props {
  data: {
    icons: [
      {
        id: number;
        url: string;
        image: {
          url: string;
        };
      }
    ];
  };
}

const Icons = () => (
  <StaticQuery
    query={graphql`
      query {
        data: graphCmsData {
          icons {
            id
            url
            image {
              url
            }
          }
        }
      }
    `}
    render={({ data }: Props) => (
      <div className="icons">
        <LanguageSwitch />

        {data.icons.map((icon, index: number) => (
          <Item key={icon.id} item={icon} index={index} />
        ))}
      </div>
    )}
  />
);

export default Icons;
