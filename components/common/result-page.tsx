'use client';

import { LocaleEnum } from '@/i18n';
import { Link } from '@/navigation';
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useLocale } from 'next-intl';
import React from 'react';

type Props = {
  status: ResultStatusType;
  title: string;
  herf: string;
  textButton: string;
  subTitle?: string;
};

const ResultPage = (props: Props) => {
  const locale = useLocale();

  const _renderMessage = (message: string | undefined) => {
    return message && <p className="text-black dark:text-white">{message}</p>;
  };

  return (
    <Result
      status={props.status}
      title={_renderMessage(props.title)}
      subTitle={_renderMessage(props.subTitle)}
      extra={
        <Link href={props.herf} locale={locale as LocaleEnum}>
          <Button type="primary" size="large">
            {props.textButton}
          </Button>
        </Link>
      }
    />
  );
};

export default ResultPage;
