import React, { useRef, useState } from "react";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Button, Row, Col } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Row justify="center" style={{ marginTop: "32px" }}>
      <Col span={12}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name={["user", "name"]}
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input type="text" placeholder="Enter your full name" name="name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name={["user", "email"]}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" name="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name={["user", "password"]}
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Input password"
              name="password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item label="Sign Up">
            <Button htmlType="submit">Sign Up</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
