import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Login, Home, Album } from './';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route extact path="/album/:id" component={Album} />
        <Redirect from="*" exact to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
