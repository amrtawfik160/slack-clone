import React, { Component } from "react";

import mime from "mime-types";

import { Modal, Input, Button, Icon } from "semantic-ui-react";

class FileModal extends Component {
  state = {
    file: null,
    authorized: ["image/jepg", "image/png"],
  };

  addFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ file });
    }
  };

  isAuthorized = (fileName) =>
    this.state.authorized.includes(mime.lookup(fileName));

  clearFile = () => this.setState({ file: null });

  sendFile = () => {
    const { file } = this.state;

    if (file !== null) {
      if (this.isAuthorized(file.name)) {
        const { uploadFile, closeModal } = this.props;
        const metadata = { contentType: mime.lookup(file.name) };

        uploadFile(file.name, metadata);
        closeModal();
        this.clearFile();
      }
    }
  };

  handleCloseModelClick = () => {
    this.props.closeModal();
    this.clearFile();
  };

  render() {
    const { modal } = this.props;

    return (
      <Modal basic open={modal} onClose={this.handleCloseModelClick}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.addFile}
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.sendFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>

          <Button color="red" inverted onClick={this.handleCloseModelClick}>
            <Icon name="remove" /> Remove
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FileModal;
