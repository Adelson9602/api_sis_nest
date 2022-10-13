import { PartialType } from '@nestjs/mapped-types';
import { CreateHumanManagementDto } from './create-human-management.dto';

export class UpdateHumanManagementDto extends PartialType(CreateHumanManagementDto) {}
