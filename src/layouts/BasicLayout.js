import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import SiderMenu from '@/components/SiderMenu';
import styles from './BasicLayout.less';


// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    const {
      dispatch,
      route: { routes, authority },
    } = this.props;
    dispatch({
      type: 'menu/getMenuData',
      payload: { routes, authority },
    });
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { navTheme, menuData } = this.props;
    return (
      <Layout>
        <SiderMenu
          onCollapse={this.toggle}
          collapsed={collapsed}
          menuData={menuData}
          theme={navTheme}
          {...this.props}
        />
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

const BasicLayoutWarp = connect(({ menu, setting }) => ({
  menuData: menu.menuData,
  breadcrumbNameMap: menu.breadcrumbNameMap,
  ...setting,
}))(props => (
  <BasicLayout {...props} />
));

export default BasicLayoutWarp;
