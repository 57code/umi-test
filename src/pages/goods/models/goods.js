import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods').then(({data}) => {
    const courseData = data.data;
    return {
      courses: courseData.data,
      tags: courseData.tags
    }
  })
}

export default {
  namespace: "goods",
  state: { // 初始状态包括课程和分类
    courses: {}, // 课程
    tags: [] // 分类
  },
  effects: {
    *getList(action, {call, put}){           
      const payload = yield call(getGoods)
      yield put({ type: 'initGoods', payload })
    }
  },
  reducers: {
    initGoods(state,{payload}){
      return payload
    }
  }
};
