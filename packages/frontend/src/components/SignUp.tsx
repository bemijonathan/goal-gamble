import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Button, Row } from "antd";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Row justify="center" style={{ marginTop: "32px" }}>
      <Form layout="vertical" style={{ width: "50%" }}>
        <Form.Item label="Name">
          <Input type="text" placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password
            placeholder="Input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default SignUp;
