import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarParkService } from './car-park.service';
import { CreateCarParkDto } from './dto/create-car-park.dto';
import { UpdateCarParkDto } from './dto/update-car-park.dto';

@Controller('car-park')
export class CarParkController {
  constructor(private readonly carParkService: CarParkService) {}

  @Post()
  create(@Body() createCarParkDto: CreateCarParkDto) {
    return this.carParkService.create(createCarParkDto);
  }

  @Get()
  findAll() {
    return this.carParkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carParkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarParkDto: UpdateCarParkDto) {
    return this.carParkService.update(+id, updateCarParkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carParkService.remove(+id);
  }
}
