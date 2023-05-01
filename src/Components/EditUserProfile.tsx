import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Typography,
} from 'antd';

import React from 'react';

const EditUserProfile = () => {
  return (
    <Card>
      <Form
        autoComplete="off"
        layout="vertical"
        initialValues={{
          displayname: 'Sachin Chaurasiya',
          profession: 'Software Engineer',
          gender: 'male',
          about: `Hello There 👋, My name is Sachin Chaurasiya and I'm a software engineer, Open Source Contributor, and Technical Writer from India 🇮🇳.`,
          github: 'https://github.com/Sachin-chaurasiya',
          linkedin: 'https://www.linkedin.com/in/sachin-chaurasiya/',
          website: 'https://sachinchaurasiya.dev/',
          twitter: 'https://twitter.com/sachindotcom',
          'stack-overflow':
            'https://stackoverflow.com/users/10951148/sachin-chaurasiya',
          instagram: 'https://instagram.com/sachinchaurasiya87',
        }}
      >
        <Typography className="font-medium text-md">
          Personal information
        </Typography>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Display Name" name="displayname">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Profession" name="profession">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Email address" name="email">
              <Input type="email" placeholder="example@gmail.com" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone number" name="phone_number">
              <Input type="number" placeholder="(+91) 9893456782" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Date of birth" name="birthdate">
              <DatePicker
                format={'DD/MM/YYYY'}
                placeholder="DD/MM/YYYY"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Gender" name="gender">
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="About"
          help="Write a few sentences about yourself."
          name="about"
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Typography className="font-medium text-md">
          Social Media Links
        </Typography>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Github" name="github">
              <Input type="url" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="LinkedIn" name="linkedin">
              <Input type="url" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Website" name="website">
              <Input type="url" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Twitter" name="twitter">
              <Input type="url" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Stack Overflow" name="stack-overflow">
              <Input type="url" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Instagram" name="instagram">
              <Input type="url" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Button
          htmlType="submit"
          type="primary"
          style={{ display: 'flex', marginLeft: 'auto' }}
        >
          Save Changes
        </Button>
      </Form>
    </Card>
  );
};

export default EditUserProfile;
