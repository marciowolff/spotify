import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={() => <div>1</div>} />
        <Route path="/items" render={() => <div>2</div>} />
        <Route path="*" component={() => <div>Pagina nao encontrada</div>} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Routes;
