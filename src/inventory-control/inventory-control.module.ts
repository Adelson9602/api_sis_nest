import { Module } from '@nestjs/common';
import { InventoryControlService } from './inventory-control.service';
import { InventoryControlController } from './inventory-control.controller';

@Module({
  controllers: [InventoryControlController],
  providers: [InventoryControlService]
})
export class InventoryControlModule {}
