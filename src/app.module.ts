import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitasRazonModule } from './visitas-interna/visitas-razon/visitas-razon.module';
import { VisitasRazonModule } from './visitas-razon/visitas-razon.module';
import { MasterModule } from './master/master.module';

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
    }),
    VisitasRazonModule,
    MasterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
