'use client';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';

interface Props extends YouTubeChatMessageInterface {}

const ChatMessage = (props: Props) => {
  return (
    <div className='m-2'>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64 }}
        icon={<UserOutlined />}
      />
      <span className="mx-1.5 font-bold">{props.authorName}</span>
      <span>{props.message}</span>
    </div>
  );
};

export default ChatMessage;
