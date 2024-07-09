import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "content";

export const ItemTitle = (record: TItem): string => {
  return record.content?.toString() || String(record.id);
};
