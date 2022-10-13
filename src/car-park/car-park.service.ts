import { Injectable } from '@nestjs/common';
import { CreateCarParkDto } from './dto/create-car-park.dto';
import { UpdateCarParkDto } from './dto/update-car-park.dto';

@Injectable()
export class CarParkService {
  create(createCarParkDto: CreateCarParkDto) {
    return 'This action adds a new carPark';
  }

  findAll() {
    return `This action returns all carPark`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carPark`;
  }

  update(id: number, updateCarParkDto: UpdateCarParkDto) {
    return `This action updates a #${id} carPark`;
  }

  remove(id: number) {
    return `This action removes a #${id} carPark`;
  }
}
