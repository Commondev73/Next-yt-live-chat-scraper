'use client';

import axios from 'axios';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import LoadingPage from '../common/loading-page';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';
import { resetMessages, setMessages } from '@/redux/slices/youtube';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { isEmpty } from 'lodash';
import { YOUTUBE_LIVE_CHAT_DELAY } from '@/constants/youtube.constants';
import { Button, Space } from 'antd';
import { YoutubeOutlined, ArrowDownOutlined } from '@ant-design/icons';

type Props = {
  liveId: string;
};

const LiveChat = (props: Props) => {
  const [scrollAuto, setScrollAuto] = useState(true);
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
    if (element) {
      const { scrollHeight } = element;

      element.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const scrollHandle = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = e.target as HTMLElement;
    const { scrollTop, scrollHeight, offsetHeight } = target;
    const position = scrollTop + offsetHeight;

    if (position < scrollHeight) {
      setScrollAuto(false);
    }

    if (position >= scrollHeight) {
      setScrollAuto(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isEmpty(messages)) {
      getMessages(props.liveId);
    } else {
      interval = setInterval(() => {
        getMessages(props.liveId);
      }, YOUTUBE_LIVE_CHAT_DELAY);
    }

    return () => {
      clearInterval(interval);
      resetMessages();
    };
  });

  useEffect(() => {
    scrollAuto && scrollToBottom();
  }, [messages, scrollAuto]);

  return (
    <>
      {isEmpty(messages) ? (
        <LoadingPage />
      ) : (
        <div className="m-3 relative">
          <div className="flex m-3 gap-1 items-center">
            <Space className="mr-5">
              <YoutubeOutlined
                className="text-4xl"
                style={{ color: 'rgb(239 68 68)' }}
              />
            </Space>
            <span className="text-lg sm:text-lg md:text-xl lg:text-2xl">
              {props.liveId}
            </span>
          </div>
          <ScrollEvent
            className="h-[85vh] p-2 rounded border border-solid"
            onScroll={(e) => scrollHandle(e)}>
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
          {!scrollAuto && (
            <div className="w-full absolute flex justify-center bottom-4">
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<ArrowDownOutlined onClick={scrollToBottom} />}></Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default LiveChat;
