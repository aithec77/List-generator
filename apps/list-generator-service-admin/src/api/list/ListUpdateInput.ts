import { ItemUpdateManyWithoutListsInput } from "./ItemUpdateManyWithoutListsInput";

export type ListUpdateInput = {
  description?: string | null;
  name?: string | null;
  items?: ItemUpdateManyWithoutListsInput;
};
