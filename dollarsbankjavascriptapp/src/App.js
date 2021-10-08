import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Home } from "./Home"
import { LoginForm } from "./LogIn";
import CreateAccount from "./createAccount";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/newAccount" component={CreateAccount} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
