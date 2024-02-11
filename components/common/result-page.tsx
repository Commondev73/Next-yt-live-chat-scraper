'use client';

import { LocaleEnum } from '@/i18n';
import { Link } from '@/navigation';
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useLocale } from 'next-intl';

type Props = {
  status: ResultStatusType;
  title: React.ReactNode;
  textButton: string;
  herf: string;
  subTitle?: React.ReactNode;
};

const ResultPage = (props: Props) => {
  const locale = useLocale();

  return (
    <Result
      status={props.status}
      title={props.title}
      subTitle={props.subTitle}
      extra={
        <Link href={props.herf} locale={locale as LocaleEnum}>
          <Button type="primary">{props.textButton}</Button>
        </Link>
      }
    />
  );
};

export default ResultPage;
