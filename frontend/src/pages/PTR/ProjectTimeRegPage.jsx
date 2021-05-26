import React from 'react';
import { connect } from 'react-redux';
import { ApiService } from '../../services';
import * as actions from '../../redux/actions';
import { Can } from '../../components/Can/can';
import ProjectTimeRegForHR from './component/PTRForHR';
import ProjectTimeRegForGL from './component/PTRForGL';
import ProjectTimeRegForUser from './component/PTRForUser';

class ProjectTimeRegPage extends React.Component {
   apiService = ApiService.getInstance();
   constructor() {
      super();
   }

   componentDidMount() {
      console.log('[componentDidMount] Home');
   }

   getPtrByRole(role) {
      console.log(role);
      switch (role.name) {
         case 'admin':
            return <ProjectTimeRegForHR />;
         case 'user':
            return <ProjectTimeRegForUser />;
         case 'HR':
            return <ProjectTimeRegForHR />;
         default:
            return null;
      }
   }

   render() {
      const { user } = this.props;
      const view = user.role ? this.getPtrByRole(user.role) : null;
      console.log(user.role);
      return <div>{view}</div>;
   }
}

const mapStateToProps = (state) => {
   console.log(state.userData.user.role);
   return {
      user: state.userData.user,
   };
};
export default connect(mapStateToProps)(ProjectTimeRegPage);
