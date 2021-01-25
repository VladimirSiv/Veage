import React from "react";
import {
  List,
  Filter,
  SearchInput,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
  DateField,
  FunctionField,
  TextInput,
  DateInput,
} from "react-admin";
import ProjectChip from "../../components/ProjectChip";
import { createStyles, makeStyles } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const useStyles = makeStyles(() => createStyles(GridStyle));

const rowClick = (id, basePath, record) => "show";

const description = (record) => {
  let description = record.description;
  if (description) {
    description = description.replace(/(<([^>]+)>)/gi, "");
    return description.length > 40
      ? `${description.substring(0, 40)}...`
      : description;
  }
  return "";
};

const OverviewFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="username" resettable alwaysOn />
    <DateInput source="from" label="From" resettable />
    <DateInput source="to" label="To" resettable />
    <TextInput source="team" label="Team" resettable />
  </Filter>
);

const OverviewList = ({ permissions, ...props }) => {
  const classes = useStyles();
  return (
    <List {...props} title="Overview" filters={<OverviewFilter />}>
      <Datagrid rowStyle={GridStyle.rowStyle} rowClick={rowClick}>
        <TextField source="title" />
        <FunctionField label="Description" render={description} />
        <ProjectChip
          label="Project"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <TextField
          source="Type.name"
          label="Type"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
          sortable={false}
        />
        <TextField
          source="User.username"
          label="User"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
          sortable={false}
        />
        <TextField
          source="User.Team.name"
          label="Team"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
          sortable={false}
        />
        <NumberField
          source="hours"
          label="Hours"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <DateField
          source="createdAt"
          label="Created At"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        {permissions === "admin" && <EditButton basePath="/overview" />}
        {permissions === "admin" && <DeleteButton basePath="/overview" />}
      </Datagrid>
    </List>
  );
};

export default OverviewList;
