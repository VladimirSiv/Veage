import React from "react";
import { MenuItemLink, Responsive, usePermissions } from "react-admin";
import Box from "@material-ui/core/Box";

// Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LayersIcon from "@material-ui/icons/Layers";

const menuItems = [
  // Dashboard
  {
    name: "",
    text: "Dashboard",
    permissions: ["user", "moderator", "admin"],
    icon: <DashboardIcon />,
  },
  // Activity
  {
    name: "activities",
    text: "Activities",
    permissions: ["user", "moderator", "admin"],
    icon: <HistoryIcon />,
  },
  // Projects
  {
    name: "projects",
    text: "Projects",
    permissions: ["user", "moderator", "admin"],
    icon: <AccountTreeIcon />,
  },
  // Users
  {
    name: "users",
    text: "Users",
    permissions: ["moderator", "admin"],
    icon: <PeopleAltIcon />,
  },
  // Teams
  {
    name: "teams",
    text: "Teams",
    permissions: ["user", "moderator", "admin"],
    icon: <SupervisedUserCircleIcon />,
  },
  // Types
  {
    name: "types",
    text: "Types",
    permissions: ["moderator", "admin"],
    icon: <LayersIcon />,
  },
  // Overview
  {
    name: "overview",
    text: "Overview",
    permissions: ["moderator", "admin"],
    icon: <VisibilityIcon />,
  },
  // Stats
  {
    name: "stats",
    text: "Stats",
    permissions: ["moderator", "admin"],
    icon: <EqualizerIcon />,
  },
  // Profile
  {
    name: "profile",
    text: "My profile",
    permissions: ["user", "moderator", "admin"],
    icon: <SettingsIcon />,
  },
];

const AppMenu = ({ onMenuClick, logout }) => {
  const { permissions } = usePermissions();
  return (
    <Box pt={2}>
      {menuItems.map((item) => {
        if (item.permissions.includes(permissions)) {
          return (
            <MenuItemLink
              key={item.name}
              to={`/${item.name}`}
              primaryText={item.text}
              leftIcon={item.icon}
              onClick={onMenuClick}
            />
          );
        } else {
          return <></>;
        }
      })}
      <Responsive small={logout} medium={null} />
    </Box>
  );
};

export default AppMenu;
