import React from 'react';
import BtnGroup from './BtnGroup';

const qstyle = {
  display: 'flex',
  justifyContent: 'space-between'
};

const Question = props => (
  <div style={qstyle}>
    {props.question.DESC}
    <BtnGroup onChange={props.onRadioChange} />
  </div>
);

export default Question;
