'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
  onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
};

const ScrollEvent = ({ children, className, onScroll }: Props) => {
  return (
    <div
      className={`overflow-auto ${className}`}
      id="scrollEvent"
      onScroll={(e) => onScroll && onScroll(e)}>
      {children}
    </div>
  );
};

export default ScrollEvent;
