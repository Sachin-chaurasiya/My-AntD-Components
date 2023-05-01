import { Divider, Layout, Menu, Typography } from 'antd';
import React from 'react';
import AppLayoutStyle from './AppLayout.module.css';
import { COMPONENT_ITEMS } from '../constants';
import AppRouter from '../AppRouter';
import { useLocation, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout className={AppLayoutStyle.AppLayoutContainer}>
      <Layout.Sider
        className={AppLayoutStyle.AppSidebar}
        theme="light"
        width={264}
      >
        <Typography.Text className={AppLayoutStyle.AppBrand}>
          My AntD Components
        </Typography.Text>
        <Divider />
        <Menu
          onSelect={(info) => navigate(info.key)}
          defaultSelectedKeys={[location.pathname.slice(1)]}
          className={AppLayoutStyle.AppMenu}
          items={COMPONENT_ITEMS}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content className={AppLayoutStyle.AppContent}>
          <AppRouter />
        </Layout.Content>
        <Layout.Footer className={AppLayoutStyle.AppFooter}>
          Made with ❤️ by Sachin Chaurasiya ©{new Date().getFullYear()}
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
