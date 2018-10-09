import * as React from 'react';
import { Route, Switch } from 'react-router'
import {LoginContainer} from '../Components/Login';
import ExampleContainer from '../Containers/Example/index';
import Header from '../Containers/header';
import Home from '../Containers/home';
import ProtectedRoute from "./protectedRoute";


const routes = (
  <div>
    <Header/>
    <Switch>
      <ProtectedRoute exact={true} path="/" component={Home} />
      <Route exact={true} path="/login" component={LoginContainer} />
      <Route exact={true} path="/Example" component={ExampleContainer} />
    </Switch>
  </div>
)

export default routes;

