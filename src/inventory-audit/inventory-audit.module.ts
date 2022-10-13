import { Module } from '@nestjs/common';
import { InventoryAuditService } from './inventory-audit.service';
import { InventoryAuditController } from './inventory-audit.controller';

@Module({
  controllers: [InventoryAuditController],
  providers: [InventoryAuditService]
})
export class InventoryAuditModule {}
