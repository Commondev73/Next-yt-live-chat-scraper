'use client';

import ResultPage from '@/components/common/result-page';

const NotFoundPage = () => {
  return (
    <ResultPage
      status={404}
      title={<p className='text-black dark:text-white'>404</p>}
      subTitle={<p className='text-black dark:text-white'>Sorry, the page you visited does not exist.</p>}
      herf="/"
      textButton="Back Home"
    />
  );
};

export default NotFoundPage;
