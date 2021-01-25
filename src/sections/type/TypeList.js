import React, { Fragment } from "react";
import { Route } from "react-router";
import TypeCreate from "./TypeCreate";
import TypeEdit from "./TypeEdit";
import { withStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Disabled } from "../../components";
import {
  Datagrid,
  List,
  TextField,
  TopToolbar,
  CreateButton,
  EditButton,
  DateField,
} from "react-admin";
import { Drawer } from "@material-ui/core";
import GridStyle from "../../styles/GridStyle";

const styles = {
  ...GridStyle,
  drawerContent: {
    width: 300,
  },
};

const TypeListActions = ({ basePath }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
  </TopToolbar>
);

function TypeList(props) {
  let history = useHistory();

  function handleClose() {
    history.push("/types");
  }

  return (
    <Fragment>
      <List
        {...props}
        sort={{ field: "name", order: "ASC" }}
        actions={<TypeListActions />}
      >
        <Datagrid rowStyle={GridStyle.rowStyle}>
          <TextField source="name" />
          <Disabled
            label="Active"
            headerClassName={props.classes.centered}
            cellClassName={props.classes.centered}
          />
          <DateField
            source="createdAt"
            label="Created at"
            headerClassName={props.classes.centered}
            cellClassName={props.classes.centered}
          />
          <DateField
            source="updatedAt"
            label="Updated at"
            headerClassName={props.classes.centered}
            cellClassName={props.classes.centered}
          />
          <EditButton />
        </Datagrid>
      </List>
      <Route path="/types/create">
        {({ match }) => (
          <Drawer open={!!match} anchor="right" onClose={handleClose}>
            <TypeCreate
              className={props.classes.drawerContent}
              onCancel={handleClose}
              {...props}
            />
          </Drawer>
        )}
      </Route>
      <Route path="/types/:id">
        {({ match }) => {
          const isMatch = match && match.params && match.params.id !== "create";

          return (
            <Drawer open={isMatch} anchor="right" onClose={handleClose}>
              {isMatch ? (
                <TypeEdit
                  className={props.classes.drawerContent}
                  id={isMatch ? match.params.id : null}
                  onCancel={handleClose}
                  {...props}
                />
              ) : (
                <div className={props.classes.drawerContent} />
              )}
            </Drawer>
          );
        }}
      </Route>
    </Fragment>
  );
}

export default withStyles(styles)(TypeList);
