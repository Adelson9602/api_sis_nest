import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryAuditService } from './inventory-audit.service';
import { CreateInventoryAuditDto } from './dto/create-inventory-audit.dto';
import { UpdateInventoryAuditDto } from './dto/update-inventory-audit.dto';

@Controller('inventory-audit')
export class InventoryAuditController {
  constructor(private readonly inventoryAuditService: InventoryAuditService) {}

  @Post()
  create(@Body() createInventoryAuditDto: CreateInventoryAuditDto) {
    return this.inventoryAuditService.create(createInventoryAuditDto);
  }

  @Get()
  findAll() {
    return this.inventoryAuditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryAuditService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryAuditDto: UpdateInventoryAuditDto) {
    return this.inventoryAuditService.update(+id, updateInventoryAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryAuditService.remove(+id);
  }
}
