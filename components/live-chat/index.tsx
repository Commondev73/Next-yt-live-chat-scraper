'use client';

import axios from 'axios';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import { Row, Col } from 'antd';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import { setMessages } from '@/redux/slices/youtube';

type Props = {
  liveId: string;
};

const LiveChat = (props: Props) => {
  const dispatch = useAppDispatch();

  const getMessages = async (liveId: string) => {
    const { data } = await axios.get(`/api/youtube/${liveId}`);
    dispatch(setMessages(data.messages));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages(props.liveId);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const messages = useAppSelector((state) => state.youtube.messages);
  return (
    <>
      {/* <Row>
        <Col span={12}>
          <ChatMessage></ChatMessage>
          <ScrollEvent>
            <></>
          </ScrollEvent>
        </Col>
      </Row> */}
      <div>{JSON.stringify(messages, null, 4)}</div>
    </>
  );
};

export default LiveChat;
