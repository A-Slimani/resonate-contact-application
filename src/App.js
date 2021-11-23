import React, { useState, useEffect } from 'react';
import { Layout, Table, Card } from 'antd';
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
    const expandedRowRender = index => {
      // the secondary information: address, company

      // tab list for the user
      const tabList = [
        {
          key: 'Address',
          tab: 'Address',
        },
        {
          key: 'Company',
          tab: 'Company',
        },
      ];

      // the Address content of the user
      const contentList = {
        Address: (
          <>
            <p>
              <b>Street</b> : {index.address.street}
            </p>
            <p>
              <b>Suite</b> : {index.address.suite}
            </p>
            <p>
              <b>City</b> : {index.address.city}
            </p>
            <p>
              <b>Zipcode</b> : {index.address.zipcode}
            </p>
          </>
        ),
        Company: (
          <>
            <p>
              <b>Name</b> : {index.company.name}
            </p>
            <p>
              <b>Catchphrase</b> : {index.company.catchPhrase}
            </p>
            <p>
              <b>Business Service</b> : {index.company.bs}
            </p>
          </>
        ),
      };

      // sets the tab choice clicked by the user
      const TabsCard = () => {
        const [activeTabKey, setActiveTabKey] = useState('Address');

        const onTabChange = key => {
          setActiveTabKey(key);
        };

        return (
          <>
            <Card
              tabList={tabList}
              activeTabKey={activeTabKey}
              bordered={false}
              onTabChange={key => {
                onTabChange(key);
              }}>
              {contentList[activeTabKey]}
            </Card>
          </>
        );
      };

      return <TabsCard />;
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
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        key: 'username',
        title: 'Username',
        dataIndex: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username),
      },
      {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        key: 'phone',
        title: 'Phone',
        dataIndex: 'phone',
      },
      {
        key: 'website',
        title: 'Website',
        dataIndex: 'website',
        sorter: (a, b) => a.website.localeCompare(b.website),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        expandable={{ expandedRowRender }}
        pagination={false}
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
