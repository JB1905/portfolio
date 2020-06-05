import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from '../../components/seo';
import Title from '../../components/title';

import './uses.scss';

const Uses: React.FC = () => {
  const { t } = useTranslation('Uses');

  console.log(t('title'));

  return (
    <article>
      <SEO title={t('title')} />

      <Title>{t('title')}</Title>
    </article>
  );
};

export default Uses;
