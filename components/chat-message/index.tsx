'use client';

import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
// import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';

// interface Props extends YouTubeChatMessageInterface {}

const ChatMessage = () => {
  return (
    <div>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64 }}
        icon={<AntDesignOutlined />}
      />
      <span className="mx-1.5 font-bold">สายฟ้า แห่ง ซาตาน</span>
      <span>
        ประวัติ เก่าๆ ยังถามหากัน ทำไม ไม่คิด ถึง ตอนรักกัน ก่อนไป มีคนอื่น มั่ง
      </span>
    </div>
  );
};

export default ChatMessage;
