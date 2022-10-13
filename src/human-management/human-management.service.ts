import { Injectable } from '@nestjs/common';
import { CreateHumanManagementDto } from './dto/create-human-management.dto';
import { UpdateHumanManagementDto } from './dto/update-human-management.dto';

@Injectable()
export class HumanManagementService {
  create(createHumanManagementDto: CreateHumanManagementDto) {
    return 'This action adds a new humanManagement';
  }

  findAll() {
    return `This action returns all humanManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} humanManagement`;
  }

  update(id: number, updateHumanManagementDto: UpdateHumanManagementDto) {
    return `This action updates a #${id} humanManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} humanManagement`;
  }
}
