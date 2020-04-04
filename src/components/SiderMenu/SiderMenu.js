import React, { PureComponent, Suspense } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import PageLoading from '../PageLoading';
import styles from './index.less';

const BaseMenu = React.lazy(() => import('./BaseMenu'));
const { Sider } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class SiderMenu extends PureComponent {

  render() {
    const { collapsed, onCollapse, menuData } = this.props;

    return (
      <Sider
        width={256}
        collapsible
        trigger={null}
        className={styles.sider}
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
      >
        <div className={styles.logo} id="logo">
          <Link to="/">
            <h1>内容管理系统后台</h1>
          </Link>
        </div>
        <Suspense fallback={<PageLoading />}>
          <BaseMenu
            {...this.props}
            mode="inline"
            style={{ padding: '16px 0', width: '100%' }}
          />
        </Suspense>
      </Sider>
    );
  }
}

export default SiderMenu
