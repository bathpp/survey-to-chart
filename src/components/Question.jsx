import React from 'react';
import BtnGroup from './BtnGroup'

const qstyle = { display: 'flex', justifyContent: 'space-between' };
const Question = (props) => {
  return (
    <div style={qstyle}>
      {props.questionDesc}
      <BtnGroup />
    </div>
  )
};

export default Question;