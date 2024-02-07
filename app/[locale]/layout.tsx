import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import Header from '@/components/header';
import Themes from '@/components/themes';
import { LocaleEnum } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Live Chat Scraper',
  description: '',
};

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleEnum };
}) => {
  return (
    <html lang={locale}>
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
};

export default LocaleLayout;
