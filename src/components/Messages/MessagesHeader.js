import React, { Component } from "react";

import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/*Channel Title*/}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            channel
            <Icon name="star outline" color="black" />
          </span>
          <span style={{ display: "block", color: "rgb(156 156 156)", fontSize: '15px' }}>
            2 Users
          </span>
        </Header>

        {/*Channel Search Input*/}
        <Header floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="search message"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
