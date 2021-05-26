import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { store } from '../helpers';
import { Spinner } from 'react-bootstrap';

function PrivateRoute({ component: Component, pageAccess, ...rest }) {
   return (
      <Route
         {...rest}
         render={(props) => {
            const userData = store.getState().userData;
            console.log(userData);
            if (userData && userData.permissions) {
               const permissions = userData.permissions;
               if (
                  permissions.findIndex(
                     (permission) => permission.ability.pageName == pageAccess
                  ) !== -1 ||
                  pageAccess == '*'
               ) {
                  return <Component {...props} />;
               } else {
                  return <h1>No data</h1>;
               }
            } else {
               return <Spinner animation="border" />;
            }
         }}
      />
   );
}

export { PrivateRoute };
