import { Module } from '@nestjs/common';
import { HumanManagementService } from './human-management.service';
import { HumanManagementController } from './human-management.controller';

@Module({
  controllers: [HumanManagementController],
  providers: [HumanManagementService]
})
export class HumanManagementModule {}
