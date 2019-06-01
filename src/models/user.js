import axios from "axios";
import router from "umi/router";

const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
  token: "",
  role: "",
  username: "",
  balance: 0
};

function login(payload) {
  return axios.post("/api/login", payload).then(({ data }) => {
    console.log(data);
    return {
      code: data.code,
      userinfo: data.data
    };
  });
}

export default {
  namespace: "user",
  state: userinfo,
  effects: {
    *login({ payload }, { call, put }) {
      try {
        const { userinfo } = yield call(login, payload);

        // 登录成功
        localStorage.setItem("userinfo", JSON.stringify(userinfo));
        yield put({ type: "init", payload: userinfo });
        // 重定向
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
  reducers: {
    init(state, action) {
      return action.payload;
    }
  }
};
