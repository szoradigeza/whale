import React from 'react';
import { Switch } from 'react-router-dom';
import { AdminPage } from '../pages/AdminPage/AdminPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import CalendarPage from '../pages/CalendarPage';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PageAccesses } from '../constants/pageAccesses';
import asyncComponent from '../helpers/asyncComponent';
import HomePage from '../pages/HomePage/HomePage';
import ProjectTimeRegPage from '../pages/PTR/ProjectTimeRegPage';
import DocumentPage from '../pages/DoucmentsPage';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={LoginPage} />
         <Route path="/login" component={LoginPage} />
         <Route path="/profile" component={ProfilePage} />
         <Route path="/settings" component={SettingsPage} />
         <PrivateRoute path="/home" pageAccess={'home'} component={HomePage} />
         <PrivateRoute
            path="/admin"
            pageAccess={'admin'}
            component={AdminPage}
         />
         <PrivateRoute
            path="/project-time-reg"
            pageAccess={'*'}
            component={ProjectTimeRegPage}
         />
         <PrivateRoute
            path="/calendar"
            pageAccess={PageAccesses.CALENDAR}
            component={CalendarPage}
         />
         <Route
            path="/documents/:documentsName"
            pageAccess={'*'}
            render={(props) => {
               return (
                  <DocumentPage
                     documentName={props.match.params.documentsName}
                  />
               );
            }}
         />
         {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      </Switch>
   );
}
