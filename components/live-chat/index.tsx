'use client';

import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import { Row, Col } from 'antd';
import { YouTubeChatMessageInterface } from '@/interfaces/youtube.interface';

type Props = {
  messages: YouTubeChatMessageInterface[];
};

const LiveChat = ({ messages }: Props) => {
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
