import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';

const ResetPassword = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Reset your password
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: 'center' }}>
          Enter your email and we'll send you a link to reset your password
        </Typography.Paragraph>
        <Card>
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Item>
            <Button block type="primary" htmlType="submit">
              Send password reset email
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ResetPassword;
