import React from 'react'
import { Form, Row, Col, Input } from 'antd'

class UserForm extends React.Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return <Form className="ant-advanced-search-form" onSubmit={undefined}>
      <Row gutter={24}>
        <Col span={12} key={'name'} >
          <Form.Item label={'Name'}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Input name!',
                },
              ],
            })(<Input placeholder="Test Guy" />)}
          </Form.Item>
        </Col>
        <Col span={12} key={'phone'} >
          <Form.Item label={'Phone'}>
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'Input phone!',
                },
              ],
            })(<Input placeholder="123-000-4567" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12} key={'businessname'} >
          <Form.Item label={'Business Name'}>
            {getFieldDecorator('businessname', {
              rules: [
                {
                  required: true,
                  message: 'Input businessname!',
                },
              ],
            })(<Input placeholder="Cool Company" />)}
          </Form.Item>
        </Col>
        <Col span={12} key={'email'} >
          <Form.Item label={'Email'}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Input email!',
                },
              ],
            })(<Input placeholder="testguy@coolcompany.com" />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  }

}

export default Form.create({})(UserForm);