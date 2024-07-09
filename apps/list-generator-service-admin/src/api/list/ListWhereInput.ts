import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type ListWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  items?: ItemListRelationFilter;
};
