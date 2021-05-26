import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import { authService, userService, ApiService } from '../../services';

import * as actions from '../../redux/actions';
import { Can } from '../../components/Can/can';

class ProfilePage extends React.Component {
   apiService = ApiService.getInstance();
   constructor(props) {
      super();
   }

   componentDidMount() {
      console.log('[componentDidMount] Home');
   }

   render() {
      return (
         <div>
            <h1>Profile page</h1>
         </div>
      );
   }
}

export default connect(ProfilePage);
