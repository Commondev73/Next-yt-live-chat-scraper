'use client';

import axios from 'axios';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import LoadingPage from '../common/loading-page';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import { setMessages } from '@/redux/slices/youtube';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { isEmpty } from 'lodash';
import { YOUTUBE_LIVE_CHAT_DELAY } from '@/constants/youtube.constants';

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
      window.scrollTo({ top: element.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getMessages(props.liveId);
    const interval = setInterval(() => {
      getMessages(props.liveId);
    }, YOUTUBE_LIVE_CHAT_DELAY);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {isEmpty(messages) ? (
        <LoadingPage />
      ) : (
        <ScrollEvent>
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
      )}
    </>
  );
};

export default LiveChat;
