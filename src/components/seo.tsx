import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { SeoQuery } from '../../graphql-types';

type Meta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[];

interface Props {
  readonly title?: string;
  readonly description?: string;
  readonly meta?: Meta;
  readonly keywords?: string[];
}

const SEO = ({ title, description, meta = [], keywords = [] }: Props) => {
  const { i18n } = useTranslation();

  const { site } = useStaticQuery<SeoQuery>(query);

  const metaDescription = description || site!.siteMetadata!.description;

  return (
    <Helmet
      title={site!.siteMetadata!.author!}
      titleTemplate={`%s | ${title || site!.siteMetadata!.title}`}
      htmlAttributes={{ lang: i18n.language }}
      meta={([
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
          content: site!.siteMetadata!.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ] as Meta)
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
  query SEO {
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
