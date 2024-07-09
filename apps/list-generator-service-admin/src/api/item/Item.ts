import { List } from "../list/List";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  checked: boolean | null;
  content: string | null;
  list?: List | null;
};
