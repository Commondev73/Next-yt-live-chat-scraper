'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
};

const ScrollEvent = ({ children, className }: Props) => {
  return (
    <div className={`overflow-auto ${className}`} id="scrollEvent">
      {children}
    </div>
  );
};

export default ScrollEvent;
