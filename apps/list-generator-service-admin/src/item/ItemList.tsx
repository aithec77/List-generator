import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { LIST_TITLE_FIELD } from "../list/ListTitle";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="checked" source="checked" />
        <TextField label="content" source="content" />
        <ReferenceField label="List" source="list.id" reference="List">
          <TextField source={LIST_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
