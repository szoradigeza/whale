import React from 'react';
import { alertActions } from '../../redux/actions/alert.actions';
import { connect } from 'react-redux';
import { history, store } from '../../helpers';

class Can extends React.Component {
   constructor(props) {
      super();
   }
   render() {
      const props = this.props;
      console.log(this.props);
      const permissions = store.getState().userData.permissions;
      if (permissions) {
         const currentUrl = window.location.href;
         /* get last part of URL */
         const lastPartUrl = currentUrl.substring(
            currentUrl.lastIndexOf('/') + 1
         );
         /* check last part of url eq with pageName &
            permissions table include the defined ability
         */
         const isEnabled = permissions.findIndex((permission) => {
            return (
               permission.pageName === lastPartUrl &&
               permission.ability.includes(props.rqAbility)
            );
         });
         if (isEnabled !== -1) {
            return <div>{props.children}</div>;
         }
      }
      return <span />;
   }
}
function mapState(state) {
   return state;
}

const connectedApp = connect(mapState)(Can);
export { connectedApp as Can };
