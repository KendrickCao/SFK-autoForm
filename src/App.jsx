import React from "react";
import GenerateDoc from "./GenerateDoc";
import {
  DatePicker,
  TimePicker,
  Input,
  InputNumber,
  Descriptions,
  Select,
} from "antd";
import { teachers, students } from "./data";
import "./App.css"
const fullWidth = {
  width: "100%",
};

const { TextArea } = Input;

const App = () => (
  <div>
    <Descriptions title="Studio 课程记录表" size={"small"} column={4} bordered>
      <Descriptions.Item label="课程名称" span={4}>
        <Input />
      </Descriptions.Item>
      <Descriptions.Item label="上课日期">
        <DatePicker style={fullWidth} bordered={false}/>
      </Descriptions.Item>
      <Descriptions.Item label="Check In">
        <TimePicker style={fullWidth} format={'HH:mm'} bordered={false}/>
      </Descriptions.Item>
      <Descriptions.Item label="Check Out">
        <TimePicker style={fullWidth} format={'HH:mm'} bordered={false}/>
      </Descriptions.Item>
      <Descriptions.Item label="确认课时数">
        <InputNumber />
      </Descriptions.Item>
      <Descriptions.Item label="课程内容" span={4}>
        <TextArea rows={20} />
      </Descriptions.Item>
      <Descriptions.Item label="学生签字" span={4}>
        <Select
          mode="multiple"
          allowClear
          style={fullWidth}
          placeholder="选择学生"
          options={students}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Descriptions.Item>
      <Descriptions.Item label="导师签字" span={4}>
        <Select
          showSearch
          placeholder="选择导师"
          optionFilterProp="children"
          options={teachers}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
        />
      </Descriptions.Item>
    </Descriptions>
    <br/>
    <GenerateDoc />
  </div>
);
export default App;
