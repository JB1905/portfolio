import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { DefaultSeoQuery } from '../../graphql-types';

interface Props {
  readonly description?: string;
  readonly meta?: HTMLMetaElement;
  readonly keywords?: string[];
  readonly title?: string;
}

const SEO = ({ description, meta = [], keywords = [], title }: Props) => {
  const { i18n } = useTranslation();

  const { site } = useStaticQuery<DefaultSeoQuery>(query);

  // TODO
  const metaDescription = description || site.siteMetadata.description;

  // TODO
  return (
    <Helmet
      title={site.siteMetadata.author}
      titleTemplate={`%s | ${title || site.siteMetadata.title}`}
      htmlAttributes={{ lang: i18n.language }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export const query = graphql`
  query DefaultSEO {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`;

export default SEO;
