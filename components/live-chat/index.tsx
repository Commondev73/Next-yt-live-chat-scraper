'use client';

import ScrollEvent from '../common/scroll-event';
import ChatMessage from '../chat-message';
import { Row, Col } from 'antd';

const LiveChat = () => {

  return (
    <Row>
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
