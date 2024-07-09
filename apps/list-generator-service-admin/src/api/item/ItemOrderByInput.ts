import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  checked?: SortOrder;
  content?: SortOrder;
  listId?: SortOrder;
};
