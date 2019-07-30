import React from 'react';
import { List, Button } from 'antd';
import Question from './Question';
import { CATEGORY, QUESTION, QUESTION_DATA } from '../asset/data';

const qsData = QUESTION_DATA.map(k => QUESTION[k]);

function SubmitButton() {
  return <Button block type="primary" size='large'>Submit Survey</Button>
}

function QuestionList() {
  return (
    <List
      header={<h2>Questions</h2>}
      footer={<SubmitButton />}
      bordered
      dataSource={qsData}
      renderItem={item => <List.Item style={{ display: 'block' }}><Question questionDesc={item.DESC} /></List.Item>}
    />
  );
}

export default QuestionList;
