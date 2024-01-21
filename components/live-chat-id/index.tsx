'use client';

import { Space, Input } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';

interface Props {
  version: string;
}

const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
  console.log(info?.source, value);
};

const LiveChatId = (props: Props) => {
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
      <Input.Search
        placeholder="Live Chat ID"
        allowClear
        enterButton
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default LiveChatId;
