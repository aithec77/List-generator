import { List as TList } from "../api/list/List";

export const LIST_TITLE_FIELD = "name";

export const ListTitle = (record: TList): string => {
  return record.name?.toString() || String(record.id);
};
