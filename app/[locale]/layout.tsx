import ReduxProvider from '@/redux/provider';
import Header from '@/components/header';
import Themes from '@/components/themes';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { LocaleEnum } from '@/enums/locale.enum';

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
  const messages = useMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Themes>
            <Header />
            <AntdRegistry>
              <ReduxProvider>{children}</ReduxProvider>
            </AntdRegistry>
          </Themes>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
