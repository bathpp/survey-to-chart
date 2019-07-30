import React from 'react';
import { Card, Divider, Button, message, Modal, Descriptions } from 'antd';
import UserInfoForm from './UserInfoForm';
import QuestionList from './QuestionList';
import BarChart from './BarChart';

const warning = msg => {
  message.warning(msg, 1);
};

function SubmitButton(allResult, onClick) {
  return (
    <Button
      block
      type="primary"
      size="large"
      onClick={() => onClick(allResult)}
    >
      Submit Survey
    </Button>
  );
}

export default class MainForm extends React.Component {
  state = { visible: false, allResult: null, userInfo: {} };

  showModal = (allResult, userInfo) => {
    this.setState({
      visible: true,
      allResult,
      userInfo
    });
  };

  handleOk = e => {
    e.stopPropagation();
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    e.stopPropagation();
    this.setState({
      visible: false
    });
  };

  handleSubmit = allResult => {
    const { form } = this.formRef.props;

    // if (allResult.size !== QUESTION_DATA.length) {
    //   warning('Please answer all question.');
    //   return;
    // }

    form.validateFields((err, values) => {
      if (err) {
        warning('Please fill all User Info.');
      } else {
        this.showModal(allResult, values);
      }
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const {
      allResult,
      userInfo: { name, phone, email, businessname }
    } = this.state;
    return (
      //  background: '#fafafa'
      <>
        <Card style={{ width: '50%', minWidth: '800px', margin: 'auto' }}>
          <UserInfoForm wrappedComponentRef={this.saveFormRef} />
          <Divider style={{ height: 2, marginTop: 0 }} />
          <QuestionList
            footer={result => SubmitButton(result, this.handleSubmit)}
          />
        </Card>
        <Modal
          title="A Business assessment has just been completed, details below"
          width={800}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
        >
          <Descriptions title="User Info" column={2} bordered>
            <Descriptions.Item label="UserName">{name}</Descriptions.Item>
            <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
            <Descriptions.Item label="Email">{email}</Descriptions.Item>
            <Descriptions.Item label="Business Name">
              {businessname}
            </Descriptions.Item>
          </Descriptions>

          {allResult && allResult.size > 0 && (
            <BarChart data={this.state.allResult} />
          )}
        </Modal>
      </>
    );
  }
}
