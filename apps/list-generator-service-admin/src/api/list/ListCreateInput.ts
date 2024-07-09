import { ItemCreateNestedManyWithoutListsInput } from "./ItemCreateNestedManyWithoutListsInput";

export type ListCreateInput = {
  description?: string | null;
  name?: string | null;
  items?: ItemCreateNestedManyWithoutListsInput;
};
