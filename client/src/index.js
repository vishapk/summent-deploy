import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tailwind.css";

// layouts

//import Admin from "layouts/Admin.js";
//import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "./Landing";
import Profile from "./Profile";
//import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/*<Route path="/admin" component={Admin} />*/}
      {/*<Route path="/auth" component={Auth} />*/}
      {/* add routes without layouts */}
      <Route path="/" exact component={Landing} />
      <Route path="/summarize" exact component={Profile} />
      {/*<Route path="/index" exact component={Index} />*/}
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
