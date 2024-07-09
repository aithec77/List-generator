/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, List as PrismaList, Item as PrismaItem } from "@prisma/client";

export class ListServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ListCountArgs, "select">): Promise<number> {
    return this.prisma.list.count(args);
  }

  async lists(args: Prisma.ListFindManyArgs): Promise<PrismaList[]> {
    return this.prisma.list.findMany(args);
  }
  async list(args: Prisma.ListFindUniqueArgs): Promise<PrismaList | null> {
    return this.prisma.list.findUnique(args);
  }
  async createList(args: Prisma.ListCreateArgs): Promise<PrismaList> {
    return this.prisma.list.create(args);
  }
  async updateList(args: Prisma.ListUpdateArgs): Promise<PrismaList> {
    return this.prisma.list.update(args);
  }
  async deleteList(args: Prisma.ListDeleteArgs): Promise<PrismaList> {
    return this.prisma.list.delete(args);
  }

  async findItems(
    parentId: string,
    args: Prisma.ItemFindManyArgs
  ): Promise<PrismaItem[]> {
    return this.prisma.list
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .items(args);
  }
}