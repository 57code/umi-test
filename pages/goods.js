import styles from "./goods.css";
import { connect } from "dva";
import { useEffect, useState } from "react";
import { TagSelect } from "ant-design-pro";
import { Card, Row, Col, Skeleton, Icon } from "antd";

export default connect(
  state => ({
    courses: state.goods.courses, // 映射课程数据
    tags: state.goods.tags // 映射标签数据
    // loading: state.loading
  }), // 注意加上命名空间
  {
    addGood: title => ({
      type: "goods/addGood",
      payload: title
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)(function({ courses, tags, addGood, getList, loading }) {
  // 填充数组用于骨架屏展示
  const [displayCourses, setDisplayCourses] = useState(new Array(8).fill({}));

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    tagSelectChange(tags);
  }, [tags]);

  // console.log(loading);
  // if (loading.effects['goods/getList']) {
  //   return <div>加载中...</div>
  // }

  // 页签变更
  const tagSelectChange = (tags) => {
    // 过滤出要显示的数据
    const displayCourses = tags.flatMap(tag => courses[tag]);
    setDisplayCourses(displayCourses);
  };

  return (
    <div>
      {/* <h1>Page goods</h1>
      <ul>
        {goodsList.map(good => (
          <li key={good.title}>{good.title}</li>
        ))}
      </ul>
      <button onClick={() => addGood('商品'+new Date().getTime())}>新增</button> */}

      {/* 分类标签 */}
      <TagSelect onChange={tagSelectChange}>
        {tags.map(tag => {
          return (
            <TagSelect.Option key={tag} value={tag}>
              {tag}
            </TagSelect.Option>
          );
        })}
      </TagSelect>

      {/* 商品列表 */}
      <Row type="flex" justify="start">
        {displayCourses.map((item, index) => {
          return (
            <Col key={index} style={{ padding: 10 }} span={6}>
              {item.name ? (
                <Card
                  hoverable
                  title={item.name}
                  cover={<img src={"/course/" + item.img} />}
                >
                  <Card.Meta
                    description={
                      <div>
                        <span>￥{item.price}</span>
                        <span style={{ float: "right" }}>
                          <Icon type="user" /> {item.solded}
                        </span>
                      </div>
                    }
                  />
                </Card>
              ) : (
                <Skeleton active={true} />
              )}
            </Col>
          );
        })}
      </Row>
    </div>
  );
});
