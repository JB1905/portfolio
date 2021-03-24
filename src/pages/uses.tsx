import React from 'react';
import { useTranslation } from 'react-i18next';

import Page from '../components/page';

const Uses = () => {
  const { t } = useTranslation();

  return <Page title={t('uses.title')} className="uses"></Page>;
};

export default Uses;
