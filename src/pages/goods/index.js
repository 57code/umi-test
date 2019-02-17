import React, { Component } from "react";
import { Button, Card, Row, Col, Icon } from "antd";
import { connect } from "dva";

@connect(
  state => ({
    courses: state.goods.courses,
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
  render() {
    // console.log(this.props.loading);
    if (this.props.loading.models.goods) {
      return <div>加载中...</div>;
    }
    return (
      <div>
        {/* 商品列表 */}
        <Row type="flex" justify="start">
          {/* {this.state.displayCourses.map((item, index) => { */}
          {this.props.courses.map((item, index) => {
            return (
              <Col key={index} style={{ padding: 10 }} span={6}>
                {/* {item.name ? ( */}
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
                {/* ) : (
                  <Skeleton active={true} />
                )} */}
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Goods;
