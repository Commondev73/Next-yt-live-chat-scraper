'use client';

import ResultPage from '@/components/common/result-page';

const ErrorPage = () => {
  return (
    <ResultPage
      status={500}
      title={<p className='text-black dark:text-white'>500</p>}
      subTitle={<p className='text-black dark:text-white'>Sorry, something went wrong.</p>}
      herf='/'
      textButton='Back Home'
    />
  );
};

export default ErrorPage