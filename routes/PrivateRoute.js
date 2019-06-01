import Redirect from "umi/redirect";
import { connect } from "dva";

export default connect(state => ({ isLogin: !!state.user.token }))(props => {
  console.log(props.isLogin);
  
  if (!props.isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location.pathname } // 传递重定向地址
        }}
      />
    );
  }
  return (
    <div>
      {props.children}
    </div>
  );
});
