import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ProductStore from '../pages/ProductStore';
import PageNotFound from '../pages/PageNotFound';
import Cart from "../pages/cart";
import Register from "../pages/register/Register";
import Login from "../pages/Login/Login";

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ProductStore}/>
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={PageNotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;
