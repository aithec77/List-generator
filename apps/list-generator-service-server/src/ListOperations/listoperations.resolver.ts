import * as graphql from "@nestjs/graphql";
import { ItemDto } from "../listOperations/ItemDto";
import { ListCopyDto } from "../listOperations/ListCopyDto";
import { ListOperationsService } from "./listoperations.service";

export class ListOperationsResolver {
  constructor(protected readonly service: ListOperationsService) {}

  @graphql.Mutation(() => ListCopyDto)
  async AddListItems(
    @graphql.Args()
    args: ItemDto[]
  ): Promise<ListCopyDto> {
    return this.service.AddListItems(args);
  }

  @graphql.Mutation(() => ListCopyDto)
  async CopyList(
    @graphql.Args()
    args: string
  ): Promise<ListCopyDto> {
    return this.service.CopyList(args);
  }

  @graphql.Query(() => [ItemDto])
  async SearchListItems(
    @graphql.Args()
    args: string
  ): Promise<ItemDto[]> {
    return this.service.SearchListItems(args);
  }

  @graphql.Mutation(() => [ItemDto])
  async ShuffleListItems(
    @graphql.Args()
    args: string
  ): Promise<ItemDto[]> {
    return this.service.ShuffleListItems(args);
  }
}
