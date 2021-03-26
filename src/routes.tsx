import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import AsylumMaps from "./pages/AsylumMaps";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Landing} exact />
      <Route path="/map" component={AsylumMaps} />
    </Router>
  );
};

export default Routes;
