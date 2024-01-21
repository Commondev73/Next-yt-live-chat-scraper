'use client';

import { Row, Col, Input } from 'antd';

const LiveChatId = () => {
  return (
    <Row>
      <Col span={8}>
        <Input.Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </Col>
    </Row>
  );
};

export default LiveChatId;
