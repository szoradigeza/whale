import React, { Component } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import { DEMO } from '../../../redux/constants';
import { authService } from '../../../services';

class NavRight extends Component {
   state = {
      listOpen: false,
   };

   render() {
      return (
         <React.Fragment>
            <ul className="navbar-nav ml-auto">
               {/* <li>
                       <Dropdown alignRight={!this.props.rtlLayout}>
                           <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                               <i className="icon feather icon-bell"/>
                           </Dropdown.Toggle>
                           <Dropdown.Menu alignRight className="notification">
                               <div className="noti-head">
                                   <h6 className="d-inline-block m-b-0">Notifications</h6>
                                   <div className="float-right">
                                       <a href={DEMO.BLANK_LINK} className="m-r-10">mark as read</a>
                                       <a href={DEMO.BLANK_LINK}>clear all</a>
                                   </div>
                               </div>
                               <ul className="noti-body">
                                   <li className="n-title">
                                       <p className="m-b-0">NEW</p>
                                   </li>
                                   <li className="notification">
                                       <div className="media">
                                           <img className="img-radius" src="" alt="Generic placeholder"/>
                                           <div className="media-body">
                                               <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                   className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                               <p>New ticket Added</p>
                                           </div>
                                       </div>
                                   </li>
                                   <li className="n-title">
                                       <p className="m-b-0">EARLIER</p>
                                   </li>
                                   <li className="notification">
                                       <div className="media">
                                           <img className="img-radius" src="" alt="Generic placeholder"/>
                                           <div className="media-body">
                                               <p><strong>Joseph William</strong><span className="n-time text-muted"><i
                                                   className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                               <p>Prchace New Theme and make payment</p>
                                           </div>
                                       </div>
                                   </li>
                                   <li className="notification">
                                       <div className="media">
                                           <img className="img-radius" src="" alt="Generic placeholder"/>
                                           <div className="media-body">
                                               <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i
                                                   className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                               <p>currently login</p>
                                           </div>
                                       </div>
                                   </li>
                               </ul>
                               <div className="noti-footer">
                                   <a href={DEMO.BLANK_LINK}>show all</a>
                               </div>
                           </Dropdown.Menu>
                       </Dropdown>
                   </li> */}
               <li>
                  <Dropdown
                     alignRight={!this.props.rtlLayout}
                     className="drp-user"
                  >
                     <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                        <i className="icon feather icon-settings" />
                     </Dropdown.Toggle>
                     <Dropdown.Menu alignRight className="profile-notification">
                        <div className="pro-head">
                           {/*<img src="" className="img-radius" alt="img"/>*/}
                           <span>{this.props.name}</span>
                           <Button
                              className="dud-logout"
                              title="Logout"
                              onClick={() => authService.logout()}
                           >
                              <i className="feather icon-log-out" />
                           </Button>
                        </div>
                        <ul className="pro-body">
                           <li>
                              <a href={'1'} className="dropdown-item">
                                 <i className="feather icon-settings" />{' '}
                                 Settings
                              </a>
                           </li>
                           <li>
                              <a href={'profile'} className="dropdown-item">
                                 <i className="feather icon-user" /> Profile
                              </a>
                           </li>
                           {/*<li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li>
                                   <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</a></li> */}
                        </ul>
                     </Dropdown.Menu>
                  </Dropdown>
               </li>
            </ul>
         </React.Fragment>
      );
   }
}

const mapStateToProps = (state) => {
   state = state.userData;
   return {
      name: state.user.name,
   };
};

export default connect(mapStateToProps)(NavRight);
