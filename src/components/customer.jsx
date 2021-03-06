import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import ViewCustomer from "./view-customer";
import AddCustomer from "./add-customer";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/view"} className="nav-link">
                View Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Customer
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/view"]} component={ViewCustomer} />
            <Route exact path="/add" component={AddCustomer} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
