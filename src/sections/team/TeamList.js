import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";
import TeamExpandSection from "./TeamExpandSection";
import { createStyles, makeStyles } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const useStyles = makeStyles(() => createStyles(GridStyle));

const TeamList = ({ permissions, ...props }) => {
  const classes = useStyles();
  return (
    <List {...props} title="Teams" bulkActionButtons={false}>
      <Datagrid rowStyle={GridStyle.rowStyle} expand={<TeamExpandSection />}>
        <TextField source="name" />
        {permissions === "admin" && (
          <DateField
            label="Created At"
            source="createdAt"
            headerClassName={classes.centered}
            cellClassName={classes.centered}
          />
        )}
        {permissions === "admin" && (
          <DateField
            label="Updated At"
            source="updatedAt"
            headerClassName={classes.centered}
            cellClassName={classes.centered}
          />
        )}
        {permissions === "admin" && <EditButton basePath="/teams" />}
        {permissions === "admin" && <DeleteButton basePath="/teams" />}
      </Datagrid>
    </List>
  );
};

export default TeamList;
