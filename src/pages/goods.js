import React, { Component } from "react";
import { Button, Card } from "antd";
import { connect } from "dva";

@connect(
  state => ({
    goodsList: state.goods // 获取指定命名空间的模型状态
  }),
  {
    addGood: title => ({
      type: "goods/addGood", // action的type需要以命名空间为前缀+reducer名称
      payload: { title }
    })
  }
)
class Goods extends Component {
  render() {
    return (
      <div>
        {/* 商品列表 */}
        <div>
          {this.props.goodsList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            );
          })}
          <div>
            <Button
              onClick={() =>
                this.props.addGood("商品" + new Date().getTime())
              }
            >
              添加商品
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Goods;