'use client';

import { ReactNode } from 'react';

const ScrollEvent = ({ children }: { children: ReactNode }) => {
  return <div className="overflow-auto" id='scrollEvent'>{children}</div>;
};

export default ScrollEvent;
