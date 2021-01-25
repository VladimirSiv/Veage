import React from "react";
import { Layout, AppBar as Bar } from "react-admin";
import AppMenu from "./Menu";

const AppBar = (props) => <Bar {...props} />;

const AppLayout = (props) => (
  <Layout {...props} menu={AppMenu} appBar={AppBar} />
);

export default AppLayout;
