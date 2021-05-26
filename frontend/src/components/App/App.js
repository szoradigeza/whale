import { connect } from 'react-redux';
import Routes from '../../routes';
import windowSize from 'react-window-size';
import React, { Suspense } from 'react';

import { Aux } from '../_Aux';
import Navigation from '../Navigation';
import NavBar from '../NavBar';

import { authService } from '../../services/auth.service';

import { userDataConstants, navigationConstants } from '../../redux/constants';
import { userDataActions } from '../../redux/actions/userData.actions';
import { ToastContainer } from 'react-toastify';
/* style */
import '../../assets/scss/style.scss';
import '../../assets/fonts/feather/icon-font.css';
import { Spinner } from 'react-bootstrap';

class App extends React.Component {
   constructor(props) {
      super();
   }

   fullScreenExitHandler = () => {
      if (
         !document.fullscreenElement &&
         !document.webkitIsFullScreen &&
         !document.mozFullScreen &&
         !document.msFullscreenElement
      ) {
         this.props.onFullScreenExit();
      }
   };

   componentWillMount() {
      if (
         this.props.windowWidth > 992 &&
         this.props.windowWidth <= 1024 &&
         this.props.layout !== 'horizontal'
      ) {
         this.props.onComponentWillMount();
      }
   }

   mobileOutClickHandler() {
      if (this.props.windowWidth < 992 && this.props.collapseMenu) {
         this.props.onComponentWillMount();
      }
   }

   render() {
      const isLoggedIn = authService.isLoggedIn();
      const userData = this.props.userData;
      document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
      document.addEventListener(
         'webkitfullscreenchange',
         this.fullScreenExitHandler
      );
      document.addEventListener(
         'mozfullscreenchange',
         this.fullScreenExitHandler
      );
      document.addEventListener(
         'MSFullscreenChange',
         this.fullScreenExitHandler
      );

      let appContent;
      if (isLoggedIn) {
         if (userData) {
            appContent = (
               <React.Fragment>
                  <Navigation />
                  <NavBar />
                  <ToastContainer />
                  <div
                     className="pcoded-main-container"
                     onClick={() => this.mobileOutClickHandler}
                  >
                     <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                           <div className="pcoded-inner-content">
                              <div className="main-body">
                                 <div className="page-wrapper">
                                    <Suspense
                                       fallback={<h1>Loading profile...</h1>}
                                    >
                                       <Routes />
                                    </Suspense>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </React.Fragment>
            );
         } else {
            appContent = (
               <React.Fragment>
                  <Navigation />
                  <Spinner />
               </React.Fragment>
            );
         }
      } else {
         appContent = (
            <React.Fragment>
               <div className="pcoded-wrapper">
                  <div className="pcoded-content">
                     <div className="pcoded-inner-content">
                        <div className="main-body">
                           <div className="page-wrapper">
                              <Suspense fallback={<h1>Loading profile...</h1>}>
                                 <Routes />
                              </Suspense>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </React.Fragment>
         );
      }

      return <Aux>{appContent}</Aux>;
   }
}

const mapStateToProps = (state) => {
   const { alert } = state;
   console.log(state);
   return {
      defaultPath: state.navigation.defaultPath,
      isFullScreen: state.navigation.isFullScreen,
      collapseMenu: state.navigation.collapseMenu,
      configBlock: state.navigation.configBlock,
      layout: state.navigation.layout,
      userData: state.userData,
      alert,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onComponentWillMount: () =>
         dispatch({ type: navigationConstants.COLLAPSE_MENU }),
      initUserData: () => dispatch(userDataConstants.initApp()),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(windowSize(App));
