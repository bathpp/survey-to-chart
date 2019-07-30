import React from 'react';
import { List } from 'antd';
import Question from './Question';
import { questionData } from './utils';

const allResult = new Map();

function QuestionList({ footer }) {
  const onRadioChange = (e, item) => {
    e.stopPropagation();
    const answer = e.target.value;
    const { CATE, key } = item;
    allResult.set(key, { CATE, answer });
  };
  return (
    <List
      header={<h3>Questions</h3>}
      footer={footer(allResult)}
      bordered
      dataSource={questionData}
      renderItem={item => (
        <List.Item style={{ display: 'block' }}>
          <Question
            question={item}
            onRadioChange={e => onRadioChange(e, item)}
          />
        </List.Item>
      )}
    />
  );
}

export default QuestionList;
