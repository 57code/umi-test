import { Layout, Menu } from "antd";
import styles from "./index.css";
import Link from "umi/link";

const { Header, Footer, Content } = Layout;

export default function(props) {
  if (
    props.location.pathname === "/login"
  ) {
    return <>{props.children}</>;
  }

  const selectedKeys = [props.location.pathname];

  return (
    <Layout>
      {/* 页头 */}
      <Header className={styles.header}>
        {/* 新增内容 */}
        <img
          className={styles.logo}
          src="https://img.kaikeba.com/logo-new.png"
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px", float: "left" }}
        >
          <Menu.Item key="/goods">
            <Link to="/goods">商品</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {/* 内容 */}
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      {/* 页脚 */}
      <Footer className={styles.footer}>开课吧</Footer>
    </Layout>
  );
}
