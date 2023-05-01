import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const SignIn = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Sign in to Company
        </Typography.Title>
        <Card>
          <Form layout="vertical" autoComplete="off">
            <Form.Item
              label="Email address / Username"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="example@email.com" />
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
              <Input.Password size="large" placeholder="********" />
            </Form.Item>
            <Space align="baseline" className="w-full justify-between">
              <Form.Item name="remember-me" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Button type="link">Forgot your password?</Button>
            </Space>
            <Button block type="primary" htmlType="submit">
              Sign in
            </Button>
            <Divider>
              <Typography.Text>Or continue with</Typography.Text>
            </Divider>
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
            <Typography className="text-align-center mt-lg font-medium">
              Don't have an account?{' '}
              <Button className="p-0" type="link">
                Create Account
              </Button>
            </Typography>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default SignIn;
