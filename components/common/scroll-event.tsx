'use client';

import { ReactNode } from 'react';

const ScrollEvent = ({ children }: { children: ReactNode }) => {
  return <div className="h-0 min-h-[100%] overflow-auto">{children}</div>;
};

export default ScrollEvent;
