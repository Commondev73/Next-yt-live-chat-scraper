'use client';

import ResultPage from '@/components/common/result-page';
import { useTranslations } from 'next-intl';

const NotFoundPage = () => {
  const t = useTranslations();
  
  return (
    <ResultPage
      status={404}
      title={t('notFound.title')}
      subTitle={t('notFound.description')}
      herf="/"
      textButton={t('common.backHome')}
    />
  );
};

export default NotFoundPage;
