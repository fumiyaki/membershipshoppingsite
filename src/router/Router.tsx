import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routePaths from './routePaths';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routePaths.map((config, i) => (
          <Route key={i} {...config} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
