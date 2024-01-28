import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import Header from '@/components/header';
import Themes from '@/components/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Live Chat Scraper',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Themes>
          <Header />
          <AntdRegistry>
            <ReduxProvider>{children}</ReduxProvider>
          </AntdRegistry>
        </Themes>
      </body>
    </html>
  );
}
