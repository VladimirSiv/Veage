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
  CloneButton,
} from "react-admin";
import ProjectChip from "../../components/ProjectChip";
import { createStyles, makeStyles } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const useStyles = makeStyles(() => createStyles(GridStyle));

const ActivityFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
);

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

const ActivityList = ({ permissions, ...props }) => {
  const classes = useStyles();
  return (
    <List
      {...props}
      title="Activities"
      filters={<ActivityFilter />}
      sort={{ field: "date", order: "DESC" }}
    >
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
        <NumberField
          source="hours"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <DateField
          source="date"
          headerClassName={classes.centered}
          cellClassName={classes.centered}
        />
        <EditButton basePath="/activities" />
        <CloneButton basePath="/activities" />
        <DeleteButton basePath="/activities" />
      </Datagrid>
    </List>
  );
};

export default ActivityList;
