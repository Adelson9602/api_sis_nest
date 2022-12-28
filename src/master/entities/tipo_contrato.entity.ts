import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TiposContrato {
  @PrimaryGeneratedColumn('increment')
  idTipoContrato: number;

  @Column('varchar', {
    length: 250,
  })
  descripcion: string;

  @Column('int', {
    width: 1,
    comment: '1: Si es para personal, 2: Si es para vehiculos',
  })
  tipo: number;

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
