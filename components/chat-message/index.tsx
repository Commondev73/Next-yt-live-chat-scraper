'use client';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';

interface Props extends YouTubeChatMessageInterface {}

const ChatMessage = (props: Props) => {
  return (
    <div className='m-2'>
      <Avatar
        size={{ xs: 24, sm: 32, md: 38 }}
        icon={<UserOutlined />}
      />
      <span className="mx-2 font-bold text-gray-500 dark:text-gray-300">{props.authorName}</span>
      <span>{props.message}</span>
    </div>
  );
};

export default ChatMessage;
