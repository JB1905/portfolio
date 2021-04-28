import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Page from '../components/page';
import { Technology } from '../components/cards';

import { TechnologiesQuery } from '../../graphql-types';

interface Props {
  readonly data: TechnologiesQuery;
}

const Technologies = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <Page title={t('technologies.title')} className="technologies">
      {data.graphCmsData.technologies.map((item, index) => (
        <Technology
          key={item.id}
          index={index}
          name={item.name}
          image={item.image.url}
        />
      ))}
    </Page>
  );
};

export const query = graphql`
  query Technologies {
    graphCmsData {
      technologies(where: { listed: true }) {
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
