import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default,
    "redirect": "/goods"
  },
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/about",
        "exact": true,
        "component": require('../about.js').default,
        "title": "用户中心",
        "Routes": [require('../../routes/PrivateRoute.js').default]
      },
      {
        "path": "/detail",
        "exact": true,
        "component": require('../detail.js').default
      },
      {
        "path": "/goods",
        "exact": true,
        "component": require('../goods.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/users",
        "exact": false,
        "component": require('../users/_layout.js').default,
        "routes": [
          {
            "path": "/users",
            "exact": true,
            "component": require('../users/index.js').default
          },
          {
            "path": "/users/:id",
            "exact": true,
            "component": require('../users/$id.js').default
          },
          {
            "component": () => React.createElement(require('C:/Users/yt037/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
          }
        ]
      },
      {
        "component": () => React.createElement(require('C:/Users/yt037/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/yt037/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
