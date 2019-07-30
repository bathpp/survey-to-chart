import React from 'react';
import { Layout } from 'antd';

import MainForm from './components/MainForm';

const contentStyle = { padding: 24, minHeight: 'calc(100vh - 64px)' };

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Survey-To-Chart</h1>
      </Header>
      <Content style={contentStyle}>
        <MainForm />
      </Content>
    </Layout>
  );
}

export default App;
