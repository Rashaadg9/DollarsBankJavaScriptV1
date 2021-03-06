import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { Home } from "./Home"
import { LoginForm } from "./LogIn";
import CreateAccount from "./createAccount";
import UserHome from "./UserHome";
import DepositForm from "./Deposit";
import WithdrawalForm from "./Withdrawal";
import TransferForm from "./Transfer";
import Account from "./Account";
import Recent from "./Recent";
import deleteAccount from "./deleteAccount";

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
            <Route path="/transfer" component={TransferForm} />
            <Route path="/account" component={Account} />
            <Route path="/recent" component={Recent} />
            <Route path="/deleteAccount" component={deleteAccount} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
