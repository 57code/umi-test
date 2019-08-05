import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods')
}

export default {
    namespace: 'goods',
    state: [],
    effects: {// 副作用
        *getList(action, {call, put}) {
            const res = yield call(getGoods)
            yield put({type:'init', payload:res.data.result})
        }
    }, 
    reducers: {
        init(state, action) {
            return action.payload;
        },
        addGood(state, action) {
            return [...state, {title: action.payload}]
        }
    }
}