'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: ReactNode;
};
const Themes = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Themes;
