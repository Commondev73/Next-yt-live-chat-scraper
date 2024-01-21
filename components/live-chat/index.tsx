'use client';

import { Row, Col } from 'antd';
import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';

const LiveChat = () => {
  return (
    <Row>
      <Col span={12}>
        <ChatMessage></ChatMessage>
        <ScrollEvent>
          <></>
        </ScrollEvent>
      </Col>
      <Col span={12}>
        <ChatMessage></ChatMessage>
        <ScrollEvent>
          <></>
        </ScrollEvent>
      </Col>
    </Row>
  );
};

export default LiveChat;
