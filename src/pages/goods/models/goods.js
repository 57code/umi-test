import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods')
}

export default {
  namespace: "goods",
  state: {
    courses: {}
  },
  effects: {
    *getList(action, {call, put}){           
      const res = yield call(getGoods)
      yield put({ type: 'initGoods', payload: res.data.data })
    }
  },
  reducers: {
    initGoods(state,{payload}){
      return {
        courses: payload
      }
    },
    addGood(state, action) {
      console.log(action);
      return [...state, { title: action.payload.title }];
    }
  }
};
