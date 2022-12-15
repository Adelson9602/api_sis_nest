import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn('increment')
  idArea: number;

  @Column('varchar', {
    length: 100,
  })
  nombreArea: string;

  @Column('int', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
