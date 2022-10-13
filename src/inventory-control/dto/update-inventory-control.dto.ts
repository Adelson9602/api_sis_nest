import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryControlDto } from './create-inventory-control.dto';

export class UpdateInventoryControlDto extends PartialType(CreateInventoryControlDto) {}
