import { Item } from "../item/Item";

export type List = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  items?: Array<Item>;
};
