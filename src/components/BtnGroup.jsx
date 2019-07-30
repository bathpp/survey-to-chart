import React from 'react';
import { Radio } from 'antd';

export default function BtnGroup({ onChange }) {
  return (
    <Radio.Group buttonStyle="solid" onChange={onChange}>
      <Radio.Button value="1">Yes</Radio.Button>
      <Radio.Button value="2">Maybe</Radio.Button>
      <Radio.Button value="0">No</Radio.Button>
    </Radio.Group>
  );
}
