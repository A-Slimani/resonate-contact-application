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

  function NestedTable(){
    const expandedRowRender = () => {
      const columns = [
      ]
    }
  }

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'username',
      dataIndex: 'username',
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: 'email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'website',
      dataIndex: 'website',
      sorter: (a, b) => a.website.localeCompare(b.website),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <>
      <Layout>
        <Header>
          <h1>Contacts</h1>
        </Header>
        <Content style={{ padding: '30px 50px' }}>
          <Table columns={columns} dataSource={users} onChange={onChange} size="small" />
        </Content>
      </Layout>
    </>
  );
}

export default App;
