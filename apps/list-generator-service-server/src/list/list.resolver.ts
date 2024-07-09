import * as graphql from "@nestjs/graphql";
import { ListResolverBase } from "./base/list.resolver.base";
import { List } from "./base/List";
import { ListService } from "./list.service";

@graphql.Resolver(() => List)
export class ListResolver extends ListResolverBase {
  constructor(protected readonly service: ListService) {
    super(service);
  }
}
