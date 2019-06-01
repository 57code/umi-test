import { Layout, Menu } from "antd";
import styles from "./index.css";
import Link from "umi/link";

const { Header, Footer, Content } = Layout;

export default function(props) {
  const pathname = props.location.pathname;


  const menus = [
    { path: "/", name: "商品" },
    { path: "/users", name: "用户" },
    { path: "/about", name: "我的" }
  ];

  const selectedKeys = menus
    .filter(menu => {
      if (menu.path === "/") {
        return pathname === "/";
      }
      console.log(pathname);
      return pathname.indexOf(menu.path) !== -1;
    })
    .map(menu => menu.path);

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
          style={{ lineHeight: "64px", float: "left" }}
        >
          {menus.map(menu => (
            <Menu.Item key={menu.path}>
              <Link to={menu.path}>{menu.name}</Link>
            </Menu.Item>
          ))}
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
