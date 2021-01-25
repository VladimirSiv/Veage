import React from "react";
import {
  List,
  Filter,
  SearchInput,
  Datagrid,
  TextField,
  DeleteButton,
  DateField,
} from "react-admin";
import { Disabled } from "../../components";
import { createStyles, makeStyles } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const useStyles = makeStyles(() => createStyles(GridStyle));

const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
);

const UserList = ({ permissions, ...props }) => {
  const classes = useStyles();
  const rowClick = (id, basePath, record) => "edit";
  return (
    <List
      {...props}
      title="Users"
      filters={<UserFilter />}
      perPage={25}
      bulkActionButtons={false}
    >
      <Datagrid
        rowStyle={GridStyle.rowStyle}
        rowClick={permissions === "admin" ? rowClick : null}
      >
        <TextField source="username" />
        <TextField
          source="Team.name"
          label="Team"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
          sortable={false}
        />
        <TextField
          source="UserDetail.jobTitle"
          label="Job Title"
          sortable={false}
        />
        <Disabled
          label="Allowed"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <DateField
          source="lastSeen"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <DateField
          source="createdAt"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        {permissions === "admin" && <DeleteButton />}
      </Datagrid>
    </List>
  );
};

export default UserList;
