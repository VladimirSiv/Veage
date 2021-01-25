import React from "react";
import { Route } from "react-router-dom";
import { Stats } from "../sections/stats";
import { Profile } from "../sections/profile";

const customRoutes = [
  <Route exact path="/stats" component={Stats} />,
  <Route exact path="/profile" component={Profile} />,
];

export default customRoutes;
