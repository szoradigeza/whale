import React from "react";
import { alertActions } from "../../redux/actions/alert.actions";
import { connect } from "react-redux";

class AlertComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    const { alert } = this.props;
    const visible = this.state.visible;
    return visible ? (
      <div className={`${alert.type}`}>{alert.message}</div>
    ) : (
      <span />
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(AlertComponent);
export { connectedApp as AlertComponent };
