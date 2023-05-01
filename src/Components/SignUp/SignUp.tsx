import { Button, Card, Col, Divider, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const SignUp = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Create a free account
        </Typography.Title>
        <Card>
          <Form layout="vertical" autoComplete="off">
            <Row gutter={8}>
              <Col span={12}>
                <Button block size="large">
                  <BsGithub fontSize={24} />
                </Button>
              </Col>
              <Col span={12}>
                <Button block size="large">
                  <BsGoogle />
                </Button>
              </Col>
            </Row>
            <Divider>
              <Typography.Text>Or use email to signup</Typography.Text>
            </Divider>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Only alphanumeric allowed [a-z, A-Z, 0-9]"
              />
            </Form.Item>
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
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter a new password" />
            </Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign up
            </Button>
            <Typography className="text-align-center mt-lg font-medium">
              Already have an account?{' '}
              <Button className="p-0" type="link">
                Sign in
              </Button>
            </Typography>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
