import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InformacionPersonal {
  @PrimaryGeneratedColumn()
  id: number;
}
