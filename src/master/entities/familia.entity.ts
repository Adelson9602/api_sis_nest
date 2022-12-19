import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Familia {
  @PrimaryGeneratedColumn('increment')
  idFamilia: number;

  @Column('varchar', {
    length: 64,
  })
  familia: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 20,
  })
  usurioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
