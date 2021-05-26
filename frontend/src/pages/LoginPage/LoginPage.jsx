import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../redux/actions";
import { ApiService, authService } from "../../services";
import { history } from "../../helpers";
import { AlertComponent } from "../../components/alert/alert.component";
import Spinner from "../../components/UI/Spinner/Spinner";
import ServerSelectorModal from "./components/serverSelectorModal";

class LoginPage extends React.Component {
  apiService = ApiService.getInstance();

  constructor(props) {
    super();

    // reset login status
    /*this.props.dispatch(userActions.logout());
     */
    this.state = {
      username: "",
      password: "",
      submitted: false,
      modalShow: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (authService.isLoggedIn()) {
      history.push("/home");
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  login(username, password) {
    this.setState({ submitted: true });
    if (username && password) {
      this.props.authenticate(username, password);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.apiService.isNumberOfServersEqOne()) {
      this.apiService.setDefaultApiUrl();
      const { username, password } = this.state;
      this.login(username, password);
    } else {
      this.setState({ modalShow: true });
    }
  }

  loginAfterServerSelect(username, password) {
    this.login(username, password);
  }

  handleModalClose = () => {
    this.setState({ modalShow: false });
  };
  handleModalShow = () => {
    this.setState({ modalShow: true });
  };

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted, modalShow } = this.state;

    return (
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <ServerSelectorModal
            show={modalShow}
            onHide={this.handleModalClose}
            login={() => this.loginAfterServerSelect(username, password)}
          />
          <form name="form" onSubmit={this.handleSubmit}>
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="feather icon-unlock auth-icon" />
                </div>
                <h3 className="mb-4">Login</h3>
                <div
                  className={
                    "form-group" +
                    (submitted && !username ? "has-error" : "input-group mb-3")
                  }
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  {submitted && !username && (
                    <div className="help-block">Username is required</div>
                  )}
                </div>
                <div
                  className={
                    "form-group" +
                    (submitted && !password ? "has-error" : "input-group mb-3")
                  }
                >
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {submitted && !password && (
                    <div className="help-block">Password is required</div>
                  )}
                </div>
                <AlertComponent />
                <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                </div>
                {loggingIn && <Spinner />}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.authentication.loggingIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (username, password) =>
      dispatch(userActions.login(username, password)),
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
const connectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
export { connectedLoginPage as LoginPage };
