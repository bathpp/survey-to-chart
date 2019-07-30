import React from 'react';
import { Layout, Divider, Card } from 'antd';

import UserInfor from './components/UserInfo';
import QuestionList from './components/QuestionList';


const contentStyle = { padding: 24, minHeight: 'calc(100vh - 64px)' };


const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Survey-To-Chart</Header>
      <Content style={contentStyle}>
        {/* background: '#fafafa'  */}
        <Card style={{ width: '50%', margin: 'auto' }}>
          <UserInfor />
          <Divider style={{ height: 2, marginTop: 0 }} />
          <QuestionList />
        </Card>

      </Content>
    </Layout>
  );
}

export default App;
