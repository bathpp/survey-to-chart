import React from 'react';
import { Form, Row, Col, Input } from 'antd';

class UserInfoForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Row gutter={24}>
          <Col span={12} key="name">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input name!'
                  }
                ]
              })(<Input placeholder="Test Guy" />)}
            </Form.Item>
          </Col>
          <Col span={12} key="phone">
            <Form.Item label="Phone">
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: 'Please input phone!'
                  }
                ]
              })(<Input placeholder="123-000-4567" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12} key="businessname">
            <Form.Item label="Business Name">
              {getFieldDecorator('businessname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input business name!'
                  }
                ]
              })(<Input placeholder="Cool Company" />)}
            </Form.Item>
          </Col>
          <Col span={12} key="email">
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Please input email!'
                  }
                ]
              })(<Input placeholder="testguy@coolcompany.com" />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create({ name: 'userInfoForm' })(UserInfoForm);
