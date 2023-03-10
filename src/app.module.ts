import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterModule } from './master/master.module';
import { TechnicalModule } from './technical/technical.module';
import { FormatsModule } from './formats/formats.module';
import { HumanManagementModule } from './human-management/human-management.module';
import { CarParkModule } from './car-park/car-park.module';
import { InventoryModule } from './inventory/inventory.module';
import { InventoryAuditModule } from './inventory-audit/inventory-audit.module';
import { AccessModule } from './access/access.module';
import { InventoryControlModule } from './inventory-control/inventory-control.module';
import { QueriesModule } from './queries/queries.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './access/auth/auth.module';
import { UsuarioModule } from './access/usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MasterModule,
    TechnicalModule,
    FormatsModule,
    HumanManagementModule,
    CarParkModule,
    InventoryModule,
    InventoryAuditModule,
    AccessModule,
    InventoryControlModule,
    QueriesModule,
    CommonModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
