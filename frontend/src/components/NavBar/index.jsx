import React, { Component } from "react";
import { connect } from "react-redux";

import { DEMO } from "../../redux/constants";
import { navigationConstants } from "../../redux/constants";
import NavRight from "./NavRight";

import { authService } from "../../services/auth.service";

class NavBar extends Component {
  render() {
    const isLoggedIn = authService.isLoggedIn();
    let headerClass = [
      "navbar",
      "pcoded-header",
      "navbar-expand-lg",
      this.props.headerBackColor,
    ];
    if (this.props.headerFixedLayout) {
      headerClass = [...headerClass, "headerpos-fixed"];
    }

    let toggleClass = ["mobile-menu"];
    if (this.props.collapseMenu) {
      toggleClass = [...toggleClass, "on"];
    }

    return (
      <React.Fragment>
        <header className={headerClass.join(" ")}>
          <div className="m-header">
            <a
              className={toggleClass.join(" ")}
              id="mobile-collapse1"
              href={DEMO.BLANK_LINK}
              onClick={this.props.onToggleNavigation}
            >
              <span />
            </a>
            <a href={DEMO.BLANK_LINK} className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">{this.props.collapseMenu}</span>
            </a>
          </div>
          <a className="mobile-menu" id="mobile-header" href={DEMO.BLANK_LINK}>
            <i className="feather icon-more-horizontal" />
          </a>
          <div className="collapse navbar-collapse">
            {isLoggedIn ? (
              <NavRight rtlLayout={this.props.rtlLayout} />
            ) : (
              <span />
            )}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  state = state.navigation;
  return {
    rtlLayout: state.rtlLayout,
    headerBackColor: state.headerBackColor,
    headerFixedLayout: state.headerFixedLayout,
    collapseMenu: state.collapseMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () =>
      dispatch({ type: navigationConstants.COLLAPSE_MENU }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
