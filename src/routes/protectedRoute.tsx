import * as React from 'react';
import { Route } from 'react-router'
import {
  Redirect
} from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    // tslint:disable-next-line:jsx-no-lambda
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);



export default ProtectedRoute;
