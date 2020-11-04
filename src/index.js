import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Spinner from "./components/Spinner/Spinner";

import firebase from "firebase";

import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { clearUser, setUser } from "./redux/user/user.actions";
import { rootReducer } from "./redux/index";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }

  render() {
    const { isLoading } = this.props;

    return isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading,
});

const RootWithAuth = withRouter(
  connect(mapStateToProps, { setUser, clearUser })(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWithAuth />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
