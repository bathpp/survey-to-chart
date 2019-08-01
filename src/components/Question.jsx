import React from 'react';
import BtnGroup from './BtnGroup';

const qstyle = {
  display: 'flex',
  justifyContent: 'space-between'
};

const Question = ({ question: { key, DESC }, onRadioChange }) => (
  <div style={qstyle}>
    {`${key - 1}. ${DESC}`}
    <BtnGroup onChange={onRadioChange} />
  </div>
);

export default Question;
