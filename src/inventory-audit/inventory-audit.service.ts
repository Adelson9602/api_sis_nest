import { Injectable } from '@nestjs/common';
import { CreateInventoryAuditDto } from './dto/create-inventory-audit.dto';
import { UpdateInventoryAuditDto } from './dto/update-inventory-audit.dto';

@Injectable()
export class InventoryAuditService {
  create(createInventoryAuditDto: CreateInventoryAuditDto) {
    return 'This action adds a new inventoryAudit';
  }

  findAll() {
    return `This action returns all inventoryAudit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryAudit`;
  }

  update(id: number, updateInventoryAuditDto: UpdateInventoryAuditDto) {
    return `This action updates a #${id} inventoryAudit`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryAudit`;
  }
}
