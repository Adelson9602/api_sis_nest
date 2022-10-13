import { Injectable } from '@nestjs/common';
import { CreateInventoryControlDto } from './dto/create-inventory-control.dto';
import { UpdateInventoryControlDto } from './dto/update-inventory-control.dto';

@Injectable()
export class InventoryControlService {
  create(createInventoryControlDto: CreateInventoryControlDto) {
    return 'This action adds a new inventoryControl';
  }

  findAll() {
    return `This action returns all inventoryControl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryControl`;
  }

  update(id: number, updateInventoryControlDto: UpdateInventoryControlDto) {
    return `This action updates a #${id} inventoryControl`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryControl`;
  }
}
