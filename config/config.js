export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    { path: "/login", component: "./login" },
    {
      path: "/",
      component: "../layouts",
      routes: [
        // 移动之前路由配置到这里
        { path: "/", component: "./index" },
        { path: "/goods", component: "./goods/index" },
        {
          path: "/about",
          component: "./about",
          Routes: ["./routes/PrivateRoute.js"]
        },
        {
          path: "/users",
          component: "./users/_layout",
          routes: [
            { path: "/users/", component: "./users/index" },
            { path: "/users/:id", component: "./users/$id" }
          ]
        },
        {
          component: "./404"
        }
      ]
    }
  ]
};
