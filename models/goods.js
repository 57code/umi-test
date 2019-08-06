import axios from "axios";

// api
function getGoods() {
  return axios.get("/api/goods");
}

export default {
  namespace: "goods",
  state: {
    // 初始状态包括课程和分类
    courses: {}, // 课程
    tags: [] // 分类
  },
  effects: {
    // 副作用
    *getList(action, { call, put }) {
      // 解构出courseData并初始化状态
      const {
        data: { data: courseData }
      } = yield call(getGoods);
      yield put({ type: "init", payload: courseData });
    }
  },
  reducers: {
    init(state, { payload }) {
      // 解构出tags和courses并返回
      const { tags, data: courses } = payload;
      return { ...state, tags, courses };
    },
    addGood(state, action) {
      return [...state, { title: action.payload }];
    }
  }
};
