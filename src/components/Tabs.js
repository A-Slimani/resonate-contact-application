import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const InfoTabs = ({ addressInfo, companyInfo }) => {
  return (
    <>
      <Tabs tabPosition={'left'}>
        <TabPane tab="Address" key="1">
          {addressInfo}
        </TabPane>
        <TabPane tab="Company" key="2">
          {companyInfo}
        </TabPane>
      </Tabs>
    </>
  );
};

export default InfoTabs;
