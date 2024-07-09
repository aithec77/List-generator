import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ListOperationsService } from "./listoperations.service";
import { ListCopyDto } from "../listOperations/ListCopyDto";
import { ItemDto } from "../listOperations/ItemDto";

@swagger.ApiTags("listOperations")
@common.Controller("listOperations")
export class ListOperationsController {
  constructor(protected readonly service: ListOperationsService) {}

  @common.Post("/lists/:id/items")
  @swagger.ApiOkResponse({
    type: ListCopyDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddListItems(
    @common.Body()
    body: string
  ): Promise<ListCopyDto> {
        return this.service.AddListItems(body);
      }

  @common.Post("/lists/:id/copy")
  @swagger.ApiOkResponse({
    type: ListCopyDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CopyList(
    @common.Body()
    body: string
  ): Promise<ListCopyDto> {
        return this.service.CopyList(body);
      }

  @common.Get("/lists/:id/items/search")
  @swagger.ApiOkResponse({
    type: ItemDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchListItems(
    @common.Body()
    body: string
  ): Promise<ItemDto[]> {
        return this.service.SearchListItems(body);
      }

  @common.Post("/lists/:id/shuffle")
  @swagger.ApiOkResponse({
    type: ItemDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ShuffleListItems(
    @common.Body()
    body: string
  ): Promise<ItemDto[]> {
        return this.service.ShuffleListItems(body);
      }
}
