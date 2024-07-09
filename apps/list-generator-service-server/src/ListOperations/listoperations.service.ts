import { Injectable } from "@nestjs/common";
import { ItemDto } from "../listOperations/ItemDto";
import { ListCopyDto } from "../listOperations/ListCopyDto";

@Injectable()
export class ListOperationsService {
  constructor() {}
  async AddListItems(args: ItemDto[]): Promise<ListCopyDto> {
    throw new Error("Not implemented");
  }
  async CopyList(args: string): Promise<ListCopyDto> {
    throw new Error("Not implemented");
  }
  async SearchListItems(args: string): Promise<ItemDto[]> {
    throw new Error("Not implemented");
  }
  async ShuffleListItems(args: string): Promise<ItemDto[]> {
    throw new Error("Not implemented");
  }
}
