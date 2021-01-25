import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
} from "react-admin";
import ProjectExpandSection from "./ProjectExpandSection";
import { Disabled } from "../../components";
import { createStyles, makeStyles } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const useStyles = makeStyles(() => createStyles(GridStyle));

const ProjectList = ({ permissions, ...props }) => {
  const classes = useStyles();
  return (
    <List {...props} title="Projects" bulkActionButtons={false}>
      <Datagrid rowStyle={GridStyle.rowStyle} expand={<ProjectExpandSection />}>
        <TextField source="name" />
        <DateField
          label="Created At"
          source="createdAt"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        {permissions === "admin" && (
          <DateField
            label="Updated At"
            source="updatedAt"
            headerClassName={classes.centered}
            cellClassName={classes.centered}
          />
        )}
        <Disabled
          label="Active"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        {(permissions === "admin" || permissions === "moderator") && (
          <EditButton />
        )}
        {permissions === "admin" && <DeleteButton />}
      </Datagrid>
    </List>
  );
};

export default ProjectList;
