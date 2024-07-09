import { Module } from "@nestjs/common";
import { ListOperationsService } from "./listoperations.service";
import { ListOperationsController } from "./listoperations.controller";
import { ListOperationsResolver } from "./listoperations.resolver";

@Module({
  controllers: [ListOperationsController],
  providers: [ListOperationsService, ListOperationsResolver],
  exports: [ListOperationsService],
})
export class ListOperationsModule {}
