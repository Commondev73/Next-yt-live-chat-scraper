'use client';

import { Space, Input } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  youtubeUrlValidateHelper,
  youtubeWatchOrLiveValueHelper,
} from '@/helpers/youtube.helper';
import { useLocale, useTranslations } from 'next-intl';
import { useAppDispatch } from '@/redux/store';
import { resetMessages } from '@/redux/slices/youtube';


type Props = {
  version: string;
};

interface Input {
  liveId: string;
}

enum InputName {
  liveId = 'liveId',
}

const LiveChatId = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();
  const dispatch = useAppDispatch();
  const t = useTranslations('youtube')
  const { control, formState, handleSubmit, reset } = useForm<Input>();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSearch: SearchProps['onSearch'] = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = (values: Input) => {
    setLoading(true);
    dispatch(resetMessages());
    const liveId = youtubeWatchOrLiveValueHelper(values.liveId);
    router.push(`/${locale}/yt-live-chat/${liveId}`);
    reset();
  };

  const validateSearch = (value: string): boolean =>
    value.length <= 15 ? true : youtubeUrlValidateHelper(value);

  return (
    <div className="m-5">
      <div className="flex gap-1 items-center text-center mb-5">
        <Space>
          <WechatOutlined className="text-5xl" />
        </Space>
        <span className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Youtube Live Chat Scraper v{props.version}
        </span>
      </div>
      <Controller
        control={control}
        name={InputName.liveId}
        rules={{
          required: t('form.liveId'),
          minLength: 5,
          maxLength: 100,
          validate: validateSearch,
        }}
        render={({ field }) => (
          <Input.Search
            className={`${
              errors[InputName.liveId] && 'rounded-lg border-2 border-red-500'
            }`}
            placeholder={t('form.liveId')}
            allowClear
            enterButton
            size="large"
            loading={loading}
            onSearch={onSearch}
            {...field}
          />
        )}
      />
      {errors[InputName.liveId] && (
        <p className="mt-2 text-sm text-red-500">
          {errors[InputName.liveId].message}
        </p>
      )}
    </div>
  );
};

export default LiveChatId;
