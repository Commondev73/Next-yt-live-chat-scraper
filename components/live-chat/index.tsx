'use client';

import axios from 'axios';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import LoadingPage from '../common/loading-page';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import { resetMessages, setMessages } from '@/redux/slices/youtube';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { isEmpty } from 'lodash';
import { YOUTUBE_LIVE_CHAT_DELAY } from '@/constants/youtube.constants';
import { Space, Switch } from 'antd';
import { YoutubeOutlined } from '@ant-design/icons';

type Props = {
  liveId: string;
};

const LiveChat = (props: Props) => {
  const dispatch = useAppDispatch();
  const messages: YouTubeChatMessageInterface[] = useAppSelector(
    (state) => state.youtube.messages,
  );

  const getMessages = async (liveId: string) => {
    let messages: YouTubeChatMessageInterface[] = [];
    try {
      const { data } = await axios.get(`/api/youtube/${liveId}`);
      if (!isEmpty(data)) {
        messages = data.messages;
      }
    } catch (_) {}
    dispatch(setMessages({ messages }));
  };

  const scrollToBottom = () => {
    const element = document.getElementById('scrollEvent') as HTMLElement;
    if (element && element.scrollHeight > 0) {
      element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages(props.liveId);
    }, YOUTUBE_LIVE_CHAT_DELAY);
    return () => {
      clearInterval(interval);
      resetMessages();
    };
  });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {isEmpty(messages) ? (
        <LoadingPage />
      ) : (
        <div className="m-3">
          <div className="flex m-3 gap-1 items-center">
            <Space className="mr-5">
              <YoutubeOutlined
                className="text-5xl"
                style={{ color: 'rgb(239 68 68)' }}
              />
            </Space>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {props.liveId}
            </span>
          </div>
          {/* <div>
            <Switch
              checkedChildren="กรองคำถาม"
              unCheckedChildren="ไม่กรองคำถาม"></Switch>
            <Switch
              checkedChildren="กรองคำถาม"
              unCheckedChildren="ไม่กรองคำถาม"></Switch>
            <Switch
              checkedChildren="กรองคำถาม"
              unCheckedChildren="ไม่กรองคำถาม"></Switch>
          </div> */}
          <ScrollEvent className="h-[90vh] p-2 rounded border border-solid">
            {messages.map(
              (message: YouTubeChatMessageInterface, index: number) => (
                <ChatMessage
                  key={index}
                  authorName={message.authorName}
                  message={message.message}
                />
              ),
            )}
          </ScrollEvent>
        </div>
      )}
    </>
  );
};

export default LiveChat;
