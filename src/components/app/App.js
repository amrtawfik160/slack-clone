import React from "react";

import { Grid } from "semantic-ui-react";

import { connect } from "react-redux";

import ColorPanel from "../ColorPanel/ColorPanel";
import SidePanel from "../SidePanel/SidePanel";
import Messages from "../Messages/Messages";
import MetaPanel from "../MetaPanel/MetaPanel";

import "./App.css";

const App = ({ currentUser, currentChannel }) => (
  <Grid columns="equal" className="app" style={{ background: "#eee" }}>
    <ColorPanel />
    <SidePanel />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages currentChannel={currentChannel} currentUser={currentUser} key={currentChannel && currentChannel.id}/>
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps)(App);
