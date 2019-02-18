import React, { Component } from "react";
import { Card, Row, Col, Icon } from "antd";
import { TagSelect } from "ant-design-pro";
import { connect } from "dva";

@connect(
  state => ({
    courses: state.goods.courses,
    tags: state.goods.tags,
    loading: state.loading
  }),
  {
    addGood: title => ({
      type: "goods/addGood",
      payload: { title }
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)
class Goods extends Component {
  componentDidMount() {
    this.props.getList();
  }
  tagSelectChange = (tags, courses = this.props.courses) => {
    console.log(tags);

    // let displayCourses = []
    // tags.forEach(tag=>{
    //   displayCourses = [...displayCourses,...courses[tag]]
    // })
    // this.setState({
    //   displayCourses
    // })
  };
  render() {
    if (this.props.loading.models.goods) {
      return <div>加载中...</div>;
    }
    return (
      <div>
        {/* 分类标签 */}
        <TagSelect onChange={this.tagSelectChange}>
          {this.props.tags.map(tag => {
            return (
              <TagSelect.Option key={tag} value={tag}>
                {tag}
              </TagSelect.Option>
            );
          })}
        </TagSelect>
        {/* 商品列表 */}
        {/* <Row type="flex" justify="start">
          {this.state.displayCourses.map((item, index) => {
            return (
              <Col key={index} style={{ padding: 10 }} span={6}>
                {item.name ? (
                  <Card
                    extra={
                      <Icon
                        onClick={e => this.addCart(e, item)}
                        type="shopping-cart"
                      />
                    }
                    onClick={() => this.toDetail(item)}
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
                    <div />
                  </Card>
                ) : (
                  <Skeleton active={true} />
                )}
              </Col>
            );
          })}
        </Row> */}
      </div>
    );
  }
}
export default Goods;
