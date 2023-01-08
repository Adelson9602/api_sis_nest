import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Regional {
  @PrimaryGeneratedColumn('increment')
  idRegional: number;

  @Column('varchar', {
    length: 64,
  })
  regional: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
