import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import styles from './BasicLayout.less';


// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Layout>
        <Sider
          width={256}
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          trigger={null}
          className={styles.sider}
        >
          <div className={styles.logo}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/editor">
                <Icon type="pie-chart" />
                <span>editor</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2">分析页</Menu.Item>
               <Menu.Item key="3">监控页</Menu.Item>
               <Menu.Item key="4">工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', padding: 0 }}
          >
            <div className={styles.header}>
              <span className={styles.trigger} onClick={this.toggle}>
                <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
              </span>
            </div>
          </Header>
          <Content
            className={styles.content}
          >
            {this.props.children}
          </Content>
          <Footer
            style={{ textAlign: 'center' }}
          >
            cici
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
