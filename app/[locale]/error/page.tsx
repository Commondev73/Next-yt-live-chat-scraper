'use client';

import ResultPage from '@/components/common/result-page';
import { useTranslations } from 'next-intl';

const ErrorPage = () => {
  const t = useTranslations();

  return (
    <ResultPage
      status={500}
      title={t('error.title')}
      subTitle={t('error.description')}
      herf="/"
      textButton={t('common.backHome')}
    />
  );
};

export default ErrorPage;
