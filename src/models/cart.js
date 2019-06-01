export default {
  namespace: "cart", // 可省略
  state: JSON.parse(localStorage.getItem("cart")) || [], // 初始状态：缓存或空数组
  effects: {
    *addCart({ payload }, { put, select }) {
      // 1.派发动作
      yield put({ type: "add", payload });

      // 2.缓存
      const cart = yield select(state => state.cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },
  reducers: {
    add(cart, action) {
      const good = action.payload;
      const idx = cart.findIndex(v => v.id == good.id);
      if (idx > -1) {
        // 更新数量
        const cartCopy = [...cart];
        const itemCopy = { ...cartCopy[idx] };
        itemCopy.count += 1;
        cartCopy.splice(idx, 1, itemCopy);
        return cartCopy;
      } else {
        // 新增
        return [...cart, { ...good, count: 1 }];
      }
    }
  }
};
