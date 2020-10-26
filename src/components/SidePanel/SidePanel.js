import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

import Channels from "./Channels";

import UserPanel from "./UserPanel";

class ColorPanel extends Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ backgroundColor: "#350d36", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channels />
      </Menu>
    );
  }
}

export default ColorPanel;
