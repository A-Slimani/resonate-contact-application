import React, { useState, useEffect } from 'react';
import { Layout, Table } from 'antd';
import userService from './services/User';
import './App.less';

const { Header, Footer, Content } = Layout;
const { Column } = Table;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(users => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      <Layout>
        <Header>
          <h1>Contacts</h1>
        </Header>
        <Content>
          <Table dataSource={users}>
            <Column title="address" dataIndex="address" key="address" />
            <Column title="name" dataIndex="name" key="name" />
            <Column title="username" dataIndex="username" key="username" />
            <Column title="email" dataIndex="email" key="email" />
            <Column title="address" dataIndex="address" key="address" />
            <Column title="phone" dataIndex="phone" key="phone" />
            <Column title="website" dataIndex="website" key="website" />
            <Column title="company" dataIndex="company" key="company" />
          </Table>
        </Content>
      </Layout>
    </>
  );
}

export default App;
