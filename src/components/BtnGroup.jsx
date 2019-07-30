import React from 'react';
import { Radio } from 'antd';

export default function BtnGroup() {
  return (
    <Radio.Group buttonStyle="solid">
      <Radio.Button value="1">Yes</Radio.Button>
      <Radio.Button value="2">Maybe</Radio.Button>
      <Radio.Button value="0">No</Radio.Button>
    </Radio.Group>
  )
}