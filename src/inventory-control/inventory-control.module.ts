import { Module } from '@nestjs/common';
import { InventoryControlService } from './inventory-control.service';
import { InventoryControlController } from './inventory-control.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerialInventario } from './entities';

@Module({
  controllers: [InventoryControlController],
  providers: [InventoryControlService],
  imports: [TypeOrmModule.forFeature([SerialInventario])],
})
export class InventoryControlModule {}
