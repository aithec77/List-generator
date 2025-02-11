/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ListService } from "../list.service";
import { ListCreateInput } from "./ListCreateInput";
import { List } from "./List";
import { ListFindManyArgs } from "./ListFindManyArgs";
import { ListWhereUniqueInput } from "./ListWhereUniqueInput";
import { ListUpdateInput } from "./ListUpdateInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";

export class ListControllerBase {
  constructor(protected readonly service: ListService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: List })
  async createList(@common.Body() data: ListCreateInput): Promise<List> {
    return await this.service.createList({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [List] })
  @ApiNestedQuery(ListFindManyArgs)
  async lists(@common.Req() request: Request): Promise<List[]> {
    const args = plainToClass(ListFindManyArgs, request.query);
    return this.service.lists({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: List })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async list(
    @common.Param() params: ListWhereUniqueInput
  ): Promise<List | null> {
    const result = await this.service.list({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: List })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateList(
    @common.Param() params: ListWhereUniqueInput,
    @common.Body() data: ListUpdateInput
  ): Promise<List | null> {
    try {
      return await this.service.updateList({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: List })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteList(
    @common.Param() params: ListWhereUniqueInput
  ): Promise<List | null> {
    try {
      return await this.service.deleteList({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  async findItems(
    @common.Req() request: Request,
    @common.Param() params: ListWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        checked: true,
        content: true,

        list: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/items")
  async connectItems(
    @common.Param() params: ListWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.updateList({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  async updateItems(
    @common.Param() params: ListWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.updateList({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  async disconnectItems(
    @common.Param() params: ListWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.updateList({
      where: params,
      data,
      select: { id: true },
    });
  }
}
