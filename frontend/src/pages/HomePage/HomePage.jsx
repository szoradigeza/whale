import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { authService, userService, ApiService } from '../../services';
import * as actions from '../../redux/actions';
import { Can } from '../../components/Can/can';

class HomePage extends React.Component {
   apiService = ApiService.getInstance();
   constructor(props) {
      super();

      this.state = {
         name: '',
         phoneNumber: '',
         role: '',
      };
   }

   componentDidMount() {
      console.log('[componentDidMount] Home');
   }

   render() {
      const { name, phoneNumber, role } = this.state;
      let users = <Spinner />;
      if (!this.props.loading && this.props.users) {
         users = this.props.users.map((user, index) => (
            <div key={user.id}>
               <h3>{user.name}</h3>
               <p>{user.phoneNumber}</p>
               <p>{this.apiService.apiUrl}</p>
            </div>
         ));
      }

      return (
         <div>
            <h1>Home page</h1>
            <Can rqAbility="write">{users}</Can>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      loading: state.users.loading,
      error: state.users.error,
      users: state.users.users,
   };
};

export default connect(mapStateToProps)(HomePage);
