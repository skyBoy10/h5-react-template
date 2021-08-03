import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const routes = [
    {
        path: '/',
        name: 'index',
        component: dynamic({
          app,
          models: () => [ import('./models/example') ],
          component: () => import('./page/IndexPage.jsx'),
        }),
        isExact: true,
        isHasChild: false,
    },
    {
      path: '/report',
      name: 'report',
      component: dynamic({
        app,
        models: () => [],
        component: () => import('./page/psychologicalTest/Report'),
      }),
      isExact: true,
      isHasChild: false,
  },
  ];

  /** 
   * 渲染路由
  */
  const renderRoutes = routes => {
    let result = null;

    if(routes && routes.length > 0) {
      result = routes.map(route => {
        if(route.isHasChild) {
          return (
          <Route key={route.path} path={route.path} exact={route.isExact} render={({ location }) => <route.component location={location} />} />
          );
        } 
        else {
          return (
            <Route key={route.path} path={route.path} exact={route.isExact} component={route.component} />
          );
        }
      });
    }
    
    return result;
  };

  return (
    <Router history={history}>
      <Switch>{renderRoutes(routes)}</Switch>
    </Router>
  );
}

export default RouterConfig;