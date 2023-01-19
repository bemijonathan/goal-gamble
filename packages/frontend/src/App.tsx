import React from "react";
import "antd/dist/reset.css";

import { Button, DatePicker, Space, version } from "antd";

function App() {
  return (
    <section>
      hello
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </section>
  );
}

export default App;
