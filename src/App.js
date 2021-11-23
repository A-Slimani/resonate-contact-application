import React, { useState, useEffect } from 'react';
import { Layout, Table, Dropdown, Space } from 'antd';
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

  const NestedTable = () => {
    const expandedRowRender = () => {
      // the secondary columns such as address and Company information
      const columns = [
        { title: 'Street', dataIndex: 'address.street', key: 'address.street' },
        { title: 'Suite', dataIndex: 'address.suite', key: 'address.suite' },
        { title: 'City', dataIndex: 'address.city', key: 'address.city' },
        { title: 'Zipcode', dataIndex: 'address.zipcode', key: 'address.zipcode' },
      ];
    };

    // the main columns for the contact
    const columns = [
      {
        key: 'id',
        title: 'Id',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        key: 'username',
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        sorter: (a, b) => a.website.localeCompare(b.website),
      },
    ];

    // const onChange = (pagination, filters, sorter, extra) => {
    //   console.log('params', pagination, filters, sorter, extra);
    // };

    return (
      <Table
        columns={columns}
        dataSource={users}
        expandable={{ expandedRowRender }}
        size="small"
      />
    );
  };
  return (
    <>
      <Layout>
        <Header>
          <h1>Contacts</h1>
        </Header>
        <Content style={{ padding: '30px 50px' }}>
          <NestedTable />
        </Content>
      </Layout>
    </>
  );
}

export default App;
