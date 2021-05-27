import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AsylumMaps from "./pages/AsylumMaps";
import Asylum from "./pages/Asylum";
import CreateAsylum from "./pages/CreateAsylum";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/map" component={AsylumMaps} />

        <Route path="/asylum/create" component={CreateAsylum} />
        <Route path="/asylum/:id" component={Asylum} />
      </Switch>
    </Router>
  );
};

export default Routes;
