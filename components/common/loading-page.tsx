'use client';

import { Spin } from 'antd';

const LoadingPage = () => {
  return (
    <div className="fixed flex h-screen w-full items-center	justify-center">
      <Spin size="large" />
    </div>
  );
};

export default LoadingPage;
