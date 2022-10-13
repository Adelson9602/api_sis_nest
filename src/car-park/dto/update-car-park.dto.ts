import { PartialType } from '@nestjs/mapped-types';
import { CreateCarParkDto } from './create-car-park.dto';

export class UpdateCarParkDto extends PartialType(CreateCarParkDto) {}
