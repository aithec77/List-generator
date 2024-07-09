import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemUpdateInput = {
  checked?: boolean | null;
  content?: string | null;
  list?: ListWhereUniqueInput | null;
};
