import React from "react";
import { ListGroup, Modal } from "react-bootstrap";
import configData from "../../../../config.json";
import { ApiService } from "../../../../services/api.service";

class ServerSelectorModal extends React.Component {
  apiService = ApiService.getInstance();

  constructor(props) {
    super();
  }
  componentDidMount() {}

  handleClose = () => {
    this.props.onHide();
  };

  handleSelect = (key) => {
    this.apiService.setApiUrl(key);
    this.props.login();
    this.props.onHide();
  };

  render() {
    const { show, onHide } = this.props;
    const servers = configData.SERVERS.map((server) => (
      <ListGroup.Item
        action
        onClick={() => this.handleSelect(server.URL)}
        key={server.URL}
      >
        {server.location}
      </ListGroup.Item>
    ));

    return (
      <Modal show={show} onHide={onHide} keyboard={false} backdrop="static">
        <Modal.Header>
          <Modal.Title>
            Which location's server would you like to use?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>{servers}</ListGroup>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ServerSelectorModal;
