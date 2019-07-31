import React from 'react';
import {
  Card,
  Divider,
  Button,
  message,
  Modal,
  Descriptions,
  Table
} from 'antd';
import UserInfoForm from './UserInfoForm';
import QuestionList from './QuestionList';
import BarChart from './BarChart';
import {
  buildResultTableData,
  chartTableCols,
  buildResultChartData
} from './utils';

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
    // chart data need to be calulate first, table data is built based on chartData

    const chartData =
      allResult && allResult.size > 0 ? buildResultChartData(allResult) : [];
    const tableData =
      allResult && allResult.size > 0 ? buildResultTableData() : [];

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
        {allResult && allResult.size > 0 && (
          <Modal
            title="A Business assessment has just been completed, details below"
            width={800}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            maskClosable={false}
          >
            <div className="modal-sub-title">User Info</div>
            <Descriptions column={2} bordered>
              <Descriptions.Item label="UserName">{name}</Descriptions.Item>
              <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
              <Descriptions.Item label="Email">{email}</Descriptions.Item>
              <Descriptions.Item label="Business Name">
                {businessname}
              </Descriptions.Item>
            </Descriptions>
            <Divider />
            <div className="modal-sub-title">Result Table</div>
            <Table
              columns={chartTableCols}
              dataSource={tableData}
              bordered
              size="small"
              pagination={false}
            />
            <Divider />
            <div className="modal-sub-title">Result Chart</div>
            <BarChart data={chartData} />
          </Modal>
        )}
      </>
    );
  }
}
