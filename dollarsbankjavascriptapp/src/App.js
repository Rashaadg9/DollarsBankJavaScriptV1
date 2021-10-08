import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Home } from "./Home"
import { LoginForm } from "./LogIn";
import CreateAccount from "./createAccount";
import UserHome from "./UserHome";
import DepositForm from "./Deposit";
import WithdrawalForm from "./Withdrawal";

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
            <Route path="/userHome" component={UserHome} />
            <Route path="/deposit" component={DepositForm} />
            <Route path="/withdrawal" component={WithdrawalForm} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
