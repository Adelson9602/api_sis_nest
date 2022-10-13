import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventoryControlService } from './inventory-control.service';
import { CreateInventoryControlDto } from './dto/create-inventory-control.dto';
import { UpdateInventoryControlDto } from './dto/update-inventory-control.dto';

@Controller('inventory-control')
export class InventoryControlController {
  constructor(private readonly inventoryControlService: InventoryControlService) {}

  @Post()
  create(@Body() createInventoryControlDto: CreateInventoryControlDto) {
    return this.inventoryControlService.create(createInventoryControlDto);
  }

  @Get()
  findAll() {
    return this.inventoryControlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryControlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventoryControlDto: UpdateInventoryControlDto) {
    return this.inventoryControlService.update(+id, updateInventoryControlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryControlService.remove(+id);
  }
}
