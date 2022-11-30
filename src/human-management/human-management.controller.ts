import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HumanManagementService } from './human-management.service';
import { CreateHumanManagementDto } from './dto/create-human-management.dto';
import { UpdateHumanManagementDto } from './dto/update-human-management.dto';

@Controller('human-management')
export class HumanManagementController {
  constructor(
    private readonly humanManagementService: HumanManagementService,
  ) {}

  @Post()
  create(@Body() createHumanManagementDto: CreateHumanManagementDto) {
    return this.humanManagementService.create(createHumanManagementDto);
  }

  @Get()
  findAll() {
    return this.humanManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humanManagementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHumanManagementDto: UpdateHumanManagementDto,
  ) {
    return this.humanManagementService.update(+id, updateHumanManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humanManagementService.remove(+id);
  }
}
