import Redirect from 'umi/redirect';

export default function PrivateRoute(props) {
  // 判断用户登录状态
  if (new Date().getDay() % 2 === 1) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { redirect: props.location.pathname }
        }}
      />
    );
  }
  return (
    <div>
      PrivateRoute
      {props.children}
    </div>
  );
}
