import { Layout, Menu } from "antd";
import Link from "umi/link";
import styles from "./index.css";

const { Header, Footer, Content } = Layout;

export default function(props) {
  return (
    // 上中下布局
    <Layout>
      {/* 页头 */}
      <Header className={styles.header}>
        <img className={styles.logo} src="https://img.kaikeba.com/logo-new.png"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">商品</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="3">
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
