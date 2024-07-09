import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemCreateInput = {
  checked?: boolean | null;
  content?: string | null;
  list?: ListWhereUniqueInput | null;
};
