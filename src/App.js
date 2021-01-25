import React from "react";
import { Admin, Resource } from "react-admin";
import { Dashboard } from "./sections/dashboard";
import {
  ActivityList,
  ActivityEdit,
  ActivityShow,
  ActivityCreate,
} from "./sections/activity";
import { ProjectList, ProjectEdit, ProjectCreate } from "./sections/project";
import { UserList, UserEdit, UserCreate } from "./sections/user";
import {
  OverviewList,
  OverviewShow,
  OverviewEdit,
  OverviewCreate,
} from "./sections/overview";
import { TeamList, TeamCreate, TeamEdit } from "./sections/team";
import { TypeList } from "./sections/type";
import authProvider from "./providers/AuthProvider";
import appLayout from "./layout/Layout";
import dataProvider from "./providers/DataProvider";
import customRoutes from "./pages/CustomRoutes";
import Theme from "./layout/Theme";

function App() {
  return (
    <Admin
      authProvider={authProvider}
      layout={appLayout}
      dashboard={Dashboard}
      customRoutes={customRoutes}
      dataProvider={dataProvider}
      theme={Theme}
    >
      {(permissions) => [
        // Activities
        <Resource
          name="activities"
          list={ActivityList}
          edit={ActivityEdit}
          show={ActivityShow}
          create={ActivityCreate}
        />,

        // Projects
        <Resource
          name="projects"
          list={ProjectList}
          edit={
            ["admin", "moderator"].includes(permissions) ? ProjectEdit : null
          }
          create={permissions === "admin" ? ProjectCreate : null}
        />,

        // Users
        <Resource
          name="users"
          list={["admin", "moderator"].includes(permissions) ? UserList : null}
          edit={permissions === "admin" ? UserEdit : null}
          create={permissions === "admin" ? UserCreate : null}
        />,

        // Teams
        <Resource
          name="teams"
          list={TeamList}
          edit={permissions === "admin" ? TeamEdit : null}
          create={permissions === "admin" ? TeamCreate : null}
        />,

        // Types
        <Resource
          name="types"
          list={["admin", "moderator"].includes(permissions) ? TypeList : null}
        />,

        // Overview
        <Resource
          name="overview"
          list={
            ["admin", "moderator"].includes(permissions) ? OverviewList : null
          }
          show={
            ["admin", "moderator"].includes(permissions) ? OverviewShow : null
          }
          edit={permissions === "admin" ? OverviewEdit : null}
          create={permissions === "admin" ? OverviewCreate : null}
        />,
      ]}
    </Admin>
  );
}

export default App;
