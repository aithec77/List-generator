import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ListWhereUniqueInput } from "../list/ListWhereUniqueInput";

export type ItemWhereInput = {
  id?: StringFilter;
  checked?: BooleanNullableFilter;
  content?: StringNullableFilter;
  list?: ListWhereUniqueInput;
};
