import React, { Component } from "react";

import { Menu, Sidebar, Divider, Button } from "semantic-ui-react";

class ColorPanel extends Component {
  render() {
    return (
      <Sidebar as={Menu} icon="labeled" inverted visible width="very thin" vertical>
        <Divider />
        <Button icon="add" size="small" color="blue" />
      </Sidebar>
    );
  }
}

export default ColorPanel;
