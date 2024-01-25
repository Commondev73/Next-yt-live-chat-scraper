'use client';

import axios from 'axios';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import { Row, Col } from 'antd';
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

  useEffect(() => {
    getMessages(props.liveId);
    const interval = setInterval(() => {
      getMessages(props.liveId);
    }, YOUTUBE_LIVE_CHAT_DELAY);
    return () => clearInterval(interval);
  });

  const messages: YouTubeChatMessageInterface[] = useAppSelector(
    (state) => state.youtube.messages,
  );
  
  return (
    <>
      <Row>
        <Col span={12}>
          <ChatMessage></ChatMessage>
          <ScrollEvent>
            <></>
          </ScrollEvent>
        </Col>
      </Row>
      <div>
        <pre>{JSON.stringify(messages, null, 4)}</pre>
      </div>
    </>
  );
};

export default LiveChat;
